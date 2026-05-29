'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'ib_cookie_consent'

export default function CookieConsentBanner() {
  const analyticsEnabled = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true'
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!analyticsEnabled) return
    if (!localStorage.getItem(STORAGE_KEY)) setShow(true)
  }, [analyticsEnabled])

  if (!show) return null

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setShow(false)
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <p className="cookie-banner__text">
        This site uses analytics cookies to understand how visitors use our content.{' '}
        <Link href="/privacy" className="cookie-banner__link">Privacy Policy</Link>.
      </p>
      <button className="cookie-banner__accept btn btn--primary" onClick={accept}>
        Accept
      </button>
    </div>
  )
}
