'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { supabase } from '@/lib/supabase/client'
import type { Permission } from '@/lib/supabase/types'

interface PermissionManagerProps {
  contractId: string
}

export function PermissionManager({ contractId }: PermissionManagerProps) {
  const [email, setEmail] = useState('')
  const [permission, setPermission] = useState<Permission>('viewer')
  const [loading, setLoading] = useState(false)

  const handleAddPermission = async () => {
    try {
      setLoading(true)
      
      // Get user by email
      const { data: userData, error: userError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', email)
        .single()

      if (userError || !userData) {
        throw new Error('User not found')
      }

      // Add permission
      const { error: permissionError } = await supabase
        .from('contract_permissions')
        .insert({
          contract_id: contractId,
          user_id: userData.id,
          permission_level: permission
        })

      if (permissionError) throw permissionError

      // Create notification
      await supabase.from('notifications').insert({
        user_id: userData.id,
        content: `You have been granted ${permission} access to a contract`,
        type: 'permission',
        contract_id: contractId
      })

      setEmail('')
    } catch (error) {
      console.error('Error adding permission:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Manage Permissions</h3>
      <div className="flex gap-4">
        <Input
          type="email"
          placeholder="User email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Select value={permission} onValueChange={(value: Permission) => setPermission(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select permission" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="viewer">Viewer</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
            <SelectItem value="owner">Owner</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleAddPermission} disabled={loading}>
          Add Permission
        </Button>
      </div>
    </div>
  )
}
