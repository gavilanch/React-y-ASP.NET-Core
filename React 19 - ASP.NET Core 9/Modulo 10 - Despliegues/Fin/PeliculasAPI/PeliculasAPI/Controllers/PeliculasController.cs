using AutoMapper.QueryableExtensions;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;
using PeliculasAPI.Servicios;
using Microsoft.EntityFrameworkCore;
using PeliculasAPI.Utilidades;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace PeliculasAPI.Controllers
{
    [ApiController]
    [Route("api/peliculas")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "esadmin")]
    public class PeliculasController : CustomBaseController
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IOutputCacheStore outputCacheStore;
        private readonly IAlmacenadorArchivos almacenadorArchivos;
        private readonly IServicioUsuarios servicioUsuarios;
        private const string cacheTag = "peliculas-obtener";
        private readonly string contenedor = "peliculas";

        public PeliculasController(ApplicationDbContext context, IMapper mapper, 
            IOutputCacheStore outputCacheStore,
            IAlmacenadorArchivos almacenadorArchivos, IServicioUsuarios servicioUsuarios)
            : base(context, mapper, outputCacheStore, cacheTag)
        {
            this.context = context;
            this.mapper = mapper;
            this.outputCacheStore = outputCacheStore;
            this.almacenadorArchivos = almacenadorArchivos;
            this.servicioUsuarios = servicioUsuarios;
        }

        [HttpGet("landing")]
        [OutputCache(Tags = [cacheTag])]
        [AllowAnonymous]
        public async Task<ActionResult<LandingPageDTO>> Get()
        {
            var top = 6;
            var hoy = DateTime.Today;

            var proximosEstrenos = await context.Peliculas
                .Where(p => p.FechaLanzamiento > hoy)
                .OrderBy(p => p.FechaLanzamiento)
                .Take(top)
                .ProjectTo<PeliculaDTO>(mapper.ConfigurationProvider)
                .ToListAsync();

            var enCines = await context.Peliculas
                .Where(p => p.PeliculasCines.Select(pc => pc.PeliculaId).Contains(p.Id))
                .OrderBy(p => p.FechaLanzamiento)
                .Take(top)
                .ProjectTo<PeliculaDTO>(mapper.ConfigurationProvider)
                .ToListAsync();

            var resultado = new LandingPageDTO();
            resultado.EnCines = enCines;
            resultado.ProximosEstrenos = proximosEstrenos;
            return resultado;
        }


        [HttpGet("{id:int}", Name = "ObtenerPeliculaPorId")]
        [OutputCache(Tags = [cacheTag])]
        [AllowAnonymous]
        public async Task<ActionResult<PeliculaDetallesDTO>> Get(int id)
        {
            var pelicula = await context.Peliculas
                .ProjectTo<PeliculaDetallesDTO>(mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (pelicula is null)
            {
                return NotFound();
            }

            var promedioVoto = 0.0;
            var usuarioVoto = 0;

            if (await context.RatingsPeliculas.AnyAsync(x => x.PeliculaId == id))
            {
                promedioVoto = await context.RatingsPeliculas.Where(x => x.PeliculaId == id)
                    .AverageAsync(x => x.Puntuacion);

                if (HttpContext.User.Identity!.IsAuthenticated)
                {
                    var usuarioId = await servicioUsuarios.ObtenerUsuarioId();
                    var ratingDB = await context.RatingsPeliculas
                        .FirstOrDefaultAsync(x => x.UsuarioId == usuarioId && x.PeliculaId == id);

                    if (ratingDB is not null)
                    {
                        usuarioVoto = ratingDB.Puntuacion;
                    }
                }

            }

            pelicula.VotoUsuario = usuarioVoto;
            pelicula.PromedioVoto = promedioVoto;


            return pelicula;
        }

        [HttpGet("filtrar")]
        [AllowAnonymous]
        public async Task<ActionResult<List<PeliculaDTO>>> Filtrar([FromQuery] PeliculasFiltrarDTO peliculasFiltrarDTO)
        {
            var peliculasQueryable = context.Peliculas.AsQueryable();

            if (!string.IsNullOrEmpty(peliculasFiltrarDTO.Titulo))
            {
                peliculasQueryable = peliculasQueryable.Where(x => x.Titulo.Contains(peliculasFiltrarDTO.Titulo));
            }

            if (peliculasFiltrarDTO.EnCines)
            {
                peliculasQueryable = peliculasQueryable.Where(x => x.PeliculasCines.Select(y => y.PeliculaId).Contains(x.Id));
            }

            if (peliculasFiltrarDTO.ProximosEstrenos)
            {
                var hoy = DateTime.Today;
                peliculasQueryable = peliculasQueryable.Where(x => x.FechaLanzamiento > hoy);
            }

            if (peliculasFiltrarDTO.GeneroId != 0)
            {
                peliculasQueryable = peliculasQueryable
                    .Where(x => x.PeliculasGeneros.Select(y => y.GeneroId)
                    .Contains(peliculasFiltrarDTO.GeneroId));
            }

            await HttpContext.InsertarParametrosPaginacionEnCabecera(peliculasQueryable);

            var peliculas = await peliculasQueryable.Paginar(peliculasFiltrarDTO.PaginacionDTO).ToListAsync();
            return mapper.Map<List<PeliculaDTO>>(peliculas);
        }


        [HttpGet("PostGet")]
        public async Task<ActionResult<PeliculasPostGetDTO>> PostGet()
        {
            var cines = await context.Cines.ProjectTo<CineDTO>(mapper.ConfigurationProvider).ToListAsync();
            var generos = await context.Generos.ProjectTo<GeneroDTO>(mapper.ConfigurationProvider).ToListAsync();

            return new PeliculasPostGetDTO() { Cines = cines, Generos = generos };
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] PeliculaCreacionDTO peliculaCreacionDTO)
        {
            var pelicula = mapper.Map<Pelicula>(peliculaCreacionDTO);

            if (peliculaCreacionDTO.Poster is not null)
            {
                var url = await almacenadorArchivos.Almacenar(contenedor, peliculaCreacionDTO.Poster);
                pelicula.Poster = url;
            }

            AsignarOrdenActores(pelicula);
            context.Add(pelicula);
            await context.SaveChangesAsync();
            await outputCacheStore.EvictByTagAsync(cacheTag, default);
            var peliculaDTO = mapper.Map<PeliculaDTO>(pelicula);
            return CreatedAtRoute("ObtenerPeliculaPorId", new { id = pelicula.Id }, peliculaDTO);

        }

        private void AsignarOrdenActores(Pelicula pelicula)
        {
            if (pelicula.PeliculasActores is not null)
            {
                for (int i = 0; i < pelicula.PeliculasActores.Count; i++)
                {
                    pelicula.PeliculasActores[i].Orden = i;
                }
            }
        }

        [HttpGet("PutGet/{id:int}")]
        public async Task<ActionResult<PeliculasPutGetDTO>> PutGet(int id)
        {
            var pelicula = await context.Peliculas
                                    .ProjectTo<PeliculaDetallesDTO>(mapper.ConfigurationProvider)
                                    .FirstOrDefaultAsync(x => x.Id == id);

            if (pelicula is null)
            {
                return NotFound();
            }

            var generosSeleccionadosIds = pelicula.Generos.Select(x => x.Id).ToList();
            var generosNoSeleccionados = await context.Generos
                .Where(x => !generosSeleccionadosIds.Contains(x.Id))
                .ToListAsync();

            var cinesSeleccionadosIds = pelicula.Cines.Select(x => x.Id).ToList();
            var cinesNoSeleccionados = await context.Cines
                .Where(x => !cinesSeleccionadosIds.Contains(x.Id))
                .ToListAsync();

            var generosNoSeleccionadosDTO = mapper.Map<List<GeneroDTO>>(generosNoSeleccionados);
            var cinesNoSeleccionadosDTO = mapper.Map<List<CineDTO>>(cinesNoSeleccionados);

            var peliculaDTO = mapper.Map<PeliculaDTO>(pelicula);

            var respuesta = new PeliculasPutGetDTO();
            respuesta.Pelicula = peliculaDTO;
            respuesta.GenerosSeleccionados = pelicula.Generos;
            respuesta.GenerosNoSeleccionados = generosNoSeleccionadosDTO;
            respuesta.CinesSeleccionados = pelicula.Cines;
            respuesta.CinesNoSeleccionados = cinesNoSeleccionadosDTO;
            respuesta.Actores = pelicula.Actores;
            return respuesta;
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromForm] PeliculaCreacionDTO peliculaCreacionDTO)
        {
            var pelicula = await context.Peliculas
                .Include(x => x.PeliculasActores)
                .Include(x => x.PeliculasGeneros)
                .Include(x => x.PeliculasCines)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (pelicula == null)
            {
                return NotFound();
            }

            pelicula = mapper.Map(peliculaCreacionDTO, pelicula);

            if (peliculaCreacionDTO.Poster != null)
            {
                pelicula.Poster = await almacenadorArchivos.Editar(pelicula.Poster, contenedor, peliculaCreacionDTO.Poster);
            }

            AsignarOrdenActores(pelicula);

            await context.SaveChangesAsync();
            await outputCacheStore.EvictByTagAsync(cacheTag, default);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            return await Delete<Pelicula>(id);
        }
    }
}
