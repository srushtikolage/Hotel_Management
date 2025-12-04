using System.ComponentModel.DataAnnotations;

namespace HotelManagementSystem.Models
{
    public class Customer
    {
        [Key]
        public int customerid { get; set; }

        public string cname { get; set; }

        public string cemail { get; set; }

        public string cphone { get; set; }
    }
}
