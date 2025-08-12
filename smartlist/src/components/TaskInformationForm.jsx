import React from 'react'

function TaskInformationForm() {
  return (
    <form className='w-[700px] h-[784px] bg-[#393939] rounded-[10px] flex flex-col px-[40.06px] pt-[25px] pb-[50px]' action="">
        <div className='w-[384.55px] h-[85px] gap-y-[10px]'>
            <p className='font-helvetica text-white text-[50px] font-medium'>Task Information</p>
            <p className='font-helvetica text-white text-[20px] font-light italic'>Fill up the necessary information for your task   </p>
        </div>
    </form>
  )
}

export default TaskInformationForm