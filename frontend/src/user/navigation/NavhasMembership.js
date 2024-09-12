import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { MainContext } from '../contexts/mainContext'

export default function NavhasMembership() {
    const { user } = useContext(MainContext)
    if (Object.keys(user || {}).length > 0) {
        return (

            <li>
                <NavLink to={'/user/dietrecomendations'}>
                    <button className='navBtn'>
                        diet plan
                    </button>
                </NavLink>
            </li>

        )
    } else {
        return (
            <></>
        )
    }
}

