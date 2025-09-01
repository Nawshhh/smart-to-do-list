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
    <div className='h-[79px] w-full'>
        <h1 className='font-helvetica text-3xl line-clamp-2 sm:text-2xl md:text-4xl font-bold text-white sm:line-clamp-2 md:line-clamp-2'>
            {props.statement}
            <span className='text-[#BDBDBD]'>, {name}</span>{props.expression}
        </h1>
    </div>
  )
}

export default Header