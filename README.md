# 📌 DATAVISTA 

A full-stack application with a **React.js (client)** and **Node.js/Express (server)** setup, featuring a database for managing users and their data.


LIVE SITE : https://data-vista-gules.vercel.app/
---

## 📂 Project Structure
```
project-root/
│-- client/     # Frontend (React.js)
│-- server/     # Backend (Node.js/Express)
│-- README.md   # Project documentation
```

---

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yashu1412/DataVista.git
cd DataVista
```

---

## 🖥️ Server Setup (Backend)
### 🔹 Navigate to Server Directory
```sh
cd server
```

### 🔹 Install Dependencies
```sh
npm install
```

### 🔹 Configure Environment Variables
Create a `.env` file in the `server` directory and add the necessary environment variables:
```sh
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 🔹 Start the Server
```sh
npm run dev
```
The server will run on `http://localhost:5000`.

---

## 🎨 Client Setup (Frontend)
### 🔹 Navigate to Client Directory
```sh
cd client
```

### 🔹 Install Dependencies
```sh
npm install
```

### 🔹 Configure Environment Variables
Create a `.env` file in the `client` directory and add:
```sh
REACT_APP_BASE_URL=http://localhost:5000
```

### 🔹 Start the Client
```sh
npm start
```
The client will run on `http://localhost:3000`.

---

## 🛠️ Technologies Used
### 🌐 Frontend
- React.js
- Tailwind CSS
- React Router

### 🔧 Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

---

## 📌 Features
✅ User Authentication (Login/Register)
✅ Fully Responsive UI

---

## 🤝 Contributing
Pull requests are welcome! Follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added feature X"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License
This project is licensed under the **MIT License**.


