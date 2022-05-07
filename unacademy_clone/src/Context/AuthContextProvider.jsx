import React, { createContext, useState } from 'react'

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [subscribed, setSubscribed] = useState({status:false,course:""});
    const createOTP = Math.floor(1000 + Math.random() * 9000)
    const getOTP=()=>{
        alert(`Your OTP is:- ${createOTP}`)
    }
    const value = {
        auth,
        setAuth,
        getOTP,
        createOTP,
        subscribed, setSubscribed
    }
    return (<AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
}

