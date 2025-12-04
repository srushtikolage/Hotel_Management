using HotelManagementSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomsController : ControllerBase
    {
        private readonly HotelContext _db;   //dbContext instance
        //private object db;


        //constructor ijection
        public RoomsController(HotelContext db) {
            _db = db;
        }

        //Add Rooms
        [HttpPost]
        public string AddRoom(Room r1)
        {
            _db.rooms.Add(r1);
            _db.SaveChanges();
            return "Room data Successfull Added";
        }

        //Fetch rooms data
        [HttpGet]
        public List<Room> GetRooms()
        {
            return _db.rooms.ToList();
         }

        //Fetch record with id
        [HttpGet("{id:int}")]
        public Room GetRoom(int id) {
            Room rs = _db.rooms.Find(id);
            return rs;
        }


        //Record delete with id
        [HttpDelete("{id:int}")]
        public string deleteroom(int id)
        {
            Room rs = _db.rooms.Find(id);
            _db.Remove(rs);
            _db.SaveChanges();
            return "Room record deleted";
        }


        //Update rooms record
        [HttpPut("{id:int}")]

        public IActionResult putRoom(int id,Room r)
        {
            Room rs = _db.rooms.Find(id);
            rs.roomnumber = r.roomnumber;
            rs.roomtype = r.roomtype;
            rs.roomprice = r.roomprice;
            rs.roomstatus = r.roomstatus;
            _db.SaveChanges();
            return Ok("update room data");
        
        }
    }
}
