import React from 'react'
import { useLocation } from 'react-router-dom'

import Background from '../components/Background'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'
import Body from '../components/Body'
import TaskInformationForm from '../components/TaskInformationForm'
import AISuggestionsForm from '../components/AISuggestionsForm'

function AddTask() {
    const { state } = useLocation();
    const user_name = state?.user_name || 'User';

    return (
        <Background>
            <Header 
                statement={"What would you like to add"} 
                name={user_name + "?"} 
            />
            <NavigationBar show={false}/>
            <Body>
                <TaskInformationForm/>
                <AISuggestionsForm/>
            </Body> 
        </Background>
    )
}

export default AddTask