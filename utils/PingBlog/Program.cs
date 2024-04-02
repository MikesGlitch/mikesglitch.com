using System;
using System.Diagnostics;
using System.Net.Http;

namespace PingBlog
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Running ActualBudget...");

            // var process = new Process { 
            //     StartInfo = new ProcessStartInfo
            //     {
            //         FileName = "cmd.exe",
            //         RedirectStandardInput = true,
            //         RedirectStandardOutput = true,
            //         UseShellExecute = false,
            //         CreateNoWindow = false,
            //         WorkingDirectory = @"D:\GitWork\actual-server",
            //     }
            // };

            // try
            // {
            //     process.Start();
            //     process.StandardInput.WriteLine(@"npm start");
            // } 
            // catch (Exception ex) 
            // {
            //     Console.WriteLine("ActualBudget Failed", ex.ToString());
            // }

            Console.WriteLine("Starting ping blog service.  This service just keeps the blog alive even when nobody is visiting");
            var startTimeSpan = TimeSpan.Zero;
            var runEveryXMinutes = TimeSpan.FromMinutes(2);

            var client = new HttpClient();
            client.Timeout = runEveryXMinutes;

            var timer = new System.Threading.Timer(async (e) =>
            {
                try
                {
                    var response = await client.GetAsync("https://mikesglitch.com");
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
