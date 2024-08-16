import React from 'react'
import openModal from '../../functions/openModal'

export default function AddNotesBtn({toggleAddTodo,setFrom}) {
    return (
        <div className='dailyTodoItemContainer dailyAddBtn'>
          <button onClick={() => {openModal({from:'notes',toggleAddTodo,setFrom})}}>
                <span>
                    +
                </span>
            </button>
        </div>
    )
}
