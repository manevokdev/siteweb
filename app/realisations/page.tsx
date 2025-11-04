'use client'

import Image from 'next/image'
import {
  MapPin,
  Target,
  Globe,
  CheckCircle,
  Building,
  Shield,
  TrendingUp,
  Factory,
  Cog,
} from 'lucide-react'
import AutresMissions from '@/components/AutresMissions'

// ===== CONFIGURATION : Modifier ces variables pour ajouter/modifier du contenu =====

// Missions principales (grandes cartes détaillées)
const missionsDetaillees = [
  {
    id: 1,
    title: "UUDS GROUP",
    location: "ROISSY - DUBAI - CHINE",
    badge: "International",
    color: "blue",
    subtitle: "STRUCTURATION DE LA SUPPLY CHAIN - AMÉNAGEMENT DE CABINES D'AVIONS",
    missions: [
      'Achats stratégiques et procurement',
      'Flux logistiques et planification',
      "Déploiement de chantiers d'amélioration continue",
      "Aménagements de cabines d'avions",
    ],
    zones: ['France', 'Émirats Arabes Unis', 'Chine', 'États-Unis'],
    secteur: "Aéronautique - Aménagement intérieur de cabines d'avions",
    image: "/uudds.png",
    fullWidth: true, // Affiche en pleine largeur
  },
  {
    id: 2,
    title: "MS COMPOSITES & MEDICAL COMPOSITES",
    location: "LIÉVIN / CHAVIGNON",
    badge: "Management de Transition",
    color: "green",
    subtitle: "MANAGEMENT DE TRANSITION - AÉRONAUTIQUE - DÉFENSE - MÉDICAL",
    secteur: "Aéronautique - Défense - Médical",
    image: "/mscomposites.png",
    fullImage: true, // Affiche seulement l'image (pas de liste de missions)
    halfWidth: true, // Affiche en demi-largeur (côte à côte avec la suivante)
  },
  {
    id: 3,
    title: "CONSTRUCTIONS MÉCANIQUES DE NORMANDIE",
    location: "CHERBOURG",
    badge: "Naval",
    color: "indigo",
    subtitle: "ACHATS STRATÉGIQUES COMMUNICATION ET PRESTATIONS INTELLECTUELLES",
    secteur: "Conception et chantier naval",
    image: "/naval.jpg",
    fullImage: true,
    halfWidth: true,
  },
  {
    id: 4,
    title: "FAREVA",
    location: "CAEN",
    badge: "Management de Transition",
    color: "purple",
    subtitle: "ACTIVITÉS DE SOUS-TRAITANCE INDUSTRIELLE PHARMACEUTIQUE",
    missions: [
      'Sécurisation des approvisionnements',
      "Achat d'une ligne de fabrication (>1M€)",
      'Management ERP et capitalisation des besoins stratégiques',
      'Stockage délocalisé avec respect ANSM',
    ],
    secteur: "Pharmaceutique - Sous-traitance industrielle",
    image: "/fareva.jpg",
    fullWidth: true,
  },
  {
    id: 5,
    title: "GOBIO",
    location: "NANTES",
    badge: "PIC-PDP",
    color: "teal",
    subtitle: "MISE EN PLACE PIC-PDP - ACTIVITÉS DE NÉGOCE D'EXOSQUELETTES",
    missions: [
      'Structuration de la demande',
      'Construction et animation du PDP (S&OP)',
      'Mise en route du PDD',
      'Établissement des besoins long terme',
    ],
    secteur: "Technologies médicales - Négoce d'exosquelettes",
    image: "/gobio.jpg",
    fullWidth: true,
  },
  {
    id: 6,
    title: "ORATECH VENDÉE",
    location: "VENDÉE",
    badge: "Spectacle",
    color: "orange",
    subtitle: "ANIMATION ACHATS PROJETS - PUY-DU-FOU FRANCE & ESPAGNE",
    missions: [
      'Solutions alternatives face à la crise des composants',
      'Recherches de fournisseurs alternatifs',
      "Support respectant le leadership de l'équipe en place",
    ],
    secteur: "Spectacle - Structures mobiles et automatisées",
    image: "/puy-du-fou.png",
    fullWidth: true,
  },
]

// Statistiques
const statistiques = [
  { number: "15+", label: "Entreprises", description: "Accompagnées avec succès" },
  { number: "6", label: "Secteurs", description: "Domaines d'expertise" },
  { number: "1M€+", label: "Investissements", description: "Pilotés et sécurisés" },
  { number: "2020", label: "Création", description: "SASU MANévok" }
]

