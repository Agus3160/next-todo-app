import React from 'react'

export default function Todo({todo}) {
  return (
    <div className='bg-vintage-300 text-vintage-100 rounded-xl mb-3 p-4 items-center justify-between flex'>
        <p className=''>{todo.title}</p>
        <button className='bg-vintage-400 p-2 rounded-xl'>Done</button>
    </div>
  )
}
