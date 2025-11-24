import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
    const createUserWithPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        console.log("Logged In User");
        setUser(user);
      }
      else{
        console.log("User is Sign Out");
        setUser(null);
      } 
    })
    return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
      signOut(auth)
    }
    
    const authInformation = {
        user,
        handleSignOut,
        createUserWithPass,
        signInWithEmailPass
    }


  return (
    <AuthContext.Provider value={authInformation}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider