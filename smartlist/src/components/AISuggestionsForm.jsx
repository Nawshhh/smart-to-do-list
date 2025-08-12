import React from 'react'

function AISuggestionsForm() {
  return (
    <form className='w-[700px] h-[784px] bg-[#0f0f0f] rounded-[10px] px-[31px] pt-[25px]' action="">
        <div className='w-[638px] border-b-[1px] border-white flex flex-col pb-[20px]'>
            <p className='font-helvetica text-white text-[50px] font-medium'>AI Suggestions</p>
            <p className='font-helvetica text-white text-[20px] font-light italic'>Suggestion of succeeding tasks based on name and description</p>
        </div>
    </form>
  )
}

export default AISuggestionsForm