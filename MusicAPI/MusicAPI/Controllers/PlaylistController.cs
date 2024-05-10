using Microsoft.AspNetCore.Mvc;
using MusicAPI.Models;

namespace MusicAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlaylistController : Controller
    {
        [HttpGet]
        public IEnumerable<Track> Get()
        {
            // Simulated playlist data
            var playlist = new List<Track>
        {
            new Track { Id = 1, Name = "Track 1", Artist = "Artist 1", Duration = TimeSpan.FromMinutes(4) },
            new Track { Id = 2, Name = "Track 2", Artist = "Artist 2", Duration = TimeSpan.FromMinutes(3) },
            // Add more tracks as needed
        };
            return playlist;
        }
    }
}
