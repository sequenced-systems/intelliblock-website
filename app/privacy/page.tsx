import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Intelliblock Consulting privacy policy — how we collect, use, and protect your personal data under UK GDPR and Nigeria NDPA.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/privacy/' },
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <main>
      <section className="section section--white page-offset" aria-labelledby="privacy-headline">
        <div className="container">
          <div className="prose-doc">

            <h1 id="privacy-headline">Privacy Policy</h1>
            <p className="prose-doc__meta">Effective date: 1 May 2026 &nbsp;|&nbsp; Last updated: 16 May 2026</p>

            <h2>1. Who we are</h2>
            <p>Intelliblock Consulting (&ldquo;Intelliblock&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is a UK-registered advisory firm operated by its Managing Director, Ayodeji Idowu, based in Portsmouth, England. We provide infrastructure bankability intelligence and policy convergence analysis for the African infrastructure market.</p>
            <p>Data controller contact: <a href="mailto:ayodeji@intelliblockconsulting.com">ayodeji@intelliblockconsulting.com</a></p>

            <h2>2. What data we collect</h2>
            <p>We collect only the personal data necessary to provide our services and communicate with enquirers and subscribers:</p>
            <ul>
              <li><strong>Name and email address</strong> — when you submit an enquiry via our contact form or subscribe to intelligence updates.</li>
              <li><strong>Company name</strong> — when provided voluntarily in an enquiry form.</li>
              <li><strong>Communication records</strong> — emails and enquiry messages exchanged with us.</li>
              <li><strong>Website usage data</strong> — we do not use Google Analytics or any third-party tracking. No cookies are set beyond those required for the site to function.</li>
            </ul>

            <h2>3. How we use your data</h2>
            <p>We use personal data for the following purposes, each with a corresponding lawful basis under UK GDPR:</p>
            <ul>
              <li><strong>Responding to enquiries</strong> — lawful basis: contract performance / pre-contractual steps.</li>
              <li><strong>Delivering intelligence subscriptions</strong> — lawful basis: contract performance.</li>
              <li><strong>Sending intelligence updates you requested</strong> — lawful basis: consent (you may withdraw at any time).</li>
              <li><strong>Improving our services</strong> — lawful basis: legitimate interests (we do not share this data with third parties).</li>
            </ul>

            <h2>4. Data sharing</h2>
            <p>We do not sell, rent, or share your personal data with third parties for marketing purposes. Data may be shared with:</p>
            <ul>
              <li><strong>Setmore</strong> — our booking platform, used to schedule discovery calls. Subject to Setmore&apos;s own privacy policy.</li>
              <li><strong>Email service providers</strong> — for delivery of intelligence outputs to subscribers.</li>
              <li><strong>Legal authorities</strong> — where required by UK law or court order.</li>
            </ul>

            <h2>5. Data retention</h2>
            <p>Enquiry and contact data is retained for 24 months from last contact, unless a client relationship is established (in which case, for the duration of the engagement plus 6 years, as required by UK law). You may request deletion at any time.</p>

            <h2>6. Your rights (UK GDPR)</h2>
            <p>Under UK GDPR you have the right to: access your data, correct inaccurate data, request erasure, restrict processing, data portability, and to object to processing based on legitimate interests. To exercise any right, contact us at <a href="mailto:ayodeji@intelliblockconsulting.com">ayodeji@intelliblockconsulting.com</a>. We will respond within 30 days. You also have the right to complain to the Information Commissioner&apos;s Office (ICO) at ico.org.uk.</p>

            <h2>7. Nigeria NDPA compliance</h2>
            <p>Where we process personal data of Nigerian residents in connection with our services, we do so in compliance with the Nigeria Data Protection Act 2023 (NDPA). We apply equivalent standards to UK GDPR across our data handling practices. Nigerian data subjects may exercise equivalent rights by contacting us directly.</p>

            <h2>8. Security</h2>
            <p>This website is served over HTTPS with TLS encryption. We apply HTTP security headers including Content Security Policy and HSTS. Personal data held in our systems is access-restricted to Intelliblock personnel only.</p>

            <h2>9. Cookies</h2>
            <p>This website does not set tracking or analytics cookies. Session cookies may be set by your browser for normal site operation. No third-party advertising or retargeting cookies are used.</p>

            <h2>10. Changes to this policy</h2>
            <p>We may update this policy as our practices evolve. The effective date above reflects the current version. Substantive changes will be communicated to active subscribers by email.</p>

            <h2>11. Contact</h2>
            <p>For any privacy-related enquiry: <a href="mailto:ayodeji@intelliblockconsulting.com">ayodeji@intelliblockconsulting.com</a></p>

          </div>
        </div>
      </section>
    </main>
  )
}
