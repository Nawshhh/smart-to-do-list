import React from 'react'
import { formatDate } from '../utilities/utils.js';

function Task({task}) {
    console.log("Rendered Task: " + task.name);

    // priority
    const priorityMap = { 1: "High", 2: "Medium", 3: "Low" };
    const priority = priorityMap[task.priority] ?? ""; 

    // color corresponding to priority
    const bgMap = { 1: "bg-[#DE3D3D]", 2: " bg-[#DEDE3D]", 3: "bg-[#3DDE3D]" };
    const bgColor = bgMap[task.priority] ?? "";

    // format by date
    const formattedDate = formatDate(task.completion_date);

    return (
        <div className='w-[467px] h-[82px] bg-[#212121] rounded-[10px] flex flex-row'>
            <span className='bg-[#7e7e7e] h-auto w-[20px] rounded-l-[10px]'></span>
            <div className='w-full h-full pl-[15px] pr-[13px] py-[15px]'>
                <div className='w-full h-full '>
                    <p className='font-helvetica font-medium text-white text-[20px]'>{task.name}</p>
                    <span className='flex flex-row'>
                        <p className='font-helvetica font-normal text-[#ADADAD] text-[14px] '>Complete by: {formattedDate}</p>
                        <p className='font-helvetica font-normal text-[#ADADAD] text-[14px] ml-[10px]'>|</p>
                        <div className={`px-[6px] inline-flex items-center justify-center w-auto h-auto rounded-[15px] ml-[12px] ${bgColor}`}>
                            <p className='font-helvetica font-bold text-white text-[10px]'>{priority}</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Task