import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import Todo from './todo/Todo'
import { MainContext } from '../contexts/mainContext'

export default function NavAuthStatus() {
    const {user}=useContext(MainContext)
    if (Object.keys(user || {}).length > 0) {
        return (
            <>
                <li id='todoLi'>
                    <Todo />
                </li>
                <li>
                    <NavLink to={'/user/Announcements'}>
                        <button className='navBtn'>
                            Announcement
                        </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/user/report'}>
                        <button className='navBtn'>
                            Report
                        </button>
                    </NavLink>
                </li>
            </>
        )
    } else {
        return (
            <>
                <li>
                    <NavLink to={'/user/membership'}>
                        <button className='navBtn'>
                            Membership
                        </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/user/aboutus'}>
                        <button className='navBtn'>
                            About us
                        </button>
                    </NavLink>
                </li>
            </>
        )
    }
}
