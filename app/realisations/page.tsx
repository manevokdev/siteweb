'use client'

import Image from 'next/image'
import { MapPin, Calendar, Users, TrendingUp, Award, CircleCheck as CheckCircle, Target, Briefcase, Building, Plane, Shield, Factory, Cog, Globe } from 'lucide-react'

export default function Realisations() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center slide-up">
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
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            
            {/* UUDS GROUP */}
            <div className="fade-in">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-8 rounded-t-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <Plane className="w-8 h-8 text-blue-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">UUDS GROUP</h2>
                      <div className="flex items-center space-x-4 text-blue-100">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>ROISSY - DUBAI - CHINE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-semibold">
                      International
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-b-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  STRUCTURATION DE LA SUPPLY CHAIN - AMÉNAGEMENT DE CABINES D'AVIONS
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
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
                      ].map((mission, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{mission}</span>
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
                      {["France", "Émirats Arabes Unis", "Chine", "États-Unis"].map((zone, index) => (
                        <div key={index} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center text-sm font-medium">
                          {zone}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Secteur d'activité</h4>
                  <p className="text-gray-700">Aéronautique - Aménagement intérieur de cabines d'avions</p>
                </div>
              </div>
            </div>

            {/* MS COMPOSITES & MEDICAL COMPOSITES */}
            <div className="fade-in">
              <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-8 rounded-t-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <Shield className="w-8 h-8 text-green-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">MS COMPOSITES & MEDICAL COMPOSITES</h2>
                      <div className="flex items-center space-x-4 text-green-100">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>LIÉVIN / CHAVIGNON</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-yellow-500 text-green-900 px-4 py-2 rounded-full font-semibold">
                      Management de Transition
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-b-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  MANAGEMENT DE TRANSITION - AÉRONAUTIQUE - DÉFENSE - MÉDICAL
                </h3>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Secteurs d'activité</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Aéronautique", "Défense", "Médical"].map((secteur, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {secteur}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CONSTRUCTIONS MECANIQUES DE NORMANDIE */}
            <div className="fade-in">
              <div className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white p-8 rounded-t-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <Building className="w-8 h-8 text-indigo-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">CONSTRUCTIONS MÉCANIQUES DE NORMANDIE</h2>
                      <div className="flex items-center space-x-4 text-indigo-100">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>CHERBOURG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-yellow-500 text-indigo-900 px-4 py-2 rounded-full font-semibold">
                      Naval
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-b-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  ACHATS STRATÉGIQUES COMMUNICATION ET PRESTATIONS INTELLECTUELLES
                </h3>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Secteur d'activité</h4>
                  <p className="text-gray-700">Conception et chantier naval</p>
                </div>
              </div>
            </div>

            {/* FAREVA */}
            <div className="fade-in">
              <div className="bg-gradient-to-r from-purple-700 to-purple-800 text-white p-8 rounded-t-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <Factory className="w-8 h-8 text-purple-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">FAREVA</h2>
                      <div className="flex items-center space-x-4 text-purple-100">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>CAEN</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-yellow-500 text-purple-900 px-4 py-2 rounded-full font-semibold">
                      Management de Transition
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-b-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  ACTIVITÉS DE SOUS-TRAITANCE INDUSTRIELLE PHARMACEUTIQUE
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Briefcase className="w-5 h-5 text-purple-600 mr-2" />
                      Réalisations Clés
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Sécurisation des approvisionnements (articles de conditionnement et matières premières)",
                        "Achat d'une ligne de fabrication (>1M€)",
                        "Management ERP et capitalisation des besoins stratégiques",
                        "Stockage délocalisé avec respect ANSM"
                      ].map((realisation, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{realisation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 text-purple-600 mr-2" />
                      Investissement Majeur
                    </h4>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-700 mb-1">+1M€</div>
                      <div className="text-purple-600 text-sm">Ligne de fabrication pharmaceutique</div>
                      <div className="text-xs text-purple-500 mt-2">Identification besoin • CDC • Négociation</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Secteur d'activité</h4>
                  <p className="text-gray-700">Pharmaceutique - Sous-traitance industrielle</p>
                </div>
              </div>
            </div>

            {/* GOBIO */}
            <div className="fade-in">
              <div className="bg-gradient-to-r from-teal-700 to-teal-800 text-white p-8 rounded-t-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <Cog className="w-8 h-8 text-teal-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">GOBIO</h2>
                      <div className="flex items-center space-x-4 text-teal-100">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>NANTES</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-yellow-500 text-teal-900 px-4 py-2 rounded-full font-semibold">
                      PIC-PDP
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-b-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  MISE EN PLACE PIC-PDP - ACTIVITÉS DE NÉGOCE D'EXOSQUELETTES
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 text-teal-600 mr-2" />
                      Optimisations Mises en Place
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Structuration de la demande pour équilibrer les ressources",
                        "Construction et animation du PDP (S&OP)",
                        "Mise en route du PDD (Master Distribution Schedule)",
                        "Établissement des besoins long terme pour contractualiser"
                      ].map((optimisation, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{optimisation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 text-teal-600 mr-2" />
                      Méthodologie
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-teal-50 p-3 rounded-lg">
                        <div className="font-medium text-teal-800">PIC</div>
                        <div className="text-sm text-teal-600">Plan Industriel et Commercial</div>
                      </div>
                      <div className="bg-teal-50 p-3 rounded-lg">
                        <div className="font-medium text-teal-800">PDP</div>
                        <div className="text-sm text-teal-600">Plan Directeur de Production</div>
                      </div>
                      <div className="bg-teal-50 p-3 rounded-lg">
                        <div className="font-medium text-teal-800">PDD</div>
                        <div className="text-sm text-teal-600">Plan Directeur de Distribution</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Secteur d'activité</h4>
                  <p className="text-gray-700">Technologies médicales - Négoce d'exosquelettes</p>
                </div>
              </div>
            </div>

            {/* ORATECH VENDÉE */}
            <div className="fade-in">
              <div className="bg-gradient-to-r from-orange-700 to-orange-800 text-white p-8 rounded-t-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <Target className="w-8 h-8 text-orange-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">ORATECH VENDÉE</h2>
                      <div className="flex items-center space-x-4 text-orange-100">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>VENDÉE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-yellow-500 text-orange-900 px-4 py-2 rounded-full font-semibold">
                      Spectacle
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-b-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  ANIMATION ACHATS PROJETS - PUY-DU-FOU FRANCE & ESPAGNE
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Briefcase className="w-5 h-5 text-orange-600 mr-2" />
                      Missions Réalisées
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Solutions alternatives face à la crise des composants électroniques",
                        "Recherches de fournisseurs alternatifs",
                        "Support respectant le leadership de l'équipe en place"
                      ].map((mission, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-orange-500" />
                          <span className="text-gray-700">{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Contexte</h4>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-orange-800 text-sm">
                        Conception et réalisation de structures décor mobiles et pilotées pour spectacles
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Secteur d'activité</h4>
                  <p className="text-gray-700">Spectacle - Structures mobiles et automatisées</p>
                </div>
              </div>
            </div>

            {/* AUTRES MISSIONS */}
            <div className="fade-in">
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Autres Missions Significatives</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      company: "CELEC",
                      location: "Conception Électronique (EMS)",
                      mission: "Sécurisation de sourcing de composants électroniques",
                      icon: <Cog className="w-6 h-6" />
                    },
                    {
                      company: "EUROPE TECHNOLOGIES",
                      location: "Projet 'THE BOX' / LIVINGPACKET",
                      mission: "Accompagnement CDC, négociation, contractualisation",
                      icon: <Building className="w-6 h-6" />
                    },
                    {
                      company: "HOWMET AEROSPACE",
                      location: "Sourcing d'outillages",
                      mission: "Fonderie par cire perdue - Recherche d'outilleurs qualifiés",
                      icon: <Factory className="w-6 h-6" />
                    },
                    {
                      company: "NORMANDY HADRONTHERAPY",
                      location: "Initialisation des Achats",
                      mission: "Définition processus achats et approvisionnements",
                      icon: <Shield className="w-6 h-6" />
                    },
                    {
                      company: "CORETEC GROUP",
                      location: "Management de transition",
                      mission: "Changement d'ERP et revue de contrats",
                      icon: <TrendingUp className="w-6 h-6" />
                    }
                  ].map((mission, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <div className="bg-white/20 p-2 rounded-lg mr-3">
                          {mission.icon}
                        </div>
                        <h3 className="font-bold text-lg">{mission.company}</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{mission.location}</p>
                      <p className="text-white text-sm">{mission.mission}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Résultats & Impact</h2>
            <p className="text-xl text-gray-300">L'efficacité de mes interventions en chiffres</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Entreprises", description: "Accompagnées avec succès" },
              { number: "6", label: "Secteurs", description: "Domaines d'expertise" },
              { number: "1M€+", label: "Investissements", description: "Pilotés et sécurisés" },
              { number: "2020", label: "Création", description: "SASU MANévok" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage CORETEC */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Témoignage Client</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "Olivier a intégré Coretec pendant plusieurs semaines en tant que consultant achats/supply chain 
                pour renforcer l'équipe dans le cadre d'un changement d'ERP. Il a su s'adapter rapidement et 
                efficacement à l'organisation et aux process en place. Opérationnel en front carré et connaissant 
                parfaitement notre métier, la mission a été remplie avec succès et nous referons appel à lui au 
                besoin dans le futur! Merci Olivier"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">YC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Yann LE CORRE</div>
                  <div className="text-gray-600">General Manager - CORETEC GROUP</div>
                  <div className="text-sm text-blue-600">Recommandation LinkedIn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 