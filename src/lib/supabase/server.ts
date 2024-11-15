import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers'; // For Next.js App Router
import { Database } from '@/types/supabaseTypes';

export function createClient() {
    return createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: async () => (await cookies()).getAll(),
          setAll: async (cookiesToSet) => {
            for (const { name, value, options } of cookiesToSet) {
              (await cookies()).set(name, value, options);
            }
          }
        }
      }
    );
}