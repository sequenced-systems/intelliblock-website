import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import ServicesSection from '../components/ServicesSection'
import BankabilityShowcase from '../components/BankabilityShowcase'
import ProofStrip from '../components/ProofStrip'

export const metadata: Metadata = {
  title: 'Intelliblock Consulting — Nigeria Infrastructure Bankability Intelligence',
  description: 'Intelliblock converts government policy signals into bankable Nigerian infrastructure transactions 12–18 months before market consensus, using the 100-Point Bankability Framework V3.6.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/' },
  openGraph: {
    title: 'Intelliblock Consulting — Nigeria Infrastructure Bankability Intelligence',
    description: 'Converting government policy signals into bankable Nigerian infrastructure transactions 12–18 months before market consensus.',
    url: 'https://www.intelliblockconsulting.com/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Intelliblock Consulting',
  url: 'https://www.intelliblockconsulting.com',
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
  sameAs: ['https://www.linkedin.com/company/109212959/'],
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />

      {/* Proof Strip — S2 */}
      <ProofStrip />

      {/* The Problem — S3 */}
      <ProblemSection />

      {/* Differentiators — S4 */}
      <section className="ib-diff" aria-labelledby="ib-diff-headline">
        <div className="ib-diff__inner">
          <div className="ib-diff__header" data-animate="fade-up">
            <h2 className="ib-diff__headline" id="ib-diff-headline">Why Intelliblock</h2>
            <p className="ib-diff__sub">Four things that separate intelligence from advisory opinion.</p>
          </div>
          <div className="ib-diff__grid" data-animate="stagger">

            <div className="ib-diff-card">
              <div className="ib-diff-card__num" aria-hidden="true">01</div>
              <h3 className="ib-diff-card__title">100-Point Bankability Framework V3.6</h3>
              <p className="ib-diff-card__body">Five proprietary dimensions of deal viability. Structured scoring with traceable evidence for every point awarded — no editorial discretion.</p>
            </div>

            <div className="ib-diff-card">
              <div className="ib-diff-card__num" aria-hidden="true">02</div>
              <h3 className="ib-diff-card__title">Policy Convergence Intelligence</h3>
              <p className="ib-diff-card__body">We track legislative, regulatory, DFI, and fiscal signals simultaneously. When 3+ domains converge: a Convergent Window opens.</p>
            </div>

            <div className="ib-diff-card">
              <div className="ib-diff-card__num" aria-hidden="true">03</div>
              <h3 className="ib-diff-card__title">12–18 Month Lead Time</h3>
              <p className="ib-diff-card__body">Intelligence issued before market consensus. Origination intelligence timed to the pre-mandate window — not research delivered after it forms.</p>
            </div>

            <div className="ib-diff-card">
              <div className="ib-diff-card__num" aria-hidden="true">04</div>
              <h3 className="ib-diff-card__title">Nigeria-First Precision</h3>
              <p className="ib-diff-card__body">No continental generalism. Deep single-market expertise with on-the-ground signal sourcing and DFI relationship access from London.</p>
            </div>

          </div>
        </div>
      </section>

      <ServicesSection />

      <BankabilityShowcase />

      {/* Sector Coverage — S7 */}
      <div className="sector-bar" role="region" aria-label="Sectors covered" data-animate="fade-up">
        <div className="sector-bar__inner">
          <p className="sector-bar__label">Active coverage</p>
          <div className="sector-bar__sectors">
            <span className="sector-pill">Power</span>
            <span className="sector-pill">Water &amp; Sanitation</span>
            <span className="sector-pill">Transport &amp; Ports</span>
            <span className="sector-pill">Digital Infrastructure</span>
            <span className="sector-pill">Road &amp; Rail</span>
            <span className="sector-pill">Housing &amp; Urban</span>
            <span className="sector-pill">Aviation</span>
            <span className="sector-pill">Healthcare</span>
          </div>
        </div>
      </div>

      {/* Score Archive Preview — S8 */}
      <section className="section section--dark" aria-labelledby="archive-headline" data-animate="fade-up">
        <div className="container">
          <h2 className="section-headline section-headline--white" id="archive-headline">Bankability Score Archive</h2>
          <p className="section-subhead section-subhead--white">Retrospective scores applied against known outcomes. Framework directional accuracy: 80% across Gate 1 validation cohort.</p>
          <div className="table-scroll">
            <table className="data-table data-table--contained" aria-label="Bankability score archive">
              <thead>
                <tr>
                  <th scope="col">Signal</th>
                  <th scope="col">Market</th>
                  <th scope="col">Score</th>
                  <th scope="col">Tier</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NLNG Train 7 — Bonny Island</td>
                  <td>Nigeria</td>
                  <td><span className="score score--green">87/100</span></td>
                  <td><span className="verdict-badge verdict-badge--green">Tier 1</span></td>
                  <td>2019</td>
                </tr>
                <tr>
                  <td>Azura-Edo IPP</td>
                  <td>Nigeria</td>
                  <td><span className="score score--green">91/100</span></td>
                  <td><span className="verdict-badge verdict-badge--green">Tier 1</span></td>
                  <td>2013</td>
                </tr>
                <tr>
                  <td>Bakassi Deep Seaport</td>
                  <td>Nigeria</td>
                  <td><span className="score score--green">77/100</span></td>
                  <td><span className="verdict-badge verdict-badge--amber">Tier 2</span></td>
                  <td>2026</td>
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
          <h2 className="section-headline" id="intel-headline" data-animate="fade-up">Latest intelligence output</h2>
          <div className="grid-3 mt-8" data-animate="stagger">

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

      {/* Newsletter CTA — S10 */}
      <section className="newsletter-strip" aria-labelledby="newsletter-headline" data-animate="fade-up">
        <div className="container">
          <div className="newsletter-strip__inner">
            <div className="newsletter-strip__copy">
              <h2 className="newsletter-strip__headline" id="newsletter-headline">Infrastructure intelligence. Issued before the window closes.</h2>
              <p className="newsletter-strip__sub">Monthly convergence alerts. Unsubscribe anytime.</p>
            </div>
            <form
              className="newsletter-strip__form"
              action="https://formspree.io/f/xwvzrqdz"
              method="POST"
              aria-label="Subscribe to intelligence updates"
            >
              {/* Honeypot — hidden from humans, catches bots */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="newsletter-website">Website</label>
                <input type="text" id="newsletter-website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
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
