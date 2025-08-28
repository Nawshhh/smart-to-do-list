import React, { useState, useEffect } from 'react'

function ViewTask({task,setView}) {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger fade in when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const hideTask = () => {
    setIsVisible(false);
    // Delay unmounting to allow fade out animation
    setTimeout(() => {
      setView(false);
    }, 300); // Match this with your transition duration
  }

  const handleBackdropClick = (e) => {
    // Only close if clicking the backdrop, not the modal content
    if (e.target === e.currentTarget) {
      hideTask();
    }
  }

  return (
    <div 
      onClick={handleBackdropClick} 
      className={`fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
        <div 
          className={`bg-[#000000] rounded-[10px] w-[700px] h-[784px] flex flex-col transition-all duration-300 ease-in-out transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <span className='text-white'>{task.name}</span>
        </div>
    </div>
  )
}

export default ViewTask