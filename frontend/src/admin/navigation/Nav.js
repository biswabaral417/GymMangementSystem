import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav id='adminNav'>
            <ul>
                <li>
                    <NavLink to='/admin' end='/admin'>
                        <button >
                            Dash Board
                        </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/reports' >
                        <button>
                            Reports
                        </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/Announcements'>
                        <button>
                            Announcements
                        </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/managemembers'>
                        <button>
                            Manage Members
                        </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/managepayments'>
                        <button>
                            Manage Offline Payment
                        </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/managestaffs'>
                        <button>
                            Manage Staff 
                        </button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/attendencesheet'>
                        <button>
                            Member Attendance Sheet
                        </button>
                    </NavLink>
                </li>
                <li>
                    <span>
                        <button>
                            logout
                        </button>
                    </span>
                </li>
            </ul>
        </nav>
    )
}
