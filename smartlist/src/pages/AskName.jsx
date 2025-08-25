import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";

function AskName() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem('name', JSON.stringify(name));
      console.log(localStorage);
    } catch (error) {
      console.error("Error saving name to local storage: ", error);
    }
  }, [name]);

  const saveAndGo = () => {
    // route to the next page
    navigate("/introduction");
  };

  return (
    <Background>
      <div className="max-w-dvh max-h-dvh flex flex-col items-center justify-center">
        <p className="font-helvetica font-bold text-white  text-[25px]">What should we call you?</p>
          <input 
            type="text" 
            name="user_input" 
            id="user_input" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key == "Enter" && saveAndGo()}
            className="w-[355px] h-[48px] bg-[#545454] rounded-[30px] px-[20px] py-[12px] 
            focus:outline-none focus:ring-0 focus:caret-[#BDBDBD]
            font-helvetica text-white mt-[12px]" 
            placeholder="Name"
          />
      </div>
    </Background>
  );
}

export default AskName
