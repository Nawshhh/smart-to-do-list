import React from 'react'

function Header(props) {
  return (
    <div className='min-h-[79px] min-w-[1608px]'>
        <h1 className='font-helvetica text-[50px] font-bold text-white'>
            {props.statement}
            <span className='text-[#BDBDBD]'>, {props.name}</span>{props.expression}
        </h1>
    </div>
  )
}

export default Header