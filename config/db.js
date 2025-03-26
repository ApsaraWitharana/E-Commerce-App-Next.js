import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cached.promise = mongoose
            .connect(process.env.MONGODB_URI, opts)
            .then((mongoose) => {
                console.log("MongoDB Connected!");
                return mongoose;
            })
            .catch((error) => {
                console.error(" MongoDB Connection Error:", error);
                process.exit(1);
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;
