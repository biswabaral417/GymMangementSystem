const getTodo = async ({type}) => {
    try {
        const url = `/api/user/gettodo?type=${encodeURIComponent(type)}`;

        const res = await fetch(url, {
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
        return data
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

export default getTodo;

