using System.Security.Claims;

namespace API.Extension
{
    public static class ClaimsPrincipleExtensions
    {
        public static string RetrieveEmailFromPrinciple(this ClaimsPrincipal user)
        {
            var email = user?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            return email ?? string.Empty;
        }
    }
}
