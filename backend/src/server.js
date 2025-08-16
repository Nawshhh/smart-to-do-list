import express from "express";
import taskRoutes from "./routes/taskRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // middleware function

app.use(rateLimiter);

app.use("/smartlist", taskRoutes);

// connect first and then put the console log of listening inside the db
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT: 5001");
    });
});

