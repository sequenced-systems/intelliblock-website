import type { Metadata } from 'next'
import Link from 'next/link'
import briefsData from '@/public/data/briefs.json'

export const metadata: Metadata = {
  title: 'Live Signal Brief Archive',
  description: 'Rolling archive of Intelliblock HEARTBEAT signal briefs scored ≥60/100 by the 100-Point Bankability Framework. Nigeria infrastructure intelligence updated daily.',
  alternates: { canonical: 'https://intelliblockconsulting.com/intelligence/briefs/' },
}

interface SignalBrief {
  signal_id: string
  title: string
  market: string
  sector: string
  domains: string[]
  bankability_score: number
  tier: string
  framework_version: string
  scored_at: string
  delivered_at: string
  admiralty_code: string
}

interface BriefsPayload {
  exported_at: string | null
  count: number
  briefs: SignalBrief[]
}

const data = briefsData as BriefsPayload

function scoreClass(score: number): string {
  if (score >= 80) return 'score--green'
  return 'score--amber'
}

function tierBadgeClass(tier: string): string {
  if (tier === 'Bankable') return 'verdict-badge--green'
  if (tier === 'Conditional') return 'verdict-badge--amber'
  return 'verdict-badge--grey'
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
    })
  } catch {
    return iso.slice(0, 10)
  }
}

function latestDate(briefs: SignalBrief[]): string {
  if (!briefs.length) return '—'
  return formatDate(briefs[0].delivered_at)
}

export default function BriefsPage() {
  const { count, briefs } = data

  return (
    <main>

      {/* Hero */}
      <section className="hero hero--medium page-offset" aria-labelledby="briefs-hero-headline">
        <div className="hero__inner">
          <p className="hero__eyebrow">Live Intelligence Output</p>
          <h1 className="hero__headline" id="briefs-hero-headline">Signal Brief Archive — Active HEARTBEAT</h1>
          <p className="hero__sub">
            Every brief scored ≥60/100 by the 100-Point Bankability Framework and delivered
            by the IB-Agent HEARTBEAT pipeline. Updated daily. Titles only — full text is gated.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar" role="region" aria-label="Archive metrics">
        <div className="stats-bar__inner">
          <div className="stat-item">
            <span className="stat-item__number">{count}</span>
            <span className="stat-item__label">Scored briefs in archive</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__number">60+</span>
            <span className="stat-item__label">Minimum bankability score</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__number" style={{fontSize:'1rem', lineHeight:'1.3'}}>Daily</span>
            <span className="stat-item__label">Pipeline dispatch cadence</span>
          </div>
          <div className="stat-item">
            <span className="stat-item__number" style={{fontSize:'1rem', lineHeight:'1.3'}}>{latestDate(briefs)}</span>
            <span className="stat-item__label">Latest delivery</span>
          </div>
        </div>
      </div>

      {/* Feed */}
      <section className="section section--white" aria-labelledby="briefs-feed-headline">
        <div className="container">
          <h2 className="section-headline" id="briefs-feed-headline">Scored HEARTBEAT Output</h2>
          <p className="section-subhead">
            Briefs are sorted by delivery date, newest first. Bankability scores apply the framework as at signal date.
            Admiralty code indicates source reliability and information credibility.
          </p>

          {count === 0 ? (
            <div className="briefs-empty" role="status">
              First scored briefs will appear here after the next HEARTBEAT dispatch cycle.
              The pipeline runs daily at 09:30 UTC — signals scoring ≥60/100 are queued automatically.
            </div>
          ) : (
            <div className="brief-feed mt-8" role="list" aria-label="Signal brief archive">
              {briefs.map((brief) => (
                <article
                  key={brief.signal_id}
                  className="brief-feed-card"
                  role="listitem"
                  aria-label={`Signal brief: ${brief.title}`}
                >
                  <div className="brief-feed-card__score-col">
                    <span className={`score ${scoreClass(brief.bankability_score)}`} aria-label={`Bankability score ${brief.bankability_score} out of 100`}>
                      {brief.bankability_score}<span style={{fontSize:'0.7em'}}>/100</span>
                    </span>
                    <span className={`verdict-badge ${tierBadgeClass(brief.tier)}`}>
                      {brief.tier}
                    </span>
                  </div>
                  <div className="brief-feed-card__body">
                    <h3 className="brief-feed-card__title">{brief.title}</h3>
                    <div className="brief-feed-card__meta">
                      <span>{brief.market}</span>
                      <span>{brief.sector}</span>
                      {brief.domains.slice(0, 2).map((d) => (
                        <span key={d} className="tag">{d}</span>
                      ))}
                    </div>
                  </div>
                  <div className="brief-feed-card__actions">
                    <div className="brief-feed-card__date">
                      <span>{formatDate(brief.delivered_at)}</span>
                      <span className="brief-feed-card__admiralty">{brief.admiralty_code}</span>
                    </div>
                    <Link href="/contact" className="article-card__link" aria-label={`Request full brief: ${brief.title}`}>
                      Request full brief &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Email Gate */}
      <section className="section section--grey" aria-labelledby="briefs-gate-headline">
        <div className="container">
          <h2 className="section-headline" id="briefs-gate-headline">Access the full Signal Brief text</h2>
          <p className="text-secondary max-w-520 mb-7 leading-relaxed">
            Full briefs include FINDING, EVIDENCE, OPPORTUNITY WINDOW, RECOMMENDATION, and scoring breakdown.
            Delivered as structured PDF to verified subscribers.
          </p>
          <div className="email-gate" role="form" aria-labelledby="briefs-gate-form-label">
            <p className="email-gate__headline" id="briefs-gate-form-label">Request archive access</p>
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
