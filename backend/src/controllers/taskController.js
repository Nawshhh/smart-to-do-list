import Task from "../models/Task.js";
import {hfClient}  from "../config/hfClient.js";
import {promptMessage,systemPrompt} from "../config/utilities.js";

export async function getAllTasks (req,res) {
    try {
        const tasks = await Task.find();
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
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask){
            return res.status(404).json({message: "note not found"});
        }
        res.status(200).json({message: "deleted successfully!"});
    } catch (error) {
        console.error("error in deleteTask controller", error);
        res.status(500).json({message: "error delete"});
    }
}

export async function generateTasks(req,res) {

    const SEED_CONTEXT = {
        name: "Do Math Homework",
        status: 1,
        priority: 1,
        completion_date: "2025-08-20",
        completion_time: "17:30",
        description: "Finish algebra and calculus problems."
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

          res.status(200).json({message: "successs", content: data});
    } catch (error) {
        console.error("error in generatingTasks controller", error);
        res.status(500).json({message: "error generating"});
    }
}