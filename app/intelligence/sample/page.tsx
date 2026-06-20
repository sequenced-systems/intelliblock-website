import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sample Signal Brief: Alumina Refinery | Intelliblock',
  description: 'Sample bankability assessment: AFC/SMDF $1.3B Alumina Refinery MoU, Nigeria. Bankability score 80/100. Produced by the 100-Point Bankability Framework (scored at V3.2; current framework: V3.6).',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/intelligence/sample/' },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.intelliblockconsulting.com/' },
    { '@type': 'ListItem', position: 2, name: 'Intelligence', item: 'https://www.intelliblockconsulting.com/intelligence/' },
    { '@type': 'ListItem', position: 3, name: 'Sample Signal Brief', item: 'https://www.intelliblockconsulting.com/intelligence/sample/' },
  ],
}

export default function SampleBriefPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <section className="hero hero--medium page-offset" aria-labelledby="sample-hero-headline">
        <div className="hero__inner">
          <p className="hero__eyebrow">Sample Intelligence Output</p>
          <h1 className="hero__headline" id="sample-hero-headline">Signal Brief — Public Sample</h1>
          <p className="hero__sub">This is a redacted sample demonstrating Intelliblock&apos;s Policy Convergence Intelligence methodology. Internal scoring rationale is summarised; full methodology is proprietary.</p>
        </div>
      </section>

      {/* Brief Header Bar */}
      <div className="stats-bar" role="region" aria-label="Signal brief metadata">
        <div className="stats-bar__inner">
          <div className="stat-item">
            <span className="stat-item__number">80<span style={{fontSize:'0.6em'}}>/100</span></span>
            <span className="stat-item__label">Bankability Score</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__number" style={{fontSize:'1.2rem', lineHeight:'1.3'}}>Tier 1</span>
            <span className="stat-item__label">Bankable — immediate action</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__number" style={{fontSize:'1rem', lineHeight:'1.3'}}>Q1 2026</span>
            <span className="stat-item__label">Signal date</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__number" style={{fontSize:'1rem', lineHeight:'1.3'}}>Nigeria</span>
            <span className="stat-item__label">Market</span>
          </div>
        </div>
      </div>

      {/* Signal Brief Content */}
      <section className="section section--white" aria-labelledby="brief-headline">
        <div className="container">
          <div className="brief-document" role="article" aria-labelledby="brief-headline">

            <div className="brief-meta-block">
              <p className="brief-meta-label">SIGNAL BRIEF — [IB]</p>
              <table className="brief-meta-table" aria-label="Brief metadata">
                <tbody>
                  <tr><th scope="row">Date</th><td>2026-03-23</td></tr>
                  <tr><th scope="row">Market</th><td>Nigeria</td></tr>
                  <tr><th scope="row">Signal</th><td>AFC/Federal Government $1.3B Alumina Refinery MoU — transaction advisory window open</td></tr>
                  <tr><th scope="row">Source</th><td>ThisDay Live — AFC/SMDF signing ceremony, 2 March 2026</td></tr>
                  <tr><th scope="row">Bankability Score</th><td><strong>80/100 — Tier 1: Bankable</strong></td></tr>
                </tbody>
              </table>
            </div>

            <div className="brief-section">
              <h2 className="brief-section-heading">FINDING</h2>
              <p>Africa Finance Corporation and Nigeria&apos;s Federal Government (via the Solid Minerals Development Fund) signed an MoU on 2 March 2026 to jointly finance a $1.3B alumina refinery — the largest private mining-sector investment in Nigeria&apos;s history. The deal includes an on-site gas-fired cogeneration plant, a national geoscience mapping programme, and a structured investment vehicle for capital deployment. The transaction advisory mandate is open. This is a Tier 1 bankability signal.</p>
              <p>The opportunity is not the refinery. The opportunity is everything required to make it operational: power infrastructure, logistics corridors, water treatment, and the structured financing vehicles that bring AFC, SMDF, and co-investors to financial close. That advisory scope is uncontested and forming now.</p>
            </div>

            <div className="brief-section">
              <h2 className="brief-section-heading">EVIDENCE</h2>
              <ul className="brief-evidence-list">
                <li><strong>AFC/SMDF MoU signed 2 March 2026.</strong> Joint commitment to co-fund $1.3B alumina refinery. Bayer-process flowsheet. 20-year operational life at 95% utilisation. Output: 19 million metric tonnes total alumina. <em>(Source: ThisDay Live, 2 March 2026)</em></li>
                <li><strong>Macro impact projections confirmed at signing.</strong> $1.2B annual GDP contribution. $25B+ total economy impact over project life. $8B in foreign exchange earnings. <em>(Source: AFC/SMDF joint statement, March 2026)</em></li>
                <li><strong>Gas-fired cogeneration plant included in scope.</strong> On-site power generation is a deal-critical enabling infrastructure component — not covered by the primary refinery mandate. PPP advisory entry point confirmed. <em>(Source: Project technical summary, AFC, March 2026)</em></li>
                <li><strong>Nigeria CBN monetary environment improving.</strong> Inflation 34.8% (Q4 2024) → 15.1% (Q1 2026). Formal inflation-targeting framework confirmed 18 March 2026. CBN named Global Central Bank of the Year 2026. Falling cost of capital improves long-tenor infrastructure IRR. <em>(Source: Punch NG / CBN DG statement, 18 March 2026)</em> — +3pt bankability adjustment applied.</li>
              </ul>
            </div>

            <div className="brief-section">
              <h2 className="brief-section-heading">BANKABILITY SCORE SUMMARY — 80/100</h2>
              <div className="table-scroll">
                <table className="data-table" aria-label="Bankability score breakdown">
                  <thead>
                    <tr>
                      <th scope="col">Category</th>
                      <th scope="col">Score</th>
                      <th scope="col">Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Political Commitment</td>
                      <td><span className="score score--green">18/20</span></td>
                      <td>Federal Government co-signatory. SMDF is federal vehicle. Presidential-level mining mandate active.</td>
                    </tr>
                    <tr>
                      <td>Fiscal &amp; DFI Capacity</td>
                      <td><span className="score score--green">17/20</span></td>
                      <td>AFC anchor (investment-grade DFI). SMDF co-funder. Macro environment improving — cost of capital inflection underway.</td>
                    </tr>
                    <tr>
                      <td>Implementation Readiness</td>
                      <td><span className="score score--green">16/20</span></td>
                      <td>MoU signed. Investment vehicle in formation. Geoscience mapping commissioned. Execution timeline confirmed.</td>
                    </tr>
                    <tr>
                      <td>Commercial Viability</td>
                      <td><span className="score score--green">16/20</span></td>
                      <td>$1.2B annual GDP contribution projection. 20-year operational life. FX earnings positive. Cogeneration adds revenue stream.</td>
                    </tr>
                    <tr>
                      <td>Policy Convergence Signal</td>
                      <td><span className="score score--green">13/20</span></td>
                      <td>4-domain convergence: Industrial Policy + DFI + Energy + Monetary. Multi-domain alignment is rare — this is a Convergent Window.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="brief-section">
              <h2 className="brief-section-heading">OPPORTUNITY WINDOW</h2>
              <p><strong>Q1–Q3 2026.</strong> The transaction advisory mandate is forming alongside the investment vehicle. AFC and SMDF are structuring co-investor terms. The enabling infrastructure scope (power, logistics, water) is not covered by existing contracts. Advisors who establish position before financial close will anchor the mandate. After close, the window compresses to subcontractor scope only.</p>
              <p>The policy convergence making this bankable — Industrial + DFI + Energy + Monetary — is a rare simultaneous alignment. Nigeria&apos;s CBN stabilisation trajectory, AFC&apos;s confirmed capital commitment, and the federal government&apos;s active minerals mandate are reinforcing each other. This alignment is not guaranteed to persist.</p>
            </div>

            <div className="brief-section">
              <h2 className="brief-section-heading">RECOMMENDATION</h2>
              <p>Position for enabling infrastructure advisory on the AFC/SMDF Alumina Refinery transaction. Priority entry point: gas-fired cogeneration plant and logistics corridor — both are deal-critical, not yet under mandate, and directly aligned with IFC/DFI bankability requirements.</p>
            </div>

            <div className="brief-section">
              <h2 className="brief-section-heading">NEXT ACTION</h2>
              <p>Engage AFC transaction team and SMDF directly before Q3 2026. Frame as policy convergence intelligence — not a cold approach. The bankability case is pre-built.</p>
            </div>

          </div>

          {/* What this demonstrates */}
          <div className="demo-note" role="complementary" aria-labelledby="demo-note-headline">
            <h2 className="demo-note__headline" id="demo-note-headline">What this brief demonstrates</h2>
            <p>This signal was identified through Intelliblock&apos;s HEARTBEAT system — continuous monitoring of Nigerian policy, DFI deployment, and infrastructure procurement across five domains simultaneously.</p>
            <p>The 80/100 bankability score was produced by the <strong>100-Point Bankability Framework</strong> (scored at V3.2; current framework version: V3.6) — Intelliblock&apos;s proprietary scoring methodology assessing Political Commitment, Fiscal Capacity, Implementation Readiness, Commercial Viability, and Policy Convergence. The CBN monetary signal (+3pt adjustment) was captured in a separate daily scan and cross-applied to all active pipeline entries — an example of multi-domain convergence intelligence working as designed.</p>
            <p>This brief was produced within 21 days of the MoU signing. Standard market analysis had not yet identified the advisory opportunity.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section section--grey" aria-labelledby="cta-headline">
        <div className="container text-center">
          <h2 className="section-headline" id="cta-headline">Commission a bankability assessment for your pipeline</h2>
          <p className="text-secondary max-w-520 mb-7 leading-relaxed mx-auto">
            Each Signal Brief + Scoring Card is produced in 5–7 business days. Fixed scope, fixed price. No retainer required.
          </p>
          <div style={{display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap'}}>
            <Link href="/services" className="cta-primary" aria-label="See services and pricing">
              See services &amp; pricing
            </Link>
            <Link href="/contact" className="cta-secondary" aria-label="Contact Intelliblock">
              Commission an assessment
            </Link>
          </div>
          <p className="text-sm text-secondary mt-6">
            <Link href="/intelligence" style={{color:'inherit'}}>← Back to Intelligence Archive</Link>
          </p>
        </div>
      </section>

      {/* Legal disclaimer */}
      <section className="section section--white" aria-label="Legal disclaimer">
        <div className="container">
          <p className="disclaimer-text">
            This brief is a redacted sample produced by Intelliblock Consulting for informational purposes only. It does not constitute financial advice, investment advice, or any form of regulated professional advice. All factual claims are drawn from publicly available sources at the time of production. Recipients are responsible for independent verification before making investment or commercial decisions. © Intelliblock Consulting 2026. Not for redistribution without written consent.
          </p>
          <p className="disclaimer-text">
            <em>AI Disclosure (EU AI Act, Article 50): This intelligence output was produced using AI-assisted analysis tools. All outputs are reviewed and approved by the Managing Director before publication. Advisory only — not legal, financial, or investment advice.</em>
          </p>
        </div>
      </section>

    </main>
  )
}
