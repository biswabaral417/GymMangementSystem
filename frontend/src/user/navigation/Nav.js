import React, { useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import UserAccount from './UserAccount'
import hideDD from './functions/hideDD'
import NavAuthStatus from './NavAuthStatus'
import autoHideNav from './functions/autoHideNav'

export default function Nav() {
    useEffect(() => {
        autoHideNav()
      return () => {
      }
    }, [])
    
    return (
        <nav>
            <ul className='liStyleNone navUl hidden' id='navUl'>
                <li>
                    <button className='hideDDBtn' onClick={hideDD}>
                        <p>
                            x
                        </p>
                    </button>
                </li>
                <li>
                    <NavLink to={'/user/'} end >
                        <button className='navBtn'>
                            Home
                        </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/user/services'}>
                        <button className='navBtn'>
                            Services
                        </button>
                    </NavLink>
                </li>
                <NavAuthStatus />
                <li>
                    <UserAccount />
                </li>
            </ul>
        </nav>
    )
}
