using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace ScandocumentsApi.Services
{
    public interface IVirusScanner
    {
        Task<bool> ScanForVirus(IFormFile file);
    }
}
