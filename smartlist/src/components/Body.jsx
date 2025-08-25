import React from 'react'

function Body(props) {
  return (
    <div className='w-full h-full flex flex-row items-center justify-center gap-x-[50px]' >
        {props.children}
    </div>
  )
}

export default Body