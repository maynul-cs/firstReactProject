import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [operationLoading, setOperationLoading] = useState(false);
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

    // Update user Profile
    const updateUserProfile = (name, imgURL) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: imgURL
      })
    }

    // Forget Password
    const resetPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
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

      setLoading(false);
    })
    return () => unsubscribe();
    }, []);

// Sign Out
    const handleSignOut = () => {
      return signOut(auth)
    }
    
    const authInformation = {
        user,
        handleSignOut,
        createUserWithPass,
        signInWithEmailPass,
        signInWithGoogle,
        updateUserProfile,
        resetPassword,
        operationLoading
    }


  return (
    <AuthContext.Provider value={authInformation}>
        {
          loading ? (
            <div className='flex justify-center itmes-center p-10'>
              <span> Loading... </span>
            </div>
          ) : (
            children
          )
        }
    </AuthContext.Provider>
  )
}

export default AuthProvider