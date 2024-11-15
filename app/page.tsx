import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import AuthButton from '@/components/AuthButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center bg-gray-800 rounded-lg mt-2">
        <h1 className="text-2xl font-bold text-white">ContrActual</h1>
        <AuthButton />
      </header>
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="container mx-auto px-4 py-6 text-center text-gray-400">
        © 2023 ContrActual. All rights reserved.
      </footer>
    </div>
  )
}