import React, { useEffect, useState } from 'react'
import AddOtherBtn from './AddOtherBtn'
import OtherTodo from './OtherTodo'
import getTodo from '../../functions/getTodo';

export default function Other({toggleAddTodo,setFrom}) {
  const [otherTodo,setOtherTodo]=useState([])
  useEffect(() => {
    const fetchTodos = async () => {
      const todoArr = await getTodo({ type: 'notes' });
      setOtherTodo(todoArr.todos)
    };
    fetchTodos();
  }, []);
  return (
    <div className="d_grid dailyTodoContainer">
      <AddOtherBtn  toggleAddTodo={toggleAddTodo} setFrom={setFrom}/>
      {otherTodo.length > 0 && otherTodo.map(todo => (
        <OtherTodo key={todo._id} _id={todo._id} status={todo.status} title={todo.title} description={todo.description} priority={todo.priority} />
      ))}
    </div>
  )
}
