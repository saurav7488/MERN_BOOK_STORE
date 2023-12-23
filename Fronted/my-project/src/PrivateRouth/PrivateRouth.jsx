import React, { useContext } from 'react'
import { Spinner } from 'flowbite-react';
import { AuthContext } from '../COntects/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
const PrivateRouth = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation() 
    if(loading) {
          return <div className='text-center' >
                <Spinner aria-label="Center-aligned spinner example" />
          </div>
    }
    if(user) {
         return children
    }
  return (
    <div>
        <Navigate to="/login" state={{from:location}} replace></Navigate>
    </div>
  )
}

export default PrivateRouth
