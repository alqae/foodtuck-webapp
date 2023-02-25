import React from 'react'
import { motion } from 'framer-motion'

interface Props { }

const Pages: React.FC<Props> = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      style={{ padding: '100px 0' }}
      transition={{ delay: 0.25, duration: 0.5 }}
      // exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <span>Pages</span>
    </motion.div>
  )
}

Pages.defaultProps = {}

export default Pages
