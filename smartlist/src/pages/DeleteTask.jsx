import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Body from '../components/Body';
import StatusColumns from '../components/StatusColumns';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import toast from 'react-hot-toast';

function DeleteTask() {
    const [loading, setLoading] = useState(false);
    const [clickedIds, setClickedIds] = useState([]);

    console.log("@ Delete Task");

    const handleDelete = async (e) => {
        try {
           const { data } = await axios.delete("http://localhost:5000/smartlist/delete-task", {
                data: { ids: clickedIds },
                headers: { "Content-Type": "application/json" }
            });
            // Optionally refresh the list
            setTasks(prev => prev.filter(t => !clickedIds.includes(t._id)));
            setClickedIds([]);
            toast.success(`${data.deletedCount} task/s deleted!`, {
                    style: {
                        background: "#393939",
                        color: "#FFFFFF"
                    }
                }
            );
        } catch (error) {
            console.error("Error deleting tasks:", error);
            toast.error("Nothing to be Deleted!", {
                style: {
                    background: "#393939",
                    color: "#FFFFFF"
                }
            }
        );
        } 
    }

  return (
    <Background>
        <Header
            statement={"What will you remove"} 
            expression={'?'}
        />
        <NavigationBar show={false}/>
        <Body>
            <StatusColumns status="To-Do" deleteMode={true} clickedIds={clickedIds} setClickedIds={setClickedIds}/>
            <StatusColumns status="Doing" deleteMode={true} clickedIds={clickedIds} setClickedIds={setClickedIds}/>
            <StatusColumns status="Done" deleteMode={true} clickedIds={clickedIds} setClickedIds={setClickedIds}/>
        </Body>
        <div className='flex flex-row w-auto h-auto mt-[53px]'>
            <Link to="/smartlist/homepage">
                <button type="button"
                    className=' bg-white font-helvetica text-[20px] text-black rounded-[5px] w-[118px] h-[40px] hover:bg-[#DFDFDF]'>Home</button>
            </Link>
            <button type="button" onClick={handleDelete}
                    className='ml-[18px] bg-[#DE3D3D] font-helvetica text-[20px] text-white rounded-[5px] w-[118px] h-[40px] hover:bg-[#C83737]'>Delete</button>
        </div>
        

    </Background>
  )
}

export default DeleteTask