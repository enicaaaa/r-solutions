using Domain.DTOs;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public EventsController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpPost("CreateEvent/{userId}")]
        public async Task<Event> CreateEvents([FromBody] Event ev, Guid userId)
        {
            try
            {
                ev.User = await _dataContext.Users.FindAsync(userId);
                Guid LocId = new Guid("AE075AEE-0E4D-476D-81EF-DE3D680E93CB");
                var location = await _dataContext.Locations.FindAsync(LocId);
                ev.Location = location;
                await _dataContext.Events.AddAsync(ev);
                await _dataContext.SaveChangesAsync();
                return ev;
            }
            catch (Exception exc)
            {
                throw new Exception(exc.Message);
            }
        }

        [HttpGet("GetSpecificEvents")]
        public async Task<List<Event>> GetUserEvents([FromQuery] string type)
        {
            try
            {
                if (type == "user" || type == "public")
                    return await _dataContext.Events.Include(p => p.User).Where(q => q.Type == type).ToListAsync();
                return new List<Event>();
            }
            catch (Exception exc)
            {
                throw new Exception(exc.Message);
            }
        }

        [HttpGet("GetCompletedEvents")]
        public async Task<List<Event>> GetCompletedEvents([FromQuery] string flag)
        {
            try
            {
                return await _dataContext.Events.Where(x => x.Flag == flag).ToListAsync();
            }
            catch (Exception exc)
            {
                throw new Exception(exc.Message);
            }
        }

        [HttpDelete("DeleteAllEvents")]
        public async Task<IActionResult> DeleteAllEvents()
        {
            try
            {
                var events = await _dataContext.Events.ToListAsync();
                foreach (var e in events)
                {
                    _dataContext.Events.Remove(e);
                }
                await _dataContext.SaveChangesAsync();
                return Ok();
            }
            catch (Exception exc)
            {
                throw new Exception(exc.Message);
            }
        }

        [HttpPut("FinishEvent")]
        public async Task<IActionResult> FinishEvent([FromBody] string flag, string img, Guid eventId)
        {
            try
            {
                var ev = await _dataContext.Events.FindAsync(eventId);
                if (ev.EventAssignedAt != null)
                {
                    TimeSpan durationTime = DateTime.Now.Subtract((DateTime)ev.EventAssignedAt);

                    ev.EventDurationTime = durationTime;
                    ev.Flag = flag;
                    ev.ImgAfter = img;
                    await _dataContext.SaveChangesAsync();
                    return Ok();
                }
                return Ok();
            }
            catch (Exception exc)
            {
                throw new Exception(exc.Message);
            }
        }

        [HttpPost("AssignEvent/{eventId}")]
        public async Task<IActionResult> AssignEvent([FromBody] User user, Guid eventId)
        {
            var ev = await _dataContext.Events.FindAsync(eventId);
            ev.Assignee.Add(user);
            await _dataContext.SaveChangesAsync();
            return Ok();
        }



        [HttpGet("GetAllEvents")]
        public async Task<List<Event>> GetAllEvents()
        {
            try
            {
                return await _dataContext.Events.Include(p=> p.User).ToListAsync();
            }
            catch (Exception exc)
            {
                throw new Exception(exc.Message);
            }
        }
    }
}
