🌟 Hotel Management System:
Full-Stack Application built using React + .NET Core WebAPI..
A modern and efficient hotel management solution that handles bookings, customers, rooms, payments, and staff operations — all in one system.

✨ Key Features
🔹 Frontend (React)
1)Clean & responsive UI
2)Real-time booking & room availability
3)Customer registration & management
4)Reusable components + React Hooks
5)API integration using Axios

🔹 Backend (.NET Core WebAPI)
1)RESTful API architecture
2)CRUD operations for all modules
3)Entity Framework Core + SQL Server
4)Input validation & error handling
5)Layered architecture (Models, Controllers, Services)

🛠️ Tech Stack
🔹Layer	                   🔹Technology
*)Frontend :                React, JavaScript, Axios, CSS,Bootstrap.
*)Backend  :               	ASP.NET Core WebAPI, C#, EF Core
*)Database :                Microsoft SQL Server
*)Tools	   :                VS Code, Postman, Git & GitHub

📂 Project Structure

🌟 Hotel Management System:
│
├── frontend/ (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
└── backend/ (.NET Core API)
    ├── Controllers/
    ├── Models/
    ├── Data/
    ├── Services/
    ├── Program.cs
    └── appsettings.json



  🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/srushtikolage/HotelManagementSystem.git

▶️ Run the Frontend (React)
cd frontend
npm install
npm start

Runs at 👉 http://localhost:5173


▶️ Run the Backend (.NET Core WebAPI)
cd backend
dotnet restore
dotnet ef database update
dotnet run


API available at:
👉 https://localhost:7001

🔗 Sample API Endpoint:

🌟Method       🌟Endpoint           🌟use
 #GET           /api/customers        Fetch all customers
 #POST          /api/bookings         Create new booking
 #GET           /api/rooms            fetch all rooms data
 #PUT           /api/staff/5          Update staff information
 #DELETE        /api/Rooms            delete record for room
