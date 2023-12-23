import React, { useContext } from 'react'
import { AuthContext } from '../COntects/AuthProvider'

const Dashboard = () => {
   const {user} = useContext(AuthContext)
  return (
    <div className='flex gap-2 font-bold h-18'>
       <h1>Welcome to Dasboard</h1> {user?.displayName}
    </div>
  )
}

export default Dashboard
