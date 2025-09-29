'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Formations', href: '/formations' },
    { name: 'Légal', href: '/legal' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/manevok_logo.png" 
                alt="MANévok Logo" 
                className="w-28 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 xl:space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#37474F] hover:text-[#1976D2] font-semibold transition-all duration-300 relative group text-base xl:text-lg py-2 px-1"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#1976D2] to-[#8BC34A] rounded-full transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link href="/contact" className="hidden lg:block btn-primary text-base px-8 py-3">
              Contactez-nous
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-[#1976D2] to-[#2196F3] text-white hover:from-[#1565C0] hover:to-[#1976D2] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-6 fade-in bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-2xl mx-4 mb-4">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[#37474F] hover:text-[#1976D2] font-semibold transition-all duration-300 py-4 px-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 rounded-xl mx-2 text-lg relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute left-6 bottom-2 w-0 h-0.5 bg-gradient-to-r from-[#1976D2] to-[#8BC34A] transition-all duration-300 group-hover:w-8"></span>
                  </Link>
                ))}
                <div className="px-2 pt-4">
                  <Link href="/contact" className="btn-primary w-full text-center block text-lg py-4" onClick={() => setIsMenuOpen(false)}>
                    Contactez-nous
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}