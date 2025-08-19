import React from 'react'
import { useLocation, useNavigate, Link } from "react-router-dom";

function NavigationBar({ show = true, ...props }) {
    const { state } = useLocation();
    const navigate = useNavigate();
    const user_name = state?.user_name || 'User';

    const goToAddTask = () => {
        navigate("/add-task");
    }

  return (
    <div className='min-h-[56px] min-w-[1608px] border-t-[1px] border-white justify-end gap-x-[20px] flex flex-row'>
        {show && (
            <>
                <span className='group'>
                    <button id="delete-task" 
                            className=' group-hover:bg-[#D9D9D9] h-[56px] w-[170px] flex items-center justify-center bg-[#545454] rounded-b-[20px]'>
                        <p className='font-helvetica font-bold text-[25px] text-[#D9D9D9] group-hover:text-[#212121]'>Delete</p>
                    </button>
                </span>
                
                <span className='group'>
                    <Link to="/smartlist/add-task">
                        <button id="add-task" 
                        className='group-hover:bg-[#D9D9D9] h-[56px] w-[170px] flex items-center justify-center bg-[#545454] rounded-b-[20px]'>
                            <p className='font-helvetica font-bold text-[25px] text-[#D9D9D9] group-hover:text-[#212121]'>Add Task</p>
                        </button>
                    </Link>
                </span>
            </>
        )}
        
    </div>
  )
}

export default NavigationBar