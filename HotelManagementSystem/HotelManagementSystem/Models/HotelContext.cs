using Microsoft.EntityFrameworkCore;

namespace HotelManagementSystem.Models
{
    public class HotelContext:DbContext
    {
        public HotelContext(DbContextOptions<HotelContext> options) : base(options) { }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<Room> rooms { get; set; }  //databsetablenames

        public DbSet<Booking> Bookings { get; set; }
    }
}
