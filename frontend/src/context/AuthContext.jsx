import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const [ user, setUser ] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const logOut = () =>{
        setUser(null);
        setIsLoggedIn(false);
        setMessage("Logout successful");
    }
    
    return (
        <AuthContext.Provider value={{user, isLoggedIn, logOut, setIsLoggedIn, setMessage, message, error, setError}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);