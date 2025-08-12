import React from 'react'

function Background(props) {
  return (
    <div className="bg-[#282828] min-h-screen min-w-screen max-w-[1920px] max-h-[1080px] flex flex-col items-center justify-center">
        {props.children}
    </div>
  )
}

export default Background