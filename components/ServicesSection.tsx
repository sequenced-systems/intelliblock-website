import Link from 'next/link'

export default function ServicesSection() {
  return (
    <section className="ib-services" aria-labelledby="ib-services-headline">
      <div className="ib-services__inner">
        <div className="ib-services__header">
          <p className="ib-section-label">OUR SERVICES</p>
          <h2 className="ib-services__headline" id="ib-services-headline">
            Infrastructure intelligence, two delivery formats.
          </h2>
          <p className="ib-services__sub">
            One instrument for project-level bankability. One standing subscription for deal origination.
          </p>
        </div>

        <div className="ib-services__grid">

          {/* Card 1 — Rapid Assessment Plus */}
          <article className="ib-svc-card" aria-labelledby="svc-ra-title">
            <div className="ib-svc-card__gold-bar" aria-hidden="true" />
            <div className="ib-svc-card__inner">
              <span className="ib-svc-card__tag">TIER 1 DELIVERABLE</span>
              <h3 className="ib-svc-card__title" id="svc-ra-title">Rapid Assessment Plus</h3>
              <p className="ib-svc-card__desc">
                Full bankability analysis of a single infrastructure opportunity. Five-dimension V3.6
                scoring with evidence mapping, DFI alignment assessment, and origination recommendation.
              </p>
              <div className="ib-svc-card__divider" aria-hidden="true" />
              <div className="ib-svc-card__price-row">
                <span className="ib-svc-card__price">£15,000–£25,000</span>
                <span className="ib-svc-card__price-note">Pilot: £12,000–£15,000</span>
              </div>
              <p className="ib-svc-card__delivery">
                <span aria-hidden="true">◷</span> 5–7 working days
              </p>
              <Link href="/contact" className="ib-svc-card__cta">
                Request Assessment →
              </Link>
            </div>
          </article>

          {/* Card 2 — Policy Convergence Intelligence */}
          <article className="ib-svc-card" aria-labelledby="svc-pci-title">
            <div className="ib-svc-card__gold-bar" aria-hidden="true" />
            <div className="ib-svc-card__inner">
              <span className="ib-svc-card__tag">RETAINER</span>
              <h3 className="ib-svc-card__title" id="svc-pci-title">Policy Convergence Intelligence</h3>
              <p className="ib-svc-card__desc">
                Monthly intelligence signal monitoring across legislative, regulatory, DFI, and fiscal
                domains. Convergent Windows flagged on emergence with bankability pre-score.
              </p>
              <div className="ib-svc-card__divider" aria-hidden="true" />
              <div className="ib-svc-card__price-row">
                <span className="ib-svc-card__price">
                  £3,500–£5,000<span className="ib-svc-card__price-unit">/month</span>
                </span>
              </div>
              <Link href="/contact" className="ib-svc-card__cta">
                Request Intelligence Brief →
              </Link>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
