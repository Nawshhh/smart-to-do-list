import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';


function TaskInformationForm({setAiSuggestions, setIsGenerating, setGenerateAgain, isGenerating}) {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [status, setStatus] = useState(1);
    const [priority, setPriority] = useState(3);
    const [completionDate, setCompletionDate] = useState("");
    const [completionTime, setCompletionTime] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // input validation
        if (!name.trim() || !completionDate.trim() || !completionTime.trim() || !description.trim()){
            toast.error("All fields are required. Try Again", {
                    style: {
                        background: "#393939",
                        color: "#FFFFFF"
                    }
                }
            );
            return;
        }
        
        setLoading(true);

        try {
            await axios.post("http://localhost:5000/smartlist/add-task",{
                name, status, priority, description, 
                completion_date: completionDate, completion_time: completionTime
            });
            console.log("Task Created Successfully!");
            toast.success("Successfully Added!", {
                    style: {
                        background: "#393939",
                        color: "#FFFFFF"
                    }
                }
            );
            navigate('/smartlist/homepage');
        } catch (error) {
            console.log("Failed to create task: ", error);
        } finally {
            setLoading(false);
        }
    }

    const generateTasks = async (event) => {
        event.preventDefault();

        // input validation
        if (!name.trim() || !completionDate.trim() || !completionTime.trim() || !description.trim()){
            toast.error("Cannot generate with missing fields.", {
                    style: {
                        background: "#393939",
                        color: "#FFFFFF"
                    }
                }
            );
            return;
        }

        setIsGenerating(true);

        try {
            // post request to http... and get the response and transfer the responses to AIsuggestionsForm.jsx
            const response = await axios.post('http://localhost:5000/smartlist/generate-tasks' , {
                name, 
                description,
                status: 1, 
                priority, 
                completion_date: completionDate, 
                completion_time: completionTime
            })
            setAiSuggestions(response.data || []);
            setGenerateAgain(true);
            console.log("AI suggestions generated:", response.data);
        } catch (error) {
            console.log("Failed to generate suggestions:", error);
            setAiSuggestions([]); // Set empty array on error
        } finally {
            setIsGenerating(false);
        }
        
    }

    const goToHomepage = () => {
        navigate("/smartlist/homepage");
    }

  return (
    <div className='w-[700px] h-[784px] bg-[#393939] rounded-[10px] flex flex-col px-[40.06px] pt-[25px] pb-[50px]'>
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className='w-[620px] h-auto flex flex-col'>
                <p className='font-helvetica text-white text-[50px] font-medium'>Task Information</p>
                <p className='font-helvetica text-white text-[20px] font-light italic'>Fill up the necessary information for your task   </p>
            </div>
            
            <div className='w-[620px] h-auto flex flex-col mt-[25px] gap-y-[20px]'>
                {/* 1st Div*/}
                <div className='w-full h-auto'>
                    <p className='font-helvetica font-medium text-[20px] text-white mb-[10px]'>Task Name</p>
                    <input 
                        type="text" 
                        name="task_name" 
                        id="task_name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full h-[48px] rounded-[5px] bg-[#757575] font-helvetica text-white text-[20px] font-normal px-[20px] py-[12px] 
                        focus:outline-none focus:ring-0 focus:caret-[#BDBDBD]'
                        placeholder='Enter Name'
                    />
                </div>

                {/* 2nd Div*/}
                <div className='w-full h-auto gap-x-[23.04px] gap-y-[19px] grid grid-cols-2'>
                    <div>
                        <p className='font-helvetica font-medium text-[20px] text-white mb-[10px]'>Status</p>
                        <input 
                            type="text" 
                            name='task_status'
                            id='task_status'
                            value="To Do"
                            readOnly
                            className='w-full h-[51px] rounded-[5px] bg-[#757575] font-helvetica text-white font-normal px-[20px] py-[12px] 
                            focus:outline-none focus:ring-0 focus:caret-[#BDBDBD] cursor-pointer'
                        />
                    </div>
                    <div>
                        <p className='font-helvetica font-medium text-[20px] text-white mb-[10px]'>Priority</p>
                        <div className='relative w-full'>
                            <select 
                                name="task_priority" 
                                id="task_priority"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className='w-full h-[51px] rounded-[5px] bg-[#757575] font-helvetica text-white font-normal px-[20px] py-[12px] 
                                focus:outline-none focus:ring-0 focus:caret-[#BDBDBD] 
                                appearance-none [-webkit-appearance:none] [-moz-appearance:none]'>
                                <option value="" disabled></option>
                                <option value={1}>High</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Low</option>
                            </select>
                            <svg
                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-white"
                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                            >
                                <path d="M5.5 7.5l4.5 4.5 4.5-4.5" />
                            </svg>
                        </div>
                        
                    </div>
                    <div>
                        <p className='font-helvetica font-medium text-[20px] text-white mb-[10px]'>Completion Date</p>
                        <div className='relative'>
                            <input 
                                type="date" 
                                name='task_completion_date'
                                id='task_completion_date'
                                value={completionDate}
                                onChange={(e) => setCompletionDate(e.target.value)}
                                className='w-full h-[51px] rounded-[5px] bg-[#757575] font-helvetica font-light text-white  px-[20px]
                                focus:outline-none focus:ring-0 focus:caret-[#BDBDBD]'
                                style={{
                                    colorScheme: 'dark'
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <p className='font-helvetica font-medium text-[20px] text-white mb-[10px]'>Completion Time</p>
                        <input 
                            type="time" 
                            name='task_completion_time'
                            id='task_completion_time'
                            value={completionTime}
                            onChange={(e) => setCompletionTime(e.target.value)}
                            className='w-full h-[51px] rounded-[5px] bg-[#757575] font-helvetica font-light text-white px-[20px]
                            focus:outline-none focus:ring-0 focus:caret-[#BDBDBD]'
                            style={{
                                colorScheme: 'dark'
                            }}
                        />
                    </div>
                </div>

                {/* 3rd Div*/}
                <div className='w-full h-auto gap-y-[10px]'>
                    <p className='font-helvetica font-medium text-[20px] text-white mb-[10px]'>Description</p>
                    <textarea 
                        name="task_description" 
                        id="task_description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='rounded-[5px] bg-[#757575] font-helvetica font-normal text-white text-[20px] min-h-[150px] max-h-h[150px] w-full resize-none px-[20px] py-[12px]
                        focus:outline-none focus:ring-0 focus:caret-[#BDBDBD]'
                    ></textarea>
                </div>

            </div>
            
            {/* Buttons */}
            <div className='w-[620px] h-auto flex flex-row mt-[20px]'>
                <Link to="/smartlist/homepage">
                    <button 
                        type="button"
                        onClick={goToHomepage}
                        className='w-[120px] h-[40px] bg-[#757575] font-helvetica text-[20px] text-white rounded-[5px] 
                                        inline-flex items-center justify-center'>
                    Cancel</button>
                </Link>
                { loading ? <button type="submit" className='w-[120px] h-[40px] ml-[15px] bg-white font-helvetica text-[20px] text-black rounded-[5px] 
                            inline-flex items-center justify-center' disabled={loading}>Creating...</button>
                : <button type="submit" className='w-[120px] h-[40px] ml-[15px] bg-white font-helvetica text-[20px] text-black rounded-[5px] 
                            inline-flex items-center justify-center'>Create</button>}
                
                {isGenerating ? <button type='button' className='w-[262px] h-[40px] bg-white font-helvetica text-[20px] text-black rounded-[5px] 
                                    inline-flex items-center justify-center ml-auto' disabled={isGenerating}>Generating...</button>
                : <button type='button' onClick={generateTasks} className='w-[262px] h-[40px] bg-[#757575] font-helvetica text-[20px] text-white rounded-[5px] 
                                    inline-flex items-center justify-center ml-auto'>Generate Suggestions</button>}
                
            </div>
        </form>
    </div>
  )
}

export default TaskInformationForm