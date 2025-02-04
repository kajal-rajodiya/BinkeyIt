import mongoose from "mongoose";
import dotenv from "dotenv";

// Configure environment variables
dotenv.config();


    if (!process.env.MONGODB_URI) {
        throw new Error(
            "Please provide MONGODB_URI in the .env file"
        );
    }
    async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI); // Simplified connection
        console.log("Connected DB");
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1); // Exit process with failure
    }
}

export default connectDB;
