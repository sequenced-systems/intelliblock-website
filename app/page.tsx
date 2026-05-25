import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import BankabilityShowcase from '../components/BankabilityShowcase'

export const metadata: Metadata = {
  title: 'Intelliblock Consulting — Nigeria Infrastructure Bankability Intelligence',
  description: 'Intelliblock converts government policy signals into bankable Nigerian infrastructure transactions 12–18 months before market consensus, using the 100-Point Bankability Framework V3.2.',
  alternates: { canonical: 'https://intelliblockconsulting.com/' },
  openGraph: {
    title: 'Intelliblock Consulting — Nigeria Infrastructure Bankability Intelligence',
    description: 'Converting government policy signals into bankable Nigerian infrastructure transactions 12–18 months before market consensus.',
    url: 'https://intelliblockconsulting.com/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Intelliblock Consulting',
  url: 'https://intelliblockconsulting.com',
  description: "Africa's premier policy convergence infrastructure opportunity origination firm. Converting government policy signals into bankable Nigerian infrastructure transactions 12–18 months before market consensus.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Portsmouth',
    addressCountry: 'GB',
  },
  areaServed: ['Nigeria', 'Ghana', 'Kenya'],
  serviceType: ['Infrastructure Bankability Assessment', 'Policy Convergence Intelligence', 'Investment Due Diligence'],
  founder: {
    '@type': 'Person',
    name: 'Ayodeji Idowu',
    jobTitle: 'Managing Director',
  },
  sameAs: [],
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />

      {/* The Problem */}
      <section className="section section--white" aria-labelledby="problem-headline">
        <div className="container">
          <div className="problem-section">
            <h2 className="section-headline" id="problem-headline">The decisive variable is not funding. It is timing.</h2>
            <p>80% of African infrastructure projects that reach pre-feasibility never achieve financial close. The bottleneck is not available capital — DFI investment teams in London, Washington, and Abidjan are actively deploying. The bottleneck is bankable project identification, early.</p>
            <p>The gap between government policy signal and market mobilisation is 12 to 18 months. During that window, the project is either positioned correctly or it is not. Intelliblock operates in that window. Big 4 firms and regional boutiques enter when the tender is published.</p>
          </div>
        </div>
      </section>

      {/* Why Intelliblock */}
      <section className="section section--grey" aria-labelledby="differentiators-headline">
        <div className="container">
          <h2 className="section-headline" id="differentiators-headline">Why Intelliblock</h2>
          <p className="section-subhead">Four things that separate intelligence from advisory opinion.</p>
          <div className="differentiators-grid mt-8">

            <div className="differentiator-card">
              <div className="differentiator-card__icon" aria-hidden="true">01</div>
              <h3 className="differentiator-card__title">Ground Truth Over Estimates</h3>
              <p className="differentiator-card__body">Every verdict is scored against 100 weighted criteria drawn from DFI underwriting standards. No assumptions. No desk research shortcuts. Auditable evidence for every point.</p>
            </div>

            <div className="differentiator-card">
              <div className="differentiator-card__icon" aria-hidden="true">02</div>
              <h3 className="differentiator-card__title">Infrastructure-Specific Methodology</h3>
              <p className="differentiator-card__body">Built exclusively for African infrastructure origination. Not a sector-agnostic consulting framework adapted to Nigeria. Every scoring dimension reflects how DFIs actually approve deals.</p>
            </div>

            <div className="differentiator-card">
              <div className="differentiator-card__icon" aria-hidden="true">03</div>
              <h3 className="differentiator-card__title">Investor &amp; Regulator Alignment</h3>
              <p className="differentiator-card__body">Scoring maps directly to DFI investment committee requirements and Nigerian regulatory approval criteria — so the output speaks the language of both the capital provider and the approving authority.</p>
            </div>

            <div className="differentiator-card">
              <div className="differentiator-card__icon" aria-hidden="true">04</div>
              <h3 className="differentiator-card__title">Quantified Decision Support</h3>
              <p className="differentiator-card__body">A precise score and a verdict — Tier 1 Bankable, Conditional, or Not Yet Bankable — with category-level evidence. You receive a position, not a qualitative opinion.</p>
            </div>

          </div>
        </div>
      </section>

      <ServicesSection />

      <BankabilityShowcase />

      {/* Sector Coverage */}
      <div className="sector-bar" role="region" aria-label="Sectors covered">
        <div className="sector-bar__inner">
          <p className="sector-bar__label">Active coverage</p>
          <div className="sector-bar__sectors">
            <span className="sector-pill">⚡ Power</span>
            <span className="sector-pill">💧 Water &amp; Sanitation</span>
            <span className="sector-pill">🚢 Transport &amp; Ports</span>
            <span className="sector-pill">📡 Digital Infrastructure</span>
          </div>
        </div>
      </div>

      {/* Score Archive Preview */}
      <section className="section section--dark" aria-labelledby="archive-headline">
        <div className="container">
          <h2 className="section-headline section-headline--white" id="archive-headline">Recent intelligence — Bankability Score Archive</h2>
          <p className="section-subhead section-subhead--white">Retrospective scores applied against known outcomes. Framework directional accuracy: 80% across Gate 1 validation cohort.</p>
          <div className="table-scroll">
            <table className="data-table data-table--contained" aria-label="Recent bankability scores">
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Score</th>
                  <th scope="col">Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Azura-Edo IPP</td>
                  <td>Energy</td>
                  <td><span className="score score--green">91/100</span></td>
                  <td><span className="verdict-badge verdict-badge--green">Tier 1 — Bankable</span></td>
                </tr>
                <tr>
                  <td>Dangote Fertiliser Complex</td>
                  <td>Industrial</td>
                  <td><span className="score score--green">91/100</span></td>
                  <td><span className="verdict-badge verdict-badge--green">Tier 1 — Bankable</span></td>
                </tr>
                <tr>
                  <td>Lekki Deep Sea Port</td>
                  <td>Transport</td>
                  <td><span className="score score--green">80/100</span></td>
                  <td><span className="verdict-badge verdict-badge--green">Tier 1 — Bankable</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-7">
            <Link href="/intelligence" className="btn btn--primary">View full score archive &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Latest Intelligence */}
      <section className="section section--white" aria-labelledby="intel-headline">
        <div className="container">
          <h2 className="section-headline" id="intel-headline">Latest intelligence output</h2>
          <div className="grid-3 mt-8">

            <article className="card article-card" aria-labelledby="art1-title">
              <div className="article-card__tag">
                <span className="tag">Timing Thesis</span>
              </div>
              <h3 className="article-card__title" id="art1-title">The 12–18 Month Gap: How to Detect African Infrastructure Opportunities Before the Market Does</h3>
              <div className="article-card__meta">
                <span>April 2026</span>
                <span>8 min read</span>
              </div>
              <Link href="/intelligence" className="article-card__link">Read &rarr;</Link>
            </article>

            <article className="card article-card" aria-labelledby="art2-title">
              <div className="article-card__tag">
                <span className="tag">Bankability Standard</span>
              </div>
              <h3 className="article-card__title" id="art2-title">The Azura Model: What Nigeria&apos;s Most Successful Infrastructure Finance Tells Us About What Comes Next</h3>
              <div className="article-card__meta">
                <span>May 2026</span>
                <span>9 min read</span>
              </div>
              <Link href="/intelligence" className="article-card__link">Read &rarr;</Link>
            </article>

            <article className="card article-card" aria-labelledby="art3-title">
              <div className="article-card__tag">
                <span className="tag">Policy Signal</span>
              </div>
              <h3 className="article-card__title" id="art3-title">Presidential Priority Is Not Bankability: Why Nigeria&apos;s Most Visible Projects Often Score Below 60</h3>
              <div className="article-card__meta">
                <span>April 2026</span>
                <span>7 min read</span>
              </div>
              <Link href="/intelligence" className="article-card__link">Read &rarr;</Link>
            </article>

          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-strip" aria-labelledby="newsletter-headline">
        <div className="container">
          <div className="newsletter-strip__inner">
            <div className="newsletter-strip__copy">
              <h2 className="newsletter-strip__headline" id="newsletter-headline">Stay 12 months ahead of the market.</h2>
              <p className="newsletter-strip__sub">Signal Briefs and policy landscape summaries — delivered to infrastructure teams who cannot afford to be late.</p>
            </div>
            <form
              className="newsletter-strip__form"
              action="https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID"
              method="POST"
              aria-label="Subscribe to intelligence updates"
            >
              <label htmlFor="newsletter-email" className="visually-hidden">Your email address</label>
              <input
                type="email"
                id="newsletter-email"
                name="email"
                className="newsletter-strip__input"
                placeholder="Your work email"
                required
                autoComplete="email"
              />
              <button type="submit" className="btn btn--primary newsletter-strip__submit">Subscribe &rarr;</button>
            </form>
            <p className="newsletter-strip__disclaimer">No spam. Unsubscribe at any time. <Link href="/privacy">Privacy Policy</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
