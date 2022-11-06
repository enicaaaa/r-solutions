using Domain.DTOs;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public UserController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpPost("CreateUser")]
        public async Task<User> CreateUser([FromBody] User user)
        {
            await _dataContext.Users.AddAsync(user);
            await _dataContext.SaveChangesAsync();
            return user;
        }

        [HttpGet("GetUsers")]
        public  async Task<List<User>> GetUsers()
        {
            var users = await _dataContext.Users.ToListAsync();
            return users;
        }

        [HttpPost("IsUserAuth")]
        public async Task<Guid?> IsUserAuth([FromBody] AuthDTO auth)
        {
            var users = await _dataContext.Users.Where(u => u.Username == auth.username).ToListAsync();
            foreach (var user in users)
            {
                if (user.Password == auth.password)
                {
                    return user.Id;
                }
            }
            return null;
        }


        [HttpDelete("DeleteUser")]
        public async Task<IActionResult> DeleteUser([FromQuery] Guid guid)
        {
            try
            {
                var user = _dataContext.Users.Where(x => x.Id == guid).FirstOrDefault();
                _dataContext.Users.Remove(user);
                await _dataContext.SaveChangesAsync();
                return Ok();
            }
            catch(Exception exc)
            {
                throw new Exception(exc.Message);
            }
        }

    }
}
