import React from 'react'
import Task from './Task'

function AISuggestionsForm({ aiSuggestions, isGenerating }) {
   console.log("isGenerating State: ", isGenerating);
   console.log("Ai Suggestions in Suggestions Form: ", aiSuggestions)
  return (
    <form className='w-[700px] h-[784px] bg-[#0f0f0f] rounded-[10px] px-[31px] pt-[25px]'>
        <div className='w-[638px] border-b-[1px] border-white flex flex-col pb-[20px]'>
            <p className='font-helvetica text-white text-[50px] font-medium'>AI Suggestions</p>
            <p className='font-helvetica text-white text-[20px] font-light italic'>Suggestion of succeeding tasks based on name and description</p>
        </div>

        {/* outer container */}
        <div className='w-auto h-auto flex flex-row mt-[27px]'>
          {/* inner container */}
          <div className='flex flex-col w-full h-auto gap-y-[15px]'>
            {aiSuggestions.length > 0 ? (
              aiSuggestions.map((suggestion, index) => (
                <div className='flex items-center'>
                  <Task task={suggestion}/>
                  <button className='bg-[#d9d9d9] h-[40px] w-[118px] rounded-[5px] inline-flex items-center justify-center ml-[29px]'>
                    <span className='font-helvetica text-[20px] text-black'>Add</span>
                  </button>
                </div>
              ))
            ) : null}
          </div>
        </div>
    </form>
  )
}

export default AISuggestionsForm