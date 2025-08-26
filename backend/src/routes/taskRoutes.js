import express from "express"
import { createTask, deleteTask, generateTasks, getAllTasks, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/homepage", getAllTasks);
router.post("/add-task", createTask);
router.put("/update-task/:id", updateTask);
router.delete("/delete-task", deleteTask);
router.post("/generate-tasks", generateTasks);

export default router;