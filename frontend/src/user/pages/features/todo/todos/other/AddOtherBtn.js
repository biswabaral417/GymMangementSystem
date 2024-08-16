import React from 'react'
import openModal from '../../functions/openModal'
export default function AddOtherBtn({toggleAddTodo,setFrom}) {
    return (
        <div className='dailyTodoItemContainer dailyAddBtn'>
            <button onClick={() => {openModal({from:'other',toggleAddTodo,setFrom})}}>
                <span>
                 +
                </span>
            </button>
        </div>
    )
}
