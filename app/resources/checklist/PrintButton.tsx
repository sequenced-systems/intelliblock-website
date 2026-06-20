'use client'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn btn--primary"
      type="button"
    >
      Print / Save as PDF
    </button>
  )
}
