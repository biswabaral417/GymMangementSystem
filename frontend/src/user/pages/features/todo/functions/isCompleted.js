const  markTodo= async (id) => {
    try {
        const url = `/api/user/marktodo?todo_id=${encodeURIComponent(id)}`;

        const res = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!res.ok) {
            console.error('Failed to mark as done');
            return;
        }

        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

export default markTodo;
