export const getAllTasks = (req,res) => {
    res.status(200).send("fetched");
}

export const createTask = (req,res) => {
    res.status(201).json({message: "post created success"});
}

export const updateTask = (req,res) => {
    res.status(200).json({message: "post update success"});
}

export const deleteTask = (req,res) => {
    res.status(200).json({message: "delete success"});
}