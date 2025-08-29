import React, { useState, useEffect } from 'react'
import MinIcon from '../assets/MinIcon';
import { formatDate, formatTimeFromMilitary } from '../utilities/utils';

function TaskName({name}) {
  return (
    <span className='font-helvetica text-[25px] font-light text-white mt-[20px]'>{name}</span>
  )
}

function TaskStatus({status}){
  return (
    <div className='flex flex-col mt-[10px] gap-y-[10px]'>
      <div className='flex items-center'>
         <input type="checkbox" className='mr-[20px] h-[20px] w-[20px] appearance-none border-2 border-white bg-transparent checked:bg-white rounded-[5px]'
         checked={status == 1} disabled/>
         <span className='font-helvetica text-[25px] font-light text-white'>To Do</span>
      </div>
      <div className='flex items-center'>
         <input type="checkbox" className='mr-[20px] h-[20px] w-[20px] appearance-none border-2 border-white bg-transparent checked:bg-white rounded-[5px]'
         checked={status == 2} disabled/>
         <span className='font-helvetica text-[25px] font-light text-white'>Doing</span>
      </div>
      <div className='flex items-center'>
         <input type="checkbox" className='mr-[20px] h-[20px] w-[20px] appearance-none border-2 border-white bg-transparent checked:bg-white rounded-[5px]'
         checked={status == 3} disabled/>
         <span className='font-helvetica text-[25px] font-light text-white'>Done</span>
      </div>
    </div>
  )
}

function TaskPriority({priority}){
  // 1 - high, 2 - medium, 3 - low
  return (
    <div className='flex flex-row flex-wrap gap-x-[30px] w-auto mt-[20px] items-center'>
      {priority == 3 ? <span className='font-helvetica text-[18px] font-bold text-white w-auto h-auto bg-[#3DDE3D] py-[5px] px-[18px] rounded-[15px]'>Low</span> : <span className='font-helvetica text-[20px] font-light text-white'>Low</span>}
      {priority == 2 ? <span className='font-helvetica text-[18px] font-bold text-white w-auto h-auto bg-[#DEDE3D] py-[5px] px-[18px] rounded-[15px]'>Medium</span> : <span className='font-helvetica text-[20px] font-light text-white'>Medium</span>}
      {priority == 1 ? <span className='font-helvetica text-[18px] font-bold text-white w-auto h-auto bg-[#DE3D3D] py-[5px] px-[18px] rounded-[15px]'>High</span> : <span className='font-helvetica text-[20px] font-light text-white'>High</span>}
    </div>
  )
}

function TaskDate({date}){
  return (
    <span className='font-helvetica text-[25px] font-light text-white mt-[20px]'>{formatDate(date)}</span>
  )
}

function TaskTime({time}){
   return (
     <span className='font-helvetica text-[25px] font-light text-white mt-[20px]'>{formatTimeFromMilitary(time)}</span>
   )
 }

function TaskDescription({description}){
  return(
    <span className='flex flex-wrap font-helvetica text-[25px] font-light text-white mt-[20px] italic'>{description}</span>
  )
}


function ViewTask({task,setView}) {
  const [isVisible, setIsVisible] = useState(false);
  const [clickedOption, setClickedOption] = useState([true,false,false,false,false,false]);

  // Trigger fade in when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const hideTask = () => {
    setIsVisible(false);
    // delay unmounting to allow fade out animation
    setTimeout(() => {
      setView(false);
    }, 300); // transition duration
  }

  const handleBackdropClick = (e) => {
    // close if clicking the backdrop, not the modal content
    if (e.target === e.currentTarget) {
      hideTask();
    }
  }

     const handleOptionClick = (index) => () => {
     setClickedOption(prev => {
       const newArray = [false,false,false,false,false,false]; // Reset all to false
       newArray[index] = true; // Always set clicked item to true (no toggle)
       return newArray;
     });
   }

  return (
    <div 
      onClick={handleBackdropClick} 
      className={`fixed top-0 left-0 w-screen h-screen z-50 bg-black/30 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
        <div 
          className={`bg-[#000000] rounded-[10px] w-[790px] h-[600px] flex flex-col transition-all duration-300 ease-in-out transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Header Div */}
          <div className="w-full h-auto p-[45px] flex flex-row items-center border-white border-b ">
            <span className='font-helvetica text-[30px] font-bold text-white'>View Task Information</span>
            <span onClick={hideTask} className='ml-auto'><MinIcon /></span>
          </div>
          {/* Body Div */}
          <div className="w-full h-full flex flex-row">
            {/* Navigation Bar */}
            <div className="w-[255px] px-[70px] pt-[60px] border-r border-white">
              <ul className='list-none flex flex-col gap-y-[25px]'>
                <li onClick={handleOptionClick(0)}
                className={`font-helvetica font-normal text-[22.5px] hover:underline-offset-[10px] hover:underline hover:text-white cursor-pointer ${clickedOption[0] ? "text-white underline underline-offset-[10px]" : "text-[#8E8E8E]"}`}>Name</li>
                <li onClick={handleOptionClick(1)}
                className={`font-helvetica font-normal text-[22.5px] hover:underline-offset-[10px] hover:underline hover:text-white cursor-pointer ${clickedOption[1] ? "text-white underline underline-offset-[10px]" : "text-[#8E8E8E]"}`}>Status</li>
                <li onClick={handleOptionClick(2)}
                className={`font-helvetica font-normal text-[22.5px] hover:underline-offset-[10px] hover:underline hover:text-white cursor-pointer ${clickedOption[2] ? "text-white underline underline-offset-[10px]" : "text-[#8E8E8E]"}`}>Priority</li>
                <li onClick={handleOptionClick(3)}
                className={`font-helvetica font-normal text-[22.5px] hover:underline-offset-[10px] hover:underline hover:text-white cursor-pointer ${clickedOption[3] ? "text-white underline underline-offset-[10px]" : "text-[#8E8E8E]"}`}>Date</li>
                <li onClick={handleOptionClick(4)}
                className={`font-helvetica font-normal text-[22.5px] hover:underline-offset-[10px] hover:underline hover:text-white cursor-pointer ${clickedOption[4] ? "text-white underline underline-offset-[10px]" : "text-[#8E8E8E]"}`}>Time</li>
                <li onClick={handleOptionClick(5)}
                className={`font-helvetica font-normal text-[22.5px] hover:underline-offset-[10px] hover:underline hover:text-white cursor-pointer ${clickedOption[5] ? "text-white underline underline-offset-[10px]" : "text-[#8E8E8E]"}`}>Description</li>
              </ul>
            </div>
            {/* Display */}
            <div className="w-full pt-[60px] pl-[50px] pr-[40px] pb-[60px] flex flex-col">
              <span className='font-helvetica text-[30px] font-bold text-white'>
                {clickedOption[0] ? "Name" : clickedOption[1] ? "Status" : clickedOption[2] ? "Priority" : clickedOption[3] ? "Date" : clickedOption[4] ? "Time" : "Description"}
              </span>
                {clickedOption[0] ? <TaskName name={task.name}/> : clickedOption[1] ? <TaskStatus status={task.status}/>: clickedOption[2] ? <TaskPriority priority={task.priority}/> : 
                clickedOption[3] ? <TaskDate date={task?.completion_date}/> : clickedOption[4] ? <TaskTime time={task?.completion_time}/> : <TaskDescription description={task.description}/>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ViewTask