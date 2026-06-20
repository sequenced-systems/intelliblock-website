import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Intelliblock Consulting for Rapid Assessment Plus scope discussions, Policy Convergence Intelligence subscription enquiries, or to book a 30-minute discovery call.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/contact/' },
}

export default function ContactPage() {
  return (
    <main id="main-content">

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
              <a href="https://wa.me/447597646553" className="contact-block__value" rel="noopener noreferrer" target="_blank">Message on WhatsApp</a>
            </div>

            <div className="contact-block">
              <p className="contact-block__label">Location</p>
              <h3 className="contact-block__heading">Base of operations</h3>
              <span className="contact-block__value">Portsmouth, United Kingdom</span>
            </div>

          </div>

          <div className="divider max-w-640"></div>

          <h2 className="section-headline text-2xl mb-6">Send a message</h2>

          <ContactForm />

        </div>
      </section>

    </main>
  )
}
