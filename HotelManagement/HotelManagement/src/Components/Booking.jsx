import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [customers, setCustomers] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [customerId, setCustomerId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch Customers
    axios.get("https://localhost:7214/api/Customer")
      .then(res => setCustomers(res.data))
      .catch(err => console.error("Customer Fetch Error:", err));

    // Fetch Rooms
    axios.get("https://localhost:7214/api/Rooms")
      .then(res => setRooms(res.data))
      .catch(err => console.error("Room Fetch Error:", err));
  }, []);

  const saveBooking = (e) => {
    e.preventDefault();

    // Basic validation
    if (!customerId || !roomId || !checkIn || !checkOut) {
      setMsg("Please fill all fields before booking!");
      return;
    }

    setLoading(true);

    axios.post("https://localhost:7214/api/Booking", {
      customerid: customerId,
      roomid: roomId,
      checkin: checkIn,
      checkout: checkOut
    })
    .then(res => {
      setMsg("Booking Successful!");
      setCustomerId("");
      setRoomId("");
      setCheckIn("");
      setCheckOut("");
      setLoading(false);

      // Redirect to ViewCustomer page to show booking list
      navigate("/viewcustomer");
    })
    .catch(err => {
      console.error("Booking Failed:", err);
      setMsg("Booking Failed!");
      setLoading(false);
    });
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={saveBooking}>
        <h2>Room Booking</h2>

        {msg && <p className="success-msg">{msg}</p>}

        <div className="form-grid">

          {/* CUSTOMER DROPDOWN */}
          <div className="form-group">
            <label>Select Customer</label>
            <select value={customerId} onChange={(e) => setCustomerId(e.target.value)}>
              <option value="">Select Customer</option>
              {customers.map(c => (
                <option key={c.customerid} value={c.customerid}>
                  {c.cname}
                </option>
              ))}
            </select>
          </div>

          {/* ROOM DROPDOWN */}
          <div className="form-group">
            <label>Select Room</label>
            <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
              <option value="">Select Room</option>
              {rooms.map(r => (
                <option key={r.roomid} value={r.roomid}>
                  {r.roomnumber} - {r.roomtype}
                </option>
              ))}
            </select>
          </div>

          {/* CHECK-IN */}
          <div className="form-group">
            <label>Check-in Date</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>

          {/* CHECK-OUT */}
          <div className="form-group">
            <label>Check-out Date</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>

        </div>

        <button className="btn-booking" disabled={loading}>
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default Booking;
