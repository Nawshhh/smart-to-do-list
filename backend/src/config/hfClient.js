import { InferenceClient } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.HF_TOKEN) {
    throw new Error("HF_TOKEN is required");
} 
export const hfClient = new InferenceClient(process.env.HF_TOKEN);