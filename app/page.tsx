import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Contract Tracker</h1>
        <div className="flex gap-4">
          <Link href="/dashboard">
            <Button>View Contracts</Button>
          </Link>
          <Link href="/dashboard/create">
            <Button variant="outline">Create New</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
