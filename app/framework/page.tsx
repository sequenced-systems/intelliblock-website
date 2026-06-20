import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The 100-Point Bankability Framework V3.6',
  description: 'The analytical instrument that converts a Nigeria infrastructure policy signal into a scored bankability verdict. Category structure, score thresholds, binary gates, and a worked example.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/framework/' },
}

export default function FrameworkPage() {
  return (
    <main id="main-content">

      {/* Hero */}
      <section className="hero hero--medium page-offset" aria-labelledby="framework-headline">
        <div className="hero__inner">
          <p className="hero__eyebrow">Analytical Methodology</p>
          <h1 className="hero__headline" id="framework-headline">The 100-Point Bankability Framework V3.6</h1>
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
              The Bankability Framework is the analytical instrument that converts a Nigeria infrastructure policy signal into a scored bankability verdict. Every Rapid Assessment Plus and every Policy Convergence Intelligence Signal Brief is scored against V3.6. The category structure is published here. The sub-criteria weights are not.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Pipeline */}
      <section className="section section--grey" aria-labelledby="pipeline-headline">
        <div className="container">
          <h2 className="section-headline" id="pipeline-headline">How a Signal Becomes a Brief</h2>
          <p className="section-subhead">Five stages from policy event to bankability verdict. Each stage has a hard rule — no editorial discretion at any point in the pipeline.</p>
          <div className="pipeline">

            <div className="pipeline-stage">
              <div className="pipeline-stage__num" aria-hidden="true">01</div>
              <h3 className="pipeline-stage__title">Signal Detected</h3>
              <p className="pipeline-stage__body">Daily monitoring across 5 domains: legislative, regulatory, DFI deployment, fiscal policy, and political economy.</p>
            </div>

            <div className="pipeline-arrow" aria-hidden="true">&rarr;</div>

            <div className="pipeline-stage">
              <div className="pipeline-stage__num" aria-hidden="true">02</div>
              <h3 className="pipeline-stage__title">Convergence Check</h3>
              <p className="pipeline-stage__body">How many domains carry active signals (K)? K&thinsp;≥&thinsp;2 triggers full scoring. K&thinsp;=&thinsp;1 is logged and monitored only.</p>
            </div>

            <div className="pipeline-arrow" aria-hidden="true">&rarr;</div>

            <div className="pipeline-stage">
              <div className="pipeline-stage__num" aria-hidden="true">03</div>
              <h3 className="pipeline-stage__title">100-Point Scoring</h3>
              <p className="pipeline-stage__body">Five core categories scored (Cat1–Cat5, 75 pts). Three signal amplifiers applied (Amp1–Amp3, 25 pts). Sub-criteria weights are proprietary.</p>
            </div>

            <div className="pipeline-arrow" aria-hidden="true">&rarr;</div>

            <div className="pipeline-stage">
              <div className="pipeline-stage__num" aria-hidden="true">04</div>
              <h3 className="pipeline-stage__title">Binary Gate Check</h3>
              <p className="pipeline-stage__body">ESG Gate, Commercial Gate, and E&amp;S Conditional Gate evaluated. Any triggered gate reduces the effective tier below the raw score.</p>
            </div>

            <div className="pipeline-arrow" aria-hidden="true">&rarr;</div>

            <div className="pipeline-stage">
              <div className="pipeline-stage__num" aria-hidden="true">05</div>
              <h3 className="pipeline-stage__title">Brief Delivered</h3>
              <p className="pipeline-stage__body">Bankability verdict and tier classification issued. Recommendation and next action are time-bound to the opportunity window.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Framework Architecture Table */}
      <section className="section section--grey" aria-labelledby="architecture-headline">
        <div className="container">
          <h2 className="section-headline" id="architecture-headline">Framework Architecture</h2>
          <p className="section-subhead">5 core categories (75 points) plus 3 signal amplifiers (25 points). Category 4 carries a 5-point conditional uplift for qualifying informal market projects.</p>
          <div className="table-scroll">
            <table className="data-table data-table--contained" aria-label="Bankability Framework V3.6 category structure">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Points</th>
                  <th scope="col">What it measures</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Cat1 — Political &amp; Regulatory Foundation</strong></td>
                  <td><span className="score">15</span></td>
                  <td>Presidential mandate, legislative backing, policy consistency, multi-administration continuity, regulatory stability</td>
                </tr>
                <tr>
                  <td><strong>Cat2 — Fiscal &amp; Financial Architecture</strong></td>
                  <td><span className="score">15</span></td>
                  <td>Sovereign fiscal headroom, DFI co-financing signal, revenue model credibility, equity structure</td>
                </tr>
                <tr>
                  <td><strong>Cat3 — Implementation Readiness</strong></td>
                  <td><span className="score">15</span></td>
                  <td>Land tenure and site control, technical feasibility, execution momentum, procurement framework, sponsor track record</td>
                </tr>
                <tr>
                  <td><strong>Cat4 — Commercial Viability</strong></td>
                  <td><span className="score">20</span></td>
                  <td>Projected IRR vs sector benchmark, offtake and demand certainty, currency and repatriation risk, financial model maturity, development impact. Base: 15 pts. +5 pts conditional uplift for qualifying informal market projects (IML trigger).</td>
                </tr>
                <tr>
                  <td><strong>Cat5 — ESG &amp; Climate Compliance</strong></td>
                  <td><span className="score">10</span></td>
                  <td>IFC Performance Standards alignment (PS1–PS8), climate risk classification, community engagement, local content compliance. Gating category — see Binary Gates below.</td>
                </tr>
                <tr className="framework-total-row">
                  <td><strong>Core categories total</strong></td>
                  <td><strong>75</strong></td>
                  <td></td>
                </tr>
                <tr>
                  <td><strong>Amp1 — Policy Convergence</strong></td>
                  <td><span className="score score--amber">12</span></td>
                  <td>Multi-domain signal intersection — number of actively aligned policy domains (K) and Presidential Priority designation</td>
                </tr>
                <tr>
                  <td><strong>Amp2 — Continental Integration</strong></td>
                  <td><span className="score score--amber">8</span></td>
                  <td>AfCFTA mandate alignment, confirmed cross-border infrastructure dimension, DFI continental strategy activation</td>
                </tr>
                <tr>
                  <td><strong>Amp3 — Investor Appetite</strong></td>
                  <td><span className="score score--amber">5</span></td>
                  <td>Institutional investor pre-mandate signal, active DFI commitment or financial advisory agreement confirmed</td>
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
          <p className="section-subhead">Five verdict tiers determine the intelligence output and recommended next action. Effective tier may be lower than raw score if a binary gate is triggered.</p>
          <div className="table-scroll mt-7">
            <table className="data-table data-table--contained" aria-label="Score threshold tiers">
              <thead>
                <tr>
                  <th scope="col">Raw Score</th>
                  <th scope="col">Verdict</th>
                  <th scope="col">Recommended action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="score score--green">80–100</span></td>
                  <td><span className="verdict-badge verdict-badge--green">Tier 1 — Bankable</span></td>
                  <td>Full RA+ commissioned. Opportunity window open for origination or pre-positioning.</td>
                </tr>
                <tr>
                  <td><span className="score score--green">60–79</span></td>
                  <td><span className="verdict-badge verdict-badge--green">Tier 2 — Structured Bankable</span></td>
                  <td>RA+ recommended. Specific conditions identified; project is bankable with targeted intervention.</td>
                </tr>
                <tr>
                  <td><span className="score score--amber">40–59</span></td>
                  <td><span className="verdict-badge verdict-badge--amber">Tier 3 — Watch List</span></td>
                  <td>Monitor. Not client-ready until conditions met. Revisit on policy or fiscal trigger.</td>
                </tr>
                <tr>
                  <td><span className="score score--orange">20–39</span></td>
                  <td><span className="verdict-badge verdict-badge--orange">Weak Signal</span></td>
                  <td>Note in log. Not actionable at present. Revisit on material policy trigger only.</td>
                </tr>
                <tr>
                  <td><span className="score score--grey">Below 20</span></td>
                  <td><span className="verdict-badge verdict-badge--grey">Noise</span></td>
                  <td>Archive. Insufficient convergence for active intelligence tracking.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Binary Gates */}
      <section className="section section--grey" aria-labelledby="gates-headline">
        <div className="container">
          <h2 className="section-headline" id="gates-headline">Binary Gates</h2>
          <p className="section-subhead">Four gate conditions are evaluated before any score is finalised. Gates can reduce the effective tier below the raw score.</p>
          <div className="grid-2 mt-7">

            <div className="gate-card">
              <p className="gate-card__label">ESG Gate — Cat5</p>
              <h3 className="gate-card__title">Minimum ESG Compliance</h3>
              <p className="gate-card__body">Cat5 &lt; 3/10 caps the effective score at Tier 3 (maximum 59/100), regardless of all other scores. DFI capital is inaccessible without minimum ESG compliance. No exceptions.</p>
            </div>

            <div className="gate-card">
              <p className="gate-card__label">Commercial Gate — Cat4</p>
              <h3 className="gate-card__title">Revenue Model Viability</h3>
              <p className="gate-card__body">Cat4 &lt; 8/20 caps the effective score at Tier 2 (maximum 79/100). Intelliblock does not certify projects without demonstrated commercial viability as Tier 1 Bankable.</p>
            </div>

            <div className="gate-card">
              <p className="gate-card__label">E&amp;S Conditional Gate — V3.6</p>
              <h3 className="gate-card__title">IFC Performance Standard Failure</h3>
              <p className="gate-card__body">IFC PS5 (Involuntary Resettlement), PS7 (Indigenous Peoples), or PS8 (Cultural Heritage) failure without a Resettlement Action Plan in preparation caps the effective tier at Tier 2 and activates DFI-grade notation — even when Cat5 ≥ 3/10.</p>
            </div>

            <div className="gate-card">
              <p className="gate-card__label">DFI-Grade Notation — Cat5</p>
              <h3 className="gate-card__title">DFI Preparation Required</h3>
              <p className="gate-card__body">Cat5 &lt; 5/10 without a PS gate failure adds DFI-grade notation to the output. Signals that environmental and social preparation work is required before DFI submission. No tier cap.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Framework Version History */}
      <section className="section section--white" aria-labelledby="version-headline">
        <div className="container">
          <h2 className="section-headline" id="version-headline">Framework Version History</h2>
          <p className="section-subhead">The framework has been refined across six versions since V3.1. Every version change is documented here. No retrospective score has changed tier as a result of any version migration.</p>
          <div className="changelog-block">
            <div className="changelog-entry">
              <span className="changelog-entry__version">V3.6 — Current</span>
              <p className="changelog-entry__note">E&amp;S Conditional Gate activated: IFC PS5 (Involuntary Resettlement), PS7, and PS8 failure without a Resettlement Action Plan in preparation caps the effective tier at Tier 2. SD4 Social Licence formalised as an observation dimension (0 points) in the Informal Market Layer.</p>
            </div>
            <div className="changelog-entry">
              <span className="changelog-entry__version">V3.5</span>
              <p className="changelog-entry__note">Cat5 ESG gate sharpened: PS FAIL caps Cat5 sub-score at 1/3 of the category maximum. Multi-signal cluster trigger added for parallel domain dispatch.</p>
            </div>
            <div className="changelog-entry">
              <span className="changelog-entry__version">V3.4</span>
              <p className="changelog-entry__note">Category 4 restructured: base 15 pts with a conditional 5-pt uplift for qualifying informal market projects (Informal Market Layer). IRR benchmark bands formalised per sector. Development impact sub-criterion introduced.</p>
            </div>
            <div className="changelog-entry">
              <span className="changelog-entry__version">V3.3 — Gate 1 calibration baseline</span>
              <p className="changelog-entry__note">Calibration database established. Retrospective cohort validated at N=10. Brier score confirmed within calibrated range. Gate 1 cohort defined at this version — all subsequent scoring uses V3.3+ as baseline.</p>
            </div>
            <div className="changelog-entry">
              <span className="changelog-entry__version">V3.1 → V3.2</span>
              <p className="changelog-entry__note">Initial scoring architecture across five dimensions. V3.2 introduced the policy convergence amplifier (Amp1) as a distinct category. All retrospective archive scores have been recalculated at V3.6 equivalent criteria. No score changed tier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sector IRR Bands */}
      <section className="section section--white" aria-labelledby="irr-headline">
        <div className="container">
          <h2 className="section-headline" id="irr-headline">Sector IRR Bands</h2>
          <p className="section-subhead">DFI-acceptable internal rate of return ranges applied in Cat4 commercial viability scoring. Scoring a power project against a water project benchmark is a category error — V3.6 eliminates it.</p>
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
          <p className="section-subhead">Bankability score: Bakassi Deep Seaport Complex, Nigeria. Scored under V3.5 as of April 2026. AfreximBank advisory mandate confirmed May 2024 — directionally correct.</p>

          <div className="worked-example">
            <div className="worked-example__header">
              <span className="worked-example__title">Bakassi Deep Seaport Complex — Nigeria</span>
              <span className="worked-example__score">77/100</span>
            </div>
            <div className="table-scroll">
              <table className="data-table" aria-label="Bakassi worked example score breakdown V3.6">
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Score</th>
                    <th scope="col">Key finding</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cat1 — Political &amp; Regulatory Foundation</td>
                    <td><span className="score score--green">12/15</span></td>
                    <td>K=4 domain convergence confirmed. Presidential Priority designation active. ICRC Certificate of Compliance issued.</td>
                  </tr>
                  <tr>
                    <td>Cat2 — Fiscal &amp; Financial Architecture</td>
                    <td><span className="score score--green">14/15</span></td>
                    <td>AfreximBank $3.5B Financial Advisory Agreement signed. AfDB $100M ARISE IIP equity. DBFOT concession — no sovereign capital exposure.</td>
                  </tr>
                  <tr>
                    <td>Cat3 — Implementation Readiness</td>
                    <td><span className="score score--green">14/15</span></td>
                    <td>ARISE IIP 80% concession equity confirmed. Lekki Port precedent. Brownfield expansion plus greenfield berth. EPC procurement at advanced stage.</td>
                  </tr>
                  <tr>
                    <td>Cat4 — Commercial Viability</td>
                    <td><span className="score score--amber">12/20</span></td>
                    <td>IML not triggered (deep-water port: formal sector). Base sub-criteria: 12/15. Port IRR benchmark confirmed with blended finance adjustment. Trade corridor demand validated.</td>
                  </tr>
                  <tr>
                    <td>Cat5 — ESG &amp; Climate Compliance</td>
                    <td><span className="score score--red">4/10</span></td>
                    <td>E&amp;S Conditional Gate ACTIVE — PS5 FAIL (Usung Inwang/Idua Inwang resettlement disputes; no RAP commissioned at scoring date). DFI-grade notation ACTIVE. ESG Gate not triggered (Cat5=4≥3).</td>
                  </tr>
                  <tr>
                    <td>Amp1 — Policy Convergence</td>
                    <td><span className="score score--green">11/12</span></td>
                    <td>K=4 active domains (Economic Development, Trade, Infrastructure, Industrial). Presidential Priority confirmed.</td>
                  </tr>
                  <tr>
                    <td>Amp2 — Continental Integration</td>
                    <td><span className="score score--amber">6/8</span></td>
                    <td>AfCFTA gateway positioning. Afreximbank continental mandate. Cross River State PPP coordination confirmed.</td>
                  </tr>
                  <tr>
                    <td>Amp3 — Investor Appetite</td>
                    <td><span className="score score--green">4/5</span></td>
                    <td>AfreximBank FAA confirmed. AfDB $100M ARISE IIP equity. Pre-mandate DFI signal strong.</td>
                  </tr>
                  <tr className="table-total-row">
                    <td><strong>Total</strong></td>
                    <td><strong className="score score--green text-lg">77/100</strong></td>
                    <td><strong>Tier 2 — Structured Bankable</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="worked-example__verdict">
              <strong>Verdict:</strong> Tier 2 — Structured Bankable. E&amp;S Conditional Gate active: commission Resettlement Action Plan before DFI submission. Path to Tier 1: PS5 RAP in preparation (+2–3 Cat5) + second DFI commitment (+1 Amp3) + development impact metrics (+1 Cat4) = ~82/100 estimated.
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
          <p className="cta-strip__sub">A Rapid Assessment Plus applies the full V3.6 Framework to your project with category-level evidence in 5 to 7 working days.</p>
          <div className="cta-strip__actions">
            <Link href="/services" className="btn btn--primary">View services &rarr;</Link>
            <Link href="/contact" className="btn btn--ghost">Contact us</Link>
          </div>
        </div>
      </div>

    </main>
  )
}
