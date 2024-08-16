
const login = async (e, { lInps,setUser }) => {
    e.preventDefault();
    console.log(lInps);
    const user = {
        Phone: lInps.loginEmail,
        Password: lInps.loginPassword
    }
    console.log(user)
    try {
        const res = await fetch('/api/user/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await res.json();
        if (res.status === 200) {
            setUser(data.user)
            window.location.href = '/admin/home'; 
        } else {
            console.error('Login failed:', data.message);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};

export default login;
