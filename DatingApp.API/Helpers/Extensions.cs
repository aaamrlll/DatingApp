using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Accsess-Control-Expose-Headers","Application-Error");
            response.Headers.Add("Accsess-Control-Allow-Origin","*");
        }
    }
}