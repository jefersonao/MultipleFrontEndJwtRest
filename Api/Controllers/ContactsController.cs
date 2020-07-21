using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContatoApi.Context;
using ContactApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace ContactsApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly dbContext _context;

        public ContactsController(dbContext context)
        {
            _context = context;
        }

        // GET: api/Contacts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetContacts()
        {
            return await _context.Contacts.ToListAsync();
        }

        // GET: api/Contacts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContacts(int id)
        {
            var Contacts = await _context.Contacts.FindAsync(id);

            if (Contacts == null)
            {
                return NotFound();
            }

            return Contacts;
        }

        // PUT: api/Contacts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContacts(int id, Contact Contact)
        {
            if (id != Contact.id)
            {
                return BadRequest();
            }

            _context.Entry(Contact).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Contacts
        [HttpPost]
        public async Task<ActionResult<Contact>> PostContacts(Contact Contact)
        {
            _context.Contacts.Add(Contact);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContacts", new { id = Contact.id }, Contact);
        }

        // DELETE: api/Contacts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Contact>> DeleteContacts(int id)
        {
            var Contacts = await _context.Contacts.FindAsync(id);
            if (Contacts == null)
            {
                return NotFound();
            }

            _context.Contacts.Remove(Contacts);
            await _context.SaveChangesAsync();

            return Contacts;
        }

        private bool ContactsExists(int id)
        {
            return _context.Contacts.Any(e => e.id == id);
        }
    }
}
