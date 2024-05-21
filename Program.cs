// var builder = WebApplication.CreateBuilder(args);
// var app = builder.Build();

// app.MapGet("/", () => "Hello World!");

// app.Run();


using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ScandocumentsApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddHttpClient();
builder.Services.AddScoped<IScanService, ScanService>();
builder.Services.AddScoped<IVirusScanner, VirusScanner>();
builder.Services.AddScoped<IContentFilter, ContentFilter>();

var app = builder.Build();

app.UseRouting();
//run this app on http://0.0.0.0/5152

// app.UseAuthentication();
// app.UseAuthorization();
Console.WriteLine("Hello World!");
app.MapGet("/", () => "Hello World!");

app.MapPost("/scandocuments", async (HttpContext context, IFormFileCollection files, IScanService scanService) =>
{
    var fileList = files.ToList();
    var results = await scanService.ScanDocuments(fileList);
    return Results.Ok(results);
}).DisableAntiforgery();

app.Run("http://0.0.0.0:8080");
