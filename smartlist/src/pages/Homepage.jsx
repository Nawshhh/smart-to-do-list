import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Background from '../components/Background';
import Body from '../components/Body';
import NavigationBar from '../components/NavigationBar';
import StatusColumns from '../components/StatusColumns';
import axios from 'axios';

function Homepage() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://localhost:5000/smartlist/homepage");
                console.log(response.data);
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
                setLoading(true);
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

    console.log(toDoTasks);
    console.log("Doing Tasks: " + doingTasks);
    console.log("Done Tasks: " + doneTasks);

    return (
        <Background>
            <Header statement={"These are your list of things to do"} expression={'.'}/>
            <NavigationBar show={true}/>
            <Body>
                <StatusColumns status="To-Do" tasks={toDoTasks} deleteMode={false} loading={loading}/>
                <StatusColumns status="Doing" tasks={doingTasks} deleteMode={false} loading={loading}/>
                <StatusColumns status="Done" tasks={doneTasks} deleteMode={false} loading={loading}/>
            </Body>
        </Background>
    )
}

export default Homepage