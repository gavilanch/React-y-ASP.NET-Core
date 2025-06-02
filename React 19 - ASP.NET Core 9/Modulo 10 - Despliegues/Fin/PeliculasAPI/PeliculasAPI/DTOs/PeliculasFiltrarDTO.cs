namespace PeliculasAPI.DTOs
{
    public class PeliculasFiltrarDTO
    {
        public int Pagina { get; set; } = 1;
        public int RecordsPorPagina { get; set; } = 10;
        public PaginacionDTO PaginacionDTO
        {
            get { return new PaginacionDTO() { Pagina = Pagina, RecordsPorPagina = RecordsPorPagina }; }
        }
        public string? Titulo { get; set; }
        public int GeneroId { get; set; }
        public bool EnCines { get; set; }
        public bool ProximosEstrenos { get; set; }
    }
}
