//Accueil
'use client'

import React from 'react'
import Link from 'next/link'
import { 
  ArrowRight, Target, Users, TrendingUp, 
  CircleCheck as CheckCircle, Award, Briefcase, 
  BookOpen, Compass, BarChart3, GraduationCap 
} from 'lucide-react'

import { FadeUp, ZoomIn, RotatePop, SlideIn } from '@/components/Animated'
import { motion } from 'framer-motion'
import Image from 'next/image'
import FiveAxesDiagram from '@/components/FixeAxesDiagram'
import BesoinsAide from '@/components/BesoinsAide'

export default function Home() {
  return (
    <div className="overflow-hidden">
     {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        {/* Image de fond */}
        <Image
          src="/usinage-2.jpg" // 👉 tu peux mettre un slider plus tard
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Effets lumineux */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl rotate-slow"></div>

        {/* Effet brillant */}
        <div className="absolute inset-0 animate-shine pointer-events-none"></div>

        {/* Contenu */}
        <FadeUp>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              LEAN PROCUREMENT<br />
              <span className="text-gradient bg-gradient-to-r from-[#FFC107] to-[#FF9800] bg-clip-text text-transparent pulse-glow">
                PERFORMANCE
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-light">
              MANAGEMENT - EXPERTISE - FORMATION - COMPÉTITIVITÉ
            </p>
            <p className="text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Un professionnel à vos côtés et à votre écoute
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/#services" className="btn-primary group">
                Découvrir mes services
                <ArrowRight
                  className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </Link>
              <Link
                href="/realisations"
                className="glass-effect hover:bg-white/30 text-white border-2 border-white/30 font-semibold py-4 px-8 rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              >
                Voir mes réalisations
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>


      <BesoinsAide />

      {/* 5 Axes Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">MES 5 AXES D’INTERVENTION</h2>
           <div className="flex justify-center">
              <Image
                src="/pilliers_manevok.png"
                alt="Les 5 axes d’intervention MANévok"
                width={900}
                height={900}
                className="rounded-xl shadow-lg"
              />
            </div>
        </div>
      </section>

      {/* 3 Piliers α β ω */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#1976D2]/10 to-[#8BC34A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-[#4FC3F7]/10 to-[#FFC107]/10 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">MON APPROCHE</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                symbol: "α",
                title: "Management opérationnel",
                description: "Observation terrain : processus, interactions et besoins clients. Une approche pragmatique qui part du réel.",
                color: "from-[#1976D2] to-[#2196F3]"
              },
              {
                symbol: "β",
                title: "Conduite du changement",
                description: "Analyse des documents, outils, ressources humaines et infrastructures pour accompagner vos transitions.",
                color: "from-[#8BC34A] to-[#9CCC65]"
              },
              {
                symbol: "ω",
                title: "Leviers de performance",
                description: "Déploiement de projets alignés sur vos enjeux économiques, techniques, sociaux et environnementaux.",
                color: "from-[#4FC3F7] to-[#29B6F6]"
              }
            ].map((pilier, i) => (
              <RotatePop key={i} delay={i * 0.2}>
                <div className={`floating-card p-10 group`}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${pilier.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <span className="text-white text-3xl font-bold">{pilier.symbol}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{pilier.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{pilier.description}</p>
                </div>
              </RotatePop>
            ))}
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section id="services" className="py-20 bg-gradient-to-br from-[#37474F] to-[#455A64] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">MES SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Award className="w-16 h-16 text-white" />,
                title: "MISSIONS SPÉCIALES D’URGENCE",
                items: [
                  "Gestion de crises et suivi de fournisseurs défaillants",
                  "Ressourcing pour de nouveaux besoins",
                  "Gestion des risques et analyse de contrats",
                  "Relocalisation ou changement de fournisseurs",
                  "Remplacement de ressources au pied levé"
                ]
              },
              {
                icon: <Users className="w-16 h-16 text-white" />,
                title: "MANAGEMENT DU CHANGEMENT",
                items: [
                  "Encadrement d’équipes et formations",
                  "Management de phases transitoires",
                  "Restructuration ou réorganisation",
                  "Mise en place d’outils de pilotage",
                  "Plans de continuité d’activité (ISO 22301)",
                  "Sécurisation des achats et approvisionnements",
                  "Accompagnement de la digitalisation"
                ]
              },
              {
                icon: <Briefcase className="w-16 h-16 text-white" />,
                title: "MANAGEMENT DE LA PERFORMANCE",
                items: [
                  "Diagnostic et collecte de données",
                  "Analyse des ressources utilisées",
                  "Étude SWOT (forces, faiblesses, opportunités, menaces)",
                  "Évaluation de la maturité achats",
                  "Recommandations d’amélioration",
                  "Construction d’un plan de progrès (PDCA)",
                  "Clarification de la feuille de route",
                  "Déploiement de leviers de performance",
                  "Mesure des gains réalisés"
                ]
              }
            ].map((service, i) => (
              <SlideIn key={i} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.2}>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-6">{service.title}</h3>
                  <ul className="space-y-3 text-white/90 leading-relaxed text-left">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1976D2] via-[#2196F3] to-[#4FC3F7] text-white text-center">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Prêt à optimiser votre supply-chain ?</h2>
            <p className="text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Contactez-moi pour une première discussion sur vos enjeux
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-4 px-8 shadow-lg transition-all duration-300"
              >
                Prendre contact
                <ArrowRight size={22} />
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
