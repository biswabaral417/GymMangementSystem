const addtodo = async (todoInps, from) => {
    try {
        const res = await fetch('/api/user/addtodo', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: todoInps.todoinptitle,
                description: todoInps.todoinpdescription,
                priority: todoInps.TodoPrioritySel,
                type: from
            })
        });

        if (!res.ok) {
            console.error('Failed to add todo');
            return;
        }
        const data = await res.json();
        console.log('Todo added:', data);
        window.location.reload()
    } catch (error) {
        console.error('Error adding todo:', error);
    }
};

export default addtodo;
