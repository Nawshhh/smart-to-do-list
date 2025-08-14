import express from "express";
import taskRoutes from "./routes/taskRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json()); // middleware function

app.use("/smartlist", taskRoutes);

app.listen(PORT, () => {
    console.log("Server started on PORT: 5001");
});