using HotelManagementSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly HotelContext db;

        public CustomerController(HotelContext db)
        {
            this.db = db;

        }


        //https://localhost:7214/api/Customer
        //Add Customer
        [HttpPost]
        public IActionResult AddCustomer([FromBody] Customer customer)
        {

            db.Customers.Add(customer);
            db.SaveChanges();
            return Ok("Customer Add Successfuly");
        }


        //https://localhost:7214/api/Customer
        //Fetch the data to Customer
        [HttpGet]

        public List<Customer> GetCustomer() {
            return db.Customers.ToList();
        }

        //https://localhost:7214/api/Customer/3

        //fetch record with given id
        [HttpGet("{id:int}")]

        public  IActionResult GetCustomer(int id)
        {
            var c = db.Customers.Find(id);
            if (c == null) return NotFound("Customer Not found");
            return Ok(c);
        }


        //update the record of the customer
        [HttpDelete("{id:int}")]

        public IActionResult deleteCustomer(int id,Customer customer)
        {
            var c=db.Customers.Find(id);
            if (c == null) return NotFound("Customer Not found");
            
            db.Customers.Remove(c);
            db.SaveChanges();
            return Ok("Customer Delete Successfully");
        }


        //update the record of the customer
        [HttpPut("{id:int}")]
        public IActionResult UpdateCustomer(int id, Customer customer)
        {
            var c = db.Customers.Find(id);
            if (c == null) return NotFound("Customr NOt Found");
            c.cname = customer.cname;
            c.cemail = customer.cemail;
            c.cphone=customer.cphone;
            db.SaveChanges();
                return Ok("Customer Update Succesufully");
        }

    }
}
