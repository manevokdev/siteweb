'use client'

import Image from 'next/image'
import { Award, BookOpen, Users, Target, CheckCircle, Briefcase } from 'lucide-react'

export default function APropos() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À propos d'<span className="text-gradient">Olivier KUNSTMANN</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert en Supply-Chain Management avec plus de 20 ans d'expérience dans l'optimisation des achats industriels
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="fade-in flex justify-center lg:justify-start">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl p-4 shadow-lg">
                <div className="w-full h-full relative overflow-hidden rounded-xl">
                  <Image
                    src="/olivier_portrait.jpg"
                    alt="Olivier KUNSTMANN - Expert Supply-Chain"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dirigeant de MANévok</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fort d'une expérience significative dans le management de la supply-chain et les achats stratégiques, 
                j'accompagne les entreprises dans l'optimisation de leurs performances achats et la transformation 
                de leurs processus.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ma philosophie : être un professionnel à vos côtés et à votre écoute, avec une approche terrain 
                et des solutions concrètes adaptées à vos enjeux spécifiques.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">20+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">50+</div>
                  <div className="text-sm text-gray-600">Missions réalisées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-8">Vidéo de Présentation</h2>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <video
              src="/250912_presentation.mp4"
              controls
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Domaines d'Expertise</h2>
            <p className="section-subtitle">Une expertise reconnue dans tous les aspects de la supply-chain</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-blue-700" />,
                title: "Supply-Chain Management",
                description: "Structuration et optimisation des flux logistiques et de la planification"
              },
              {
                icon: <Briefcase className="w-12 h-12 text-blue-700" />,
                title: "Achats Stratégiques",
                description: "Développement de stratégies achats et négociation avec les fournisseurs"
              },
              {
                icon: <Users className="w-12 h-12 text-blue-700" />,
                title: "Management de Transition",
                description: "Accompagnement des équipes dans les phases de transformation"
              },
              {
                icon: <BookOpen className="w-12 h-12 text-blue-700" />,
                title: "Formation Professionnelle",
                description: "Transmission de connaissances et développement des compétences"
              },
              {
                icon: <Award className="w-12 h-12 text-blue-700" />,
                title: "Conduite du Changement",
                description: "Pilotage des projets de transformation organisationnelle"
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-blue-700" />,
                title: "Performance Industrielle",
                description: "Optimisation des processus et amélioration continue"
              }
            ].map((expertise, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
                <div className="flex justify-center mb-4">{expertise.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{expertise.title}</h3>
                <p className="text-gray-600">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Secteurs d'Activité</h2>
            <p className="section-subtitle">Une expérience transversale dans des secteurs exigeants</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Aéronautique",
              "Défense", 
              "Médical",
              "Pharmaceutique",
              "Industrie",
              "Naval"
            ].map((secteur, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center card-hover">
                <h3 className="font-semibold text-gray-900">{secteur}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Agréments</h2>
            <p className="text-xl text-blue-100">Reconnaissance professionnelle et expertise certifiée</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                date: "07/11/2022",
                title: "Formateur ASCM",
                description: "Supply-Chain Management"
              },
              {
                date: "22/12/2021", 
                title: "Certification professionnels expérimentés",
                description: "Supply chain"
              },
              {
                date: "12/07/2021",
                title: "Centre de formation agréé",
                description: "Qualiopi"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-xl card-hover text-center">
                <div className="text-yellow-400 font-semibold mb-2">{cert.date}</div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-blue-200">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Mes Valeurs</h2>
            <p className="section-subtitle">Les principes qui guident mon approche professionnelle</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Écoute & Proximité",
                description: "Une approche personnalisée basée sur l'écoute de vos besoins spécifiques et un accompagnement de proximité."
              },
              {
                title: "Excellence Opérationnelle", 
                description: "Recherche constante de l'amélioration des performances et de l'optimisation des processus."
              },
              {
                title: "Éthique & Transparence",
                description: "Des pratiques professionnelles irréprochables et une communication transparente avec tous les partenaires."
              },
              {
                title: "Innovation & Adaptabilité",
                description: "Capacité d'adaptation aux évolutions du marché et intégration des nouvelles technologies."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}