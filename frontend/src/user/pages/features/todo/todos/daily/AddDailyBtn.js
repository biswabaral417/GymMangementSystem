import React from 'react'
import openModal from '../../functions/openModal'


export default function AddDailyBtn({toggleAddTodo,setFrom,setDailyTodo}) {
    
    return (
        <div className='dailyTodoItemContainer dailyAddBtn'>
            <button onClick={() => {openModal({from:'daily',toggleAddTodo,setFrom,setDailyTodo})}}>
                <span>
                    +
                </span>
            </button>
        </div>
    )
}
