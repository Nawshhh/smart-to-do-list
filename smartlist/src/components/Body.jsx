import React from 'react'

function Body(props) {
  return (
    <div className='min-w-[1608px] min-h-[768px]' >
        {props.children}
    </div>
  )
}

export default Body