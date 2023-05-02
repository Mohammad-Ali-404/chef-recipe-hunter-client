/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext } from 'react';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const user = {name:'akkas ali'}
    const authInfo ={
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;