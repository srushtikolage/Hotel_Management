import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditRoom() {

  const { roomid } = useParams();   // ✔ correct param
  const navigate = useNavigate();

  const [room, setRoom] = useState({
    roomnumber: "",
    roomtype: "",
    roomprice: "",
    roomstatus: ""
  });

  // 🔹 Fetch room details by ID
  useEffect(() => {
    axios
      .get(`https://localhost:7214/api/Rooms/${roomid}`)
      .then((response) => setRoom(response.data))
      .catch((error) =>
        console.error("Failed to load room:", error.message)
      );
  }, [roomid]);

  // 🔹 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  // 🔹 Update room
  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`https://localhost:7214/api/Rooms/${roomid}`, room)
      .then(() => {
        alert("Room updated successfully!");
        navigate("/rooms");
      })
      .catch((error) => {
        console.error("Update failed:", error.message);
        alert("Error updating room");
      });
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow px-4 py-3" style={{ width: "450px" }}>
        <h4 className="text-center mb-3">✏️ Edit Room</h4>

        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Room Number</label>
            <input
              type="number"
              name="roomnumber"
              className="form-control"
              value={room.roomnumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Room Type</label>
            <select
              name="roomtype"
              className="form-control"
              value={room.roomtype}
              onChange={handleChange}
              required
            >
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
              <option value="Deluxe">Deluxe</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Price (₹)</label>
            <input
              type="number"
              name="roomprice"
              className="form-control"
              value={room.roomprice}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              name="roomstatus"
              className="form-control"
              value={room.roomstatus}
              onChange={handleChange}
              required
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
          </div>

          <div className="d-flex justify-content-between">
            <button className="btn btn-success w-50 me-2">💾 Update</button>
            <button
              type="button"
              className="btn btn-secondary w-50"
              onClick={() => navigate("/rooms")}
            >
              ⬅️ Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRoom;
