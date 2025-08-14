import mongoose from "mongoose";

// create schema
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    completion_date: {
        type: String,
        required: true
    },
    completion_time: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

//create a model based from the schema

const Task =  mongoose.model("Task", taskSchema);

export default Task;