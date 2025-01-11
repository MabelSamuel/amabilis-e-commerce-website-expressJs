import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const [ user, setUser ] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const logOut = async() =>{
        try {
            const response = await axios.post("http://localhost:7000/api/users/logout")
            setUser(null);
            setIsLoggedIn(false);
            setMessage("Logout successful");
        } catch (error) {
            setError(error.response.data.message);
            console.log(error);  
        }
    }
    
    return (
        <AuthContext.Provider value={{user, isLoggedIn, logOut, setIsLoggedIn, setMessage, message, error, setError, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);