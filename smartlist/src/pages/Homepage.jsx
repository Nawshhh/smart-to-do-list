import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Background from '../components/Background';
import Body from '../components/Body';
import NavigationBar from '../components/NavigationBar';
import StatusColumns from '../components/StatusColumns';
import axios from 'axios';

function Homepage() {
    return (
        <Background>
            <Header statement={"These are your list of things to do"} expression={'.'}/>
            <NavigationBar show={true}/>
            <Body>
                <StatusColumns status="To-Do" />
                <StatusColumns status="Doing"/>
                <StatusColumns status="Done"/>
            </Body>
        </Background>
    )
}

export default Homepage