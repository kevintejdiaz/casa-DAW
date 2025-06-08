using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using recu.Data;
using recu.Models;

namespace recu.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LibrosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LibrosController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/libros
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Libro>>> GetLibros()
        {
            return await _context.Libros.ToListAsync();
        }

        // GET: api/libros/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Libro>> GetLibro(long id)
        {
            var libro = await _context.Libros.FindAsync(id);

            if (libro == null)
            {
                return NotFound();
            }

            return libro;
        }

        // POST: api/libros
        [HttpPost]
        public async Task<ActionResult<Libro>> PostLibro(Libro libro)
        {
            _context.Libros.Add(libro);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLibro), new { id = libro.Id }, libro);
        }

        // PUT: api/libros/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLibro(long id, Libro libro)
        {
            if (id != libro.Id)
            {
                return BadRequest();
            }

            _context.Entry(libro).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/libros/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLibro(long id)
        {
            var libro = await _context.Libros.FindAsync(id);
            if (libro == null)
            {
                return NotFound();
            }

            _context.Libros.Remove(libro);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
