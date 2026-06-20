'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/xwvzrqdz', {
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
      <div className="contact-form-confirmation" role="status">
        <h3 className="contact-form-confirmation__headline">Message received.</h3>
        <p className="contact-form-confirmation__body">Response within 1 working day. You will hear from ayodeji@intelliblockconsulting.com.</p>
      </div>
    )
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input type="text" id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-name">Name</label>
        <input
          className="form-input"
          type="text"
          id="contact-name"
          name="name"
          placeholder="Your full name"
          autoComplete="name"
          required
          aria-required="true"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-email">Email</label>
        <input
          className="form-input"
          type="email"
          id="contact-email"
          name="email"
          placeholder="your@company.com"
          autoComplete="email"
          required
          aria-required="true"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label className="form-label form-label--optional" htmlFor="contact-company">Company</label>
        <input
          className="form-input"
          type="text"
          id="contact-company"
          name="company"
          placeholder="Organisation or fund"
          autoComplete="organization"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-message">Message</label>
        <textarea
          className="form-textarea"
          id="contact-message"
          name="message"
          placeholder="Describe the project, mandate, or enquiry."
          required
          aria-required="true"
          disabled={status === 'submitting'}
        ></textarea>
      </div>

      <button type="submit" className="btn btn--primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message →'}
      </button>
      {status === 'error' && (
        <p className="form-error" role="alert">Submission failed — please email <a href="mailto:ayodeji@intelliblockconsulting.com">ayodeji@intelliblockconsulting.com</a> directly.</p>
      )}
      <p className="form-note">Response within 1 working day. Your details are not shared with third parties.</p>
    </form>
  )
}
