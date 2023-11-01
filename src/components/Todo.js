'use client'

import React from 'react'

export default function Todo({todo, todos, setTodos}) {
  const deleteTodo = () => {
    fetch(`http://localhost:3000/api/todo/${todo._id}`, {
      method:"DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    setTodos(todos.filter(t => t._id !== todo._id))
  }

  return (
    <div
    className='flex bg-vintage-300 text-vintage-100 rounded-xl mb-3 p-4 items-center box-border justify-between'>
        <p className='w-3/4'>{todo.title}</p>
        <button onClick={() => deleteTodo()} className='bg-vintage-400 p-2 rounded-xl'>Done</button>
    </div>
  )
}
