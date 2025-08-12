import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

function Homepage() {
    const { state } = useLocation();
    const user_name = state.user_name;

    return (
        <div className="bg-[#282828] h-screen w-screen flex flex-col items-center justify-center">
            
        </div>
    )
}

export default Homepage