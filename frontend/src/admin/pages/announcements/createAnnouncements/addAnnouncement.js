const addAnnouncement = async (e, { date, title, desc, priority }) => {
    e.preventDefault();

    try {
        const res = await fetch('/api/admin/addannouncements', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date, title, desc, priority })
        });

        if (!res.ok) {
            console.error('Failed to fetch todos');
            return;
        }

        const data = await res.json();
        if (data) {
            window.location.reload()
        }

    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

export default addAnnouncement;
