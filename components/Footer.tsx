import Link from 'next/link'
import { Mail, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <div className="relative w-24 h-auto">
                  <Image 
                    src="/manevok_logo-removebg.png" 
                    alt="Logo Manevok"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-400">Management de la compétitivité</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              LEAN PROCUREMENT PERFORMANCE<br />
              Un professionnel à vos côtés et à votre écoute
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/realisations" className="text-gray-400 hover:text-white transition-colors">Réalisations</Link></li>
              <li><Link href="/formations" className="text-gray-400 hover:text-white transition-colors">Formations</Link></li>
              <li><Link href="/legal" className="text-gray-400 hover:text-white transition-colors">Légal</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Supply-Chain Management</li>
              <li>Achats Stratégiques</li>
              <li>Management de Transition</li>
              <li>Formation Professionnelle</li>
              <li>Conduite du Changement</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 text-blue-400" />
                <a href="mailto:contact@manevok.com" className="hover:text-white transition-colors">
                  contact@manevok.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Linkedin size={18} className="mt-1 text-blue-400" />
                <a href="https://www.linkedin.com/in/olivierkunstmann" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Mon LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 MANévok. Tous droits réservés. | 
            <Link href="/mentions-legales" className="hover:text-white transition-colors ml-1">
              Mentions légales
            </Link>
          </div>
          
          <div className="text-gray-400 text-sm">
            Dirigeant: Olivier KUNSTMANN
          </div>
        </div>
      </div>
    </footer>
  )
}
