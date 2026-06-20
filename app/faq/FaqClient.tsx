'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: string | string[]
}

interface FaqCategory {
  label: string
  items: FaqItem[]
}

const faqData: FaqCategory[] = [
  {
    label: 'The Bankability Framework',
    items: [
      {
        q: 'What is the 100-Point Bankability Framework?',
        a: [
          'The 100-Point Bankability Framework is Intelliblock\'s proprietary scoring methodology for Nigerian infrastructure projects. It assesses five categories — Political Commitment, Fiscal & DFI Capacity, Implementation Readiness, Commercial Viability, and Policy Convergence Signal — each scored out of 20 points.',
          'The framework is versioned (currently V3.6), gate-cleared, and applied consistently across every assessment and signal brief. Versioning means you can track methodology changes across engagements and compare scores across time.'
        ],
      },
      {
        q: 'What does "bankable" mean in this context?',
        a: 'A bankable project is one that satisfies the minimum criteria for a DFI or institutional lender to proceed to investment committee — not necessarily that it will reach financial close, but that it can credibly be presented for financing consideration. The framework distinguishes four tiers: Tier 1 (75+, immediately actionable), Tier 2 (60–74, conditionally bankable), Tier 3 (40–59, investable with conditions), and Weak (<40, pre-bankable).',
      },
      {
        q: 'What are the binary gates?',
        a: [
          'Binary gates are pass/fail screens applied before the final score is calculated. There are two: the Environmental & Social baseline gate (derived from IFC Performance Standards compliance) and the Commercial Viability gate (minimum viable revenue model and demand evidence).',
          'A project that fails either gate is capped at Tier 2 regardless of its raw score, and the gate failure is flagged in the deliverable. This prevents overstatement — a project with strong political commitment but no viable commercial model will not score Tier 1.'
        ],
      },
      {
        q: 'How does the framework handle informal sector demand?',
        a: 'The framework includes an Informal Market Layer (IML) module for projects where informal-sector demand is material. The IML applies five sub-dimensions: demand evidence, payment rail coverage, last-mile access, social licence, and regulatory risk. IML scores are integrated into the Category 4 (Commercial Viability) assessment. For formal-sector projects where informal demand is not applicable, the IML module is omitted from the brief.',
      },
      {
        q: 'Why is the framework versioned?',
        a: 'Versioning allows the methodology to evolve as calibration evidence accumulates without breaking comparability between engagements. When a score from an older brief is cited, the version is always stated — so a V3.2 score of 80/100 can be distinguished from a V3.6 score of the same number. Version updates are logged in the framework documentation and disclosed in every deliverable.',
      },
    ],
  },
  {
    label: 'Rapid Assessment Plus',
    items: [
      {
        q: 'What documentation do I need to provide?',
        a: [
          'The minimum required to begin: project summary (scope, location, sector), any existing feasibility or prefeasibility studies, identification of likely off-taker or revenue counterparty, and your timeline for an investment committee decision.',
          'Additional documentation that improves assessment quality: environmental and social screening results, regulatory approvals or licence applications, government commitment letters, DFI correspondence, and comparable project precedent if available. The more documentation provided, the less inference is required — which directly improves evidence quality and therefore score confidence.'
        ],
      },
      {
        q: 'What is in the Bankable Brief deliverable?',
        a: 'The Bankable Brief is 12 to 18 pages and structured as: Executive Summary → Score Card (category breakdown with evidence) → Binary Gate Assessment → FINDING → EVIDENCE → OPPORTUNITY WINDOW → RECOMMENDATION → NEXT ACTION. It is delivered as a secure PDF within 5 to 7 working days of documentation receipt.',
      },
      {
        q: 'Can you score a project that is still at concept stage?',
        a: 'Yes, but the score will reflect the evidence available. Concept-stage projects typically score lower on Implementation Readiness and Commercial Viability due to limited documentation — and those gaps will be explicitly flagged. The assessment is most useful at concept stage as a gap analysis: it tells you precisely which criteria need to be satisfied before a DFI approach is viable.',
      },
      {
        q: 'Is the pilot pricing still available?',
        a: 'The first engagement is offered at the pilot rate of £12,000–15,000. Standard pricing is £15,000–25,000 depending on project complexity and sector. Contact us to confirm availability for your engagement timeline.',
      },
    ],
  },
  {
    label: 'Policy Convergence Intelligence',
    items: [
      {
        q: 'What is a Policy Convergence event?',
        a: 'A Policy Convergence event occurs when signals from two or more policy domains align simultaneously in ways that materially improve a project\'s bankability. Example: a new DFI deployment mandate (Domain 2) coinciding with a presidential infrastructure directive (Domain 1) and a regulatory framework update (Domain 3). Single-domain signals are monitored but do not typically trigger a full brief — multi-domain convergence does.',
      },
      {
        q: 'How current is the intelligence?',
        a: 'The HEARTBEAT monitoring system runs daily scans across five domains: legislation and policy, DFI deployment activity, regulatory publications, fiscal signals, and political economy. Signals are scored within 24 to 48 hours of publication. Briefs for high-scoring signals (≥40/100) are produced within 21 days of the triggering event — typically significantly faster.',
      },
      {
        q: 'Which sectors does the intelligence cover?',
        a: 'The primary coverage is across all Nigerian infrastructure sectors: energy (generation, transmission, gas, LNG), transport (ports, roads, rail), water and sanitation, digital infrastructure, and agri-logistics. Signal scoring prioritises sectors with active DFI mandates and multi-domain convergence events.',
      },
      {
        q: 'What is the minimum subscription commitment?',
        a: 'Three months. This reflects the signal cycle — most convergence events take 6 to 12 weeks to fully develop from initial detection to a brief-worthy signal. A single month does not provide enough pipeline to demonstrate value. After the initial three months, the subscription continues on a rolling monthly basis.',
      },
    ],
  },
  {
    label: 'Engagement & Independence',
    items: [
      {
        q: 'How do I start an engagement?',
        a: 'Book a 30-minute discovery call via the scheduling link on this site. The call establishes your mandate, the right service entry point, and what the first deliverable contains. Most clients are ready to commission within one call. If you prefer to correspond by email first, use the contact form.',
      },
      {
        q: 'What is Intelliblock\'s independence policy?',
        a: 'Intelliblock operates without retainer, equity stake, or commission arrangement with any developer, contractor, or DFI. Scores and recommendations reflect the Bankability Framework assessment only — not a prior relationship with a transaction party. This independence is disclosed in every deliverable.',
      },
      {
        q: 'Can you work with clients outside Nigeria?',
        a: 'Yes. The service is positioned for DFI teams and investors operating from London, Frankfurt, Washington DC, Nairobi, or Lagos — wherever mandates intersect with Nigerian infrastructure. Intelliblock is UK-based (Portsmouth, GMT+0) with a dual-jurisdiction operating model and scheduled Nigeria visits at months 2, 6, and 10 of each operational year.',
      },
      {
        q: 'Are outputs covered by legal professional privilege?',
        a: 'No. Intelliblock produces intelligence analysis, not legal or financial advice. Outputs are advisory only and do not constitute a regulated professional service under UK FCA rules or Nigerian SEC frameworks. Recipients are responsible for independent verification and their own legal and financial advice before making investment or commercial decisions.',
      },
    ],
  },
]

function FaqItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false)
  const answer = Array.isArray(item.a) ? item.a : [item.a]

  return (
    <div className="faq-item">
      <button
        className="faq-trigger"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{item.q}</span>
        <span className="faq-trigger__icon" aria-hidden="true">+</span>
      </button>
      <div className={`faq-answer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="faq-answer__inner">
          {answer.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function FaqClient() {
  return (
    <div className="faq-section">
      {faqData.map(cat => (
        <div key={cat.label} className="faq-category">
          <p className="faq-category-label">{cat.label}</p>
          {cat.items.map(item => (
            <FaqItem key={item.q} item={item} />
          ))}
        </div>
      ))}
    </div>
  )
}
