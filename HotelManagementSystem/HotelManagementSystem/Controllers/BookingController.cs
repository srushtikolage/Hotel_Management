using HotelManagementSystem.Models;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly HotelContext _db;

        public BookingController(HotelContext db)
        {
            _db = db;
        }


        // ADD BOOKING
        [HttpPost]
        public IActionResult AddBooking(Booking b)
        {
            // Check room exists
            var room = _db.rooms.FirstOrDefault(r => r.roomid == b.roomid);
            if (room == null)
                return BadRequest("Invalid Room ID");

            // Save booking
            _db.Bookings.Add(b);
            _db.SaveChanges();

            // Update room status
            room.roomstatus = "Booked";
            _db.SaveChanges();

            return Ok("Booking Successful!");
        }


        // GET ALL BOOKINGS
        [HttpGet]
        public IActionResult GetBookings()
        {
            return Ok(_db.Bookings.ToList());
        }


        // GET BOOKING BY ID
        [HttpGet("{id:int}")]
        public IActionResult GetBooking(int id)
        {
            var bk = _db.Bookings.Find(id);
            if (bk == null)
                return NotFound("Booking Not Found");

            return Ok(bk);
        }


        // DELETE BOOKING + UPDATE ROOM STATUS
        [HttpDelete("{id:int}")]
        public IActionResult DeleteBooking(int id)
        {
            var bk = _db.Bookings.Find(id);
            if (bk == null)
                return NotFound("Booking Not Found");

            var room = _db.rooms.FirstOrDefault(r => r.roomid == bk.roomid);
            if (room != null)
            {
                room.roomstatus = "Available";
            }

            _db.Bookings.Remove(bk);
            _db.SaveChanges();

            return Ok("Booking Deleted Successfully!");
        }


        // UPDATE BOOKING
        [HttpPut("{id:int}")]
        public IActionResult UpdateBooking(int id, Booking b)
        {
            var bk = _db.Bookings.Find(id);
            if (bk == null)
                return NotFound("Booking Not Found");

            bk.roomid = b.roomid;
            bk.CheckIn = b.CheckIn;
            bk.CheckOut = b.CheckOut;
            bk.customerid = b.customerid;

            _db.SaveChanges();

            return Ok("Booking Updated Successfully");
        }

    }
}
