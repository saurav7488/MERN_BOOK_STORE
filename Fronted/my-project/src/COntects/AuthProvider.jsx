import React, {  createContext, useEffect, useState } from 'react'
import app from '../Firebase/firebase.config'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext()
const auth = getAuth(app)
const Googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email, password) =>{
         setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle=()=>{
         setLoading(true) 
         return signInWithPopup(auth, Googleprovider) 
    } 


     const login=(email,password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password)
     }
    
      const logout=()=>{
          return signOut(auth)
      }

      useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
                // console.log(currentUser)
                setUser(currentUser)
                setLoading(false)
          });
          return () =>{
              return unSubscribe()

          }
      },[])


    const authInfo = {
         user,
         createUser ,
         loginWithGoogle,
         loading,
         login,
         logout
    }

  return (
    <AuthContext.Provider value={authInfo} >
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
