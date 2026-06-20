'use client'
import { useEffect, useRef, useState } from 'react'

const TARGET = 87

export default function ProofStrip() {
  const countRef = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = countRef.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCount(TARGET)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const duration = 1200
        const start = Date.now()
        const tick = () => {
          const t = Math.min((Date.now() - start) / duration, 1)
          setCount(Math.round((1 - Math.pow(1 - t, 3)) * TARGET))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="ib-proof-strip" role="region" aria-label="Key metrics" data-animate="stagger">
      <div className="ib-proof-strip__inner">
        <div className="ib-proof-strip__stat">
          <span className="ib-proof-strip__value">
            <span ref={countRef} aria-live="polite">{count}</span>/100
          </span>
          <span className="ib-proof-strip__label">Highest bankability score issued</span>
        </div>
        <div className="ib-proof-strip__divider" aria-hidden="true" />
        <div className="ib-proof-strip__stat">
          <span className="ib-proof-strip__value">12–18 mo</span>
          <span className="ib-proof-strip__label">Lead time advantage over market consensus</span>
        </div>
        <div className="ib-proof-strip__divider" aria-hidden="true" />
        <div className="ib-proof-strip__stat">
          <span className="ib-proof-strip__value">£15K–25K</span>
          <span className="ib-proof-strip__label">Rapid Assessment investment</span>
        </div>
        <div className="ib-proof-strip__divider" aria-hidden="true" />
        <div className="ib-proof-strip__stat">
          <span className="ib-proof-strip__value">NG → GH → KE</span>
          <span className="ib-proof-strip__label">Intelligence geography</span>
        </div>
      </div>
    </div>
  )
}
