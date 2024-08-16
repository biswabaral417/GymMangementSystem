import React, { useEffect, useState } from 'react'
import AddNotesBtn from './AddNotesBtn'
import NotesTodo from './NotesTodo'
import getTodo from '../../functions/getTodo';

export default function Notes({toggleAddTodo,setFrom}) {
  const [notesTodo,setNotesTodo]=useState([])
  useEffect(() => {
    const fetchTodos = async () => {
      const todoArr = await getTodo({ type: 'notes' });
      setNotesTodo(todoArr.todos)
    };
    fetchTodos();
  }, []);
  return (
    <div className="d_grid dailyTodoContainer">
      <AddNotesBtn  toggleAddTodo={toggleAddTodo} setFrom={setFrom}/>
      {notesTodo.length > 0 && notesTodo.map(todo => (
        <NotesTodo key={todo._id} _id={todo._id} status={todo.status} title={todo.title} description={todo.description} />
      ))}
    </div>
  )
}
