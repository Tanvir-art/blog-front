import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUSer = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false)
    });
    return ()=>{
      return unsubscribe();
    }
  },[])

  const authInfo = {user, loading, createUSer, signIn}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
