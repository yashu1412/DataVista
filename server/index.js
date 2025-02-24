const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRouter = require("./router/route");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to Database
dbConnect();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

// Routes
app.use("/api/v1", userRouter);

app.get("/", (req, res) => {
    res.send("<h1>✅ Backend is Running Successfully! 🚀</h1>");
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({ status: 500, message: "Internal Server Error" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
