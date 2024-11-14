'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { supabase } from '@/lib/supabase/client'

interface ContractEditorProps {
  contractId?: string
  initialData?: {
    title: string
    content: string
    version: number
  }
}

export function ContractEditor({ contractId, initialData }: ContractEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [version, setVersion] = useState(initialData?.version || 1)
  const [saving, setSaving] = useState(false)
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [changeSummary, setChangeSummary] = useState('')

  const handleSave = async () => {
    try {
      setSaving(true)
      const user = await supabase.auth.getUser()
      
      if (!user.data.user) throw new Error('Not authenticated')

      // Create new version
      const { error: versionError } = await supabase
        .from('contract_versions')
        .insert({
          contract_id: contractId,
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
        .eq('id', contractId)

      if (contractError) throw contractError

      setVersion(v => v + 1)
      setShowSaveDialog(false)
      setChangeSummary('')
    } catch (error) {
      console.error('Error saving contract:', error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Contract Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-xl font-bold"
      />
      <Textarea
        placeholder="Enter contract content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[400px]"
      />
      <div className="flex justify-end">
        <Button onClick={() => setShowSaveDialog(true)}>
          Save Changes
        </Button>
      </div>

      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Contract Changes</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Change Summary</label>
              <Textarea
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
              {saving ? 'Saving...' : 'Save Version'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
