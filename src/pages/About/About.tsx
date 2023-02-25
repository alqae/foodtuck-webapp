import React from 'react'
import { motion } from 'framer-motion'

interface Props { }

const About: React.FC<Props> = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ delay: 0.25, duration: 0.5 }}
      style={{ padding: '100px 0' }}
      // exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <span>About</span>
    </motion.div>
  )
}

About.defaultProps = {}

export default About
