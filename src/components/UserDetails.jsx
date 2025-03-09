import React from 'react'
import DeleteAllUser from './DeleteAllUser'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import { addUser } from '../Store/Slices/UserSlice'
import DisplayUsers from './DisplayUsers'

const UserDetails = () => {

  const dispatch = useDispatch();

  const addNewUser = (name) => {
    // console.log(name);
    dispatch(addUser(name));
  }

  return (
    <div className='mx-[3.2rem] my-[1rem]'>
        <div className='content'>
            <div className='flex justify-between flex-wrap my-[4rem] mx-0'>
                <div className='mb-0 lg:mb-[1.6rem] text-[3.2rem]'>List of Users details</div>
                <button className='btn' onClick={() => addNewUser(fakeUserData())}>Add New User</button>
            </div>
            <ul className='[list-style-type: none !important] flex flex-col'>
                <DisplayUsers />
            </ul>
            <hr />
            <DeleteAllUser />
        </div>
    </div>
  )
}

export default UserDetails;