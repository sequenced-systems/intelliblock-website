import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://intelliblockconsulting.com'),
  title: {
    default: 'Intelliblock Consulting — Nigeria Infrastructure Bankability Intelligence',
    template: '%s — Intelliblock Consulting',
  },
  description: 'Intelliblock converts government policy signals into bankable Nigerian infrastructure transactions 12–18 months before market consensus, using the 100-Point Bankability Framework V3.2.',
  openGraph: {
    type: 'website',
    siteName: 'Intelliblock Consulting',
    locale: 'en_GB',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
