'use client'

import Script from 'next/script'

export default function CalendlyWidget() {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/olivier-kunstmann/30min"
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  )
}