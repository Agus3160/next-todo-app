'use client'

import {motion } from 'framer-motion'
import React from 'react'

export default function ContactCard({link, image}) {

  return (
    <motion.a 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
    target='_blank' href={link} className='flex bg-vintage-300 text-vintage-100 rounded-xl mb-3 p-4 items-center box-border justify-between'>
        <img className='w-1/4' src={image}></img>
        <h2>Linkedin</h2>
    </motion.a>
  )
}
