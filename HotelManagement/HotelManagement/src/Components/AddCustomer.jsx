
import React  from "react";
import axios from "axios";
import {useState} from "react";


const AddCustomer=()=>{

const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


   const saveData = (e) => {
    e.preventDefault();

    axios.post("https://localhost:7214/api/Customer", {
 cname: name,
 cemail: email,
 cphone: phone
})
.then(response => {
  console.log("Customer Saved Successfully");
  setName(""); setEmail(""); setPhone("");
})

    .catch(error => {
      console.error("Request failed:", error.message);
    });
  };

    return (

        <>
        <div className="customer-container">
    <form className="customer-form" onSubmit={saveData}>
        <h2>Add Customer</h2>

        <div className="form-grid">
            <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter customer name"
                value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter email address" 
                value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label>Phone</label>
                <input type="text" placeholder="Enter phone number" 
                value={phone} onChange={(e) => setPhone(e.target.value)} required/>
            </div>
        </div>

        <button type="submit" className="btn-book">Book</button>
    </form>
</div>

        </>
    );
}
export  default AddCustomer