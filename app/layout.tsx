import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { StructuredData } from './structured-data'

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
  keywords: ['Greg Toth', 'solo developer', 'vibe coder', 'AI development', 'indie hacker', 'business developer', 'software development', 'AI-powered development'],
  authors: [{ name: 'Greg Toth', url: 'https://gregtoth.me' }],
  creator: 'Greg Toth',
  publisher: 'Greg Toth',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gregtoth.me',
    title: 'Greg Toth - Solo Developer & Vibe Coder',
    description: 'Business guy turned vibe coder. I turn ideas into software — solo. Building products with AI and modern development practices.',
    siteName: 'Greg Toth',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Greg Toth - Solo Developer & Vibe Coder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greg Toth - Solo Developer & Vibe Coder',
    description: 'Business guy turned vibe coder. I turn ideas into software — solo. Building products with AI and modern development practices.',
    images: ['/og-image.jpg'],
    creator: '@gregtoth_me',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
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
          <StructuredData />
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