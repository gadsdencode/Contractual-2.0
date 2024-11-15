// /src/app/contracts/page.tsx

import { Suspense } from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Link from 'next/link';

// UI Components
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// Animations
import { staggerContainer, listItem } from '@/styles/animations';

// Types
import { Database } from '@/types/supabaseTypes';

// Define the Contract type
type Contract = Database['public']['Tables']['contracts']['Row'];

// The main contracts page component
export default async function ContractsPage() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: contracts, error } = await supabase
    .from('contracts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Contracts fetch error:', error);
    return <div>Error loading contracts: {error.message}</div>;
  }

  return (
    <Suspense fallback={<ContractsSkeleton />}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-4"
      >
        {contracts?.map((contract) => (
          <ContractCard key={contract.id} contract={contract} />
        ))}
      </motion.div>
    </Suspense>
  );
}

// Define the props for ContractCard
interface ContractProps {
  contract: Contract;
}

// The ContractCard component
function ContractCard({ contract }: ContractProps) {
  return (
    <motion.div variants={listItem}>
      <Link href={`/contracts/${contract.id}`}>
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
        </Card>
      </Link>
    </motion.div>
  );
}

// The skeleton component displayed while loading
function ContractsSkeleton() {
  return (
    <div className="grid gap-4">
      {[...Array(3)].map((_, index) => (
        <Skeleton key={index} className="h-40 w-full" />
      ))}
    </div>
  );
}
