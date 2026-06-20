import type { Metadata } from 'next'
import Link from 'next/link'
import FaqClient from './FaqClient'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about the 100-Point Bankability Framework, Rapid Assessment Plus, Policy Convergence Intelligence, and how Intelliblock engagements work.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/faq/' },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.intelliblockconsulting.com/' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.intelliblockconsulting.com/faq/' },
  ],
}

export default function FaqPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <section className="hero hero--medium page-offset" aria-labelledby="faq-headline">
        <div className="hero__inner">
          <p className="hero__eyebrow">Frequently Asked Questions</p>
          <h1 className="hero__headline" id="faq-headline">Common questions about the framework and services</h1>
          <p className="hero__sub">Four categories: the Bankability Framework, Rapid Assessment Plus, Policy Convergence Intelligence, and engagement mechanics.</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section section--white" aria-label="FAQ content">
        <div className="container">
          <FaqClient />
        </div>
      </section>

      {/* CTA Strip */}
      <div className="cta-strip">
        <div className="cta-strip__inner">
          <h2 className="cta-strip__headline">Still have a question?</h2>
          <p className="cta-strip__sub">A 30-minute call establishes your mandate and the right entry point. Most questions are answered in that first conversation.</p>
          <div className="cta-strip__actions">
            <a href="https://intelliblock.setmore.com/ayodeji" className="btn btn--primary" rel="noopener noreferrer" target="_blank">Book a discovery call</a>
            <Link href="/contact" className="btn btn--ghost">Send a message</Link>
          </div>
        </div>
      </div>

    </main>
  )
}
