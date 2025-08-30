import React, { useState, useEffect, act } from 'react'
import Header from '../components/Header'
import Background from '../components/Background';
import Body from '../components/Body';
import NavigationBar from '../components/NavigationBar';
import StatusColumns from '../components/StatusColumns';
import axios from 'axios';
import  { DndContext }  from '@dnd-kit/core';

function Homepage() {
    const COLUMNS = [
        { name: "To-Do", id: 1 },
        { name: "Doing", id: 2 },
        { name: "Done", id: 3 }
    ]

    return (
        <Background>
            <Header statement={"These are your list of things to do"} expression={'.'}/>
            <NavigationBar show={true}/>
            <Body>
                {COLUMNS.map(column => {
                    return (
                        <StatusColumns key={column.id} status={column.name} id={column.id}/>
                    )
                })}
            </Body>
        </Background>
    )
}

export default Homepage