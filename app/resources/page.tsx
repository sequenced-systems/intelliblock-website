import type { Metadata } from 'next'
import Link from 'next/link'
import ChecklistGate from './ChecklistGate'

export const metadata: Metadata = {
  title: 'Resources — DFI Readiness Assessment Checklist',
  description: 'Free resource: 12 questions an infrastructure developer should answer before approaching a DFI. Download the Intelliblock DFI Readiness Assessment Checklist.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/resources/' },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.intelliblockconsulting.com/' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.intelliblockconsulting.com/resources/' },
  ],
}

export default function ResourcesPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <section className="hero hero--medium page-offset" aria-labelledby="resources-headline">
        <div className="hero__inner">
          <p className="hero__eyebrow">Resources</p>
          <h1 className="hero__headline" id="resources-headline">DFI Readiness Assessment Checklist</h1>
          <p className="hero__sub">12 questions an infrastructure developer should be able to answer before approaching a DFI, lender, or investment committee. Built from the criteria inside the 100-Point Bankability Framework V3.6.</p>
        </div>
      </section>

      {/* Gate */}
      <section className="section section--white" aria-label="Checklist download">
        <div className="container">
          <ChecklistGate />
        </div>
      </section>

      {/* Supporting context */}
      <section className="section section--grey" aria-labelledby="context-headline">
        <div className="container">
          <div className="max-w-720">
            <h2 className="section-headline" id="context-headline">Why these 12 questions</h2>
            <p className="body-md leading-loose mb-5">
              Most project developers approach a DFI too early — before the threshold criteria are satisfied. The result is a rejection that damages the project&apos;s credibility for the next approach, even when underlying fundamentals are sound.
            </p>
            <p className="body-md leading-loose mb-5">
              The Bankability Framework maps DFI investment decisions across five categories. These 12 questions translate that scoring framework into developer-facing language — the same criteria that determine whether a project reaches investment committee, without the scoring methodology.
            </p>
            <p className="body-md leading-loose">
              If you cannot answer these questions confidently, a Rapid Assessment Plus will identify which gaps need to close before a DFI approach is viable.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/services#ra-headline" className="btn btn--primary">See Rapid Assessment Plus &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="cta-strip">
        <div className="cta-strip__inner">
          <h2 className="cta-strip__headline">Need a structured bankability assessment?</h2>
          <p className="cta-strip__sub">The checklist tells you where the gaps are. A Rapid Assessment Plus tells you how to close them.</p>
          <div className="cta-strip__actions">
            <Link href="/contact" className="btn btn--primary">Commission an assessment</Link>
            <a href="https://intelliblock.setmore.com/ayodeji" className="btn btn--ghost" rel="noopener noreferrer" target="_blank">Book a call first</a>
          </div>
        </div>
      </div>

    </main>
  )
}
