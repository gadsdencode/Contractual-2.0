'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { supabase } from '@/lib/supabase/client'
import type { ContractVersion } from '@/lib/supabase/types'
import { generateDiff } from '@/lib/diff'

interface VersionHistoryProps {
  contractId: string
  currentVersion: number
}

export function VersionHistory({ contractId, currentVersion }: VersionHistoryProps) {
  const [versions, setVersions] = useState<ContractVersion[]>([])
  const [selectedVersion, setSelectedVersion] = useState<ContractVersion | null>(null)
  const [diffView, setDiffView] = useState(false)
  const [diff, setDiff] = useState<{ added: string[], removed: string[], modified: string[] }>({
    added: [],
    removed: [],
    modified: []
  })

  useEffect(() => {
    fetchVersionHistory()
  }, [contractId])

  const fetchVersionHistory = async () => {
    const { data, error } = await supabase
      .from('contract_versions')
      .select(`
        id,
        version_number,
        content,
        title,
        created_at,
        created_by,
        change_summary,
        profiles(name)
      `)
      .eq('contract_id', contractId)
      .order('version_number', { ascending: false })

    if (!error && data) {
      setVersions(data as unknown as ContractVersion[])
    }
  }

  const handleVersionSelect = async (version: ContractVersion) => {
    setSelectedVersion(version)
    
    if (version.version_number < currentVersion) {
      const { data: currentData } = await supabase
        .from('contract_versions')
        .select('content')
        .eq('contract_id', contractId)
        .eq('version_number', currentVersion)
        .single()

      if (currentData) {
        const diffResult = generateDiff(version.content, currentData.content)
        setDiff(diffResult)
        setDiffView(true)
      }
    }
  }

  const restoreVersion = async (version: ContractVersion) => {
    try {
      const user = await supabase.auth.getUser()
      if (!user.data.user) throw new Error('Not authenticated')

      const { error } = await supabase.from('contract_versions').insert({
        contract_id: contractId,
        version_number: currentVersion + 1,
        content: version.content,
        title: version.title,
        created_by: user.data.user.id,
        change_summary: `Restored from version ${version.version_number}`
      })

      if (error) throw error

      // Update the current contract
      await supabase
        .from('contracts')
        .update({
          content: version.content,
          title: version.title,
          version: currentVersion + 1
        })
        .eq('id', contractId)

      setSelectedVersion(null)
      fetchVersionHistory()
    } catch (error) {
      console.error('Error restoring version:', error)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Version History</h3>
      <div className="space-y-2">
        {versions.map((version) => (
          <div
            key={version.id}
            className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={() => handleVersionSelect(version)}
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium">Version {version.version_number}</span>
                <p className="text-sm text-gray-500">{version.change_summary}</p>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(version.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedVersion} onOpenChange={() => setSelectedVersion(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              Version {selectedVersion?.version_number} - {selectedVersion?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setDiffView(!diffView)}
              >
                {diffView ? 'View Content' : 'View Changes'}
              </Button>
              <Button
                onClick={() => selectedVersion && restoreVersion(selectedVersion)}
              >
                Restore This Version
              </Button>
            </div>

            {diffView ? (
              <div className="space-y-4">
                {diff.added.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-green-600">Added</h4>
                    {diff.added.map((line, i) => (
                      <div key={i} className="bg-green-50 p-2 rounded">
                        {line}
                      </div>
                    ))}
                  </div>
                )}
                {diff.removed.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-red-600">Removed</h4>
                    {diff.removed.map((line, i) => (
                      <div key={i} className="bg-red-50 p-2 rounded">
                        {line}
                      </div>
                    ))}
                  </div>
                )}
                {diff.modified.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-blue-600">Modified</h4>
                    {diff.modified.map((line, i) => (
                      <div key={i} className="bg-blue-50 p-2 rounded">
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                {selectedVersion?.content}
              </pre>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
