import React, { useEffect, useState } from 'react';
import AddDailyBtn from './AddDailyBtn';
import DailyTodo from './DailyTodo';
import './daily.css';
import getTodo from '../../functions/getTodo';

export default function Daily({ toggleAddTodo, setFrom }) {
  const [dailyTodo, setDailyTodo] = useState([])


  useEffect(() => {
    const fetchTodos = async () => {
      const todoArr = await getTodo({ type: 'daily' });
      if (todoArr) {
        console.log(todoArr)
        setDailyTodo(todoArr.todos)
      }
    };
    fetchTodos();
  }, []);
  return (
    <div className="d_grid dailyTodoContainer">
      <AddDailyBtn toggleAddTodo={toggleAddTodo} setFrom={setFrom} setDailyTodo={setDailyTodo} />
      {
        dailyTodo.length > 0 && dailyTodo.map(todo =>
          <DailyTodo key={todo._id} _id={todo._id} title={todo.title} priority={todo.priority} description={todo.description} status={todo.status} />
        )
      }
    </div>
  );
}
