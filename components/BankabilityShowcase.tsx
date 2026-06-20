'use client'
import { useEffect, useRef, useState } from 'react'

const DIMENSIONS = [
  { code: 'C1', label: 'Policy Alignment',    score: 19, max: 20 },
  { code: 'C2', label: 'Implementation',      score: 18, max: 20 },
  { code: 'C3', label: 'Commercial Viability', score: 17, max: 20 },
  { code: 'C4', label: 'Fiscal Architecture', score: 17, max: 20 },
  { code: 'C5', label: 'Market Convergence',  score: 16, max: 20 },
]

const ARC_TOTAL = 301.6
const SCORE = 87
const ARC_FILLED = (SCORE / 100) * ARC_TOTAL
const DASHOFFSET_FULL = ARC_TOTAL
const DASHOFFSET_TARGET = ARC_TOTAL - ARC_FILLED

export default function BankabilityShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      setCount(SCORE)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const duration = 1200
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * SCORE))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [visible])

  return (
    <section className="ib-showcase" aria-labelledby="ib-showcase-headline">
      <div className="ib-showcase__inner">

        {/* Left — Case study */}
        <div className="ib-showcase__left">
          <p className="ib-section-label">BANKABILITY SCORE ARCHIVE</p>
          <h2 className="ib-showcase__headline" id="ib-showcase-headline">
            NLNG Train 7 — Bonny Island
          </h2>
          <p className="ib-showcase__location">Rivers State, Nigeria — Signal Date 2019 · FID December 2021</p>
          <p className="ib-showcase__finding">
            IOC/NNPC JV brownfield expansion. ERGP 2017 presidential mandate confirmed. FEED
            complete, EPC procurement active. Long-term USD SPAs with Shell, TotalEnergies,
            and ENI — highest certainty offtake structure in Nigeria's infrastructure market.
          </p>
          <div className="ib-showcase__chips" role="list" aria-label="Evidence signals">
            <span className="ib-evidence-chip" role="listitem">Presidential Priority</span>
            <span className="ib-evidence-chip" role="listitem">IOC Equity Sponsors</span>
            <span className="ib-evidence-chip" role="listitem">4-Domain Convergence</span>
          </div>
          <p className="ib-showcase__outcome">
            Tier 1 Bankable — FID achieved December 2021 · EPC $2.96B
          </p>
        </div>

        {/* Right — Score visualisation */}
        <div className="ib-showcase__right" ref={ref}>
          <div className="ib-scorecard">
            <div className="ib-scorecard__header">
              <span className="ib-scorecard__tag">Bankability Score</span>
              <span className="ib-scorecard__framework">Framework V3.6</span>
            </div>

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
                  strokeDashoffset={visible ? DASHOFFSET_TARGET : DASHOFFSET_FULL}
                  fill="none"
                  className="ib-gauge__fill"
                />
              </svg>
              <div className="ib-gauge__value">
                {count}<span>/100</span>
              </div>
              <div className="ib-gauge__label">Tier 1 Bankable</div>
            </div>

            <div className="ib-dims">
              {DIMENSIONS.map((dim, i) => (
                <div key={dim.code} className="ib-dim">
                  <div className="ib-dim__meta">
                    <span className="ib-dim__code">{dim.code}</span>
                    <span className="ib-dim__label">{dim.label}</span>
                    <span className="ib-dim__pct">{dim.score}/{dim.max}</span>
                  </div>
                  <div
                    className="ib-dim__track"
                    role="progressbar"
                    aria-valuenow={dim.score}
                    aria-valuemin={0}
                    aria-valuemax={dim.max}
                  >
                    <div
                      className="ib-dim__fill"
                      style={{
                        width: visible ? `${(dim.score / dim.max) * 100}%` : '0%',
                        transitionDelay: visible ? `${i * 0.12}s` : '0s',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="ib-scorecard__footer">
              <div className="ib-scorecard__asset">
                <span className="ib-scorecard__asset-name">NLNG Train 7 — Bonny Island</span>
                <span className="ib-scorecard__asset-meta">Framework V3.6 · AI-assisted · MD-reviewed</span>
              </div>
              <span className="ib-scorecard__tier">Tier 1</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
