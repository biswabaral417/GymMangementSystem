import React, { useEffect, useState } from 'react'
import AddTodayBtn from './AddTodayBtn'
import TodayTodo from './TodayTodo'
import getTodo from '../../functions/getTodo'


export default function Today({ toggleAddTodo, setFrom }) {

  const [todayTodo, setTodayTodo] = useState([])
  useEffect(() => {
    const fetchTodos = async () => {
      const todoArr = await getTodo({ type: 'today' });
      setTodayTodo(todoArr.todos)
    };
    fetchTodos();
  }, []);
  return (

    <div className="d_grid dailyTodoContainer">
      <AddTodayBtn toggleAddTodo={toggleAddTodo} setFrom={setFrom} />
      {todayTodo.length > 0 && todayTodo.map(todo => (
        <TodayTodo key={todo._id} _id={todo._id} status={todo.status} title={todo.title} priority={todo.priority} description={todo.description} />
      ))}
    </div>

  )
}
