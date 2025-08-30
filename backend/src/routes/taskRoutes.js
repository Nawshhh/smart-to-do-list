import express from "express"
import { createTask, deleteTask, generateTasks, getAllTasks, updateTask,updateTaskStatus } from "../controllers/taskController.js";

const router = express.Router();

router.get("/homepage/:status", getAllTasks);
router.post("/add-task", createTask);
router.put("/update-task/:id", updateTask);
router.delete("/delete-task", deleteTask);
router.post("/generate-tasks", generateTasks);
router.put("/update-task-status/:id", updateTaskStatus);

export default router;