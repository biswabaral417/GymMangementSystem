const logout = async (setUser) => {
    try {
        const res = await fetch('/api/user/logout', {
            method: 'GET',
            credentials: 'include'
        });

        if (res.ok) {
            setUser(null);
            console.log('Logged out successfully');
            window.location.href = '/'; 
        } else {
            const errorData = await res.json();
            console.error('Logout error:', errorData.message || 'Something went wrong');
        }
    } catch (error) {
        console.error('Fetch error during logout:', error);
    }
};

export default logout;
