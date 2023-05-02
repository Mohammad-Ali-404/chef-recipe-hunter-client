/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext } from 'react';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) =>{
        return updateProfile(name, photo)
    }
    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        console.log('auth provider login', loggedUser)
            setUser(loggedUser)
        })
        return () =>{ 
            unsubscribe()
        }
    },[])
    const authInfo ={
        user,
        createUser,
        signIn,
        updateProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;