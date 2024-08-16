import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Other from './todos/other/Other';
import Daily from './todos/daily/Daily';
import Today from './todos/today/Today';
import Notes from './todos/notes/Notes';
import AddTodo from './addtask/AddTodo';
import './todo.css';

export default function Todo() {
  const [from,setFrom]=useState('daily')
  const [showAddTodo, setShowAddTodo] = useState(false);

  const toggleAddTodo = () => {
    setShowAddTodo(prevState => !prevState);
  };

  return (
    <>
      {showAddTodo && <AddTodo from={from} toggleAddTodo={toggleAddTodo} />}
      <Routes>
        <Route path='/daily' element={<Daily toggleAddTodo={toggleAddTodo} setFrom={setFrom}  />} />
        <Route path='/today' element={<Today toggleAddTodo={toggleAddTodo} setFrom={setFrom}  />} />
        <Route path='/notes' element={<Notes toggleAddTodo={toggleAddTodo}  setFrom={setFrom} />} />
        <Route path='/other' element={<Other toggleAddTodo={toggleAddTodo} setFrom={setFrom} />} />
      </Routes>
    </>
  );
}
