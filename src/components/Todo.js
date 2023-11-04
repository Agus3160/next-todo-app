'use client'

import React from 'react'
import { motion, animate, stagger, delay } from 'framer-motion'

export default function Todo({ todo, index, todos, setTodos }) {

  const deleteTodo = async () => {
    await fetch(`http://localhost:3000/api/todo/${todo._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    setTodos(todos => todos.filter(t => t._id !== todo._id))
  }

  return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
        animate={{ opacity: 1, y: 0, scale: 1, transition:{duration: 0.25, delay:0.1*index}  }}
        exit={{ opacity: 0, x: 100 }}
        initial={{ opacity: 0, y: 100, scale: 0,}}
        transition={{duration: 0.25 }}
        className='flex bg-vintage-300 text-vintage-100 rounded-xl mb-3 p-4 items-center box-border justify-between'>
        <p className='w-3/4'>{todo.title}</p>
        <button onClick={() => deleteTodo()} className='bg-vintage-400 p-2 rounded-xl'>Done</button>
      </motion.div>
  )
}
