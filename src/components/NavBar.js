import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='p-5 h-16 items-center bg-vintage-400 text-vintage-100'>
      <ul className='flex justify-evenly'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
