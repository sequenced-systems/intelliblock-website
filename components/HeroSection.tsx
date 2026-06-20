'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const TICKER_ITEMS = [
  { label: 'BAKASSI DSP', score: '77.0', delta: '+2.4', positive: true },
  { label: 'LEKKI-EPE EXPY', score: '74.5', delta: null, positive: null },
  { label: 'AKK GAS PIPELINE', score: '68.1', delta: '-1.2', positive: false },
  { label: 'ZUNGERU HPP', score: '61.3', delta: '+0.8', positive: true },
  { label: 'ABUJA RAIL PHASE 2', score: '58.7', delta: null, positive: null },
  { label: 'DANGOTE REFINERY', score: '91.0', delta: '+0.5', positive: true },
  { label: 'LEKKI DEEP SEA PORT', score: '80.0', delta: '+1.1', positive: true },
  { label: 'AZURA-EDO IPP', score: '91.0', delta: '+0.3', positive: true },
]

const DIMENSIONS = [
  { code: 'C1', label: 'Policy Alignment', pct: 90 },
  { code: 'C2', label: 'DFI Readiness', pct: 80 },
  { code: 'C3', label: 'Revenue Model', pct: 75 },
  { code: 'C4', label: 'Implementation', pct: 85 },
  { code: 'C5', label: 'Risk Profile', pct: 70 },
]

const ARC_TOTAL = 301.6
const SCORE = 77
const DASHOFFSET_FULL = ARC_TOTAL
const DASHOFFSET_TARGET = ARC_TOTAL - (SCORE / 100) * ARC_TOTAL

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setLoaded(true)
      return
    }
    const t = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="ib-hero page-offset" aria-labelledby="ib-hero-headline">
      {/* Ticker */}
      <div className="ib-ticker" role="marquee" aria-label="Live bankability scores">
        <div className="ib-ticker__track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ib-ticker__item">
              <span className="ib-ticker__label">{item.label}</span>
              <span className="ib-ticker__score">{item.score}</span>
              {item.delta && (
                <span className={`ib-ticker__delta${item.positive ? ' ib-ticker__delta--up' : ' ib-ticker__delta--down'}`}>
                  {item.positive ? '▲' : '▼'}{item.delta.replace('-', '')}
                </span>
              )}
              <span className="ib-ticker__sep" aria-hidden="true">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero body */}
      <div className="ib-hero__inner">
        <div className="ib-hero__grid">

          {/* Left column */}
          <div className="ib-hero__left">
            <div className="ib-chip">Nigeria Infrastructure Intelligence / V3.6</div>
            <h1 className="ib-hero__headline" id="ib-hero-headline">
              Nigeria infrastructure bankability intelligence —{' '}
              <span className="ib-hero__accent">12 to 18 months</span>{' '}
              before market consensus.
            </h1>
            <p className="ib-hero__sub">
              Intelliblock converts government policy signals into bankable infrastructure
              transactions before the market mobilises — through the only AI-native Policy
              Convergence detection system in the Nigerian market.
            </p>
            <div className="ib-hero__cta-row">
              <Link href="/contact" className="ib-btn-primary">Request Intelligence Brief →</Link>
              <Link href="/intelligence" className="ib-btn-secondary">View Score Archive ↗</Link>
            </div>
            <div className="ib-hero__stats">
              <div className="ib-stat">
                <span className="ib-stat__num">147</span>
                <span className="ib-stat__label">Assets scored</span>
              </div>
              <div className="ib-stat__divider" aria-hidden="true" />
              <div className="ib-stat">
                <span className="ib-stat__num">$42B</span>
                <span className="ib-stat__label">Total capex tracked</span>
              </div>
              <div className="ib-stat__divider" aria-hidden="true" />
              <div className="ib-stat">
                <span className="ib-stat__num">12 mo</span>
                <span className="ib-stat__label">Market lead time</span>
              </div>
              <div className="ib-stat__divider" aria-hidden="true" />
              <div className="ib-stat">
                <span className="ib-stat__num">100 pt</span>
                <span className="ib-stat__label">Bankability framework</span>
              </div>
            </div>
          </div>

          {/* Right column — Score card */}
          <div className="ib-hero__right">
            <div className="ib-scorecard">
              <div className="ib-scorecard__header">
                <span className="ib-scorecard__tag">Bankability Score</span>
                <span className="ib-scorecard__framework">Framework V3.6</span>
              </div>

              {/* Gauge */}
              <div className="ib-gauge" aria-label={`Bankability score: ${SCORE} out of 100`}>
                <svg viewBox="0 0 220 132" fill="none" aria-hidden="true">
                  <path
                    d="M 14 124 A 96 96 0 0 1 206 124"
                    stroke="#1E3050"
                    strokeWidth="10"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 14 124 A 96 96 0 0 1 206 124"
                    stroke="#C4922A"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${ARC_TOTAL} ${ARC_TOTAL}`}
                    strokeDashoffset={loaded ? DASHOFFSET_TARGET : DASHOFFSET_FULL}
                    fill="none"
                    className="ib-gauge__fill"
                    style={{ transitionDelay: '0.8s' }}
                  />
                </svg>
                <div className="ib-gauge__value">
                  {SCORE}<span>/100</span>
                </div>
                <div className="ib-gauge__label">Tier 2 Bankable</div>
              </div>

              {/* Dimension bars */}
              <div className="ib-dims">
                {DIMENSIONS.map((dim, i) => (
                  <div key={dim.code} className="ib-dim">
                    <div className="ib-dim__meta">
                      <span className="ib-dim__code">{dim.code}</span>
                      <span className="ib-dim__label">{dim.label}</span>
                      <span className="ib-dim__pct">{dim.pct}</span>
                    </div>
                    <div className="ib-dim__track" role="progressbar" aria-valuenow={dim.pct} aria-valuemin={0} aria-valuemax={100}>
                      <div
                        className="ib-dim__fill"
                        style={{
                          width: loaded ? `${dim.pct}%` : '0%',
                          transitionDelay: loaded ? `${i * 0.12 + 0.9}s` : '0s',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Asset footer */}
              <div className="ib-scorecard__footer">
                <div className="ib-scorecard__asset">
                  <span className="ib-scorecard__asset-name">Bakassi Deep Seaport</span>
                  <span className="ib-scorecard__asset-meta">CRS · NG · #INF-0142</span>
                </div>
                <span className="ib-scorecard__tier">Tier 2</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Metadata strip */}
      <div className="ib-hero__meta-strip">
        <span>Framework V3.6</span>
        <span className="ib-meta-sep" aria-hidden="true">·</span>
        <span>Coverage: NG 147 Assets</span>
        <span className="ib-meta-sep" aria-hidden="true">·</span>
        <span>Updated daily via automated policy scan</span>
      </div>
    </section>
  )
}
