import React from 'react'
import { useLocation } from 'react-router-dom'

import Background from '../components/Background'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'
import Body from '../components/Body'
import TaskInformationForm from '../components/TaskInformationForm'
import AISuggestionsForm from '../components/AISuggestionsForm'

function AddTask() {
    return (
        <Background>
            <Header 
                statement={"What would you like to add"} 
                expression={'?'}
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