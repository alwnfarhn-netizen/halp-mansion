import type { Metadata } from 'next'
import { Inter, Syncopate } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syncopate = Syncopate({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-syncopate' })

export const metadata: Metadata = {
  title: 'Halp Mansion | Exclusive Streetwear',
  description: 'A private underground fashion space inspired by basement nightlife culture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${syncopate.variable} bg-[#050505] text-gray-400 antialiased min-h-screen flex flex-col no-scrollbar`}>
        {children}
      </body>
    </html>
  )
}
