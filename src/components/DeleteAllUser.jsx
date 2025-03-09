import React from 'react'
import { clearAllUsers } from '../Store/Slices/UserSlice'
import { useDispatch } from 'react-redux'

const DeleteAllUser = () => {

  const dispatch = useDispatch();
  
  const deleteAllUsers = () => {
    dispatch(clearAllUsers())
  }
  return (
    <div className='mt-8 flex flex-row-reverse'>
      <button onClick={()=>deleteAllUsers()} className='btn'>Clear All Users</button>
    </div>
  )
}

export default DeleteAllUser