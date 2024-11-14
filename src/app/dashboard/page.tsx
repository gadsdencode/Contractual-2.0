
import { redirect } from 'next/navigation'
import { ContractList } from '@/components/contracts/contract-list'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }
  const { data: contracts } = await supabase
  .from('contracts')
  .select('*')
  .order('created_at', { ascending: false })
  .limit(5)

  return (
    <div className="container mx-auto py-8">
      <ContractList contracts={contracts || []} />
    </div>
  )
}