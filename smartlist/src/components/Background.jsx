import React from 'react'

function Background(props) {
  return (
    <div className="bg-[#282828] w-auto h-auto flex flex-col items-center justify-center py-[100px]">
        {props.children}
    </div>
  )
}

export default Background