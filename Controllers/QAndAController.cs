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
    public class QAndAController : ControllerBase
    {
        private readonly ILogger<QAndAController> _logger;
        private readonly KuboDbcontext _context;

        public QAndAController(KuboDbcontext context, ILogger<QAndAController> logger)
        {
            _logger = logger;
            _context = context;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<QAndA>>> GetQAndA()
        {
            try
            {
                return await _context.QAndA.Select(x => QAndAItem(x)).ToListAsync();
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500);
            }
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<QAndA>> GetQAndA(int id)
        {
            var qAndA = await _context.QAndA.FindAsync(id);

            if (qAndA == null)
            {
                return NotFound();
            }

            return QAndAItem(qAndA);
        }

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<ActionResult<QAndA>> CreateQAndA(QAndA qAndA)
        {
            _context.QAndA.Add(qAndA);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetQAndA),
                new { qAndA.id },
                QAndAItem(qAndA));
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateQAndA(int id, QAndA qAndA)
        {
            if (id != qAndA.id)
            {
                return BadRequest();
            }

            var qAndAItem = await _context.QAndA.FindAsync(id);
            if (qAndAItem == null)
            {
                return NotFound();
            }

            qAndAItem.answer = qAndA.answer;
            qAndAItem.question = qAndA.question;
            qAndAItem.author = qAndA.author;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!QAndAItemExists(id))
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQAndA(int id)
        {
            var qAndAItem = await _context.QAndA.FindAsync(id);
            if (qAndAItem == null)
            {
                return NotFound();
            }

            _context.QAndA.Remove(qAndAItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QAndAItemExists(int id)
        {
            return _context.QAndA.Any(e => e.id == id);
        }

        private static QAndA QAndAItem(QAndA x) =>
        new QAndA
        {
            id = x.id,
            answer = x.answer,
            question = x.question,
            author = x.author           
        };
    }
}
