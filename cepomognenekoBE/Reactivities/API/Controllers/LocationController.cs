using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class LocationController : Controller
    {
        private readonly DataContext _dataContext;
        
        public LocationController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpPost("AddLocation")]
        public async Task<Location> CreateUser([FromBody] Location location)
        {
            await _dataContext.Locations.AddAsync(location);
            await _dataContext.SaveChangesAsync();
            return location;
        }
    }
}
