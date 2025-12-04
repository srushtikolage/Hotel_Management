import axios from "axios";
import { useEffect, useState } from "react";

const ViewCustomer = () => {
  const [bookings, setBookings] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch bookings
    axios.get("https://localhost:7214/api/Booking")
      .then(res => setBookings(res.data))
      .catch(err => {
        console.error("Error fetching bookings:", err);
        setError("Unable to load bookings");
      });

    // Fetch customers
    axios.get("https://localhost:7214/api/Customer")
      .then(res => setCustomers(res.data))
      .catch(err => console.error("Error fetching customers:", err));

    // Fetch rooms
    axios.get("https://localhost:7214/api/Rooms")
      .then(res => setRooms(res.data))
      .catch(err => console.error("Error fetching rooms:", err));
  }, []);

  // Helper functions to get customer name and room number
  const getCustomerName = (id) => {
    const customer = customers.find(c => c.customerid === id);
    return customer ? customer.cname : "N/A";
  };

  const getRoomNumber = (id) => {
    const room = rooms.find(r => r.roomid === id);
    return room ? `${room.roomnumber} - ${room.roomtype}` : "N/A";
  };

  return (
    <div className="viewcustomer-container">
      <div className="viewcustomer-card">
        <h2>Customer Booking Details</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <table className="customer-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer Name</th>
              <th>Room</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">No Bookings Found</td>
              </tr>
            ) : (
              bookings.map(b => (
                <tr key={b.bookingid}>
                  <td>{b.bookingid}</td>
                  <td>{getCustomerName(b.customerid)}</td>
                  <td>{getRoomNumber(b.roomid)}</td>
                  <td>{b.checkin?.substring(0, 10)}</td>
                  <td>{b.checkout?.substring(0, 10)}</td>
                  <td>{b.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCustomer;
