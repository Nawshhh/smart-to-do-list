import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Body from '../components/Body';
import StatusColumns from '../components/StatusColumns';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router';
import toast from 'react-hot-toast';

function DeleteTask() {
    const [loading, setLoading] = useState(false);
    const [clickedIds, setClickedIds] = useState([]);
    const[render, setRender] = useState(false);

    console.log("@ Delete Task");

    const handleDelete = async (e) => {
        try {
           const { data } = await axios.delete("http://localhost:5000/smartlist/delete-task", {
                data: { ids: clickedIds },
                headers: { "Content-Type": "application/json" }
            });
            setClickedIds([]);
            setRender(!render);
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

    const COLUMNS = [
        { name: "To-Do", id: 1 },
        { name: "Doing", id: 2 },
        { name: "Done", id: 3 }
    ]

  return (
    <Background>
        <Header
            statement={"What will you remove"} 
            expression={'?'}
        />
        <NavigationBar show={false}/>
        <Body>
            {COLUMNS.map(column => {
                return <StatusColumns key={column.id} status={column.name} deleteMode={true} clickedIds={clickedIds} setClickedIds={setClickedIds} renderAgain={render}/>
            })}
        </Body>
        <div className='flex flex-row w-auto h-auto mt-[53px]'>
            <Link to="/smartlist/homepage">
                <button type="button"
                    className=' bg-[#888888] font-helvetica text-[20px] text-white rounded-[5px] w-[118px] h-[40px] hover:bg-[#6d6d6d]'>Home</button>
            </Link>
            <button type="button" onClick={handleDelete}
                    className='ml-[18px] bg-[#c83737] font-helvetica text-[20px] text-white rounded-[5px] w-[118px] h-[40px] hover:bg-[#a82d2d]'>Delete</button>
        </div>
    </Background>
  )
}

export default DeleteTask