namespace MusicAPI.Models
{
    public class Track
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public TimeSpan Duration { get; set; }
    }

}
