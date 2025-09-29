'use client'

import React from 'react'
import Link from 'next/link'
import { 
  ArrowRight, Target, Users, TrendingUp, 
  CircleCheck as CheckCircle, Award, Briefcase, 
  BookOpen, Compass, BarChart3, GraduationCap, Handshake 
} from 'lucide-react'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative gradient-bg text-white py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl rotate-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 glass-effect">
            ✨ Expert Supply-Chain & Procurement
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            LEAN PROCUREMENT<br />
            <span className="text-gradient bg-gradient-to-r from-[#FFC107] to-[#FF9800] bg-clip-text text-transparent pulse-glow">PERFORMANCE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light">
            MANAGEMENT - EXPERTISE - FORMATION - COMPÉTITIVITÉ
          </p>
          <p className="text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Un professionnel à vos côtés et à votre écoute
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary group">
              Découvrir mes services
              <ArrowRight className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </Link>
            <Link href="/realisations" className="glass-effect hover:bg-white/30 text-white border-2 border-white/30 font-semibold py-4 px-8 rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
              Voir mes réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Besoins & Aide Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-12">POUR VOTRE SUPPLY-CHAIN, VOUS AVEZ BESOIN DE :</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-lg text-gray-700">
            {[
              "Définir ou Ajuster votre stratégie Achat et Logistique",
              "Optimiser votre Organisation",
              "Améliorer le pilotage de votre activité",
              "Booster votre productivité"
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2 className="section-title mt-16 mb-12">AVEC UN NOUVEAU REGARD ET EXPÉRIENCE, JE VOUS AIDE À :</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-lg text-gray-700">
            {[
              "Diagnostiquer et analyser votre fonctionnement",
              "Bâtir des plans d'action et des outils de mesure",
              "Synchroniser vos équipes et vos changements",
              "Exécuter des missions opérationnelles du quotidien"
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Axes Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">MES 5 AXES D’INTERVENTION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {[
              { icon: <Compass className="w-14 h-14 text-white" />, title: "Audit & Stratégie des Achats" },
              { icon: <Users className="w-14 h-14 text-white" />, title: "Conseil & Management du Changement" },
              { icon: <BarChart3 className="w-14 h-14 text-white" />, title: "Management des Achats et de la Performance" },
              { icon: <BookOpen className="w-14 h-14 text-white" />, title: "Formations Supply-Chain & Excellence opérationnelle" },
              { icon: <GraduationCap className="w-14 h-14 text-white" />, title: "Coaching & Formation en situation de travail" }
            ].map((axe, i) => (
              <div key={i} className="p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center shadow-md">
                  {axe.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{axe.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Piliers α β ω */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">MON APPROCHE</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { symbol: "α", title: "Management opérationnel", description: "Observation terrain : processus, interactions et besoins clients. Une approche pragmatique qui part du réel." },
              { symbol: "β", title: "Conduite du changement", description: "Analyse des documents, outils, ressources humaines et infrastructures pour accompagner vos transitions." },
              { symbol: "ω", title: "Leviers de performance", description: "Déploiement de projets alignés sur vos enjeux économiques, techniques, sociaux et environnementaux." }
            ].map((p, i) => (
              <div key={i} className="p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white text-3xl font-bold">
                  {p.symbol}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 bg-gradient-to-br from-[#37474F] to-[#455A64] text-white">
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
              <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1976D2] via-[#2196F3] to-[#4FC3F7] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Prêt à optimiser votre supply-chain ?</h2>
          <p className="text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Contactez-moi pour une première discussion sur vos enjeux
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-4 px-8 shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Prendre contact
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  )
}
