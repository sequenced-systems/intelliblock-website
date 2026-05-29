import type { Metadata } from 'next'
import BriefsClient from './BriefsClient'

export const metadata: Metadata = {
  title: 'Live Signal Brief Archive',
  description: 'Rolling archive of Intelliblock HEARTBEAT signal briefs scored ≥60/100 by the 100-Point Bankability Framework V3.2. Nigeria infrastructure intelligence updated daily.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/intelligence/briefs/' },
}

export default function BriefsPage() {
  return <BriefsClient />
}
