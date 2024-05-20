using Microsoft.AspNetCore.Http;
using ScandocumentsApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ScandocumentsApi.Services
{
    public interface IScanService
    {
        Task<List<ScanResult>> ScanDocuments(List<IFormFile> files);
    }
}
