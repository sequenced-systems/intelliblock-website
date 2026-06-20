'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/xjgqbgpn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="newsletter-strip__inner">
        <div className="newsletter-strip__copy">
          <h2 className="newsletter-strip__headline">Subscribed.</h2>
          <p className="newsletter-strip__sub">Intelligence updates will reach you before the window closes.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="newsletter-strip__inner">
      <div className="newsletter-strip__copy">
        <h2 className="newsletter-strip__headline" id="newsletter-headline">Infrastructure intelligence. Issued before the window closes.</h2>
        <p className="newsletter-strip__sub">Monthly convergence alerts. Unsubscribe anytime.</p>
      </div>
      <form
        className="newsletter-strip__form"
        onSubmit={handleSubmit}
        aria-label="Subscribe to intelligence updates"
      >
        <div style={{ display: 'none' }} aria-hidden="true">
          <label htmlFor="newsletter-website">Website</label>
          <input type="text" id="newsletter-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <label htmlFor="newsletter-email" className="visually-hidden">Your email address</label>
        <input
          type="email"
          id="newsletter-email"
          name="email"
          className="newsletter-strip__input"
          placeholder="Your work email"
          required
          autoComplete="email"
          disabled={status === 'submitting'}
        />
        <button
          type="submit"
          className="btn btn--primary newsletter-strip__submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe →'}
        </button>
      </form>
      {status === 'error' && (
        <p className="newsletter-strip__error" role="alert">Submission failed — please email <a href="mailto:ayodeji@intelliblockconsulting.com">ayodeji@intelliblockconsulting.com</a> directly.</p>
      )}
      <p className="newsletter-strip__disclaimer">No spam. Unsubscribe at any time. <Link href="/privacy">Privacy Policy</Link>.</p>
    </div>
  )
}
