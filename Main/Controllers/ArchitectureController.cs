using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Main.Controllers;

[Route("api/architecture")]
public class ArchitectureController : Controller
{
    [HttpGet]
    public IActionResult Architecture()
    {
        try
        {
            var architecture = new { };
            var data = JsonSerializer.Serialize(architecture);
            var stream = GenerateStreamFromString(data);
            return File(stream, "text/json");
        }
        catch (Exception ex)
        {
            return StatusCode(400, ex.Message);
        }
    }

    private static Stream GenerateStreamFromString(string s)
    {
        var stream = new MemoryStream();
        var writer = new StreamWriter(stream);
        writer.Write(s);
        writer.Flush();
        stream.Position = 0;
        return stream;
    }
}