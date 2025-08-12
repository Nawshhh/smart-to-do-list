import React from 'react'

function StatusColumns(props) {
  return (
    <div className='h-[768px] w-[500px]'>
        <p className='font-helvetica font-bold text-[30px] text-white mb-[10px]'>{props.status}</p>
        <div className='w-[500px] h-[720px] bg-[#545454] rounded-[20px]'>

        </div>
    </div>
  )
}

export default StatusColumns