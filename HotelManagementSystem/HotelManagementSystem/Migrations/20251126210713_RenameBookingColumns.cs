using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HotelManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class RenameBookingColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ChackOutDate",
                table: "Bookings",
                newName: "CheckOut");

            migrationBuilder.RenameColumn(
                name: "ChackInDate",
                table: "Bookings",
                newName: "CheckIn");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CheckOut",
                table: "Bookings",
                newName: "ChackOutDate");

            migrationBuilder.RenameColumn(
                name: "CheckIn",
                table: "Bookings",
                newName: "ChackInDate");
        }
    }
}
