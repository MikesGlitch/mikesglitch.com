using System;
using System.Net.Http;

namespace PingBlog
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting ping blog service.  This service just keeps the blog alive even when nobody is visiting");
            var startTimeSpan = TimeSpan.Zero;
            var runEveryXMinutes = TimeSpan.FromMinutes(2);

            var client = new HttpClient();
            client.Timeout = runEveryXMinutes;

            var timer = new System.Threading.Timer(async (e) =>
            {
                try
                {
                    // Hitting the blog page because it doesn't call external apis (like youtube etc)
                    var response = await client.GetAsync("https://mikesglitch.com/blog");
                    Console.WriteLine($"Pinged blog and got response status code: {response.StatusCode}");
                } 
                catch(Exception ex)
                {
                    Console.WriteLine($"Could not ping blog.  Error: {ex}");
                }
            }, null, startTimeSpan, runEveryXMinutes);

            Console.ReadLine();
        }
    }
}
