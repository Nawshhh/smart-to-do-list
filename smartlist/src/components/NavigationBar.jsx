import React from 'react'

function NavigationBar() {
  return (
    <div className='min-h-[56px] min-w-[1608px] border-t-[1px] border-white justify-end gap-x-[20px] flex flex-row'>
        <span className='group'>
            <button id="delete-task" className=' group-hover:bg-[#D9D9D9] h-[56px] w-[170px] flex items-center justify-center bg-[#545454] rounded-b-[20px]'>
                <p className='font-helvetica font-bold text-[25px] text-[#D9D9D9] group-hover:text-[#212121]'>Delete</p>
            </button>
        </span>
        
        <span className='group'>
            <button id="add-task" className='group-hover:bg-[#D9D9D9] h-[56px] w-[170px] flex items-center justify-center bg-[#545454] rounded-b-[20px]'>
                <p className='font-helvetica font-bold text-[25px] text-[#D9D9D9] group-hover:text-[#212121]'>Add Task</p>
            </button>
        </span>
    </div>
  )
}

export default NavigationBar