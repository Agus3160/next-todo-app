'use client'

import Todo from "@/components/Todo"
import { useEffect, useState } from "react"

//Animations
import { motion, AnimatePresence } from "framer-motion";
import ToDoInput from "@/components/ToDoInput";

export default function Home() {
  
  const[todos, setTodos] = useState([])

  useEffect(() => getAllTodo, [])

  const getAllTodo = async function() {
    const res = await fetch("http://localhost:3000/api/todo", {
      method:"GET",
    })
    const data = await res.json()
    setTodos(data.todos)
  }

  return (
    <main className="flex flex-col justify-center">
      <h2 className="font-bold text-center text-3xl text-vintage-100 p-5">Todo App</h2>
      <ToDoInput todos={todos} setTodos={setTodos}/>
      <div className="flex flex-col my-5" >
        <AnimatePresence >
        {
          todos.map((todo, index) => (
            <motion.div 
            key={todo._id}>
              <Todo 
               todo={todo} todos={todos} index={index} setTodos={setTodos}/>
            </motion.div>
          )
          )
        }
        </AnimatePresence>
      </div>
    </main>
  )
}
