import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const [ user, setUser ] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState(null)



    return (
        <AuthContext.Provider value={{user, isLoggedIn, setIsLoggedIn, setMessage, message}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);