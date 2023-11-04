import ContactCard from '@/components/ContactCard'
import React from 'react'

export default function Contact() {
  return (
    <>
      <h1 className='text-3xl font-bold p-5 text-vintage-100 text-center'>Contact:</h1>
      <div className='grid grid-cols-2 gap-4 justify-self-stretch text-vintage-100'>
        <ContactCard image={'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'} link={'https://www.linkedin.com/in/agust%C3%ADn-oviedo-a1844024b/'}/>
        <ContactCard className='bg-white' image={'https://icons-for-free.com/iconfiles/png/512/github+icon-1320168274457504277.png'} link={'https://github.com/Agus3160'}/>
      </div>
    </>
  )
}
