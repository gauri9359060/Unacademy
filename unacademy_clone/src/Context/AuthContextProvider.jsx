import React, {createContext, useState} from 'react'

export const AuthContext=createContext();
export const AuthContextProvider = ({children}) => {
    const [auth,setAuth]=useState(false);
    const value={
        auth,
        setAuth
    }
 return( <AuthContext.Provider value={value}>
      {children}
  </AuthContext.Provider>
 )
}


