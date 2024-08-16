import { createContext, useEffect, useState, useRef } from "react";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const fetchCalledRef = useRef(false);

    useEffect(() => {
        const fetchUserData = async () => {
            if (fetchCalledRef.current) return; // Prevent multiple calls
            fetchCalledRef.current = true;
            try {
                const res = await fetch('/api/user/getuserdata', {
                    method: "GET",
                    credentials: "include"
                });
                if (res.status !== 200) {
                    throw new Error(`Error: ${res.status} ${res.statusText}`);
                }
                const data = await res.json();
                setUser(data);
            } catch (error) {
                // console.error('Fetch error:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <MainContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export default MainContextProvider;
