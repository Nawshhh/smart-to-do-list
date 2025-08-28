import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Body from '../components/Body';
import StatusColumns from '../components/StatusColumns';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import toast from 'react-hot-toast';

function DeleteTask() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [clickedIds, setClickedIds] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("http://localhost:5000/smartlist/homepage");
                console.log(response.data);
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchTasks(); // call the function
    },[]);

    // 1 - to-do
    // 2 - doing
    // 3 - done

    const toDoTasks = tasks.filter(task => task.status === 1);
    const doingTasks = tasks.filter(task => task.status === 2);
    const doneTasks = tasks.filter(task => task.status === 3);

    console.log("@ Delete Task");

    const handleDelete = async (e) => {
        try {
           const { data } = await axios.delete("http://localhost:5000/smartlist/delete-task", {
                data: { ids: clickedIds },
                headers: { "Content-Type": "application/json" }
            });
            // Optionally refresh the list
            setTasks(prev => prev.filter(t => !clickedIds.includes(t._id)));
            setClickedIds([]);
            toast.success(`${data.deletedCount} task/s deleted!`, {
                    style: {
                        background: "#393939",
                        color: "#FFFFFF"
                    }
                }
            );
        } catch (error) {
            console.error("Error deleting tasks:", error);
            toast.error("Nothing to be Deleted!", {
                style: {
                    background: "#393939",
                    color: "#FFFFFF"
                }
            }
        );
        } 
    }

  return (
    <Background>
        <Header
            statement={"What will you remove"} 
            expression={'?'}
        />
        <NavigationBar show={false}/>
        <Body>
            <StatusColumns status="To-Do" tasks={toDoTasks} deleteMode={true} clickedIds={clickedIds} setClickedIds={setClickedIds} loading={loading} />
            <StatusColumns status="Doing" tasks={doingTasks} deleteMode={true} clickedIds={clickedIds} setClickedIds={setClickedIds} loading={loading} />
            <StatusColumns status="Done" tasks={doneTasks} deleteMode={true} clickedIds={clickedIds} setClickedIds={setClickedIds} loading={loading} />
        </Body>
        <div className='flex flex-row w-auto h-auto mt-[53px]'>
            <Link to="/smartlist/homepage">
                <button type="button"
                    className=' bg-white font-helvetica text-[20px] text-black rounded-[5px] w-[118px] h-[40px] hover:bg-[#DFDFDF]'>Home</button>
            </Link>
            <button type="button" onClick={handleDelete}
                    className='ml-[18px] bg-[#DE3D3D] font-helvetica text-[20px] text-white rounded-[5px] w-[118px] h-[40px] hover:bg-[#C83737]'>Delete</button>
        </div>
        

    </Background>
  )
}

export default DeleteTask