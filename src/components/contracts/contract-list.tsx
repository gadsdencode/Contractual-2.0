'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { staggerContainer, listItem } from '@/styles/animations'
import { formatDate } from '@/lib/utils'

interface Contract {
  id: string
  title: string
  created_at: string
  version: number
}

export function ContractList({ contracts }: { contracts: Contract[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid gap-4"
    >
      {contracts.map((contract) => (
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
                  {formatDate(contract.created_at)}
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
