import React from 'react'
import { motion } from 'framer-motion'

interface Props { }

const Members: React.FC<Props> = () => {
  return (
    <motion.div
      initial={{ y: '100px' }}
      animate={{ y: '0px' }}
      style={{ padding: '100px 0' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      // exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <h1>Members</h1>
    </motion.div>
  )
}

Members.defaultProps = {}

export default Members