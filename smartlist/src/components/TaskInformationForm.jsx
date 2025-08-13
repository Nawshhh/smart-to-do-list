import React from 'react'

function TaskInformationForm() {
  return (
    <form className='w-[700px] h-[784px] bg-[#393939] rounded-[10px] flex flex-col px-[40.06px] pt-[25px] pb-[50px]' action="">
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
                    className='w-full h-[48px] rounded-[5px] bg-[#757575] font-helvetica text-white font-normal px-[20px] py-[12px] 
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
                        className='w-full h-[51px] rounded-[5px] bg-[#757575] font-helvetica text-white font-normal px-[20px] py-[12px] 
                        focus:outline-none focus:ring-0 focus:caret-[#BDBDBD]'
                    />
                </div>
                <div>
                    <p className='font-helvetica font-medium text-[20px] text-white mb-[10px]'>Priority</p>
                    <input 
                        type="text" 
                        name='task_priority'
                        id='task_priority'
                        className='w-full h-[51px] rounded-[5px] bg-[#757575] font-helvetica text-white font-normal px-[20px] py-[12px] 
                        focus:outline-none focus:ring-0 focus:caret-[#BDBDBD]'
                    />
                </div>
                <div>
                    <p className='font-helvetica font-medium text-[20px] text-white mb-[10px]'>Completion Date</p>
                    <div className='relative'>
                        <input 
                            type="date" 
                            name='task_completion_date'
                            id='task_completion_date'
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
                        name='task_priority'
                        id='task_priority'
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
                    className='rounded-[5px] bg-[#757575] font-helvetica font-normal text-white min-h-[150px] max-h-h[150px] w-full resize-none px-[20px] py-[12px]'
                ></textarea>
            </div>

        </div>
        
        {/* Buttons */}
        <div className='w-[620px] h-auto flex flex-row mt-[20px]'>
            <button className='w-[120px] h-[40px] bg-[#757575] font-helvetica text-[20px] text-white rounded-[5px] 
                                inline-flex items-center justify-center'>
            Cancel</button>
            <button className='w-[120px] h-[40px] ml-[15px] bg-[#BDBDBD] font-helvetica text-[20px] text-black rounded-[5px] 
                                inline-flex items-center justify-center'>
            Proceed</button>
            <button className='w-[262px] h-[40px] ml-[15px] bg-[#BDBDBD] font-helvetica text-[20px] text-black rounded-[5px] 
                                inline-flex items-center justify-center ml-auto'>
            Generate Suggestions</button>
        </div>
    </form>
  )
}

export default TaskInformationForm