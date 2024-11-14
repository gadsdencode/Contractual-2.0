import { motion } from 'framer-motion'
import { fadeIn } from '@/styles/animations'

export const Card = motion.div.attrs({
  initial: 'hidden',
  animate: 'visible',
  variants: fadeIn,
  className: `
    bg-white dark:bg-gray-800 
    rounded-lg shadow-lg 
    hover:shadow-xl 
    transition-shadow duration-300 
    border border-gray-200 dark:border-gray-700
    overflow-hidden
  `
})
