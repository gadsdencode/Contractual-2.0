import type { Metadata } from 'next'
// import { MainNav } from '@/components/navigation/main-nav'
import { inter, jetbrainsMono } from '@/styles/fonts'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contract Tracker',
  description: 'Advanced contract management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
