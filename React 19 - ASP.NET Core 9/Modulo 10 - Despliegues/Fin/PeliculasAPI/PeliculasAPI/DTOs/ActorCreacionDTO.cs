using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.DTOs
{
    public class ActorCreacionDTO
    {
        [StringLength(150)]
        public required string Nombre { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public IFormFile? Foto { get; set; }
    }
}
