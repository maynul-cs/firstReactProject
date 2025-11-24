import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
  // Create User
    const createUserWithPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in with Email and Password
    const signInWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in with Google
    const signInWithGoogle = (provider) => {
      return signInWithPopup(auth, provider)
};

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
        signInWithEmailPass,
        signInWithGoogle
    }


  return (
    <AuthContext.Provider value={authInformation}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider