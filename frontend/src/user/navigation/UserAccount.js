import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MainContext } from '../contexts/mainContext'
import logout from './functions/logout'
export default function UserAccount() {
    const { user,setUser } = useContext(MainContext)
    if (Object.keys(user || {}).length > 0) {

        return (
            <button className='navBtn' onClick={()=>logout(setUser)}>Logout</button>
        )
    } else {
        return (
            <NavLink to={'/user/login'}>
                <button className='navBtn' >
                    Login/Signup
                </button>
            </NavLink>
        )
    }
}


