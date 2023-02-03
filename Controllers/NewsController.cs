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
    public class NewsController : ControllerBase
    {
        private readonly ILogger<NewsController> _logger;
        private readonly KuboDbcontext _context;

        public NewsController(KuboDbcontext context, ILogger<NewsController> logger)
        {
            _logger = logger;
            _context = context;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<News>>> GetNews()
        {
            try
            {
                return await _context.News.Select(x => ItemNew(x)).ToListAsync();
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500);
            }
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<News>> GetNews(int id)
        {
            var news = await _context.News.FindAsync(id);

            if (news == null)
            {
                return NotFound();
            }

            return ItemNew(news);
        }

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<ActionResult<News>> CreateNews(News news)
        {
            _context.News.Add(news);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetNews),
                new { news.id },
                ItemNew(news));
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNews(int id, News news)
        {
            if (id != news.id)
            {
                return BadRequest();
            }

            var newsItem = await _context.News.FindAsync(id);
            if (newsItem == null)
            {
                return NotFound();
            }

            newsItem.content = news.content;
            newsItem.date = news.date;
            newsItem.image = news.image;
            newsItem.title = news.title;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!NewsItemExists(id))
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNews(int id)
        {
            var newsItem = await _context.News.FindAsync(id);
            if (newsItem == null)
            {
                return NotFound();
            }

            _context.News.Remove(newsItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NewsItemExists(int id)
        {
            return _context.News.Any(e => e.id == id);
        }

        private static News ItemNew(News x) =>
        new News
        {
            id = x.id,
            content = x.content,
            date = x.date,
            image = x.image,
            title = x.title
        };
    }
}
