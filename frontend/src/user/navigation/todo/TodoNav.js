import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import autoHideTodoNav from '../functions/autohideTodoNav'


export default function TodoNav() {
  const todoNavRef = useRef(null)
  useEffect(() => {
    if (document.getElementById('todoNav')) {
      autoHideTodoNav(todoNavRef.current)
    }
  }, [])


  return (
    <nav id='todoNav' ref={todoNavRef} className='hidden '>
      <ul className='liStyleNone'>
        <li>
          <NavLink to='/user/todo/daily'>
            <button className="navBtn secNavBtn">daily</button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/user/todo/today'>
            <button className="navBtn secNavBtn">today</button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/user/todo/notes'>
            <button className="navBtn secNavBtn">notes</button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/user/todo/other'>
            <button className="navBtn secNavBtn">other</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
