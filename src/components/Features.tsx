'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Stop wasting time manually writing and formatting contracts.',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Your data is protected with state-of-the-art database security.',
  },
  {
    icon: Smartphone,
    title: 'Accessible Anywhere',
    description: 'Seamless experience across all devices, big or small.',
  },
]

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-500">ContrActual Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <feature.icon className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}