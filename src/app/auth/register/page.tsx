import { Metadata } from 'next'
import { AuthForm } from '@/components/auth/auth-form'

export const metadata: Metadata = {
  title: 'Register - Contract Tracker',
  description: 'Create a new account',
}

export default function RegisterPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          Contract Tracker
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &quot;Join thousands of professionals who trust Contract Tracker for 
              secure and efficient contract management.&quot;
            </p>
            <footer className="text-sm">Michael Chen, Product Manager</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
