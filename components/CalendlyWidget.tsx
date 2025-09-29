'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function CalendlyWidget() {
  useEffect(() => {
    // Rien à faire ici, Calendly charge automatiquement
  }, [])

  return (
    <div className="calendly-inline-widget"
         data-url="https://calendly.com/87fugiii/30min"
         style={{ minWidth: '320px', height: '700px' }} />
  )
}
