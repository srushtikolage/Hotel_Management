import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewRoom = () => {

  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://localhost:7214/api/Rooms")
      .then(res => {
        setRooms(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.error("Error fetching rooms:", err);
      });
  }, []);




  const handleDelete = (roomid) => {
  if (window.confirm("Are you sure you want to delete this room?")) {
    axios
      .delete(`https://localhost:7214/api/Rooms/${roomid}`)
      .then(() => {
        // UI मधून deleted room remove करणे
        setRooms((prevRooms) => prevRooms.filter((r) => r.roomid !== roomid));
        alert("Room deleted successfully!");
      })
      .catch((error) => {
        console.error("Failed to delete room:", error);
        alert("Error deleting room!");
      });
  }
};


  return (
    <div className="viewroom-container">
      <div className="viewroom-card">
        <h2>Room List</h2>

        <table className="room-table">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Type</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {rooms.length === 0 ? (
              <tr>
                <td colSpan="5">No Rooms Found</td>
              </tr>
            ) : (
              rooms.map((r) => (
                <tr key={r.roomid}>
                  <td>{r.roomnumber}</td>
                  <td>{r.roomtype}</td>
                  <td>{r.roomprice}</td>
                  <td>{r.roomstatus}</td>
                  <td>
                    <button 
                      className="action-btn edit-btn"
                      onClick={() => navigate(`/editroom/${r.roomid}`)}
                    >
                      Edit
                    </button>

                    
  <button
    className="action-btn delete-btn"
    onClick={() => handleDelete(r.roomid)}
  >
    Delete
  </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ViewRoom;
