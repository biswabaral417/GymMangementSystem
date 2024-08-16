const signUp = async (e, { regInps }) => {
    e.preventDefault()
    if(!regInps.signUpCPassword===regInps.signUpPassword) {return}
    const user = {
        Name: regInps.signUpName,
        Address: regInps.signUpAddress,
        Phone: regInps.signUpPhone,
        Email: regInps.signUpEmail,
        Password: regInps.signUpCPassword
    }
    try {
        const res = await fetch('/api/user/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await res.json();
        if (res.status === 201) {
            console.log('registeration successful:', data);
            window.location.href = '/user/login'; 

        } else {
            console.error('registeration  failed:', data.message);
        }
    } catch (error) {
        console.error('Error during registeration:', error);
    }
}
export default signUp