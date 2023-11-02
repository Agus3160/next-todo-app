'use client'

import React from 'react'
import LinkAnim from './LinkAnim'

export default function NavBar() {

  return (
    <nav className='p-5 h-16 items-center bg-vintage-400 text-vintage-100'>
      <ul className='flex justify-evenly'>
        <LinkAnim href={'/'}>Home</LinkAnim>
        <LinkAnim href={'/about'}>About</LinkAnim>
        <LinkAnim href={'/contact'}>Contact</LinkAnim>
      </ul>
    </nav>
  )
}
