import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: './config/config.env' });

// Set up CORS to allow only the React app to access the backend
app.use(cors({
  origin: [process.env.FRONTEND_URL], // Allows your React app based on the environment variable
  methods: ["POST"], // Restricting to POST requests
  credentials: true, // Allow credentials such as cookies to be sent
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle reservation-related requests
app.use("/api/v1/reservation", reservationRouter);

// Establish a database connection
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
