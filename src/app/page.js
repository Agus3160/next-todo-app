'use client'

import Todo from "@/components/Todo"
import { useEffect, useState } from "react"

//Animations
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  
  const[todos, setTodos] = useState([])
  const[todo, setTodo] = useState("")

  useEffect(() => getAllTodo, [])

  const getAllTodo = async function() {
    const res = await fetch("http://localhost:3000/api/todo", {
      method:"GET",
    })
    const data = await res.json()
    setTodos(data.todos)
  }

  const addTodo = async () => {
    if(todo === "") {
      alert('Invalid todo')
      return
    }

    const res = await fetch("http://localhost:3000/api/todo", {
      method:"POST",
      body: JSON.stringify({title: todo}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    setTodo("")
    setTodos([...todos, data.newTodo])
  }

  function onChange(e) {
    setTodo(e.target.value)
  }

  return (
    <main className="flex flex-col w-3/4 sm:w-1/2 mx-auto justify-center">
      <h2 className="font-bold text-center text-3xl text-vintage-100 p-5">Todo App</h2>
      <div className="flex">
        <input onChange={(e) => onChange(e)} value={todo} className="rounded-l-xl flex-1 p-2" type="text"></input>
        <button onClick={() => addTodo()} name="todo" className="rounded-r-xl bg-vintage-300 p-2 text-vintage-100 text-center">Add</button>
      </div>
      <div className="flex flex-col my-5" >
        <AnimatePresence >
        {
          todos.map((todo, index) => (
            <motion.div 
            whileHover={{scale: 1.05}}
            whileTap={{scale: 1.05}}
            animate={{opacity: 1, y:0, scale:1}} 
            exit={{opacity: 0, x:100}} 
            initial={{opacity: 0, y:100, scale:0}} 
            transition={{delay:0.2*index, duration: 0.5}} 
            key={todo._id}>
              <Todo 
               todo={todo} todos={todos} setTodos={setTodos}/>
            </motion.div>
          )
          )
        }
        </AnimatePresence>
      </div>
    </main>
  )
}
