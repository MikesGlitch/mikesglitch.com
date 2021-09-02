using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace PingBlog
{
    class Program
    {
        static void Main(string[] args)
        {
            var startTimeSpan = TimeSpan.Zero;
            var runEveryXMinutes = TimeSpan.FromMinutes(2);

            var timer = new System.Threading.Timer(async (e) =>
            {
                var client = new HttpClient();
                var response = await client.GetAsync("https://mikesglitch.com");
                Console.WriteLine($"Pinged blog and got response status code: {response.StatusCode}");
            }, null, startTimeSpan, runEveryXMinutes);

            Console.ReadLine();
        }
    }
}
