import React from 'react'
import { useState, useEffect } from 'react'

function Header(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    try {
        const name = JSON.parse(localStorage.getItem('name'));

        if (name){
            setName(name);
            console.log("This is the name from storage: ", name);   
        }
    } catch (error) {
        console.log("Error fetching name from local storage at Header: ", error);
    }
},[]);

  return (
    <div className='min-h-[79px] min-w-[1608px]'>
        <h1 className='font-helvetica text-[50px] font-bold text-white'>
            {props.statement}
            <span className='text-[#BDBDBD]'>, {name}</span>{props.expression}
        </h1>
    </div>
  )
}

export default Header