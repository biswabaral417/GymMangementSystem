import React, { useState } from 'react'
import markTodo from '../../functions/isCompleted'

export default function NotesTodo({ _id,description, title, status }) {
  const [isChecked, setIsChecked] = useState(status)
  const handleChange = (e) => {
    setIsChecked(e.target.value)
    markTodo(_id)

  }
  return (
    <div className='notesTodoItemContainer'>
      <div className='d_flx ai_c'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <h1>{title}</h1>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>)
}
