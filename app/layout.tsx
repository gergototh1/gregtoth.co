import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://gregtoth.me/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Greg Toth - Solo Developer & Vibe Coder',
    template: '%s | Greg Toth'
  },
  description: 'Business guy turned vibe coder. I turn ideas into software — solo. Building products with AI and modern development practices.',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950 font-sans`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-8">
              <Header />
              {children}
            </div>
            <div className="relative mx-auto w-full max-w-screen-sm px-4 mt-auto">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}