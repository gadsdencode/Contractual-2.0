/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Button } from '@/components/ui/button'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function AuthButton() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return user ? (
    <Button onClick={handleSignOut} variant="default">
      Sign Out
    </Button>
  ) : (
    <Button onClick={handleSignIn}>Sign In</Button>
  )
}