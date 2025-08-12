import { useLocation, useNavigate } from "react-router-dom";
import Background from "../components/Background";

function IntroductionPage() {
    const { state } = useLocation();   
    const user_name = state.name;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/homepage", {
            state: {
                user_name: user_name
            }
        });
    }

  return (
    <div onClick={handleClick}>
        <Background>
            <div className="w-[338px] h-[167px] flex flex-col">
                <p className="font-helvetica font-bold text-white text-[50px]">Hello,</p>
                <div className="flex">
                    <p className="font-helvetica font-bold text-[#BDBDBD] text-[80px] tw-animation">{user_name}</p>
                </div>
            </div>
        </Background>
    </div>
  )
}

export default IntroductionPage