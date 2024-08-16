import React, { useState } from 'react';
import { closeModal } from '../functions/openModal';
import addtodo from '../functions/addtodo';

export default function AddTodo({ from, toggleAddTodo }) {
  const [todoInps, setTodoInps] = useState({ todoinptitle: '', todoinpdescription: '', TodoPrioritySel: 'high' })
  const handleChange = (e) => {
    setTodoInps(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }
  return (

    <div id='addTodoDiv'>
      <h2>Create new todo {from}</h2>
      <form action="">
        <input type="text" placeholder='Title' id='todoinptitle' onChange={handleChange} />
        <textarea placeholder='Description' id='todoinpdescription' onChange={handleChange} />
        {from !== "notes" ?
          <select name="priority" id="TodoPrioritySel" onChange={handleChange}>
            <option value="high">High</option>
            <option value="low">Low</option>
            <option value="mid">Medium</option>
          </select>
          : <></>
        }
      </form>
      <button onClick={() => { closeModal({ from, toggleAddTodo }); addtodo(todoInps, from) }}>Add {from} Todo</button>
    </div>
  );
}
