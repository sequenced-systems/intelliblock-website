import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Intelligence System',
  description: 'Intelliblock is an AI-native intelligence infrastructure built to detect bankable Nigerian infrastructure opportunities 12 to 18 months before the market. The structural argument and founder credentials.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/about/' },
}

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero hero--medium page-offset" aria-labelledby="about-headline">
        <div className="hero__inner">
          <p className="hero__eyebrow">About Intelliblock</p>
          <h1 className="hero__headline" id="about-headline">The Intelligence System</h1>
          <p className="hero__sub">Intelliblock is an AI-native intelligence infrastructure built to detect bankable infrastructure opportunities in the Nigerian market 12 to 18 months before the market moves. Most consultancies added AI as an afterthought. Intelliblock was built around it.</p>
        </div>
      </section>

      {/* Structural Argument */}
      <section className="section section--white" aria-labelledby="structural-headline">
        <div className="container">
          <h2 className="section-headline" id="structural-headline">The structural argument</h2>
          <div className="structural-argument">
            <p>
              Nigeria&apos;s infrastructure finance process has a documented 12 to 18 month gap between government policy signal and market mobilisation. Under the ICRC PPP framework, the cycle from Project Identification to Transaction Advisory Appointment runs 12 to 18 months for standard-track projects — the point at which Big 4 firms and boutiques receive their mandate call.
            </p>
            <p>
              Three comparable Sub-Saharan African transactions (Taiba N&apos;Diaye Wind, Senegal, 2016–2018; Azito Phase 4, Côte d&apos;Ivoire, 2014–2016; Kenya Solar Feed-in Tariff Reform, 2019–2020) confirm this timing: detection of enabling regulations to advisory mandate appointment ran 12 to 15 months in each case.
            </p>
            <p>
              Intelliblock operates at Stage 2 to 3 — the policy convergence window. The market enters at Stage 5 to 6. That gap is structural. Big 4 economics require a confirmed mandate before substantive work begins. Intelliblock&apos;s AI-native infrastructure (~£70/month) means the detection and pre-scoring work costs almost nothing. The lead time is a cost model advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Why AI-Native Matters */}
      <section className="section section--dark" aria-labelledby="ai-native-headline">
        <div className="container">
          <h2 className="section-headline section-headline--white" id="ai-native-headline">Why AI-native matters</h2>
          <p className="section-subhead section-subhead--white mb-8">Three numbers that explain the structural cost advantage.</p>
          <div className="grid-3">
            <div className="metric-card">
              <span className="metric-card__value">£70/mo</span>
              <p className="metric-card__label">Cost of the AI detection and pre-scoring infrastructure. Comparable Big 4 pre-engagement resource cost: £8,000–15,000.</p>
            </div>
            <div className="metric-card">
              <span className="metric-card__value">12–18 mo</span>
              <p className="metric-card__label">Market lead time advantage. The window between policy signal and advisory mandate appointment.</p>
            </div>
            <div className="metric-card">
              <span className="metric-card__value">V3.2</span>
              <p className="metric-card__label">Current version of the Bankability Framework. Named, versioned, gate-cleared. Not an ad hoc assessment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Credentials */}
      <section className="section section--white" aria-labelledby="founder-headline">
        <div className="container">
          <h2 className="section-headline" id="founder-headline">Founder credentials</h2>
          <div className="max-w-720">
            <p className="body-md leading-loose">
              Intelliblock is run by Ayodeji Idowu, a project finance professional with dual-jurisdiction experience across the UK and Nigerian infrastructure investment markets. Prior work includes DFI-adjacent advisory, infrastructure origination, and financial structuring in Sub-Saharan African markets. Based in Portsmouth, UK (GMT+0).
            </p>
            <p className="body-md leading-loose">
              Nigeria visits scheduled months 2, 6, and 10 of each operational year — for developer and DFI relationship building. The contacts exist before the visit. The dual-jurisdiction base is a deliberate structural choice: UK regulatory literacy and DFI relationship access (London is the hub for IFC, Afreximbank, BII, and AfDB European operations) combined with direct Nigeria market intelligence sourced on the ground.
            </p>
          </div>
        </div>
      </section>

      {/* What We Are Not */}
      <section className="section section--dark" aria-labelledby="not-headline">
        <div className="container">
          <h2 className="section-headline section-headline--white" id="not-headline">What we are not</h2>
          <p className="section-subhead section-subhead--white mb-7">Four boundaries that define where Intelliblock operates and where it does not.</p>
          <ul className="not-list max-w-720">
            <li>Not a Big 4 substitute. We operate before their mandate process begins.</li>
            <li>Not a news aggregator. Every signal is scored before it reaches a client.</li>
            <li>Not a database subscription. Every signal is assessed and scored before it reaches you.</li>
            <li>Not a traditional boutique. The cost model is built for early-stage detection — before mandate fees apply.</li>
          </ul>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="cta-strip cta-strip--light">
        <div className="cta-strip__inner">
          <h2 className="cta-strip__headline cta-strip__headline--dark">See the methodology in action</h2>
          <p className="cta-strip__sub cta-strip__sub--dark">The Framework page publishes the full category architecture, score thresholds, binary gates, and a worked example.</p>
          <div className="cta-strip__actions">
            <Link href="/framework" className="btn btn--primary">View the Framework &rarr;</Link>
            <Link href="/contact" className="btn btn--outline">Contact us</Link>
          </div>
        </div>
      </div>

    </main>
  )
}
