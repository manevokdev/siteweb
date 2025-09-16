'use client'

import { MapPin, Calendar, Users, TrendingUp, Award, CheckCircle, Target, Briefcase } from 'lucide-react'

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
                  <div>
                    <h2 className="text-3xl font-bold mb-2">UUDS GROUP</h2>
                    <div className="flex items-center space-x-4 text-blue-100">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>ROISSY - DUBAI - CHINE</span>
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
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
                        "Optimisation des flux logistiques",
                        "Planification de la production",
                        "Déploiement de chantiers d'amélioration continue"
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
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
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

            {/* FAREVA */}
            <div className="fade-in">
              <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-8 rounded-t-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">FAREVA</h2>
                    <div className="flex items-center space-x-4 text-green-100">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>CAEN</span>
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  MANAGEMENT DE TRANSITION - ACTIVITÉS PHARMACEUTIQUE
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Briefcase className="w-5 h-5 text-green-600 mr-2" />
                      Réalisations Clés
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Sécurisation des approvisionnements",
                        "Achat d'une ligne de fabrication (>1M€)",
                        "Management ERP et optimisation",
                        "Capitalisation des besoins stratégiques"
                      ].map((realisation, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{realisation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 text-green-600 mr-2" />
                      Investissement
                    </h4>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-700 mb-1">+1M€</div>
                      <div className="text-green-600">Ligne de fabrication pharmaceutique</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Secteur d'activité</h4>
                  <p className="text-gray-700">Pharmaceutique - Production et conditionnement</p>
                </div>
              </div>
            </div>

            {/* GOBIO */}
            <div className="fade-in">
              <div className="bg-gradient-to-r from-purple-700 to-purple-800 text-white p-8 rounded-t-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">GOBIO</h2>
                    <div className="flex items-center space-x-4 text-purple-100">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>NANTES</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-yellow-500 text-purple-900 px-4 py-2 rounded-full font-semibold">
                      Innovation
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-b-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  MISE EN PLACE PIC-PDP - ACTIVITÉS EXOSQUELETTES
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                      Optimisations Mises en Place
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Structuration de la demande",
                        "Équilibrage des ressources",
                        "Construction et animation du PDP",
                        "Établissement des besoins long terme"
                      ].map((optimisation, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          <span className="text-gray-700">{optimisation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 text-purple-600 mr-2" />
                      Méthodologie
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="font-medium text-purple-800">PIC</div>
                        <div className="text-sm text-purple-600">Plan Industriel et Commercial</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="font-medium text-purple-800">PDP</div>
                        <div className="text-sm text-purple-600">Plan Directeur de Production</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Secteur d'activité</h4>
                  <p className="text-gray-700">Technologies médicales - Exosquelettes de rééducation</p>
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
              { number: "3", label: "Continents", description: "Zones d'intervention" },
              { number: "5+", label: "Secteurs", description: "Domaines d'expertise" },
              { number: "1M€+", label: "Investissements", description: "Pilotés et sécurisés" },
              { number: "100%", label: "Satisfaction", description: "Client sur les missions" }
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
    </div>
  )
}