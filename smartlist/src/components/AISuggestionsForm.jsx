import React from 'react'
import Task from './Task'
import { useState, useEffect } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';
import LoadingIcon from '../assets/LoadingIcon';

function AISuggestionsForm({ aiSuggestions, isGenerating, generateAgain, setGenerateAgain }) {
  console.log("isGenerating State: ", isGenerating);
  console.log("Ai Suggestions in Suggestions Form: ", aiSuggestions);

  const [loadingIndex, setLoadingIndex] = useState(null);
  const [addedByIndex, setAddedByIndex] = useState({});

  // adding of task to db
  const addAiTask = async (event, index, suggestion) => {
      event.preventDefault();

      setLoadingIndex(index);

      try {
        const suggested_task = {
          name: suggestion?.name,
          status: suggestion?.status,
          priority: suggestion?.priority,
          completion_date: suggestion?.completion_date,
          completion_time: suggestion?.completion_time,
          description: suggestion?.description
        }

        const response = await axios.post("http://localhost:5000/smartlist/add-task", suggested_task);
        console.log(response);
        console.log("Generated Task Added To Homepage.");
        toast.success("Successfully Added!", {
                style: {
                    background: "#393939",
                    color: "#FFFFFF"
                }
            }
        );
      } catch (error) {
        console.error("Error Testing Ai Tasks: ", error);
      } finally {
        setLoadingIndex(null);
        setAddedByIndex((prev) => ({ ...prev, [index]: true }));
      }
  }

  // it restarts the accessibility of buttons
  useEffect(() => {
    if (generateAgain) {
      setAddedByIndex({});
      setLoadingIndex(null);
      setGenerateAgain(false);
    }
  }, [generateAgain, setGenerateAgain]);

  return (
    <div className='w-[700px] h-[784px] bg-[#0f0f0f] rounded-[10px] px-[31px] pt-[25px]'>
        <div className='w-[638px] border-b-[1px] border-white flex flex-col pb-[20px]'>
            <p className='font-helvetica text-white text-[50px] font-medium'>AI Suggestions</p>
            <p className='font-helvetica text-white text-[20px] font-light italic'>Suggestion of succeeding tasks based on name and description</p>
        </div>

        {/* outer container */}
        <div className='w-auto h-auto flex flex-row mt-[27px]'>
          {/* inner container */}
          {isGenerating ? 
          <div className='flex items-center justify-center w-full mt-[200px]'>
            <LoadingIcon/>
          </div>
           : 
            <div className='flex flex-col w-full h-auto gap-y-[15px]'>
              {aiSuggestions.length > 0 ? (
                aiSuggestions.map((suggestion, index) => (
                  <form key={index} className='flex items-center' onSubmit={(e) => addAiTask(e, index, suggestion)}>
                    <Task key={index} task={suggestion} fromAi={true}/>
                    {loadingIndex === index ? <button type='button' className='bg-[#757575] h-[40px] w-[118px] rounded-[5px] inline-flex items-center justify-center ml-[29px]'>
                                <span className='font-helvetica text-[20px] text-white' disabled={loadingIndex === index}>Adding...</span>
                              </button> 
                    : (addedByIndex[index] ? <button type='button' className='bg-[#757575] h-[40px] w-[118px] rounded-[5px] inline-flex items-center justify-center ml-[29px]'>
                                <span className='font-helvetica text-[20px] text-white' disabled={addedByIndex[index]}>Added</span>
                              </button>
                    : <button type='submit' className='bg-[#d9d9d9] h-[40px] w-[118px] rounded-[5px] inline-flex items-center justify-center ml-[29px] hover:bg-[#B3B3B3]'>
                      <span className='font-helvetica text-[20px] text-black'>Add</span>
                    </button>)}
                  </form>
                ))
              ) : null}
            </div>
          }
        </div>
    </div>
  )
}

export default AISuggestionsForm