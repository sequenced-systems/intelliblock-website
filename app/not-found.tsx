import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
}

export default function NotFound() {
  return (
    <main>
      <section className="hero hero--medium page-offset" aria-labelledby="notfound-headline">
        <div className="hero__inner">
          <p className="hero__eyebrow">404</p>
          <h1 className="hero__headline" id="notfound-headline">Page not found</h1>
          <p className="hero__sub">The page you are looking for does not exist or has moved.</p>
          <div className="hero__actions">
            <Link href="/" className="btn btn--primary">Go to home &rarr;</Link>
            <Link href="/contact" className="btn btn--ghost">Contact us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
