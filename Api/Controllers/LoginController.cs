using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ContactApi.Models.DTOs;
using ContatoApi.Context;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace ContactApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly dbContext _context;
        private readonly IConfiguration _configuration;

        public LoginController(IConfiguration configuration, dbContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<ActionResult<UserToken>> Login([FromBody]UserDto userDto)
        {
            // var user = _userService.Authenticate(userDto.Username, userDto.Password);
            var loginDb = await _context.Login
                               .Where(L => L.UserLogin == userDto.Login.Trim() && L.Pass == userDto.Password.Trim())
                               .FirstOrDefaultAsync();


            if (loginDb == null)
                return NotFound("login inválido.");

            if (loginDb != null)
            {
                return BuildToken(loginDb.id, loginDb.Name, loginDb.UserLogin);
            }
            else
            {
                ModelState.AddModelError(string.Empty, "login inválido.");
                return BadRequest(ModelState);
            }
        }

        [NonAction]
        private UserToken BuildToken(int Id, string Name, string UserLogin)
        {
            var claims = new[]
           {
                new Claim(JwtRegisteredClaimNames.UniqueName, Id.ToString()),
                new Claim("idUser",Id.ToString()),
                new Claim("Name",Name),
                new Claim("UserLogin",UserLogin),

                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["CtsAcs:scKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // tempo de expiração do token: 1 hora
            var expiration = DateTime.UtcNow.AddDays(7);
            JwtSecurityToken token = new JwtSecurityToken(
               issuer: null,
               audience: null,
               claims: claims,
               expires: expiration,
               signingCredentials: creds);
            return new UserToken()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration
            };

        }

    }
}