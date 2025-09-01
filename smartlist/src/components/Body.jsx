import React from 'react'

function Body(props) {
  return (
    <div className='w-full h-full flex flex-row flex-wrap items-center justify-center gap-x-[50px] gap-y-[20px]' >
        {props.children}
    </div>
  )
}

export default Body