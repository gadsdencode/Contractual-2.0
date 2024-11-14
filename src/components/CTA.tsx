'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Step into the Future?</h2>
        <p className="text-xl mb-6">Join us and experience technology like never before.</p>
        <Button size="lg" variant="secondary">
          Get Started Now
        </Button>
      </motion.div>
    </section>
  )
}