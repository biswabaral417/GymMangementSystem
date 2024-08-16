import React from 'react'
import openModal from '../../functions/openModal'

export default function AddTodayBtn({toggleAddTodo,setFrom}) {
    return (
        <div className='dailyTodoItemContainer dailyAddBtn'>
            <button onClick={() => {openModal({from:'today',toggleAddTodo,setFrom})}}>
                <span>
                    +
                </span>
            </button>
        </div>
    )
}
