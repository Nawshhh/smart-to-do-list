import React from 'react'

function Body(props) {
  return (
    <div className='min-w-[1608px] min-h-[768px] flex flex-row gap-x-[54px]' >
        {props.children}
    </div>
  )
}

export default Body