import { createContext, useEffect, useState } from "react";

export const AnnouncementsContext = createContext()


const AnnouncementsContextProvider = ({ children }) => {
    const [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        const getAnnouncements = async () => {
            try {
                const res = await fetch('/api/admin/getannouncements', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!res.ok) {
                    console.error('Failed to fetch todos');
                    return;
                }
                const data = await res.json();
                setAnnouncements(data.announcements)
                console.log(data)
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        getAnnouncements()

    }, [])

    return (
        <AnnouncementsContext.Provider value={{
            announcements,
        }}>
            {children}
        </AnnouncementsContext.Provider>
    )


}
export default AnnouncementsContextProvider