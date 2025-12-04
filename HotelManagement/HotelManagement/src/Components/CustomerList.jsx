import React, { useEffect, useState } from "react";
import axios from "axios";

function CustomerList() {

  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
  axios.get("https://localhost:7214/api/Customer")
    .then(response => {
      setCustomers(response.data);
    })
    .catch(error => {
      console.error("Error fetching customers:", error);
      setError("Unable to load customer list");
    });
}, []);



  return (
    <div className="container mt-4">
      <h2 className="mb-3">Customer List</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-bordered table-striped shadow">
        <thead className="table-dark">
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {customers.length > 0 ? (
            customers.map((c) => (
              <tr key={c.customerid}>
                <td>{c.cname}</td>
                <td>{c.cemail}</td>
                <td>{c.cphone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center text-muted">
                No Customers Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
