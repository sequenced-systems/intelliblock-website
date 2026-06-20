export default function ProblemSection() {
  return (
    <section className="ibp-section" aria-labelledby="ibp-headline">
      <div className="ibp-container">

        {/* Eyebrow strip */}
        <div className="ibp-eyebrow">
          <div className="ibp-eyebrow-left">
            <span className="ibp-section-num">
              <span className="ibp-gold">02</span> · The Problem
            </span>
          </div>
          <div className="ibp-eyebrow-right">
            <span>Nigeria · 2024–2026</span>
            <span className="ibp-dot" aria-hidden="true" />
            <span>Convergent Window Analysis</span>
            <span className="ibp-dot" aria-hidden="true" />
            <span>Framework V3.6</span>
          </div>
        </div>

        {/* 55/45 grid */}
        <div className="ibp-grid">

          {/* LEFT — text column */}
          <div className="ibp-left">
            <div className="ibp-label">
              <span className="ibp-label-line" aria-hidden="true" />
              <span>The Problem</span>
            </div>

            <h2 className="ibp-headline" id="ibp-headline">
              Nigeria&apos;s infrastructure policy cycle creates a 12 to 18 month gap between government signal and market mobilisation.{' '}
              <span className="ibp-headline-accent">Most capital misses it.</span>
            </h2>

            <p className="ibp-body">
              Policy announcements, DFI deployment statements, legislative shifts — they appear months before market consensus forms. By the time your competitors brief their investment committees, the{' '}
              <em className="ibp-term">Convergent Window</em> has closed.
            </p>

            <p className="ibp-closing">
              <span className="ibp-closing-bar" aria-hidden="true" />
              <span>Intelliblock reads the signals first.</span>
            </p>

            <div className="ibp-meta-block" aria-label="Key statistics">
              <div className="ibp-meta-item">
                <div className="ibp-meta-num">
                  12–18<span className="ibp-meta-unit">mo</span>
                </div>
                <div className="ibp-meta-lbl">Detection-to-mandate gap</div>
              </div>
              <div className="ibp-meta-item">
                <div className="ibp-meta-num">
                  80<span className="ibp-meta-unit">%</span>
                </div>
                <div className="ibp-meta-lbl">Gate 1 directional accuracy</div>
              </div>
              <div className="ibp-meta-item">
                <div className="ibp-meta-num">
                  5
                </div>
                <div className="ibp-meta-lbl">Policy domains monitored</div>
              </div>
            </div>
          </div>

          {/* RIGHT — timeline card */}
          <div className="ibp-right">
            <div className="ibp-index-tag" aria-hidden="true">
              <span className="ibp-gold">●</span> FIG_02 · TIMING DELTA
            </div>

            <div className="ibp-card" role="img" aria-label="Intelligence timing advantage: Intelliblock detects signals 12–18 months before market awareness">
              <div className="ibp-card-header">
                <div className="ibp-card-header-label">
                  <span className="ibp-live-dot" aria-hidden="true" />
                  <span>Intelligence Timing Advantage</span>
                </div>
                <span className="ibp-card-header-axis" aria-hidden="true">T-AXIS · MONTHS</span>
              </div>

              <div className="ibp-timeline" aria-hidden="true">
                <div className="ibp-timeline-line" />

                {/* Node 1 — Intelliblock */}
                <div className="ibp-tnode ibp-tnode--top">
                  <div className="ibp-tnode-marker">
                    <span className="ibp-glyph">★</span>
                  </div>
                  <div className="ibp-tnode-content">
                    <span className="ibp-tnode-t">T + 0</span>
                    <span className="ibp-tnode-title">Intelliblock Intelligence</span>
                    <span className="ibp-tnode-sub">Policy signal detected and scored</span>
                  </div>
                </div>

                {/* Gap indicator */}
                <div className="ibp-gap">
                  <div className="ibp-gap-callout-l">
                    <span>Convergent Window</span>
                    <span className="ibp-gap-tick" />
                  </div>
                  <div className="ibp-gap-pill">12 – 18 months</div>
                  <div className="ibp-gap-callout-r">
                    <span className="ibp-gap-tick" />
                    <span>Lead Advantage</span>
                  </div>
                </div>

                {/* Node 2 — Market */}
                <div className="ibp-tnode ibp-tnode--bottom">
                  <div className="ibp-tnode-content">
                    <span className="ibp-tnode-t">T + 12 to 18 months</span>
                    <span className="ibp-tnode-title">Market Awareness</span>
                    <span className="ibp-tnode-sub">Tender published. Window closed.</span>
                  </div>
                  <div className="ibp-tnode-marker">
                    <span className="ibp-glyph">✕</span>
                  </div>
                </div>
              </div>

              <div className="ibp-card-footer">
                <span>
                  <span className="ibp-arrow-pair">
                    <span className="ibp-a-green">▲</span> SIGNAL ·{' '}
                    <span className="ibp-a-red">▼</span> CONSENSUS
                  </span>
                </span>
                <span>Source · Intelliblock Archive</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
