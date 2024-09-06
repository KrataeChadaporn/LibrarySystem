import React, { useContext, useState, createContext } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser(username);
        console.log("User logged in:", username); // Debugging log
    };

    const logout = () => {
        setUser(null);
        console.log("User logged out"); // Debugging log
    };

    console.log("AuthProvider rendering, user:", user); // Debugging log

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};