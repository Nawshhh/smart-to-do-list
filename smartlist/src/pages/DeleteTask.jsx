import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Body from '../components/Body';
import StatusColumns from '../components/StatusColumns';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

function DeleteTask() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

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


  return (
    <Background>
        <Header
            statement={"What will you remove"} 
            expression={'?'}
        />
        <NavigationBar show={true}/>
        <Body>
            <StatusColumns status="To-Do" tasks={toDoTasks} deleteMode={true}/>
            <StatusColumns status="Doing" tasks={doingTasks} deleteMode={true}/>
            <StatusColumns status="Done" tasks={doneTasks} deleteMode={true}/>
        </Body>
        <Link to="/smartlist/homepage">
            <button type="button"
                className='mt-[53px] bg-white font-helvetica text-[20px] text-black rounded-[5px] w-[118px] h-[40px] hover:bg-[#DFDFDF]'>Home</button>
        </Link>
    </Background>
  )
}

export default DeleteTask