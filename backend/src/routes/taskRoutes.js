import express from "express"
import { createTask, deleteTask, getAllTasks, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/homepage", getAllTasks);
router.post("/add-task", createTask);
router.put("/update-task/:id", updateTask);
router.delete("/delete-task/:id", deleteTask);

export default router;