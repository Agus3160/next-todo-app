'use client'

import Todo from "@/components/Todo"
import { useEffect, useState } from "react"

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
    getAllTodo()
  }

  function onChange(e) {
    setTodo(e.target.value)
  }

  return (
    <main className="flex flex-col m-2 justify-center">
      <h2 className="font-bold text-center text-3xl text-vintage-100 p-5">Todo App</h2>
      <div className="flex">
        <input onChange={(e) => onChange(e)} value={todo} className="rounded-l-xl flex-1 p-2" type="text"></input>
        <button onClick={() => addTodo()} name="todo" className="rounded-r-xl bg-vintage-300 p-2 text-vintage-100 text-center">Add</button>
      </div>
      <div className="flex flex-col my-5" >
        {
          todos.map((todo) => {
            return <Todo key={todo._id} todo={todo}/>
          })
        }
      </div>
    </main>
  )
}
