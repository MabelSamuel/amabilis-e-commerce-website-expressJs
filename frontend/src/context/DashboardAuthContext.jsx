import { createContext, useContext, useState } from "react";

const DashboardAuthContext = createContext();

export const DashboardAuthProvider = ({ children }) => {
    const [admin, setAdmin ] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [isButtonLoading, setIsButtonLoading] = useState(false);

  return (
    <DashboardAuthContext.Provider value={{ admin, isLoggedIn }}>
        {children}
    </DashboardAuthContext.Provider>
  )
}

export const useDashboardAuth = ()=> useContext();
