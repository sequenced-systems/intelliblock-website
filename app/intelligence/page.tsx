import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Intelligence Archive',
  description: 'Nigeria infrastructure bankability score archive and published intelligence output. Gate 1: 4 of 5 retrospective scores directionally correct. Framework version V3.6.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/intelligence/' },
}

export default function IntelligencePage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero hero--medium page-offset" aria-labelledby="archive-hero-headline">
        <div className="hero__inner">
          <p className="hero__eyebrow">Intelligence</p>
          <h1 className="hero__headline" id="archive-hero-headline">Nigeria Infrastructure Bankability Score Archive</h1>
          <p className="hero__sub">5 retrospective scores validated against known outcomes. 4 of 5 directionally correct. Gate 1: passed.</p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar" role="region" aria-label="Archive key metrics">
        <div className="stats-bar__inner">
          <div className="stat-item">
            <span className="stat-item__number">5</span>
            <span className="stat-item__label">Retrospective scores in archive</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__number">4&thinsp;/&thinsp;5</span>
            <span className="stat-item__label">Directionally correct outcomes</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__number">80%</span>
            <span className="stat-item__label">Framework directional accuracy (Gate 1)</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__number">V3.6</span>
            <span className="stat-item__label">Current framework version</span>
          </div>
        </div>
      </div>

      {/* Sample Brief CTA */}
      <section className="section section--grey" aria-labelledby="sample-cta-headline">
        <div className="container" style={{textAlign:'center'}}>
          <p className="hero__eyebrow" style={{marginBottom:'0.75rem'}}>See the methodology in action</p>
          <h2 className="section-headline" id="sample-cta-headline" style={{marginBottom:'1rem'}}>Read a complete Signal Brief</h2>
          <p className="text-secondary max-w-520 mb-7 leading-relaxed mx-auto">
            A full sample bankability assessment — AFC/SMDF $1.3B Alumina Refinery, Nigeria, scored 80/100. Signal Brief + Scoring Card, ungated.
          </p>
          <Link href="/intelligence/sample" className="cta-primary" aria-label="Read sample Signal Brief">
            Read the sample brief &rarr;
          </Link>
        </div>
      </section>

      {/* Score Archive Table */}
      <section className="section section--white" aria-labelledby="score-archive-headline">
        <div className="container">
          <h2 className="section-headline" id="score-archive-headline">Bankability Score Archive — Gate 1</h2>
          <p className="section-subhead">All scores are retrospective — applied as at the signal date, before outcomes were known. Framework version at scoring: V3.2. Current framework: V3.6.</p>
          <div className="table-scroll">
            <table className="data-table data-table--contained" aria-label="Bankability score archive">
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Score</th>
                  <th scope="col">Effective Tier</th>
                  <th scope="col">Outcome</th>
                  <th scope="col">Directional</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Azura-Edo IPP</strong></td>
                  <td>Energy</td>
                  <td><span className="score score--green">91/100</span></td>
                  <td><span className="verdict-badge verdict-badge--green">Tier 1 — Bankable</span></td>
                  <td>Financial close achieved</td>
                  <td><span className="correct-badge">Correct</span></td>
                </tr>
                <tr>
                  <td><strong>Lekki Deep Sea Port</strong></td>
                  <td>Transport</td>
                  <td><span className="score score--green">80/100</span></td>
                  <td><span className="verdict-badge verdict-badge--green">Tier 1 — Bankable</span></td>
                  <td>Financial close achieved</td>
                  <td><span className="correct-badge">Correct</span></td>
                </tr>
                <tr>
                  <td><strong>Lagos–Ibadan Standard Gauge Railway</strong></td>
                  <td>Transport</td>
                  <td><span className="score score--grey">63 raw / Tier 3 eff.</span></td>
                  <td><span className="verdict-badge verdict-badge--grey">Tier 3 — Conditional gate</span></td>
                  <td>Completed — sovereign bilateral</td>
                  <td><span className="nuanced-badge">Nuanced</span></td>
                </tr>
                <tr>
                  <td><strong>Dangote Fertiliser Complex</strong></td>
                  <td>Industrial</td>
                  <td><span className="score score--green">91/100</span></td>
                  <td><span className="verdict-badge verdict-badge--green">Tier 1 — Bankable</span></td>
                  <td>Commissioned and operational</td>
                  <td><span className="correct-badge">Correct</span></td>
                </tr>
                <tr>
                  <td><strong>Mambilla Hydropower</strong></td>
                  <td>Energy</td>
                  <td><span className="score score--orange">21/100</span></td>
                  <td><span className="verdict-badge verdict-badge--orange">Weak Signal — Pre-bankable</span></td>
                  <td>Stalled — no financial close</td>
                  <td><span className="correct-badge">Correct</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="archive-note">
            Scores are retrospective — applied as at signal date, before outcomes were known. Gate 1 directional accuracy: 80–100%. The Lagos–Ibadan SGR result (sovereign bilateral completion) is classified as nuanced: the project completed via a route that bypasses standard DFI bankability criteria. Framework version at scoring: V3.2. Current framework: V3.6.
          </div>
        </div>
      </section>

      {/* Live HEARTBEAT Output */}
      <section className="section section--grey" aria-labelledby="live-output-headline">
        <div className="container" style={{textAlign:'center'}}>
          <p className="hero__eyebrow" style={{marginBottom:'0.75rem'}}>Active pipeline output</p>
          <h2 className="section-headline" id="live-output-headline" style={{marginBottom:'1rem'}}>Live Signal Brief Archive</h2>
          <p className="text-secondary max-w-520 mb-7 leading-relaxed mx-auto">
            Every brief scored ≥60/100 by the HEARTBEAT pipeline — updated daily. Titles and scores are public. Full text is gated.
          </p>
          <p className="text-secondary max-w-520 mb-7 leading-relaxed mx-auto" style={{fontSize:'0.875rem'}}>
            Briefs are drawn from a governed knowledge corpus of over 1,500 curated intelligence items across 39 monitored topic clusters. Each cluster carries a confidence index updated continuously as new evidence is processed — scores are not snapshots, they are tracked positions.
          </p>
          <Link href="/intelligence/briefs" className="cta-primary" aria-label="View live signal brief archive">
            View live archive &rarr;
          </Link>
        </div>
      </section>

      {/* Articles */}
      <section className="section section--white" aria-labelledby="articles-headline">
        <div className="container">
          <h2 className="section-headline" id="articles-headline">Intelligence Output — Published Articles</h2>
          <p className="section-subhead">Analysis published under the Intelliblock intelligence standard. Full text available via subscription access.</p>
          <div className="grid-3 mt-8">

            <article className="card article-card" aria-labelledby="a1-title">
              <div className="article-card__tag">
                <span className="tag">Timing Thesis</span>
              </div>
              <h3 className="article-card__title" id="a1-title">The 12–18 Month Gap: How to Detect African Infrastructure Opportunities Before the Market Does</h3>
              <div className="article-card__meta">
                <span>April 2026</span>
                <span>A1</span>
              </div>
              <Link href="/contact" className="article-card__link" aria-label="Read: The 12-18 Month Gap (full text via subscription)">Read &rarr;</Link>
            </article>

            <article className="card article-card" aria-labelledby="a2-title">
              <div className="article-card__tag">
                <span className="tag">Bankability Standard</span>
              </div>
              <h3 className="article-card__title" id="a2-title">The Azura Model: What Nigeria&apos;s Most Successful Infrastructure Finance Tells Us About What Comes Next</h3>
              <div className="article-card__meta">
                <span>May 2026</span>
                <span>A2</span>
              </div>
              <Link href="/contact" className="article-card__link" aria-label="Read: The Azura Model (full text via subscription)">Read &rarr;</Link>
            </article>

            <article className="card article-card" aria-labelledby="a3-title">
              <div className="article-card__tag">
                <span className="tag">Policy Signal</span>
              </div>
              <h3 className="article-card__title" id="a3-title">Presidential Priority Is Not Bankability: Why Nigeria&apos;s Most Visible Projects Often Score Below 60</h3>
              <div className="article-card__meta">
                <span>April 2026</span>
                <span>A3</span>
              </div>
              <Link href="/contact" className="article-card__link" aria-label="Read: Presidential Priority Is Not Bankability (full text via subscription)">Read &rarr;</Link>
            </article>

            <article className="card article-card" aria-labelledby="a4-title">
              <div className="article-card__tag">
                <span className="tag">Bankability Standard</span>
              </div>
              <h3 className="article-card__title" id="a4-title">The ESG Gate: Why Environmental Baseline Is the Single Most Disqualifying Criterion in DFI Infrastructure Finance</h3>
              <div className="article-card__meta">
                <span>May 2026</span>
                <span>A4</span>
              </div>
              <Link href="/contact" className="article-card__link" aria-label="Read: The ESG Gate (full text via subscription)">Read &rarr;</Link>
            </article>

            <article className="card article-card" aria-labelledby="b1-title">
              <div className="article-card__tag">
                <span className="tag">Nigeria Lens</span>
              </div>
              <h3 className="article-card__title" id="b1-title">Five Projects, Five Lessons from Nigeria&apos;s Infrastructure Finance Record</h3>
              <div className="article-card__meta">
                <span>May 2026</span>
                <span>B1</span>
              </div>
              <Link href="/contact" className="article-card__link" aria-label="Read: Five Projects, Five Lessons (full text via subscription)">Read &rarr;</Link>
            </article>

            <article className="card article-card" aria-labelledby="b5-title">
              <div className="article-card__tag">
                <span className="tag">Bankability Standard</span>
              </div>
              <h3 className="article-card__title" id="b5-title">The Infrapreneur Checklist: 12 Questions Before You Present to a DFI</h3>
              <div className="article-card__meta">
                <span>April 2026</span>
                <span>B5</span>
              </div>
              <Link href="/contact" className="article-card__link" aria-label="Read: The Infrapreneur Checklist (full text via subscription)">Read &rarr;</Link>
            </article>

            <article className="card article-card" aria-labelledby="a5-title">
              <div className="article-card__tag">
                <span className="tag">Nigeria Lens</span>
              </div>
              <h3 className="article-card__title" id="a5-title">Nigeria&apos;s Blue Economy Infrastructure: Ports, Fisheries, and the Coastal Logistics Opportunity</h3>
              <div className="article-card__meta">
                <span>May 2026</span>
                <span>A5</span>
              </div>
              <Link href="/contact" className="article-card__link" aria-label="Read: Nigeria Blue Economy (full text via subscription)">Read &rarr;</Link>
            </article>

            <article className="card article-card" aria-labelledby="a6-title">
              <div className="article-card__tag">
                <span className="tag">Timing Thesis</span>
              </div>
              <h3 className="article-card__title" id="a6-title">Policy Convergence: Why the Projects That Close Are Not the Projects That Were Announced</h3>
              <div className="article-card__meta">
                <span>May 2026</span>
                <span>A6</span>
              </div>
              <Link href="/contact" className="article-card__link" aria-label="Read: Policy Convergence (full text via subscription)">Read &rarr;</Link>
            </article>

            <article className="card article-card" aria-labelledby="a7-title">
              <div className="article-card__tag">
                <span className="tag">Intelligence Architecture</span>
              </div>
              <h3 className="article-card__title" id="a7-title">The Intelligence Architecture Behind Intelliblock: How a Governed Knowledge Corpus Turns Policy Noise into Bankable Signals</h3>
              <div className="article-card__meta">
                <span>May 2026</span>
                <span>A7</span>
              </div>
              <Link href="/contact" className="article-card__link" aria-label="Read: Intelligence Architecture (full text via subscription)">Read &rarr;</Link>
            </article>

          </div>
          <p className="text-sm text-secondary mt-4">Full articles available to Policy Convergence Intelligence subscribers and on request. Links above open the contact page.</p>
        </div>
      </section>

      {/* Email Gate */}
      <section className="section section--white" aria-labelledby="access-headline">
        <div className="container">
          <h2 className="section-headline" id="access-headline">Access the full intelligence archive</h2>
          <p className="text-secondary max-w-520 mb-7 leading-relaxed">
            Signal Briefs, scored summaries, and monthly intelligence notes — delivered as secure PDF to subscribers.
          </p>
          <div className="email-gate" role="form" aria-labelledby="gate-form-label">
            <p className="email-gate__headline" id="gate-form-label">Request archive access</p>
            <p className="email-gate__body">Enter your work email and we will send access details within one working day.</p>
            <form
              className="email-gate__form"
              action="https://formspree.io/f/xwvzrqdz"
              method="POST"
            >
              <input
                className="email-gate__input"
                type="email"
                name="email"
                placeholder="your@company.com"
                aria-label="Your work email address"
                required
              />
              <button className="email-gate__submit" type="submit">Get access &rarr;</button>
            </form>
            <p className="email-gate__note">No unsolicited messages. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

    </main>
  )
}
