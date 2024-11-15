'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-gray-500"
      >
        Welcome to the Future
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl mb-8 text-gray-300"
      >
        Experience tomorrow&apos;s technology, today.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          Get Started
        </Button>
      </motion.div>
    </section>
  )
}