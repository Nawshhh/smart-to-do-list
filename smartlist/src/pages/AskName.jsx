import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AskName() {
  const [input, setInput] = useState("");
  const [name, setName] = useState(null);

  const navigate = useNavigate();

  const saveAndGo = () => {
    const user_input = input.trim();
    // route to the next page
    navigate("/introduction", { 
        state: { 
            name: user_input 
        }
    })
  };
  
  return (
      <div className="bg-[#282828] h-screen w-screen flex flex-col items-center justify-center gap-3">
        <p className="font-helvetica font-bold text-white  text-[25px]">What should we call you?</p>
        <input 
          type="text" 
          name="user_input" 
          id="user_input" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && saveAndGo()}
          className="w-[355px] h-[48px] bg-[#545454] rounded-[30px] px-[20px] py-[12px] 
          focus:outline-none focus:ring-0 focus:caret-[#BDBDBD]
          font-helvetica text-white" 
          placeholder="Name"
        />
      </div>
  );
}

export default AskName
