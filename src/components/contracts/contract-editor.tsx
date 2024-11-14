'use client'

import { useState, useEffect, useCallback } from 'react'
// import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Loader2, Save, History, Lock } from 'lucide-react'
// import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { toast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase/client'
import type { ContractVersion } from '@/lib/supabase/types'
import type { Permission } from '@/components/permissions/permission-manager'

interface ContractEditorProps {
  contractId?: string
  initialData?: {
    title: string
    content: string
    version: number
  }
}

interface ActiveUser {
  id: string
  name: string
  lastActive: Date
}

export function ContractEditor({ contractId, initialData }: ContractEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [version, setVersion] = useState(initialData?.version || 1)
  const [saving, setSaving] = useState(false)
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [changeSummary, setChangeSummary] = useState('')
  const [permission, setPermission] = useState<Permission>('viewer')
  const [activeUsers, setActiveUsers] = useState<ActiveUser[]>([])
  const [showVersionHistory, setShowVersionHistory] = useState(false)
  const [versions, setVersions] = useState<ContractVersion[]>([])
  const [isComparing, setIsComparing] = useState(false)
  const [compareVersion, setCompareVersion] = useState<ContractVersion | null>(null)
  
  // Fetch user permission
  useEffect(() => {
    async function fetchPermission() {
      if (!contractId) return
      
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data, error } = await supabase
        .from('contract_permissions')
        .select('permission_level')
        .eq('contract_id', contractId)
        .eq('user_id', user.id)
        .single()

      if (data && !error) {
        setPermission(data.permission_level)
      }
    }

    fetchPermission()
  }, [contractId])

  // Real-time presence
  useEffect(() => {
    if (!contractId) return

    const channel = supabase.channel(`contract:${contractId}`)
    
    const cleanup = channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState<{ user: { id: string; name: string } }>()
        const users = Object.values(state).map(presence => {
          const presenceArray = presence as { user: { id: string; name: string } }[]
          return {
            id: presenceArray[0].user.id,
            name: presenceArray[0].user.name,
            lastActive: new Date()
          }
        })
        setActiveUsers(users)
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          const { data: { user } } = await supabase.auth.getUser()
          if (user) {
            await channel.track({
              user: {
                id: user.id,
                name: user.user_metadata.full_name || user.email
              }
            })
          }
        }
      })

    return () => {
      cleanup
      channel.unsubscribe()
    }
  }, [contractId])

  // Fetch version history
  const fetchVersionHistory = useCallback(async () => {
    if (!contractId) return

    const { data, error } = await supabase
      .from('contract_versions')
      .select(`
        id,
        version_number,
        title,
        content,
        change_summary,
        created_at,
        created_by,
        profiles(name)
      `)
      .eq('contract_id', contractId)
      .order('version_number', { ascending: false })

    if (!error && data) {
      setVersions(data as unknown as ContractVersion[])
    }
  }, [contractId])

  useEffect(() => {
    if (showVersionHistory) {
      fetchVersionHistory()
    }
  }, [showVersionHistory, fetchVersionHistory])

  const handleSave = async () => {
    if (permission === 'viewer') {
      toast({
        title: 'Permission Denied',
        description: 'You do not have permission to edit this contract.',
        variant: 'destructive'
      })
      return
    }

    try {
      setSaving(true)
      const user = await supabase.auth.getUser()
      
      if (!user.data.user) throw new Error('Not authenticated')

      // Create new version
      const { error: versionError } = await supabase
        .from('contract_versions')
        .insert({
          contract_id: contractId!,
          version_number: version + 1,
          content,
          title,
          created_by: user.data.user.id,
          change_summary: changeSummary
        })

      if (versionError) throw versionError

      // Update current contract
      const { error: contractError } = await supabase
        .from('contracts')
        .update({
          title,
          content,
          version: version + 1
        })
        .eq('id', contractId!)

      if (contractError) throw contractError

      setVersion(v => v + 1)
      setShowSaveDialog(false)
      setChangeSummary('')

      toast({
        title: 'Success',
        description: 'Contract saved successfully'
      })
    } catch (error) {
      console.error('Error saving contract:', error)
      toast({
        title: 'Error',
        description: 'Failed to save contract',
        variant: 'destructive'
      })
    } finally {
      setSaving(false)
    }
  }

  const compareWithVersion = (selectedVersion: ContractVersion) => {
    setCompareVersion(selectedVersion)
    setIsComparing(true)
  }

  const restoreVersion = async (version: ContractVersion) => {
    if (permission !== 'owner' && permission !== 'editor') {
      toast({
        title: 'Permission Denied',
        description: 'You do not have permission to restore versions.',
        variant: 'destructive'
      })
      return
    }

    try {
      setTitle(version.title)
      setContent(version.content)
      setChangeSummary(`Restored from version ${version.version_number}`)
      setShowVersionHistory(false)
      setShowSaveDialog(true)
    } catch (error) {
      console.error('Error restoring version:', error)
      toast({
        title: 'Error',
        description: 'Failed to restore version',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Contract Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-xl font-bold"
          disabled={permission === 'viewer'}
        />
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex -space-x-2">
                  {activeUsers.map((user) => (
                    <motion.div
                      key={user.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium ring-2 ring-background"
                    >
                      {user.name.charAt(0).toUpperCase()}
                    </motion.div>
                  ))}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Active users: {activeUsers.map(u => u.name).join(', ')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowVersionHistory(true)}
          >
            <History className="h-4 w-4" />
          </Button>

          <Button
            onClick={() => setShowSaveDialog(true)}
            disabled={permission === 'viewer'}
          >
            {permission === 'viewer' ? (
              <Lock className="h-4 w-4 mr-2" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            {permission === 'viewer' ? 'View Only' : 'Save Changes'}
          </Button>
        </div>
      </div>

      <div className="relative">
        <textarea
          placeholder="Enter contract content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-[400px] p-4 rounded-lg border resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={permission === 'viewer'}
        />
        
        {isComparing && compareVersion && (
          <div className="absolute top-0 right-0 w-1/2 h-full bg-background border-l">
            <div className="p-4">
              <h3 className="text-sm font-medium mb-2">
                Version {compareVersion.version_number}
              </h3>
              <pre className="whitespace-pre-wrap text-sm">
                {compareVersion.content}
              </pre>
            </div>
          </div>
        )}
      </div>

      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Contract Changes</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Change Summary</label>
              <Input
                placeholder="Describe your changes..."
                value={changeSummary}
                onChange={(e) => setChangeSummary(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSaveDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={saving || !changeSummary}>
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Version'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showVersionHistory} onOpenChange={setShowVersionHistory}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Version History</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {versions.map((version) => (
              <motion.div
                key={version.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Version {version.version_number}</h3>
                    <p className="text-sm text-muted-foreground">
                      {version.change_summary}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Actions
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => compareWithVersion(version)}>
                        Compare
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => restoreVersion(version)}>
                        Restore
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
