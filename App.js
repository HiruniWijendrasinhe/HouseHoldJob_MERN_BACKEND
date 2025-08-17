import express from 'express';
import connectDB from './Configure/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from './routes/UserRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


app.use(cors({
  origin:'*',
  credentials:false

  }
}));
app.use(express.json());


app.use("/api/auth", authRoute);


const startServer = async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

startServer();


