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
    public class QuickLinksController : ControllerBase
    {
        private readonly ILogger<QuickLinksController> _logger;
        private readonly KuboDbcontext _context;

        public QuickLinksController(KuboDbcontext context, ILogger<QuickLinksController> logger)
        {
            _logger = logger;
            _context = context;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuickLinks>>> GetQuickLinks()
        {
            try
            {
                return await _context.QuickLinks.Select(x => ItemQuickLink(x)).ToListAsync();
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500);
            }
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<QuickLinks>> GetQuickLinks(int id)
        {
            var quickLinks = await _context.QuickLinks.FindAsync(id);

            if (quickLinks == null)
            {
                return NotFound();
            }

            return ItemQuickLink(quickLinks);
        }

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<ActionResult<QuickLinks>> CreateQuickLinks(QuickLinks quickLinks)
        {
            _context.QuickLinks.Add(quickLinks);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetQuickLinks),
                new { quickLinks.id },
                ItemQuickLink(quickLinks));
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateQuickLinks(int id, QuickLinks quickLinks)
        {
            if (id != quickLinks.id)
            {
                return BadRequest();
            }

            var quickLinksItem = await _context.QuickLinks.FindAsync(id);
            if (quickLinksItem == null)
            {
                return NotFound();
            }

            quickLinksItem.content = quickLinks.content;           
            quickLinksItem.image = quickLinks.image;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!QuickLinksItemExists(id))
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletequickLinks(int id)
        {
            var quickLinksItem = await _context.QuickLinks.FindAsync(id);
            if (quickLinksItem == null)
            {
                return NotFound();
            }

            _context.QuickLinks.Remove(quickLinksItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QuickLinksItemExists(int id)
        {
            return _context.QuickLinks.Any(e => e.id == id);
        }

        private static QuickLinks ItemQuickLink(QuickLinks x) =>
        new QuickLinks
        {
            id = x.id,
            content = x.content,
            image = x.image          
        };
    }
}
