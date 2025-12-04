using System.ComponentModel.DataAnnotations;

namespace HotelManagementSystem.Models
{
    public class Room
    {
        [Key]
        public int roomid { get; set; }

        public int roomnumber { get; set; }

        public string roomtype { get; set; }

        public double roomprice { get; set; }

        public string roomstatus { get; set; }
    }
}