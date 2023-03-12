import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const login = async (data) => {
        const res = await axios.post('/auth/login', data);
        setUser(res.data)
    }
    const logout = async (data) => {
        await axios.post('/auth/logout');
        setUser(null)
    }

    const contextValue = {
        user,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}