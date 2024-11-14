import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { staggerContainer, listItem } from '@/styles/animations'
import { format } from 'date-fns'
import { ContractEditor } from '@/components/contracts/contract-editor'
import { VersionHistory } from '@/components/contracts/version-history'
import { PermissionManager } from '@/components/permissions/permission-manager'
import { CommentSection } from '@/components/comments/comment-section'

export default async function ContractsPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: contracts } = await supabase
    .from('contracts')
    .select('*')
    .order('created_at', { ascending: false })

    return (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-4"
        >
          {contracts?.map((contract) => (
            <motion.div key={contract.id} variants={listItem}>
              <Card className="p-4 cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {contract.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">
                      Version {contract.version}
                    </span>
                    <span className="text-sm text-gray-500">
                      {format(new Date(contract.created_at), 'MMM d, yyyy')}
                    </span>
                  </div>
                </div>
                <div className="container mx-auto py-8 space-y-8">
                    <ContractEditor contractId={contract.id} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <VersionHistory contractId={contract.id} currentVersion={parseInt(contract.id)} />
                      <div className="space-y-8">
                      <PermissionManager contractId={contract.id} />
                      <CommentSection contractId={contract.id} />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )
    }