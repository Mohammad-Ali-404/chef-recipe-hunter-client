/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext } from 'react';

export const AuthContext = createContext(null);
export const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) =>{
        setLoading(true)
        return updateProfile(name, photo)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        console.log('auth provider login', loggedUser)
            setUser(loggedUser)
            setLoading(false)
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
        logOut,
        loading,
        provider
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;