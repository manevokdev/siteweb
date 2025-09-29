'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Target, Users, TrendingUp, CheckCircle, Award, Briefcase } from 'lucide-react'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative gradient-bg text-white py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl rotate-slow"></div>
        <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20`}
/>

        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="slide-up stagger-1">
              <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 glass-effect">
                ✨ Expert Supply-Chain & Procurement
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight slide-up stagger-2">
              LEAN PROCUREMENT<br />
              <span className="text-gradient bg-gradient-to-r from-[#FFC107] to-[#FF9800] bg-clip-text text-transparent pulse-glow">PERFORMANCE</span>
            </h1>
            <div className="text-xl md:text-3xl mb-10 font-light slide-up stagger-3">
              <p className="mb-2">MANAGEMENT - EXPERTISE - FORMATION - COMPÉTITIVITÉ</p>
            </div>
            <p className="text-2xl mb-12 text-white/90 slide-up stagger-4 max-w-3xl mx-auto leading-relaxed">
              Un professionnel à vos côtés et à votre écoute
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center slide-up stagger-5">
              <Link href="/contact" className="btn-primary group">
                Découvrir mes services
                <ArrowRight className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Link>
              <Link href="/realisations" className="glass-effect hover:bg-white/30 text-white border-2 border-white/30 font-semibold py-4 px-8 rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                Voir mes réalisations
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent"></div> */}
      </section>

      {/* Besoins Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">POUR VOTRE SUPPLY-CHAIN, VOUS AVEZ BESOIN DE :</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Target className="w-16 h-16 text-white" />,
                title: "Stratégie & Pilotage",
                description: "Définition et mise en œuvre d'une stratégie achats alignée sur vos objectifs business",
                color: "from-[#1976D2] to-[#2196F3]"
              },
              {
                icon: <Users className="w-16 h-16 text-white" />,
                title: "Expertise Opérationnelle",
                description: "Accompagnement terrain pour optimiser vos processus et performances achats",
                color: "from-[#8BC34A] to-[#9CCC65]"
              },
              {
                icon: <TrendingUp className="w-16 h-16 text-white" />,
                title: "Amélioration Continue",
                description: "Déploiement de chantiers d'amélioration et suivi des performances",
                color: "from-[#4FC3F7] to-[#29B6F6]"
              }
            ].map((item, index) => (
              <div key={index} className={`professional-card p-10 text-center fade-in stagger-${index + 1} group`}>
                <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aide Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">AVEC UN NOUVEAU REGARD ET EXPÉRIENCE, JE VOUS AIDE À :</h2>
            {/* <p className="section-subtitle">Pour des Achats éthiques et performants - Produits, Services...</p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              "Structurer et optimiser votre fonction achats",
              "Développer une approche lean procurement",
              "Mettre en place des KPI de performance",
              "Former vos équipes aux meilleures pratiques",
              "Conduire le changement organisationnel",
              "Sécuriser vos approvisionnements stratégiques"
            ].map((item, index) => (
              <div key={index} className={`flex items-center space-x-4 p-6 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-500 fade-in stagger-${index + 1} group`}>
                <div className="w-12 h-12 bg-gradient-to-br from-[#8BC34A] to-[#9CCC65] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 text-lg font-medium group-hover:text-gray-900 transition-colors duration-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piliers Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#1976D2]/10 to-[#8BC34A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-[#4FC3F7]/10 to-[#FFC107]/10 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                symbol: "α",
                title: "Management opérationnel",
                description: "Être sur le terrain où les services sont fournis – observation des processus, des interactions et des besoins clients !",
                color: "from-[#1976D2] to-[#2196F3]"
              },
              {
                symbol: "β",
                title: "Conduite du changement !",
                description: "Examinez les éléments concrets tels que les documents, les outils, les ressources humaines et les infrastructures !",
                color: "from-[#8BC34A] to-[#9CCC65]"
              },
              {
                symbol: "ω",
                title: "Leviers de performance !",
                description: "Engager les projets à partir des enjeux économiques, techniques, sociaux et environnementaux !",
                color: "from-[#4FC3F7] to-[#29B6F6]"
              }
            ].map((pilier, index) => (
              <div key={index} className={`floating-card p-10 fade-in stagger-${index + 1} group`}>
                <div className={`w-20 h-20 bg-gradient-to-br ${pilier.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <span className="text-white text-3xl font-bold">{pilier.symbol}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{pilier.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{pilier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-[#37474F] to-[#455A64] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20fill='%23ffffff'%20fill-opacity='0.05'%3E%3Ccircle%20cx='30'%20cy='30'%20r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Mes Services</h2>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">Solutions complètes pour votre performance achats</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Award className="w-16 h-16 text-white" />,
                title: "MISSIONS SPÉCIALES D'URGENCE",
                description: "Intervention rapide pour résoudre vos problématiques critiques",
                color: "from-[#FFC107] to-[#FF9800]"
              },
              {
                icon: <Users className="w-16 h-16 text-white" />,
                title: "MANAGEMENT DU CHANGEMENT",
                description: "Accompagnement dans la transformation de vos processus achats",
                color: "from-[#8BC34A] to-[#9CCC65]"
              },
              {
                icon: <Briefcase className="w-16 h-16 text-white" />,
                title: "MANAGEMENT DE LA PERFORMANCE",
                description: "Optimisation continue de vos performances et KPI achats",
                color: "from-[#4FC3F7] to-[#29B6F6]"
              }
            ].map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl card-hover text-center fade-in stagger-${index + 1} group`}>
                <div className={`w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-6 text-white">{service.title}</h3>
                <p className="text-white/80 leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1976D2] via-[#2196F3] to-[#4FC3F7] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 slide-up">Prêt à optimiser votre supply-chain ?</h2>
            <p className="text-2xl mb-12 text-white/90 slide-up stagger-1 leading-relaxed">Contactez-moi pour une première discussion sur vos enjeux</p>
            <div className="slide-up stagger-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-4 px-8 shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Prendre contact
                <ArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-2"
                  size={22}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}