import React from 'react'

function Background(props) {
  return (
    <div className="bg-[#282828] min-h-[1080px] min-w-[1080px] flex flex-col items-center justify-center">
        {props.children}
    </div>
  )
}

export default Background