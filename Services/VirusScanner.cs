using Microsoft.AspNetCore.Http;
using System.Net.Http;
using System.Threading.Tasks;
using ScandocumentsApi.Models;

namespace ScandocumentsApi.Services
{
    public class VirusScanner : IVirusScanner
    {
        private readonly HttpClient _httpClient;

        public VirusScanner(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        public async Task<bool> ScanForVirus(IFormFile file)
        {
            var content = new MultipartFormDataContent();
            content.Add(new StreamContent(file.OpenReadStream()), "file", file.FileName);

            var response = await _httpClient.PostAsync("http://antivirus-service/scan", content);
            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadAsAsync<ScanResponse>();
            return result.IsMalicious;
        }
    }
}
