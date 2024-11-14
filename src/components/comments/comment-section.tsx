'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { supabase } from '@/lib/supabase/client'
import { format } from 'date-fns'

interface Comment {
  id: string
  content: string
  created_at: string
  user: {
    name: string
  }
}

interface CommentSectionProps {
  contractId: string
}

export function CommentSection({ contractId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchComments()
    subscribeToComments()
  }, [])

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select(`
        id,
        content,
        created_at,
        user:profiles(name)
      `)
      .eq('contract_id', contractId)
      .order('created_at', { ascending: false })

    if (!error && data) {
      setComments(data as unknown as Comment[])
    }
  }

  const subscribeToComments = () => {
    const subscription = supabase
      .channel('comments')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'comments',
        filter: `contract_id=eq.${contractId}`
      }, payload => {
        setComments(current => [payload.new as Comment, ...current])
      })
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }

  const handleAddComment = async () => {
    try {
      setLoading(true)
      const user = await supabase.auth.getUser()
      
      if (!user.data.user) throw new Error('Not authenticated')

      const { error: commentError } = await supabase
        .from('comments')
        .insert({
          content: newComment,
          contract_id: contractId,
          user_id: user.data.user.id
        })

      if (commentError) throw commentError

      setNewComment('')
    } catch (error) {
      console.error('Error adding comment:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Comments</h3>
      <div className="space-y-4">
        <Textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button onClick={handleAddComment} disabled={loading}>
          Add Comment
        </Button>
      </div>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">{comment.user.name}</span>
              <span className="text-sm text-gray-500">
                {format(new Date(comment.created_at), 'MMM d, yyyy')}
              </span>
            </div>
            <p className="mt-2">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
