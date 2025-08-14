import express from "express"
import { createTask, deleteTask, getAllTasks, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;

// app.get("/api/notes", (req,res) => {
//     res.status(200).send("you got 20 notes");
// });

// app.post("/api/notes", (req,res) => {
//     res.status(201).json({message: "post created success"});
// });

// app.put("/api/notes/:id", (req,res) => {
//     res.status(201).json({message: "post update success"});
// });

// app.delete("/api/notes/:id", (req,res) => {
//     res.status(201).json({message: "delete success"});
// });