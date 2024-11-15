// callback.ts
// Handles Google OAuth callback and token exchange

import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase/client'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  }

  try {
    const { code } = req.query

    if (!code || typeof code !== 'string') {
      res.status(400).json({ message: 'Missing or invalid code parameter' })
      return
    }

    // Exchange authorization code for tokens
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    if (error) {
      throw new Error('Failed to exchange authorization code for tokens')
    }

    // Generate a signed JWT token to identify the user
    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      throw new Error('JWT Secret is not defined')
    }

    const token = jwt.sign({ userId: data.user.id }, jwtSecret, { expiresIn: '1h' })

    // Set the token as an HttpOnly cookie for further authentication
    ;(await cookies()).set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    })

    res.redirect('/dashboard')
  } catch (error) {
    console.error('OAuth callback error:', error)
    res.status(500).json({ message: error instanceof Error ? error.message : 'Unexpected error' })
  }
}
