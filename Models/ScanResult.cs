namespace ScandocumentsApi.Models
{
    public class ScanResult
    {
        public int DocumentNumber { get; set; }
        public bool IsClean { get; set; }
        public string Issues { get; set; }
    }
}
