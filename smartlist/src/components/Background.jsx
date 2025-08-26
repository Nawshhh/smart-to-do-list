import React from 'react'

function Background(props) {
  return (
    <div className="bg-[#282828] min-w-dvh min-h-dvh flex flex-col items-center justify-center py-[50px]">
        {props.children}
    </div>
  )
}

export default Background