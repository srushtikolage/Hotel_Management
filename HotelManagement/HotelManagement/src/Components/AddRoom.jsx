import axios from "axios";
import { useState } from "react";

const AddRoom = () => {
  const [a, m] = useState("");
  const [b, n] = useState("");
  const [c, o] = useState("");
  const [d, p] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const savadata = (h) => {
    h.preventDefault();  // form reload थांबवतो

    axios.post(
      "https://localhost:7214/api/Rooms",
      { roomnumber: a, roomtype: b, roomprice: c, roomstatus: d },
      { headers: { "Content-Type": "application/json" } }
    )
    .then(response => {
      console.log("Data saved successfully", response.data);
      setSuccessMsg("Room added successfully!");
      // Form fields clear 
      m(""); n(""); o(""); p("");
    })
    .catch(error => {
      console.error("Request failed:", error.message);
      setSuccessMsg("Failed to add room.");
    });
  };

  return (
    <div className="room-container">
      <form className="room-form" onSubmit={savadata}>
        <h2>Add New Room</h2>

        {successMsg && <p className="success-msg">{successMsg}</p>}

        <div className="form-grid">
          <div className="form-group">
            <label>Room Number</label>
            <input type="number" value={a} onChange={(h) => m(h.target.value)} placeholder="Enter room number" />
          </div>

          <div className="form-group">
            <label>Room Type</label>
            <input type="text" value={b} onChange={(h) => n(h.target.value)} placeholder="AC / Non-AC / Deluxe" />
          </div>

          <div className="form-group">
            <label>Room Price</label>
            <input type="number" value={c} onChange={(h) => o(h.target.value)} placeholder="Enter price" />
          </div>

          <div className="form-group">
            <label>Room Status</label>
            <input type="text" value={d} onChange={(h) => p(h.target.value)} placeholder="Available / Booked" />
          </div>
        </div>

        <button className="btn-addroom" type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoom;
