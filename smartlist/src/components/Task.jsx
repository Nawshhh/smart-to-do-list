import React, { useEffect, useState, useRef } from 'react'
import { formatDate } from '../utilities/utils.js';

function Task({ task, toggleDelete, clicked, onToggle }) {
    console.log("Rendered Task: ", task);
    // priority
    const priorityMap = { 1: "High", 2: "Medium", 3: "Low" };
    const priority = priorityMap[task.priority] ?? ""; 

    // color corresponding to priority
    const bgMap = { 1: "bg-[#DE3D3D]", 2: " bg-[#C86C41]", 3: "bg-[#3BAD3B]" };
    const bgColor = bgMap[task.priority] ?? "";

    const bgStatusMap = {1: "bg-[#7e7e7e]", 2: "bg-[#FFD350]", 3: "bg-[#5EBA50]"};
    const bgStatus = bgStatusMap[task.status] ?? "bg-[#080808]";

    // format by date
    const formattedDate = formatDate(task.completion_date);

    //cut name
    const formattedName = (name) => {
        if (!name) return "";
        if (name.length > 37){
            return name.slice(0, 34) + "...";
        } else {
            return name;
        }
    } 

    const deleteHover =
    "hover:outline hover:outline-2 hover:outline-[#DE3D3D]";

    return (
        <div
            onClick={onToggle}
            className={`w-[467px] h-[82px] bg-[#080808] rounded-[10px] flex flex-row 
                        ${toggleDelete ? deleteHover : ""}
                        ${clicked ? "outline outline-2 outline-[#DE3D3D]" : ""}`}
        >
            <span className={`${bgStatus} h-auto w-[20px] rounded-l-[10px]`}></span>
            <div className='w-full h-full pl-[15px] pr-[13px] py-[12px]'>
                <div className='w-full h-full'>
                    <p className='font-helvetica font-medium text-white text-[20px]'>{formattedName(task.name)}</p>
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