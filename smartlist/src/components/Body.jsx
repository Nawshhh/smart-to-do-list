import React from 'react'

function Body(props) {
  return (
    <div className='min-w-[1608px] min-h-[768px] bg-slate-500' >
        {props.children}
    </div>
  )
}

export default Body