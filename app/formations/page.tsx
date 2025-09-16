'use client'

import { BookOpen, Video, Users, Award, Calendar, CheckCircle, Play, FileText } from 'lucide-react'

export default function Formations() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Publications & <span className="text-gradient">Formations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cette page regroupe des vidéos, des publications et le programme du centre de formation de MANévok
            </p>
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl fade-in">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Video className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-blue-100">17 Juin 2022</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Webinar ALTIOR
                  </h2>
                  <h3 className="text-xl mb-4 text-blue-100">
                    "Comment la digitalisation permet-elle d'optimiser ses achats industriels !"
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Animation d'un webinar expert sur l'optimisation des achats industriels grâce aux outils digitaux.
                  </p>
                  <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Voir la présentation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approche Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto fade-in">
            <div className="text-center mb-12">
              <h2 className="section-title">Mon Approche</h2>
              <p className="section-subtitle">Une méthodologie éprouvée basée sur 4 piliers fondamentaux</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                "Après un examen approfondi de vos achats, je vous propose un plan de continuité d'activités 
                et je déploie le plan de progrès associé, en couvrant 4 piliers fondamentaux :"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Structure",
                    description: "Organisation optimale des processus achats",
                    icon: "🏗️",
                    color: "bg-blue-50 text-blue-700"
                  },
                  {
                    title: "Humain",
                    description: "Développement des compétences et accompagnement des équipes", 
                    icon: "👥",
                    color: "bg-green-50 text-green-700"
                  },
                  {
                    title: "Outils",
                    description: "Digitalisation et optimisation des outils de travail",
                    icon: "🛠️",
                    color: "bg-purple-50 text-purple-700"
                  },
                  {
                    title: "Processus",
                    description: "Amélioration continue et standardisation",
                    icon: "⚙️",
                    color: "bg-orange-50 text-orange-700"
                  }
                ].map((pilier, index) => (
                  <div key={index} className={`${pilier.color} p-6 rounded-xl text-center card-hover`}>
                    <div className="text-3xl mb-3">{pilier.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{pilier.title}</h3>
                    <p className="text-sm opacity-80">{pilier.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Formations Dispensées</h2>
            <p className="section-subtitle">Un catalogue complet de formations spécialisées</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Achats & Procurement",
                description: "Stratégies d'achats, sourcing fournisseurs, évaluation des risques",
                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                modules: ["Stratégie achats", "Évaluation fournisseurs", "Gestion des risques"]
              },
              {
                title: "Sous-traitance Industrielle", 
                description: "Management des sous-traitants, qualification et suivi performance",
                icon: <Users className="w-8 h-8 text-green-600" />,
                modules: ["Sélection sous-traitants", "Contrats industriels", "Suivi qualité"]
              },
              {
                title: "Négociation",
                description: "Techniques de négociation, préparation et conduite d'entretiens",
                icon: <Award className="w-8 h-8 text-purple-600" />,
                modules: ["Préparation négociation", "Techniques avancées", "Gestion des conflits"]
              },
              {
                title: "Planification",
                description: "PIC, PDP, MRP, gestion des stocks et planification industrielle",
                icon: <Calendar className="w-8 h-8 text-orange-600" />,
                modules: ["PIC/PDP", "Gestion stocks", "Planification flux"]
              },
              {
                title: "Enjeux RSE",
                description: "Achats responsables, développement durable, éthique fournisseurs",
                icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
                modules: ["Achats durables", "Éthique", "Impact environnemental"]
              },
              {
                title: "Blended Learning",
                description: "Formations mixtes présentiel/distanciel adaptées aux entreprises",
                icon: <Video className="w-8 h-8 text-red-600" />,
                modules: ["E-learning", "Présentiel", "Suivi personnalisé"]
              }
            ].map((formation, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  {formation.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{formation.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{formation.description}</p>
                <div className="space-y-2">
                  {formation.modules.map((module, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Références Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Références Formations</h2>
            <p className="text-xl text-gray-300">Entreprises qui font confiance à notre expertise</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {["SAFRAN", "VEONEER", "QLIO", "TOTAL", "POLYTECH"].map((entreprise, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center card-hover">
                <div className="text-2xl font-bold text-white">{entreprise}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg">
              Formations dispensées en <span className="text-yellow-400 font-semibold">blended learning</span> 
              pour s'adapter aux contraintes de chaque entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Agréments & Certifications</h2>
            <p className="section-subtitle">Une expertise reconnue et certifiée</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                date: "12/07/2021",
                title: "Centre de formation agréé Qualiopi",
                description: "Certification qualité pour les organismes de formation",
                icon: <Award className="w-12 h-12 text-blue-600" />
              },
              {
                date: "22/12/2021",
                title: "Certification professionnels expérimentés",
                description: "Supply chain management et procurement",
                icon: <CheckCircle className="w-12 h-12 text-green-600" />
              },
              {
                date: "07/11/2022", 
                title: "Formateur ASCM",
                description: "Association for Supply Chain Management",
                icon: <BookOpen className="w-12 h-12 text-purple-600" />
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
                <div className="flex justify-center mb-4">{cert.icon}</div>
                <div className="text-blue-600 font-semibold mb-2">{cert.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Publications & Ressources</h2>
            <p className="section-subtitle">Articles et contenus expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Guide des bonnes pratiques achats industriels",
                description: "Manuel complet pour optimiser vos processus achats",
                type: "PDF",
                icon: <FileText className="w-6 h-6 text-red-500" />
              },
              {
                title: "Checklist évaluation fournisseurs",
                description: "Outil d'aide à la sélection et évaluation des fournisseurs",
                type: "Template",
                icon: <CheckCircle className="w-6 h-6 text-green-500" />
              },
              {
                title: "Webinar digitalisation des achats",
                description: "Replay de la conférence ALTIOR sur l'optimisation digitale",
                type: "Vidéo",
                icon: <Video className="w-6 h-6 text-blue-500" />
              },
              {
                title: "Formation PIC-PDP",
                description: "Support de formation sur la planification industrielle",
                type: "Support",
                icon: <BookOpen className="w-6 h-6 text-purple-500" />
              }
            ].map((publication, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl card-hover">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    {publication.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                        {publication.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{publication.title}</h3>
                    <p className="text-gray-600 text-sm">{publication.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}