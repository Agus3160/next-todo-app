import React from 'react'

export default function About() {
  return (
    <div className='text-vintage-100 my-5 text-center'>
      <h1 className='text-3xl font-bold p-5 text-center'>About</h1>
      <p className='p-2'>This is a project made by <a  className="text-vintage-200 font-underline" target="_blank" href="https://github.com/agus3160">me</a>.</p>
      <p className='p-2'>This project is made with <a className="text-vintage-200 font-underline" target="_blank" href="https://nextjs.org/">Next.js</a> and <a className="text-vintage-200 font-underline" target="_blank" href="https://framer.com/motion">Framer Motion</a>.I used the <a className="text-vintage-200 font-underline" target="_blank" href="https://www.mongodb.com/">MongoDB</a> as database.</p>
      <p className='p-2'>There is not much to say, it's a simple ToDo app where you load the todo, create it and delete it when it's done.</p>
      <p className='p-2'>And here is the repo if you need it: <a className="text-vintage-200 font-underline" target="_blank" href="https://github.com/Agus3160/next-todo-app">next-todo-app</a>.</p>
      <h2 className='text-xl font-bold p-5 text-center'>Thanks for using it!</h2>
    </div>
  )
}
