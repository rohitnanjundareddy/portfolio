import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ro | ML Researcher & Engineer',
  description: 'Graduate Research Assistant specializing in medical AI, deep learning, and computer vision. Building intelligent systems that make a difference.',
  keywords: ['Machine Learning', 'Deep Learning', 'Medical AI', 'Computer Vision', 'Research'],
  authors: [{ name: 'Ro' }],
  openGraph: {
    title: 'Ro | ML Researcher & Engineer',
    description: 'Graduate Research Assistant specializing in medical AI and deep learning.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased noise">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
