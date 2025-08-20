import React from 'react'
import { formatDate } from '../utilities/utils.js';

function Task({task}) {
    console.log("Rendered Task: " + task.name);

    // priority
    const priorityMap = { 1: "High", 2: "Medium", 3: "Low" };
    const priority = priorityMap[task.priority] ?? ""; 

    // color corresponding to priority
    const bgMap = { 1: "bg-[#DE3D3D]", 2: " bg-[#C86C41]", 3: "bg-[#3BAD3B]" };
    const bgColor = bgMap[task.priority] ?? "";

    // format by date
    const formattedDate = formatDate(task.completion_date);

    return (
        <div className='w-[467px] h-[82px] bg-[#212121] rounded-[10px] flex flex-row'>
            <span className='bg-[#7e7e7e] h-auto w-[20px] rounded-l-[10px]'></span>
            <div className='w-full h-full pl-[15px] pr-[13px] py-[15px]'>
                <div className='w-full h-full '>
                    <p className='font-helvetica font-medium text-white text-[20px]'>{task.name}</p>
                    <span className='flex flex-row items-center mt-[5px]'>
                        <p className='font-helvetica font-normal text-[#ADADAD] text-[14px] '>Complete by: {formattedDate}</p>
                        <p className='font-helvetica font-normal text-[#ADADAD] text-[14px] ml-[10px]'>|</p>
                        <div className={`px-[px] inline-flex items-center justify-center w-[50px] h-[18px]  rounded-[15px] ml-[12px] ${bgColor}`}>
                            <p className='font-helvetica font-light text-white text-[10px]'>{priority}</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Task