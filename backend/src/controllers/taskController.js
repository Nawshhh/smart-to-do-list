import Task from "../models/Task.js";
import {hfClient}  from "../config/hfClient.js";
import {promptMessage,systemPrompt} from "../config/utilities.js";

export async function getAllTasks (req,res) {
    try {
        const tasks = await Task.find({status: req.params.status});
        res.status(200).json(tasks);
    } catch (error) {
        console.error("error in getAllTasks controller", error);
        res.status(500).json({message: "error get"});
    }
}

export async function createTask(req,res) {
    try {
        const { name,
                status,
                priority,
                completion_date,
                completion_time,
                description } = req.body;

        const task = new Task({name,
                                status,
                                priority,
                                completion_date,
                                completion_time,
                                description});
        
        const savedTask = await task.save();

        res.status(201).json(savedTask);

    } catch (error) {
        console.error("Errror in createTask controller" ,error);
        res.status(500).json({message: "error post"});
    }
}

export async function updateTask(req,res) {
    try {
        const { name,
                status,
                priority,
                completion_date,
                completion_time,
                description } = req.body;
        await Task.findByIdAndUpdate(req.params.id, {
            name, status, priority, completion_date, completion_time,description 
        });
        res.status(200).json({message: "task updated successfully"});
    } catch (error) {
        console.error("error in updateTask controller", error);
        res.status(500).json({message: "error update"});
    }
}

export async function deleteTask(req,res){
    try {
        const { ids } = req.body;

        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ message: "ids must be a non-empty array" });
        }

        const result = await Task.deleteMany({ _id: { $in: ids } });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No matching tasks found to delete" });
        }

        res.status(200).json({
            message: "Deleted successfully",
            deletedCount: result.deletedCount
        });
    } catch (error) {
        console.error("error in deleteTask controller", error);
        res.status(500).json({message: "error delete"});
    }
}

export async function generateTasks(req,res) {
    const { name,
        status,
        priority,
        completion_date,
        completion_time,
        description } = req.body;

    const SEED_CONTEXT = {
        name: name,
        status: status,
        priority: priority,
        completion_date: completion_date,
        completion_time: completion_time,
        description: description
    };
    
    try {
        const chatCompletion = await hfClient.chatCompletion({
            model: "openai/gpt-oss-120b",
            messages: [
                { role: "system", content: systemPrompt() },
                { role: "user", content: promptMessage(SEED_CONTEXT) }
            ],
          });
          
          const model_message = chatCompletion.choices[0].message.content;
          const data = JSON.parse(model_message);

          res.status(200).json(data);
    } catch (error) {
        console.error("error in generatingTasks controller", error);
        res.status(500).json({message: "error generating"});
    }
}

export async function updateTaskStatus(req,res){
    try {
        const { status } = req.body;
        await Task.findByIdAndUpdate(req.params.id, { status });
        res.status(200).json({message: "task status updated successfully"});
    } catch (error) {
        console.error("error in updateTaskStatus controller", error);
        res.status(500).json({message: "error update status"});
    }
}