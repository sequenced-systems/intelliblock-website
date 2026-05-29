import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The 100-Point Bankability Framework V3.2',
  description: 'The analytical instrument that converts a Nigeria infrastructure policy signal into a scored bankability verdict. Category structure, score thresholds, binary gates, and a worked example.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/framework/' },
}

export default function FrameworkPage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero hero--medium page-offset" aria-labelledby="framework-headline">
        <div className="hero__inner">
          <p className="hero__eyebrow">Analytical Methodology</p>
          <h1 className="hero__headline" id="framework-headline">The 100-Point Bankability Framework V3.2</h1>
          <p className="hero__sub">The analytical instrument that converts a Nigeria infrastructure policy signal into a scored bankability verdict.</p>
          <p className="framework-caveat">Category structure published here. Sub-criteria weights are proprietary.</p>
        </div>
      </section>

      {/* What it is */}
      <section className="section section--white" aria-labelledby="what-headline">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-headline" id="what-headline">What the Framework is</h2>
            <p className="body-md">
              The Bankability Framework is the analytical instrument that converts a Nigeria infrastructure policy signal into a scored bankability verdict. Every Rapid Assessment Plus and every Policy Convergence Intelligence Signal Brief is scored against V3.2. The category structure is published here. The sub-criteria weights are not.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Architecture Table */}
      <section className="section section--grey" aria-labelledby="architecture-headline">
        <div className="container">
          <h2 className="section-headline" id="architecture-headline">Framework Architecture</h2>
          <p className="section-subhead">5 core categories (75 points) plus 3 signal amplifiers (25 points).</p>
          <div className="table-scroll">
            <table className="data-table data-table--contained" aria-label="Bankability Framework category structure">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Points</th>
                  <th scope="col">What it measures</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>C1 — Policy Alignment &amp; Regulatory Readiness</strong></td>
                  <td><span className="score">20</span></td>
                  <td>Legislative convergence, regulatory stability, policy sequencing</td>
                </tr>
                <tr>
                  <td><strong>C2 — Commercial Viability</strong></td>
                  <td><span className="score">20</span></td>
                  <td>Revenue model logic, sector-appropriate IRR benchmark, demand evidence</td>
                </tr>
                <tr>
                  <td><strong>C3 — DFI Readiness</strong></td>
                  <td><span className="score">15</span></td>
                  <td>DFI eligibility criteria, environmental/social baseline, standard conditions</td>
                </tr>
                <tr>
                  <td><strong>C4 — Implementation Track Record</strong></td>
                  <td><span className="score">15</span></td>
                  <td>Comparable project precedent, implementation capacity, contractor availability</td>
                </tr>
                <tr>
                  <td><strong>C5 — Political Economy &amp; Stakeholder Alignment</strong></td>
                  <td><span className="score">5</span></td>
                  <td>Executive priority, agency coordination, opposition mapping</td>
                </tr>
                <tr className="framework-total-row">
                  <td><strong>Core categories total</strong></td>
                  <td><strong>75</strong></td>
                  <td></td>
                </tr>
                <tr>
                  <td><strong>A1 — Policy Convergence Amplifier</strong></td>
                  <td><span className="score score--amber">10</span></td>
                  <td>Multi-domain signal intersection (4+ domains = maximum)</td>
                </tr>
                <tr>
                  <td><strong>A2 — Presidential/Executive Priority</strong></td>
                  <td><span className="score score--amber">10</span></td>
                  <td>Explicit head-of-government commitment + ministerial follow-through</td>
                </tr>
                <tr>
                  <td><strong>A3 — DFI Capital Alignment</strong></td>
                  <td><span className="score score--amber">5</span></td>
                  <td>Active DFI mandate with published Nigeria commitment</td>
                </tr>
                <tr className="framework-amplifier-row">
                  <td><em>Amplifiers total</em></td>
                  <td><em>25</em></td>
                  <td></td>
                </tr>
                <tr className="framework-total-row">
                  <td><strong>Total</strong></td>
                  <td><strong>100</strong></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Score Thresholds */}
      <section className="section section--white" aria-labelledby="thresholds-headline">
        <div className="container">
          <h2 className="section-headline" id="thresholds-headline">Score Thresholds</h2>
          <p className="section-subhead">Four verdict tiers determine the intelligence output and recommended next action.</p>
          <div className="grid-4 mt-7">

            <div className="threshold-card threshold-card--green">
              <div className="threshold-card__score score score--green">60–100</div>
              <div className="threshold-card__verdict">Bankable</div>
              <p className="threshold-card__note">RA+ recommended. Opportunity window open for origination or pre-positioning.</p>
            </div>

            <div className="threshold-card threshold-card--amber">
              <div className="threshold-card__score score score--amber">40–59</div>
              <div className="threshold-card__verdict">Conditional</div>
              <p className="threshold-card__note">Specific criteria improvements required before the project is bankable.</p>
            </div>

            <div className="threshold-card threshold-card--orange">
              <div className="threshold-card__score score score--orange">20–39</div>
              <div className="threshold-card__verdict">Pre-bankable</div>
              <p className="threshold-card__note">Monitor. Not actionable at present. Revisit on policy or fiscal trigger.</p>
            </div>

            <div className="threshold-card threshold-card--grey">
              <div className="threshold-card__score score score--grey">Below 20</div>
              <div className="threshold-card__verdict">Noise</div>
              <p className="threshold-card__note">Archive. Insufficient convergence for active intelligence tracking.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Binary Gates */}
      <section className="section section--grey" aria-labelledby="gates-headline">
        <div className="container">
          <h2 className="section-headline" id="gates-headline">Binary Gates</h2>
          <p className="section-subhead">Two binary gates are applied before any score is finalised.</p>
          <div className="grid-2 mt-7">

            <div className="gate-card">
              <p className="gate-card__label">ESG Gate — C3 sub-criterion</p>
              <h3 className="gate-card__title">Environmental / Social Baseline</h3>
              <p className="gate-card__body">A zero score on the environmental/social baseline sub-criterion within C3 caps the project at a maximum of 49/100, regardless of all other scores. No exceptions.</p>
            </div>

            <div className="gate-card">
              <p className="gate-card__label">Commercial Gate — C2 sub-criterion</p>
              <h3 className="gate-card__title">Revenue Model Viability</h3>
              <p className="gate-card__body">A zero score on the revenue model viability sub-criterion within C2 caps the project at 54/100. Intelliblock does not certify projects with no viable commercial model as bankable.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Sector IRR Bands */}
      <section className="section section--white" aria-labelledby="irr-headline">
        <div className="container">
          <h2 className="section-headline" id="irr-headline">Sector IRR Bands</h2>
          <p className="section-subhead">DFI-acceptable internal rate of return ranges applied in C2 commercial viability scoring.</p>
          <div className="table-scroll max-w-640">
            <table className="data-table data-table--contained" aria-label="Sector IRR bands">
              <thead>
                <tr>
                  <th scope="col">Sector</th>
                  <th scope="col">DFI-acceptable IRR range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Power generation and transmission</td>
                  <td><strong>12–18%</strong></td>
                </tr>
                <tr>
                  <td>Transport (road, rail, ports)</td>
                  <td><strong>8–14%</strong></td>
                </tr>
                <tr>
                  <td>Water and sanitation</td>
                  <td><strong>6–12%</strong></td>
                </tr>
                <tr>
                  <td>Telecoms and digital infrastructure</td>
                  <td><strong>15–22%</strong></td>
                </tr>
                <tr>
                  <td>Industrial zones and SEZs</td>
                  <td><strong>10–16%</strong></td>
                </tr>
                <tr>
                  <td>Urban infrastructure (housing, healthcare)</td>
                  <td><strong>8–13%</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Worked Example */}
      <section className="section section--grey" aria-labelledby="example-headline">
        <div className="container">
          <h2 className="section-headline" id="example-headline">Worked Example</h2>
          <p className="section-subhead">Retroactive score: Bakassi Deep Water Port Complex. Applied against V3.2 as at signal date, before outcomes were known.</p>

          <div className="worked-example">
            <div className="worked-example__header">
              <span className="worked-example__title">Bakassi Deep Water Port Complex — Nigeria</span>
              <span className="worked-example__score">80/100</span>
            </div>
            <div className="table-scroll">
              <table className="data-table" aria-label="Bakassi worked example score breakdown">
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Score</th>
                    <th scope="col">Key finding</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>C1 — Policy Alignment</td>
                    <td><span className="score score--green">16/20</span></td>
                    <td>Presidential priority confirmed. Cross River State PPP agency active.</td>
                  </tr>
                  <tr>
                    <td>C2 — Commercial Viability</td>
                    <td><span className="score score--green">16/20</span></td>
                    <td>West African trade corridor demand validated. Port IRR benchmark applied.</td>
                  </tr>
                  <tr>
                    <td>C3 — DFI Readiness</td>
                    <td><span className="score score--green">13/15</span></td>
                    <td>AfDB and Afreximbank active Nigeria mandates. ESIA baseline required.</td>
                  </tr>
                  <tr>
                    <td>C4 — Implementation Track Record</td>
                    <td><span className="score score--amber">11/15</span></td>
                    <td>Regional port precedent exists (Lekki). Contractor landscape thinner for deep-water.</td>
                  </tr>
                  <tr>
                    <td>C5 — Political Economy</td>
                    <td><span className="score score--green">4/5</span></td>
                    <td>Presidential endorsement explicit. Cross River State alignment confirmed.</td>
                  </tr>
                  <tr>
                    <td>A1 — Convergence</td>
                    <td><span className="score score--green">8/10</span></td>
                    <td>3-domain convergence: policy + DFI + fiscal signals active.</td>
                  </tr>
                  <tr>
                    <td>A2 — Presidential Priority</td>
                    <td><span className="score score--green">8/10</span></td>
                    <td>Explicit presidential commitment. Ministerial follow-through confirmed.</td>
                  </tr>
                  <tr>
                    <td>A3 — DFI Alignment</td>
                    <td><span className="score score--green">4/5</span></td>
                    <td>Afreximbank pre-mandate confirmation received.</td>
                  </tr>
                  <tr className="table-total-row">
                    <td><strong>Total</strong></td>
                    <td><strong className="score score--green text-lg">80/100</strong></td>
                    <td><strong>Tier 1 — Bankable</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="worked-example__verdict">
              <strong>Verdict:</strong> Bankable. Recommend RA+ for full due diligence. Opportunity window: 12 to 18 months before advisory mandate market enters.
            </div>
          </div>

          <div className="mt-8">
            <Link href="/contact" className="btn btn--primary">Download a sample RA+ summary &rarr;</Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="cta-strip">
        <div className="cta-strip__inner">
          <h2 className="cta-strip__headline">Have a project to score?</h2>
          <p className="cta-strip__sub">A Rapid Assessment Plus applies the full V3.2 Framework to your project with category-level evidence in 5 to 7 working days.</p>
          <div className="cta-strip__actions">
            <Link href="/services" className="btn btn--primary">View services &rarr;</Link>
            <Link href="/contact" className="btn btn--ghost">Get in contact</Link>
          </div>
        </div>
      </div>

    </main>
  )
}
