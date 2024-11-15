// /src/components/contracts/contract-details.tsx

'use client';

import dynamic from 'next/dynamic';
import { Contract } from '@/components/contracts/contract-list';

// Dynamically import heavy components to optimize performance
const ContractEditor = dynamic(() => import('@/components/contracts/contract-editor').then(mod => mod.ContractEditor), {
  ssr: false,
});
const VersionHistory = dynamic(() => import('@/components/contracts/version-history').then(mod => mod.VersionHistory), {
  ssr: false,
});
const PermissionManager = dynamic(() => import('@/components/permissions/permission-manager').then(mod => mod.PermissionManager), {
  ssr: false,
});
const CommentSection = dynamic(() => import('@/components/comments/comment-section').then(mod => mod.CommentSection), {
  ssr: false,
});

// Define the props for ContractDetails
interface ContractDetailsProps {
  contract: Contract;
}

export default function ContractDetails({ contract }: ContractDetailsProps) {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <ContractEditor contractId={contract.id} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <VersionHistory
          contractId={contract.id}
          currentVersion={contract.version}
        />
        <div className="space-y-8">
          <PermissionManager contractId={contract.id} />
          <CommentSection contractId={contract.id} />
        </div>
      </div>
    </div>
  );
}
