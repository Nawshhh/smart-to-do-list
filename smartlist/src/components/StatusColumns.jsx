import Task from './Task'
import { useState, useEffect } from 'react';
import LoadingIcon from '../assets/LoadingIcon';
import axios from 'axios';
import {sortTasksByPriority} from '../utilities/utils';

function StatusColumns({status, deleteMode = false ,clickedIds = [], setClickedIds, ...props}) {
  console.log("Delete Mode: ", deleteMode);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  console.log("List of IDs: ", clickedIds);

  
  const fetchTasks = async () => {
      
      try {
        setLoading(true);
        const statusNumber = status == "To-Do" ?  1 : status == "Doing" ? 2 : 3;
        const response = await axios.get(`http://localhost:5000/smartlist/homepage/${statusNumber}`);
        const allTasks = response.data;
        console.log(`Fetched Tasks for ${statusNumber}: `, allTasks);
        setTasks(sortTasksByPriority(allTasks));
      } catch (error) {
        setLoading(true);
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
  }

  useEffect(() => {
    console.log("Render Again: ", props.renderAgain);
      fetchTasks(); // call the function
  }, [props.renderAgain]);

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

  return (
    <>
      <div className='max-h-[768px] max-w-full'>
          <p className='font-helvetica font-bold text-[30px] text-white mb-[10px]'>{status}</p>
          <div className='w-[500px] h-[720px] bg-[#545454] rounded-[20px] flex flex-col items-center py-[18px] gap-y-[20px] overflow-auto overflow-x-auto scrollbar-none'>
            {loading && <LoadingIcon />}
              {tasks?.map(task => {
                  return <Task
                    key={task._id}
                    task={task}
                    toggleDelete={deleteMode}
                    clicked={clickedIds?.includes(task._id)}
                    onToggle={() => toggleClicked(task._id)}
                  />
              })}
          </div>
      </div>
    </>
  )

}

export default StatusColumns