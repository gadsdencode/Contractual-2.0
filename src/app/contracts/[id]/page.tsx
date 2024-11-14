import { ContractEditor } from '@/components/contracts/contract-editor'
import { VersionHistory } from '@/components/contracts/version-history'
import { CommentSection } from '@/components/comments/comment-section'
import { PermissionManager } from '@/components/permissions/permission-manager'

export default function ContractPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <ContractEditor contractId={params.id} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <VersionHistory contractId={params.id} />
        <div className="space-y-8">
          <PermissionManager contractId={params.id} />
          <CommentSection contractId={params.id} />
        </div>
      </div>
    </div>
  )
}
