import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
