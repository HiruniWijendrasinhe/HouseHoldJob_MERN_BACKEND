import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load .env variables

const uri = process.env.MONGO_URL;

const testConnection = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Atlas connected successfully!");
    process.exit(0);
  } catch (err) {
    console.error("MongoDB Atlas connection failed:", err);
    process.exit(1);
  }
};

testConnection();
