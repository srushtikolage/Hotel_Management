import "./App.css";
import './Components/AddCustomer.css';
import './Components/AddRoom.css';
import './Components/EditRoom.css';
import './Components/Booking.css';
import './Components/ViewCustomer.css';
import './Components/ViewRoom.css';

import Dashboard from "./Components/Dashboard";
import "./Components/Dashboard.css";

// IMPORT ALL ROUTE COMPONENTS
import AddRoom from "./Components/AddRoom";
import ViewRoom from "./Components/ViewRoom";
import AddCustomer from "./Components/AddCustomer";
import ViewCustomer from "./Components/ViewCustomer";
import EditRoom from "./Components/EditRoom";
import Booking from "./Components/Booking";
import CustomerList from "./Components/CustomerList";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      {/* Navigation Links */}
      <div className="navigation-links">
        <Link to="/addroom" className="btn btn-outline-primary m-2">Add Room</Link>
        <Link to="/viewroom" className="btn btn-outline-primary m-2">Room List</Link>
        <Link to="/addcustomer" className="btn btn-outline-primary m-2">Add Customer</Link>
        <Link to="/viewcustomer" className="btn btn-outline-primary m-2">View Booking Customer</Link>
        <Link to="/viewcustomerslist" className="btn btn-outline-primary m-2">Customer List</Link>
        <Link to="/booking" className="btn btn-outline-primary m-2">+Booking</Link>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addroom" element={<AddRoom />} />
        <Route path="/viewroom" element={<ViewRoom />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/viewcustomer" element={<ViewCustomer />} />
        <Route path="/editroom/:roomid" element={<EditRoom />} />  {/* ✔ Correct with param */}
        <Route path="/viewcustomerslist" element={<CustomerList />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
