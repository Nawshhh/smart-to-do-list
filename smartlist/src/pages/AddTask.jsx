import React from 'react'

import Background from '../components/Background'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'
import Body from '../components/Body'
import TaskInformationForm from '../components/TaskInformationForm'
import AISuggestionsForm from '../components/AISuggestionsForm'

import { useState } from 'react'

function AddTask() {
    const [aiSuggestions, setAiSuggestions] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generateAgain, setGenerateAgain] = useState(false);

    return (
        <Background>
            <Header 
                statement={"What would you like to add"} 
                expression={'?'}
            />
            <NavigationBar show={false}/>
            <Body>
                <TaskInformationForm 
                    setAiSuggestions={setAiSuggestions}
                    setIsGenerating={setIsGenerating}
                    setGenerateAgain={setGenerateAgain}
                    isGenerating={isGenerating}
                />
                <AISuggestionsForm 
                    aiSuggestions={aiSuggestions}
                    isGenerating={isGenerating}
                    generateAgain={generateAgain}
                    setGenerateAgain={setGenerateAgain}
                />
            </Body> 
        </Background>
    )
}

export default AddTask