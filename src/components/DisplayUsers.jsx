import React from 'react'
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../Store/Slices/UserSlice';

function DisplayUsers() {
    const data = useSelector((state)=>{
        return state.users;
    })
    // console.log(data);

    const dispatch = useDispatch();

    const deleteUser = (id) => {
      dispatch(removeUser(id))
    }
    
  return <div className='text-start'>
    {
      data.map((user, id) => {
        return <li key={id} className='border-b text-4xl py-3 flex justify-between items-center'>
          {user}
          <button onClick={()=>deleteUser(id)} className='border-2 border-red-600 rounded-lg'><IoClose className='h-10 w-10 text-red-600 bg-transparent' /></button>
        </li>
      })
    }
  </div>
}

export default DisplayUsers

export const {user} = DisplayUsers