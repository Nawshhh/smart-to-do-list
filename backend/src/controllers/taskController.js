import Task from "../models/Task.js";

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