import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Header from '../components/Header'
import Background from '../components/Background';
import Body from '../components/Body';
import NavigationBar from '../components/NavigationBar';

function Homepage() {
    const { state } = useLocation();
    const user_name = state.user_name;

    return (
        <Background>
            <Header name={user_name} />
            <NavigationBar/>
            <Body></Body>
        </Background>
    )
}

export default Homepage