// Témoignage client
const testimonial = {
  text: "Olivier a intégré Coretec pendant plusieurs semaines en tant que consultant achats/supply chain pour renforcer l'équipe dans le cadre d'un changement d'ERP. Il a su s'adapter rapidement et efficacement à l'organisation et aux process en place. Opérationnel en front carré et connaissant parfaitement notre métier, la mission a été remplie avec succès et nous referons appel à lui au besoin dans le futur! Merci Olivier",
  author: "Yann LE CORRE",
  position: "General Manager - CORETEC GROUP",
  source: "Recommandation LinkedIn",
  initials: "YC"
}

// ===== FIN DE LA CONFIGURATION =====

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
        <div className="container mx-auto px-4 space-y-16">
          {missionsDetaillees.map((mission, index) => {
            // Si halfWidth, on groupe les missions par 2
            if (mission.halfWidth) {
              // Vérifie si c'est le premier d'une paire
              const nextMission = missionsDetaillees[index + 1]
              if (nextMission && nextMission.halfWidth) {
                return (
                  <div key={mission.id} className="grid md:grid-cols-2 gap-8">
                    <MissionBlock {...mission} />
                    <MissionBlock {...nextMission} />
                  </div>
                )
              }
              // Si c'est le second d'une paire, on le skip (déjà rendu)
              const prevMission = missionsDetaillees[index - 1]
              if (prevMission && prevMission.halfWidth) {
                return null
              }
            }
            
            // Sinon, affichage normal pleine largeur
            return <MissionBlock key={mission.id} {...mission} />
          })}
        </div>
      </section>

       {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Résultats & Impact</h2>
            <p className="text-xl text-gray-300">L&apos;efficacité de mes interventions en chiffres</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {statistiques.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
     <section className="py-16 bg-gray-50">
        {/* AUTRES MISSIONS */}
        <AutresMissions />
      </section>
      
      {/* Témoignage Client */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Témoignage Client</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-blue-600">{testimonial.source}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* --- Composant réutilisable --- */
function MissionBlock({
  title,
  location,
  badge,
  color,
  subtitle,
  missions,
  zones,
  secteur,
  image,
  fullImage,
}: {
  title: string
  location: string
  badge: string
  color: string
  subtitle: string
  missions?: string[]
  zones?: string[]
  secteur?: string
  image?: string
  fullImage?: boolean
}) {
  const colors: Record<string, string> = {
    blue: 'from-blue-700 to-blue-800 text-blue-700',
    green: 'from-green-700 to-green-800 text-green-700',
    indigo: 'from-indigo-700 to-indigo-800 text-indigo-700',
    purple: 'from-purple-700 to-purple-800 text-purple-700',
    teal: 'from-teal-700 to-teal-800 text-teal-700',
    orange: 'from-orange-700 to-orange-800 text-orange-700',
  }

  return (
    <div className="fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div
        className={`bg-gradient-to-r ${colors[color].split(' ')[0]} ${
          colors[color].split(' ')[1]
        } text-white p-6 rounded-t-2xl`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Building className={`w-6 h-6 ${colors[color].split(' ')[2]}`} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">{title}</h2>
              <div className="flex items-center space-x-2 opacity-80 text-sm">
                <MapPin size={14} />
                <span>{location}</span>
              </div>
            </div>
          </div>
          <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full font-semibold mt-4 md:mt-0 text-sm">
            {badge}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white border border-gray-200 rounded-b-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">{subtitle}</h3>

        {fullImage && image ? (
          // Mode image seule
          <div className="flex justify-center">
            <Image
              src={image}
              alt={title}
              width={400}
              height={250}
              className="rounded-lg shadow object-cover"
            />
          </div>
        ) : (
          // Mode classique (texte + image)
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Texte */}
            <div className="lg:col-span-2 space-y-6">
              {missions && missions.length > 0 && (
                <div>
                  <h4 className="text-md font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className={`w-4 h-4 ${colors[color].split(' ')[2]} mr-2`} />
                    Missions Réalisées
                  </h4>
                  <ul className="space-y-1">
                    {missions.map((m, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-gray-700">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {zones && zones.length > 0 && (
                <div>
                  <h4 className="text-md font-semibold text-gray-900 mb-3 flex items-center">
                    <Globe className={`w-4 h-4 ${colors[color].split(' ')[2]} mr-2`} />
                    Zones Géographiques
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {zones.map((zone, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Image */}
            {image && (
              <div className="flex justify-center items-start">
                <Image
                  src={image}
                  alt={title}
                  width={240}
                  height={160}
                  className="rounded-lg shadow object-cover"
                />
              </div>
            )}
          </div>
        )}

        {secteur && (
          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <h4 className="text-md font-semibold text-gray-900 mb-2">Secteur d&apos;activité</h4>
            <p className="text-gray-700 text-sm">{secteur}</p>
          </div>
        )}
      </div>
    </div>
  )
}

