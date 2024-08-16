import React, { useState } from 'react';
import markTodo from '../../functions/isCompleted';

export default function DailyTodo({ _id,title, priority, description, status }) {
  const [isChecked, setIsChecked] = useState(status);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    markTodo(_id)
  };

  return (
    <div className='dailyTodoItemContainer'>
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
        <p>{priority}</p>
      </div>
    </div>
  );
}
