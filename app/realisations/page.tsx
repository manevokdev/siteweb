'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { MapPin, Users, TrendingUp, Award, CircleCheck as CheckCircle, Target, Briefcase, Building, Plane, Shield, Factory, Cog, Globe } from 'lucide-react'

// --- Counter Component ---
function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const ref = useRef(null)
  const [value, setValue] = useState(from)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  useEffect(() => {
    if (inView) {
      let start = from
      const increment = (to - from) / (duration * 60) // 60fps
      let frame = 0
      const interval = setInterval(() => {
        frame++
        start += increment
        if (frame >= duration * 60) {
          clearInterval(interval)
          setValue(to)
        } else {
          setValue(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(interval)
    }
  }, [inView, from, to, duration])

  return <span ref={ref}>{value.toLocaleString()}</span>
}

export default function Realisations() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mes <span className="text-gradient">Réalisations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez mes principales missions et les résultats obtenus pour mes clients
            </p>
          </div>
        </div>
      </section>

      {/* Missions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 space-y-16">
          
          {/* Exemple Mission avec Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Plane className="w-8 h-8 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">UUDS GROUP</h2>
                  <div className="flex items-center text-blue-100 space-x-2">
                    <MapPin size={16} />
                    <span>ROISSY - DUBAI - CHINE</span>
                  </div>
                </div>
              </div>
            </div>

            <Image 
              src="/images/uuds.jpg" 
              alt="UUDS Group avion" 
              width={1200} 
              height={600} 
              className="w-full h-64 object-cover"
            />

            <div className="bg-white p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                STRUCTURATION DE LA SUPPLY CHAIN - AMÉNAGEMENT DE CABINES D'AVIONS
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 text-blue-600 mr-2" />
                    Missions Réalisées
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Achats stratégiques et procurement",
                      "Flux logistiques et planification",
                      "Déploiement de chantiers d'amélioration continue",
                      "Aménagements de cabines d'avions"
                    ].map((mission, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Globe className="w-5 h-5 text-blue-600 mr-2" />
                    Zones Géographiques
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["France", "Émirats Arabes Unis", "Chine", "États-Unis"].map((zone, i) => (
                      <div key={i} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center text-sm font-medium">
                        {zone}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ajoute ici les autres missions (MS Composites, Fareva, etc.)
              en copiant la structure et en changeant l’image + couleurs */}

        </div>
      </section>

      {/* Stats Section avec Compteurs animés */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Résultats & Impact</h2>
            <p className="text-xl text-gray-300">L'efficacité de mes interventions en chiffres</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                <Counter to={15} />+
              </div>
              <div className="text-xl font-semibold mb-1">Entreprises</div>
              <div className="text-gray-400 text-sm">Accompagnées avec succès</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                <Counter to={6} />
              </div>
              <div className="text-xl font-semibold mb-1">Secteurs</div>
              <div className="text-gray-400 text-sm">Domaines d'expertise</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                <Counter to={1000000} />€
              </div>
              <div className="text-xl font-semibold mb-1">Investissements</div>
              <div className="text-gray-400 text-sm">Pilotés et sécurisés</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                <Counter to={2020} />
              </div>
              <div className="text-xl font-semibold mb-1">Création</div>
              <div className="text-gray-400 text-sm">SASU MANévok</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
