'use client'

import { useState } from 'react'
import Link from 'next/link'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ChecklistGate() {
  const [state, setState] = useState<FormState>('idle')
  const [email, setEmail] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('submitting')
    try {
      const res = await fetch('https://formspree.io/f/xjgqbgpn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'Checklist download request', source: 'DFI Readiness Checklist' }),
      })
      if (res.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <div className="resource-gate">
      <div className="resource-gate__card">
        {state === 'success' ? (
          <div className="resource-gate__success">
            <div className="resource-gate__success-icon" aria-hidden="true">✓</div>
            <p className="resource-gate__success-title">Your copy is ready.</p>
            <p className="resource-gate__success-desc">Open the checklist and use the print function to save as PDF.</p>
            <Link href="/resources/checklist" className="btn btn--primary" target="_blank" rel="noopener">
              Open the DFI Readiness Checklist &rarr;
            </Link>
          </div>
        ) : (
          <>
            <p className="resource-gate__tag">Free Resource — Infrastructure Developers</p>
            <h2 className="resource-gate__title">DFI Readiness Assessment Checklist</h2>
            <p className="resource-gate__desc">
              12 questions derived from the 100-Point Bankability Framework. Use this before approaching any DFI, development bank, or institutional lender to confirm your project can withstand a bankability screen.
            </p>

            <div className="resource-gate__preview">
              <p className="resource-gate__preview-label">What is covered</p>
              <ul className="resource-gate__preview-list">
                <li>Commercial viability — revenue model and demand evidence</li>
                <li>Political and regulatory commitment</li>
                <li>Environmental and social baseline</li>
                <li>Implementation track record and contractor landscape</li>
                <li>DFI eligibility criteria and standard conditions</li>
                <li>Financial model readiness for lender due diligence</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="resource-gate__form" noValidate>
              <input
                type="email"
                className="resource-gate__input"
                placeholder="Work email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                aria-label="Work email address"
                autoComplete="email"
              />
              <button
                type="submit"
                className="resource-gate__submit"
                disabled={state === 'submitting'}
              >
                {state === 'submitting' ? 'Sending…' : 'Get the checklist'}
              </button>
              {state === 'error' && (
                <p style={{ color: 'var(--score-orange)', fontSize: '0.875rem' }}>
                  Something went wrong. Try again or <Link href="/contact">contact us</Link>.
                </p>
              )}
            </form>

            <p className="resource-gate__disclaimer">
              No spam. Your email is used to send the checklist link and may be used to follow up on your infrastructure mandate. Unsubscribe at any time.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
