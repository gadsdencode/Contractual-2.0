
import { redirect } from 'next/navigation'
import { ContractList } from '@/components/contracts/contract-list'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function DashboardPage() {
  try {
    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      redirect('/login')
    }

    const { data: contracts, error } = await supabase
      .from('contracts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5)

    if (error) throw error

    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <ContractList contracts={contracts || []} />
      </div>
    )
  } catch (error) {
    console.error('Dashboard error:', error)
    redirect('/login')
  }
}
