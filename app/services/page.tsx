import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Rapid Assessment Plus (5–7 day bankability assessment) and Policy Convergence Intelligence (monthly Nigeria infrastructure signal subscription). Both built on the 100-Point Bankability Framework V3.2.',
  alternates: { canonical: 'https://intelliblockconsulting.com/services/' },
}

export default function ServicesPage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero hero--medium page-offset" aria-labelledby="services-hero-headline">
        <div className="hero__inner">
          <p className="hero__eyebrow">Services</p>
          <h1 className="hero__headline" id="services-hero-headline">Two intelligence services. One analytical standard.</h1>
          <p className="hero__sub">Both services are built on the 100-Point Bankability Framework V3.2 — the only versioned, gate-cleared infrastructure scoring methodology operating in the Nigerian market.</p>
        </div>
      </section>

      {/* Service 2A: Rapid Assessment Plus */}
      <section className="section section--white" aria-labelledby="ra-headline">
        <div className="container">
          <span className="service-label">Assessment — 5 to 7 Days</span>
          <h2 className="section-headline" id="ra-headline">Rapid Assessment Plus</h2>
          <p className="body-md max-w-720 mb-4">
            A Rapid Assessment Plus tells a DFI team, developer, or PE fund whether a Nigerian infrastructure project is bankable, conditionally bankable, or not yet bankable — and precisely which criteria must change for it to be.
          </p>
          <p className="service-not-text">It is not a feasibility study. It is not a legal opinion. It is a decision instrument — structured specifically for the pre-investment-committee bankability screen that no Big 4 firm can deliver in under six weeks.</p>

          <div className="grid-2 service-grid">
            <div>
              <h3 className="section-label">Scope</h3>
              <ul className="scope-list">
                <li>Policy alignment and regulatory readiness</li>
                <li>Commercial viability — revenue model logic, sector-appropriate IRR benchmark, demand evidence</li>
                <li>DFI readiness — eligibility criteria, environmental/social baseline, standard conditions compliance</li>
                <li>Implementation track record — comparable project precedent in market, contractor landscape</li>
                <li>Political economy and stakeholder alignment — executive commitment, agency coordination</li>
                <li>Signal amplifiers — Policy Convergence events, Presidential Priority signals, active DFI mandates</li>
                <li>Binary gates — ESG baseline and commercial viability gates applied before final score</li>
              </ul>

              <h3 className="section-label section-label--spaced section-label--tight">Differentiators</h3>
              <ul className="differentiator-list">
                <li>A named, versioned scoring methodology — not an ad hoc assessment</li>
                <li>Category-level evidence for every score — not conclusions without support</li>
                <li>A gate-cleared verdict — projects with no viable commercial model or no environmental baseline are flagged before overstatement, not after</li>
              </ul>
            </div>

            <div>
              <h3 className="section-label">Deliverable</h3>
              <div className="gate-card mb-5">
                <p className="gate-card__body">Bankable Brief (12 to 18 pages): Executive Summary &rarr; Score Card (category breakdown) &rarr; Evidence &rarr; Findings &rarr; Recommendation &rarr; Next Action. Delivered as secure PDF.</p>
              </div>

              <h3 className="section-label section-label--tight">Timeline</h3>
              <p className="text-secondary mb-5 leading-normal">5 to 7 working days from confirmed engagement and project documentation receipt.</p>

              <h3 className="section-label section-label--tight">Investment</h3>
              <div className="price-box price-box--block">£15,000–25,000</div>
              <p className="text-sm text-secondary mb-7">Pilot rate of £12,000–15,000 for the first engagement.</p>

              <Link href="/contact" className="btn btn--primary">Scope your Rapid Assessment &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider--visible"></div>

      {/* Service 2B: Policy Convergence Intelligence */}
      <section className="section section--grey" aria-labelledby="pci-headline">
        <div className="container">
          <span className="service-label">Subscription — Monthly Standing</span>
          <h2 className="section-headline" id="pci-headline">Policy Convergence Intelligence</h2>
          <p className="body-md max-w-720 mb-4">
            Nigeria&apos;s infrastructure policy landscape generates convergence events that create or destroy bankability 12 to 18 months before the market moves. Policy Convergence Intelligence tracks those events — producing 2 to 3 scored Signal Briefs per month for subscribers who need to know before the tender is published.
          </p>
          <p className="service-not-text">It is not a news digest. It is not a database subscription. It is scored intelligence — every signal assessed against the 100-Point Bankability Framework before it reaches the subscriber.</p>

          <div className="grid-2 service-grid">
            <div>
              <h3 className="section-label">What is included</h3>
              <ul className="scope-list">
                <li>2 to 3 Signal Briefs per month on Nigeria infrastructure signals scoring 40/100 and above</li>
                <li>Signals drawn from 5 domain sources: legislation, DFI activity, regulatory publications, fiscal signals, political economy</li>
                <li>Multi-domain convergence events prioritised — single-domain signals monitored, not surfaced unless material</li>
                <li>Monthly Summary (1 page): sector distribution, score range for active signals, one origination-ready opportunity call</li>
              </ul>

              <h3 className="section-label section-label--spaced section-label--tight">Who subscribes</h3>
              <ul className="differentiator-list">
                <li>DFI investment officers managing Nigeria or West Africa mandates</li>
                <li>PE fund associates monitoring pre-feasibility deal flow</li>
                <li>Project finance law firms needing standing Nigeria policy intelligence for client advice</li>
              </ul>
            </div>

            <div>
              <h3 className="section-label">Deliverable</h3>
              <div className="gate-card mb-5">
                <p className="gate-card__body">Signal Briefs: 4 to 6 pages each (FINDING &rarr; EVIDENCE &rarr; OPPORTUNITY WINDOW &rarr; RECOMMENDATION &rarr; NEXT ACTION). Monthly Summary: 1 page. Delivered as secure PDF via email.</p>
              </div>

              <h3 className="section-label section-label--tight">Investment</h3>
              <div className="price-box price-box--block">£3,500–5,000 per month</div>
              <p className="text-sm text-secondary mb-7">Minimum 3-month commitment.</p>

              <Link href="/contact" className="btn btn--primary">Request a subscription proposal &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="cta-strip">
        <div className="cta-strip__inner">
          <h2 className="cta-strip__headline">Not sure which service fits your mandate?</h2>
          <p className="cta-strip__sub">A 30-minute call covers your brief, the right service entry point, and what the first deliverable would contain.</p>
          <div className="cta-strip__actions">
            <a href="https://intelliblock.setmore.com/ayodeji" className="btn btn--primary" rel="noopener noreferrer" target="_blank">Book a 30-minute discovery call</a>
            <Link href="/contact" className="btn btn--ghost">Send a message</Link>
          </div>
        </div>
      </div>

    </main>
  )
}
