import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; // custom CSS file if needed

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    booked: 0,
    available: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("https://localhost:7214/api/Rooms"); // your API URL
        const rooms = response.data;

        const total = rooms.length;

        const booked = rooms.filter(r => {
          // check for different ways booked status may be stored
          if (typeof r.roomstatus === "string") {
            const val = r.roomstatus.toLowerCase();
            return val === "booked" || val === "occupied" || val === "reserved";
          }
          return false;
        }).length;

        const available = total - booked;

        setStats({ total, booked, available });
      } catch (error) {
        console.error("Error fetching room stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🏨 Hotel Management Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3 shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Total Rooms</h5>
              <h2>{stats.total}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3 shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Booked Rooms</h5>
              <h2>{stats.booked}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-success mb-3 shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Available Rooms</h5>
              <h2>{stats.available}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
