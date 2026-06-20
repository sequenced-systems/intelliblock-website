import type { Metadata } from 'next'
import BriefsClient from './BriefsClient'

export const metadata: Metadata = {
  title: 'Live Signal Brief Archive',
  description: 'Rolling archive of Intelliblock HEARTBEAT signal briefs scored ≥60/100 by the 100-Point Bankability Framework V3.2. Nigeria infrastructure intelligence updated daily.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/intelligence/briefs/' },
}

export default function BriefsPage() {
  return (
    <>
      <noscript>
        <section className="section section--white page-offset">
          <div className="container">
            <h1 className="section-headline">Signal Brief Archive</h1>
            <p className="body-md max-w-720">The Signal Brief Archive requires JavaScript to load. <a href="/contact">Contact us</a> to request intelligence access directly.</p>
          </div>
        </section>
      </noscript>
      <BriefsClient />
    </>
  )
}
