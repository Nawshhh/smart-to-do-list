import { useLocation, useNavigate } from "react-router-dom";
import Background from "../components/Background";
import { useEffect, useState } from "react";

function IntroductionPage() {
    const { state } = useLocation();   
    const navigate = useNavigate();
    const [name, setName] = useState("");

    useEffect(() => {
        try {
            const name = JSON.parse(localStorage.getItem('name'));

            if (name){
                setName(name);
                console.log("This is the name from storage: ", name);   
            }
        } catch (error) {
            console.log("Error fetching name from local storage at Introduction Page: ", error);
        }
    },[]);

    const handleClick = () => {
        navigate("/smartlist/homepage");
    }

  return (
    <div onClick={handleClick}>
        <Background>
            <div className="w-[338px] h-[167px] flex flex-col">
                <p className="font-helvetica font-bold text-white text-[50px]">Hello,</p>
                <div className="flex">
                    <p className="font-helvetica font-bold text-[#BDBDBD] text-[80px] tw-animation">{name}</p>
                </div>
            </div>
        </Background>
    </div>
  )
}

export default IntroductionPage