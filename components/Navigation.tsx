'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/framework', label: 'The Framework' },
  { href: '/intelligence', label: 'Intelligence' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Element
      if (!target.closest('.site-nav')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="site-nav" role="navigation" aria-label="Main navigation">
      <div className="site-nav__inner">
        <Link href="/" className="site-nav__logo" aria-label="Intelliblock Consulting — home">
          <Image
            src="/images/logo.webp"
            alt="Intelliblock Consulting"
            className="site-nav__logo-img"
            width={120}
            height={40}
            priority
          />
        </Link>
        <ul className="site-nav__links">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={isActive(href) ? 'active' : undefined}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://intelliblock.setmore.com/ayodeji"
          className="btn btn--primary site-nav__cta"
          rel="noopener noreferrer"
          target="_blank"
        >
          Book a call
        </a>
        <button
          ref={toggleRef}
          className="nav-toggle"
          id="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen(prev => {
            if (prev) setTimeout(() => toggleRef.current?.focus(), 0)
            return !prev
          })}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>
      </div>
      <nav
        className={`site-nav__mobile${isOpen ? ' is-open' : ''}`}
        id="mobile-nav"
        aria-label="Mobile navigation"
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={isActive(href) ? 'active' : undefined}
            aria-current={isActive(href) ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
        <a
          href="https://intelliblock.setmore.com/ayodeji"
          rel="noopener noreferrer"
          target="_blank"
        >
          Book a call
        </a>
      </nav>
    </nav>
  )
}
