 using System.ComponentModel.DataAnnotations;

namespace HotelManagementSystem.Models
{
    public class Booking
    {
        [Key]
        public int bookingid { get; set; } 
        
        public int customerid { get; set; }

        public int roomid { get; set; }

        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }

    }
}
