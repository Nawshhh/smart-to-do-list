import React from 'react'
import Task from './Task'
import { useState, useEffect } from 'react';

function StatusColumns({tasks,status,deleteMode,clickedIds = [], setClickedIds, ...props}) {
  console.log("Delete Mode: ", deleteMode);

  const toggleClicked = (id) => {
    if (!deleteMode) {
      console.log("set view to true");
      setView(!view);
      return;
    } 
    setClickedIds?.(prev =>
      prev.includes(id)
        ? prev.filter(clickedId => clickedId !== id) // remove if already clicked
        : [...prev, id] // add if not clicked
    );
  };
  
  console.log("List of IDs: ", clickedIds)

  return (
    <div className='max-h-[768px] max-w-[500px]'>
        <p className='font-helvetica font-bold text-[30px] text-white mb-[10px]'>{status}</p>
        <div className='w-[500px] h-[720px] bg-[#545454] rounded-[20px] flex flex-col items-center py-[18px] gap-y-[20px] overflow-auto scrollbar-none'>
            {tasks?.map(task => (
                <Task
                  key={task._id}
                  task={task}
                  toggleDelete={deleteMode}
                  clicked={clickedIds?.includes(task._id)}
                  onToggle={() => toggleClicked(task._id)}
                />
            ))}
        </div>
    </div>
  )
}

export default StatusColumns