import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LinkAnim({href, children}) {

    const MotionLink = motion(Link)

  return (
    <MotionLink
        href={href}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.85 }}
    >
        {children}
    </MotionLink>
  )
}
