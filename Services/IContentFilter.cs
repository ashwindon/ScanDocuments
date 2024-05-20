using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace ScandocumentsApi.Services
{
    public interface IContentFilter
    {
        Task<bool> ScanForInappropriateContent(IFormFile file);
    }
}
