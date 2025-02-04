import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/ConnectDB.js";
import userRouter from "./route/user.route.js";

// Configure environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL, // Remove quotes
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet({
    crossOriginResourcePolicy: false,
}));

// Define routes
app.get("/", (req, res) => {
    res.json({ message: "Server is running on port " + PORT });
});
app.use("/api/user", userRouter);

// Connect to database and start server
const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running",PORT);
    });
});
