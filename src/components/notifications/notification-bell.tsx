'use client'

import { useState, useEffect } from 'react'
import { Bell } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase/client'
import { format } from 'date-fns'
interface Notification {
  id: string
  content: string
  created_at: string
  read: boolean
}

export function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    fetchNotifications()
    subscribeToNotifications()
  }, [])

  const fetchNotifications = async () => {
    const user = await supabase.auth.getUser()
    if (!user.data.user) return

    const { data } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', user.data.user.id)
      .order('created_at', { ascending: false })
      .limit(10)

    if (data) {
      setNotifications(data)
      setUnreadCount(data.filter(n => !n.read).length)
    }
  }

  const subscribeToNotifications = () => {
    const user = supabase.auth.getUser()
    if (!user) return

    const subscription = supabase
      .channel('notifications')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'notifications'
      }, payload => {
        setNotifications(current => [payload.new as Notification, ...current])
        setUnreadCount(count => count + 1)
      })
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }

  const markAsRead = async (id: string) => {
    const { error } = await supabase
      .from('notifications')
      .update({ read: true })
      .eq('id', id)

    if (!error) {
      setNotifications(current =>
        current.map(n => n.id === id ? { ...n, read: true } : n)
      )
      setUnreadCount(count => Math.max(0, count - 1))
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        {notifications.map((notification) => (
          <DropdownMenuItem
            key={notification.id}
            className={`p-4 ${notification.read ? 'opacity-50' : ''}`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="flex flex-col gap-1">
              <p>{notification.content}</p>
              <span className="text-xs text-gray-500">
                {format(new Date(notification.created_at), 'MMM d, yyyy')}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
        {notifications.length === 0 && (
          <DropdownMenuItem disabled>
            No notifications
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
