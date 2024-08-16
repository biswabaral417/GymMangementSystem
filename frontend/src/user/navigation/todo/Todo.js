import React, {  } from 'react'
import { NavLink } from 'react-router-dom'
import TodoNav from './TodoNav'
import cvd from "../images/chevron-down.svg";
import viewHideTodolinks from '../functions/viewHideTodoLinks'

export default function Todo() {
    return (
        <>
            <NavLink to={'/user/todo/'} onClick={(e) => e.preventDefault()}>
                <div className='navBtn ai_c d_flx ' onClick={ viewHideTodolinks} >
                    <p>Todo</p>
                    <button className='alUnset'><img id='todoNavCvd' src={`${cvd}`} alt='' /></button>
                </div>
            </NavLink>
            <TodoNav />
        </>
    )
}
