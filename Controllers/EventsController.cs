using KuboApp.Models;
using KuboApp.ConfigDbContext;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KuboApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly ILogger<EventsController> _logger;
        private readonly KuboDbcontext _context;

        public EventsController(KuboDbcontext context, ILogger<EventsController> logger)
        {
            _logger = logger;
            _context = context;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Events>>> GetEvents()
        {
            try
            {
                return await _context.Events.Select(x => ItemEvent(x)).ToListAsync();
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500);
            }
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Events>> GetEvents(int id)
        {
            var events = await _context.Events.FindAsync(id);

            if (events == null)
            {
                return NotFound();
            }

            return ItemEvent(events);
        }

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<ActionResult<Events>> CreateEvents(Events events)
        {
            _context.Events.Add(events);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetEvents),
                new { events.id },
                ItemEvent(events));
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEvents(int id, Events events)
        {
            if (id != events.id)
            {
                return BadRequest();
            }

            var eventsItem = await _context.Events.FindAsync(id);
            if (eventsItem == null)
            {
                return NotFound();
            }

            eventsItem.title = events.title;
            eventsItem.month = events.month;
            eventsItem.date = events.date;
            eventsItem.time = events.time;
            
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!EventsItemExists(id))
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvents(int id)
        {
            var eventsItem = await _context.Events.FindAsync(id);
            if (eventsItem == null)
            {
                return NotFound();
            }

            _context.Events.Remove(eventsItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EventsItemExists(int id)
        {
            return _context.Events.Any(e => e.id == id);
        }

        private static Events ItemEvent(Events x) =>
        new Events
        {
            id = x.id,
            title = x.title,
            date = x.date,
            month = x.month,
            time = x.time
        };
    }
}
