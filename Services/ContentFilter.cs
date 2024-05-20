using Microsoft.AspNetCore.Http;
using System.Net.Http;
using System.Threading.Tasks;
using ScandocumentsApi.Models;

namespace ScandocumentsApi.Services
{
    public class ContentFilter : IContentFilter
    {
        private readonly HttpClient _httpClient;

        public ContentFilter(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        public async Task<bool> ScanForInappropriateContent(IFormFile file)
        {
            var content = new MultipartFormDataContent();
            content.Add(new StreamContent(file.OpenReadStream()), "file", file.FileName);

            var response = await _httpClient.PostAsync("http://content-filter-service/scan", content);
            response.EnsureSuccessStatusCode();

            var result = await response.Content.ReadAsAsync<ScanResponse>();
            return result.IsInappropriate;
        }
    }
}
