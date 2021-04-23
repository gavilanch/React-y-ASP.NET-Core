using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.Utilidades
{
    public interface IAlmacenadorArchivos
    {
        Task BorrarArchivo(string ruta, string contenedor);
        Task<string> EditarArchivo(string contenedor, IFormFile archivo, string ruta);
        Task<string> GuardarArchivo(string contenedor, IFormFile archivo);
    }
}
