using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace API.Extension
{
    public static class UserManagerExtension
    {
        public static async Task<AppUser> FindUserWithClaimPrincipleWithAddress(this UserManager<AppUser> userManger,
            ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email);

            return await userManger.Users.Include(x => x.Address).SingleOrDefaultAsync(x => x.Email == email);
        }
        public static async Task<AppUser> FindByEmailFromClaimsPrinciple(this UserManager<AppUser> userManger,
           ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email);

            return await userManger.Users.SingleOrDefaultAsync(x => x.Email == email);
        }
    }
}
