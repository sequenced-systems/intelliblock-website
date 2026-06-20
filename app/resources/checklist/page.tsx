import type { Metadata } from 'next'
import Link from 'next/link'
import PrintButton from './PrintButton'

export const metadata: Metadata = {
  title: 'DFI Readiness Assessment Checklist — Intelliblock',
  description: '12 questions an infrastructure developer should answer before approaching a DFI. Derived from the 100-Point Bankability Framework V3.6.',
  robots: 'noindex',
}

const items = [
  {
    section: 'Commercial Viability',
    questions: [
      {
        n: 1,
        q: 'Is there a bankable off-taker or contracted revenue stream?',
        hint: 'A creditworthy off-taker (government agency, utility, anchor tenant) with a long-term offtake agreement or PPA. Without one, lenders cannot model debt service.',
      },
      {
        n: 2,
        q: 'Does the financial model demonstrate a sector-appropriate IRR above the DFI hurdle rate?',
        hint: 'DFIs typically require 12–18% IRR for infrastructure in frontier markets. The model must show how debt service is covered under base and stress scenarios.',
      },
      {
        n: 3,
        q: 'Is there documented demand evidence — not just market potential?',
        hint: 'Surveys, feasibility study demand estimates, or comparable project utilisation data from the same geography and sector. Projection-only demand is insufficient.',
      },
    ],
  },
  {
    section: 'Political Commitment & Regulatory Readiness',
    questions: [
      {
        n: 4,
        q: 'Is there explicit government commitment at the approving authority level?',
        hint: 'A letter of support, concession agreement, or gazetted policy directive from the ministry or agency with authority to grant the licence or concession. Verbal endorsements do not qualify.',
      },
      {
        n: 5,
        q: 'Is the regulatory framework for this sector currently operational?',
        hint: 'A published and active regulatory regime (NERC, NCC, ICRC, etc.) with precedent approvals in the same sector. Framework under development or pending legislation is a risk factor.',
      },
      {
        n: 6,
        q: 'Have the key veto players — agencies whose non-participation could block the project — been identified and engaged?',
        hint: 'Projects fail at implementation when agencies with blocking power are not aligned from the start. Map them: land agencies, state government, utilities with grid connection authority.',
      },
    ],
  },
  {
    section: 'Environmental & Social Baseline',
    questions: [
      {
        n: 7,
        q: 'Has an environmental and social screening been completed against IFC Performance Standards?',
        hint: 'IFC PS is the baseline standard for most DFIs. Category A projects (significant impact) require a full ESIA. Category B projects require an ESMP. Category C (minimal impact) require documentation of that determination.',
      },
      {
        n: 8,
        q: 'Are there resettlement, land acquisition, or community displacement risks — and have they been assessed?',
        hint: 'Unassessed resettlement risk is a DFI deal-stopper. PS5 (Land Acquisition and Involuntary Resettlement) is one of the most commonly triggered performance standards in Nigerian infrastructure.',
      },
    ],
  },
  {
    section: 'Implementation Readiness',
    questions: [
      {
        n: 9,
        q: 'Is there a credible implementation team with a comparable track record in this sector and market?',
        hint: 'DFIs assess the project developer and EPC contractor separately. A developer without a completed comparable project in Sub-Saharan Africa will face elevated scrutiny on implementation risk.',
      },
      {
        n: 10,
        q: 'Has a procurement and contracting strategy been defined?',
        hint: 'International competitive bidding (ICB) is required by most DFI procurement frameworks. Single-source procurement and domestic-only bidding processes are scrutinised.',
      },
    ],
  },
  {
    section: 'DFI Eligibility & Financial Structure',
    questions: [
      {
        n: 11,
        q: 'Have you identified which DFIs have an active mandate in this sector, and confirmed your project meets their minimum eligibility criteria?',
        hint: 'IFC, AfDB, BII, Proparco, DEG, and FMO each have sector focus, deal-size minimums, and geography requirements. A £5M project will not qualify for an IFC mandate floor of $20M.',
      },
      {
        n: 12,
        q: 'Is the financial model ready for lender due diligence — including sensitivity analysis and a base-case DSCR above 1.2x?',
        hint: 'Debt Service Coverage Ratio below 1.2x in the base case is a rejection trigger at most DFIs. Sensitivity tables showing DSCR under revenue shortfall and cost overrun scenarios are standard requirements.',
      },
    ],
  },
]

export default function ChecklistPage() {
  return (
    <main id="main-content">

      {/* Hero — minimal, print-friendly */}
      <section className="section section--white page-offset" aria-labelledby="checklist-headline">
        <div className="container">
          <div className="checklist-doc">
            <div className="checklist-doc__header">
              <p className="checklist-doc__eyebrow">Intelliblock Consulting — Free Resource</p>
              <h1 className="checklist-doc__title" id="checklist-headline">DFI Readiness Assessment Checklist</h1>
              <p className="checklist-doc__subtitle">12 questions to answer before approaching a DFI, development bank, or institutional lender. Derived from the 100-Point Bankability Framework V3.6.</p>
            </div>

            {items.map(sec => (
              <div key={sec.section} className="checklist-section">
                <p className="checklist-section__title">{sec.section}</p>
                {sec.questions.map(item => (
                  <div key={item.n} className="checklist-item">
                    <div className="checklist-item__num" aria-hidden="true">{item.n}</div>
                    <div className="checklist-item__body">
                      <p className="checklist-item__q">{item.q}</p>
                      <p className="checklist-item__hint">{item.hint}</p>
                    </div>
                    <div className="checklist-item__box" role="presentation" aria-hidden="true" />
                  </div>
                ))}
              </div>
            ))}

            <div className="checklist-verdict">
              <p className="checklist-verdict__title">Scoring your answers</p>
              <p className="checklist-verdict__body">
                10–12 confident &ldquo;yes&rdquo; answers: your project is likely ready for a DFI approach. Proceed to a Rapid Assessment Plus to confirm with a structured score.
                {' '}7–9: conditional readiness — identify which gaps are closes and on what timeline before approaching.
                {' '}Below 7: pre-bankable. A Rapid Assessment Plus will map the gap-closure path.
              </p>
            </div>

            <div className="checklist-doc__cta" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <PrintButton />
              <Link href="/services#ra-headline" className="btn btn--outline">
                Commission a Rapid Assessment Plus
              </Link>
            </div>

            <p className="text-sm text-secondary" style={{ marginTop: '2rem', lineHeight: '1.6' }}>
              © Intelliblock Consulting 2026. This checklist is for informational purposes only and does not constitute financial or investment advice. Criteria are derived from publicly available DFI standards and Intelliblock&apos;s Bankability Framework — not a guarantee of DFI approval.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
