import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import AnimationObserver from '@/components/AnimationObserver'
import CookieConsentBanner from '@/components/CookieConsentBanner'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.intelliblockconsulting.com'),
  title: {
    default: 'Intelliblock Consulting — Nigeria Infrastructure Bankability Intelligence',
    template: '%s — Intelliblock Consulting',
  },
  description: 'Intelliblock converts government policy signals into bankable Nigerian infrastructure transactions 12–18 months before market consensus, using the 100-Point Bankability Framework V3.6.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Intelliblock Consulting',
    locale: 'en_GB',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
        <AnimationObserver />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
