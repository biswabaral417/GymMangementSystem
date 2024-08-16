import { createContext, useState,useEffect,useRef } from "react";
export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const fetchCalledRef = useRef(false);

    useEffect(() => {
        const fetchUserData = async () => {
            if (fetchCalledRef.current) return;
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
                console.log(error)
            }
        };

        fetchUserData();
    }, []);

    return (
        <MainContext.Provider
            value={{
                setUser, user
            }}>
            {children}
        </MainContext.Provider>
    )
}
export default MainContextProvider