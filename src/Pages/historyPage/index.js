import React from 'react'
import { motion } from 'framer-motion'

const HistoryPage = () => {
  return (
    <motion.div animate={{ scale: [0, 1, 0.5, 1] }}
    transition={{ times: [0, 0.1, 0.9, 1] }} className='top-0 left-0 transform origin-bottom w-400 h-400 bg-pink-500'>history page</motion.div>
  )
}

export default HistoryPage