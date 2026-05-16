import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Intelliblock Consulting for Rapid Assessment Plus scope discussions, Policy Convergence Intelligence subscription enquiries, or to book a 30-minute discovery call.',
  alternates: { canonical: 'https://intelliblockconsulting.com/contact/' },
}

export default function ContactPage() {
  return (
    <main>

      {/* Hero */}
      <section className="hero hero--short page-offset" aria-labelledby="contact-headline">
        <div className="hero__inner">
          <p className="hero__eyebrow">Contact</p>
          <h1 className="hero__headline" id="contact-headline">Contact</h1>
          <p className="hero__sub">Response within 1 working day.</p>
        </div>
      </section>

      {/* Contact Options + Form */}
      <section className="section section--white" aria-labelledby="contact-options-headline">
        <div className="container">

          <h2 className="section-headline mb-7" id="contact-options-headline">How to reach us</h2>

          <div className="contact-grid">

            <div className="contact-block">
              <p className="contact-block__label">For assessment enquiries</p>
              <h3 className="contact-block__heading">Rapid Assessment Plus scope discussions</h3>
              <a href="mailto:ayodeji@intelliblockconsulting.com" className="contact-block__value">ayodeji@intelliblockconsulting.com</a>
            </div>

            <div className="contact-block">
              <p className="contact-block__label">For subscription enquiries</p>
              <h3 className="contact-block__heading">Policy Convergence Intelligence proposals</h3>
              <a href="mailto:ayodeji@intelliblockconsulting.com" className="contact-block__value">ayodeji@intelliblockconsulting.com</a>
            </div>

            <div className="contact-block">
              <p className="contact-block__label">Discovery call</p>
              <h3 className="contact-block__heading">Book a 30-minute discovery call</h3>
              <a href="https://intelliblock.setmore.com/ayodeji" className="contact-block__value" rel="noopener noreferrer" target="_blank">intelliblock.setmore.com/ayodeji</a>
            </div>

            <div className="contact-block">
              <p className="contact-block__label">WhatsApp</p>
              <h3 className="contact-block__heading">Quick questions via WhatsApp</h3>
              <a href="https://wa.me/447000000000" className="contact-block__value" rel="noopener noreferrer" target="_blank">Message on WhatsApp</a>
            </div>

          </div>

          <div className="divider max-w-640"></div>

          <h2 className="section-headline text-2xl mb-6">Send a message</h2>

          <form
            className="contact-form"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            aria-label="Contact form"
          >
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
              ></textarea>
            </div>

            <button type="submit" className="btn btn--primary">Send message &rarr;</button>
            <p className="form-note">Response within 1 working day. Your details are not shared with third parties.</p>
          </form>

        </div>
      </section>

    </main>
  )
}
