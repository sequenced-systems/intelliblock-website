import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__logo" aria-label="Intelliblock Consulting">
              <Image
                src="/images/logo.jpg"
                alt="Intelliblock Consulting"
                className="site-footer__logo-img"
                width={108}
                height={36}
              />
            </Link>
            <p className="site-footer__tagline">Nigeria infrastructure bankability intelligence. Portsmouth, UK.</p>
            <p className="site-footer__legal">All intelligence output is advisory only. Not legal, financial, or investment advice.</p>
          </div>
          <div>
            <p className="site-footer__col-title">Services</p>
            <ul className="site-footer__links">
              <li><Link href="/services">Rapid Assessment Plus</Link></li>
              <li><Link href="/services">Policy Convergence Intelligence</Link></li>
            </ul>
          </div>
          <div>
            <p className="site-footer__col-title">Company</p>
            <ul className="site-footer__links">
              <li><Link href="/framework">The Framework</Link></li>
              <li><Link href="/intelligence">Intelligence Archive</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
            </ul>
          </div>
          <div>
            <p className="site-footer__col-title">Contact</p>
            <p className="site-footer__contact-item">
              <a href="mailto:ayodeji@intelliblockconsulting.com">ayodeji@intelliblockconsulting.com</a>
            </p>
            <p className="site-footer__contact-item">
              <a href="https://intelliblock.setmore.com/ayodeji" rel="noopener noreferrer" target="_blank">Book a 30-minute call</a>
            </p>
            <p className="site-footer__contact-item">
              <a href="https://wa.me/447597646553" rel="noopener noreferrer" target="_blank">WhatsApp</a>
            </p>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">&copy; 2026 Intelliblock Consulting. All rights reserved. Registered in England &amp; Wales.</p>
          <div className="site-footer__social">
            <a href="https://www.linkedin.com/company/109212959/" rel="noopener noreferrer" target="_blank" aria-label="Intelliblock on LinkedIn">in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
