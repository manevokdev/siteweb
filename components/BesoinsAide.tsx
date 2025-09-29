'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { FadeUp } from '@/components/Animated'

export default function BesoinsAide() {
  const besoinsImages = [
    '/gestion_de_projet-1.jpg',
    '/usinage-2.jpg',
    '/robot-2.jpg',
  ]
  const aideImages = [
    '/metrologie-2.jpg',
    '/electronique-1.jpg',
    '/plasma-1.jpg',
  ]

  const [besoinsIndex, setBesoinsIndex] = useState(0)
  const [aideIndex, setAideIndex] = useState(0)

  useEffect(() => {
    const besoinsInterval = setInterval(() => {
      setBesoinsIndex((prev) => (prev + 1) % besoinsImages.length)
    }, 5000)

    const aideInterval = setInterval(() => {
      setAideIndex((prev) => (prev + 1) % aideImages.length)
    }, 5000)

    return () => {
      clearInterval(besoinsInterval)
      clearInterval(aideInterval)
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 space-y-20">
        {/* Bloc 1 : Vos besoins */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-8">
              POUR VOTRE SUPPLY-CHAIN, VOUS AVEZ BESOIN DE :
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              {[
                'Définir ou Ajuster votre stratégie Achat et Logistique',
                'Optimiser votre Organisation',
                'Améliorer le pilotage de votre activité',
                'Booster votre productivité',
              ].map((item, i) => (
                <FadeUp key={i} delay={i * 0.15}>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Carousel smooth */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg ring-2 ring-green-500/40">
            {besoinsImages.map((img, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  x: i === besoinsIndex ? 0 : i < besoinsIndex ? '-100%' : '100%',
                  opacity: i === besoinsIndex ? 1 : 0,
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={img}
                  alt={`Slide ${i}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bloc 2 : Mon aide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg ring-2 ring-blue-500/40 order-2 md:order-1">
            {aideImages.map((img, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  x: i === aideIndex ? 0 : i < aideIndex ? '-100%' : '100%',
                  opacity: i === aideIndex ? 1 : 0,
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={img}
                  alt={`Slide ${i}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>

          <div className="order-1 md:order-2">
            <h2 className="section-title mb-8">
              AVEC UN NOUVEAU REGARD ET EXPÉRIENCE, JE VOUS AIDE À :
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              {[
                'Diagnostiquer et analyser votre fonctionnement',
                "Bâtir des plans d'action et des outils de mesure",
                'Synchroniser vos équipes et vos changements',
                'Exécuter des missions opérationnelles du quotidien',
              ].map((item, i) => (
                <FadeUp key={i} delay={i * 0.15}>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
