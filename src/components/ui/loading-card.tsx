import Skeleton from 'react-loading-skeleton'
import { Card } from './card'

export function LoadingCard() {
  return (
    <Card className="p-4">
      <div className="space-y-3">
        <Skeleton height={24} width="60%" />
        <div className="flex justify-between">
          <Skeleton height={20} width={100} />
          <Skeleton height={20} width={100} />
        </div>
      </div>
    </Card>
  )
}
