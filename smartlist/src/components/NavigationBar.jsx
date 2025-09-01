import React from 'react'
import { useNavigate, Link } from "react-router-dom";

function NavigationBar({ show = true, ...props }) {
    const navigate = useNavigate();

    const goToAddTask = () => {
        navigate("/add-task");
    }

  return (
    <div className='min-h-auto min-w-auto h-[56px] w-[1608px] max-w-full max-h-full border-t-[1px] border-white justify-end gap-x-[20px] flex flex-row'>
        {show && (
            <>
                <span className='group'>
                    <Link to="/smartlist/delete-task">
                        <button id="delete-task" 
                                className=' group-hover:bg-[#D9D9D9] px-[40px] py-[10px] bg-[#545454] rounded-b-[20px]'>
                            <p className='font-helvetica font-bold text-lg lg:text-2xl sm:text-lg text-[#D9D9D9] group-hover:text-[#212121]'>Delete</p>
                        </button>
                    </Link>
                </span>
                
                <span className='group'>
                    <Link to="/smartlist/add-task">
                        <button id="add-task" 
                        className='group-hover:bg-[#D9D9D9] px-[40px] py-[10px] bg-[#545454] rounded-b-[20px]'>
                            <p className='font-helvetica font-bold text-lg lg:text-2xl sm:text-lg text-[#D9D9D9] group-hover:text-[#212121]'>Add Task</p>
                        </button>
                    </Link>
                </span>
            </>
        )}
        
    </div>
  )
}

export default NavigationBar