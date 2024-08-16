import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Login from './login/Login'
import './auth.css'
import Register from './register/Register'

export default function AuthBox() {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname.slice(6));

    useEffect(() => {
      setPath(location.pathname.slice(12));
    }, [location.pathname]);

    return (
        <div className='authContainer'>
            <div className='authBox'>
                {path === 'register' ? (
                    <Register setPath={setPath} />
                ) : (
                    <Login setPath={setPath} />
                )}
            </div>
        </div>
    )
}
