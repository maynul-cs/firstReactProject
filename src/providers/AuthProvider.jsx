import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react'
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const createUserWithPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const authInformation = {
        createUserWithPass
    }


  return (
    <AuthContext.Provider value={authInformation}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider