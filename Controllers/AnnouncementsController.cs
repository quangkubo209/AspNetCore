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
    public class AnnouncementsController : ControllerBase
    {
        private readonly ILogger<AnnouncementsController> _logger;
        private readonly KuboDbcontext _context;

        public AnnouncementsController(KuboDbcontext context, ILogger<AnnouncementsController> logger)
        {
            _logger = logger;
            _context = context;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Announcements>>> GetAnnouncements()
        {
            try
            {
                return await _context.Announcements.Select(x => ItemAnnouncement(x)).ToListAsync();
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500);
            }
        }

        // GET api/<ValuesController>/5
        //get announcement with id.
        [HttpGet("{id}")]
        public async Task<ActionResult<Announcements>> GetAnnouncements(int id)
        {
            var announcements = await _context.Announcements.FindAsync(id);

            if (announcements == null)
            {
                return NotFound();
            }

            return ItemAnnouncement(announcements);
        }

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<ActionResult<Announcements>> CreateAnnouncements(Announcements announcements)
        {
            _context.Announcements.Add(announcements);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetAnnouncements),
                new { announcements.id },
                ItemAnnouncement(announcements));
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAnnouncements(int id, Announcements announcements)
        {
            if (id != announcements.id)
            {
                return BadRequest();
            }

            var announcementsItem = await _context.Announcements.FindAsync(id);
            if (announcementsItem == null)
            {
                return NotFound();
            }

            announcementsItem.author = announcements.author;
            announcementsItem.content = announcements.content;
            announcementsItem.date = announcements.date;
            announcementsItem.image = announcements.image;
            announcementsItem.title = announcements.title;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!AnnouncementsItemExists(id))
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnnouncements(int id)
        {
            var announcementsItem = await _context.Announcements.FindAsync(id);
            if (announcementsItem == null)
            {
                return NotFound();
            }

            _context.Announcements.Remove(announcementsItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AnnouncementsItemExists(int id)
        {
            return _context.Announcements.Any(e => e.id == id);
        }

        private static Announcements ItemAnnouncement(Announcements x) =>
        new Announcements
        {
            id = x.id,
            author = x.author,
            content = x.content,
            date = x.date,
            image = x.image,
            title = x.title
        };
    }
}
