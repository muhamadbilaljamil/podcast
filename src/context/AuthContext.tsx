import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState<string | null>(null);

    const login = async () => {
        setIsLoading(true);
        setToken('hsoshdofhr;df;lsldfhdohornosnlfn');
        await AsyncStorage?.setItem('token', 'hsoshdofhr;df;lsldfhdohornosnlfn');
        setIsLoading(false);
    };

    const logout = async () => {
        setIsLoading(true);
        setToken(null);
        await AsyncStorage?.removeItem('token');
        setIsLoading(false);
    };

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let sttoken = await AsyncStorage?.getItem('token');
            console.log('Token :', sttoken);
            token ? setToken(sttoken) : setToken(null);

            setIsLoading(false);
        } catch (error) {
            console.log(`isLogged in error ${error}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, token }}>
            {children}
        </AuthContext.Provider>
    );
};
