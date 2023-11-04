import React from 'react'
import { useState, useEffect } from 'react'
export default function ToDoInput({todos, setTodos}) {

  const[todo, setTodo] = useState("")

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
    <>
        <div className="flex">
            <input placeholder='Enter your to do...' onKeyUp={(e) => e.key === "Enter" && addTodo()}  onChange={(e) => onChange(e)} value={todo} className="rounded-l-xl flex-1 p-2" type="text"></input>
            <button onClick={() => addTodo()} name="todo" className="rounded-r-xl bg-vintage-300 p-2 text-vintage-100 text-center">Add</button>
        </div>
    </>
  )
}
