using Microsoft.AspNetCore.Http;
using ScandocumentsApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ScandocumentsApi.Services
{
    public class ScanService : IScanService
    {
        private readonly IVirusScanner _virusScanner;
        private readonly IContentFilter _contentFilter;

        public ScanService(IVirusScanner virusScanner, IContentFilter contentFilter)
        {
            _virusScanner = virusScanner;
            _contentFilter = contentFilter;
        }

        public async Task<List<ScanResult>> ScanDocuments(List<IFormFile> files)
        {
            var results = new List<ScanResult>();

            for (int i = 0; i < files.Count; i++)
            {
                var file = files[i];
                var scanResult = await ScanFile(file);
                results.Add(new ScanResult { DocumentNumber = i + 1, IsClean = scanResult.IsClean, Issues = scanResult.Issues });
            }

            return results;
        }

        private async Task<ScanResult> ScanFile(IFormFile file)
        {
            var isMalicious = false; //await _virusScanner.ScanForVirus(file);
            var isInappropriate = false; //await _contentFilter.ScanForInappropriateContent(file);

            return new ScanResult
            {
                IsClean = !isMalicious && !isInappropriate,
                Issues = isMalicious ? "Malicious content found" : isInappropriate ? "Inappropriate content found" : "All clear"
            };
        }
    }
}
