import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Header from '../components/Header'
import Background from '../components/Background';
import Body from '../components/Body';
import NavigationBar from '../components/NavigationBar';
import StatusColumns from '../components/StatusColumns';

function Homepage() {
    const { state } = useLocation();
    const user_name = state.user_name;
    if (!user_name) return null;

    return (
        <Background>
            <Header name={user_name} />
            <NavigationBar/>
            <Body>
                <StatusColumns status="To-Do"/>
                <StatusColumns status="Doing"/>
                <StatusColumns status="Done"/>
            </Body>
        </Background>
    )
}

export default Homepage