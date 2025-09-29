'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AutresMissions() {
  const missions = [
    {
      company: 'CELEC',
      location: 'Conception Électronique (EMS)',
      mission: 'Sécurisation de sourcing de composants électroniques',
      image: '/celec.png',
      details: `
- Compréhension de la situation de vulnérabilité face à la crise des chipsets
- Recherches de fournisseurs alternatifs sur la base des besoins actuels et futurs
- Support sur demande respectant le leadership de l'équipe en place
      `,
    },
    {
      company: 'EUROPE TECHNOLOGIES',
      location: "Projet 'THE BOX' / LIVINGPACKET",
      mission: 'Accompagnement CDC, négociation, contractualisation',
      image: '/europe.jpg',
      details: `
Sollicitation de M. Patrick CHEPPE, Président

Sur la base de travaux de soudure de pièces plastiques, le donneur d'ordre conçoit et réalise
des lignes automatisées pour emballages réutilisables du e-commerce "The Box".

- Rédaction des CDC
- Gestion des appels d'offres
- Négociation et contractualisation
- Suivi des commandes de composants
- Formation / Coaching de l'équipe Supply-Chain
      `,
    },
    {
      company: 'HOWMET AEROSPACE',
      location: 'Sourcing d’outillages',
      mission: 'Fonderie par cire perdue - Recherche d’outilleurs qualifiés',
      image: '/howmet.jpg',
      details: `
Sollicitation de M. Cédric TOUSSAINT, PDG

- Recherche d'outilleurs qualifiés pour accroître les capacités de moules pour cire
- Formalisation de spécifications et dossier de consultation
- Identification des acteurs cibles
- Consultation RFQ (Request For Quotation)
- Consolidation et sélection de partenaires
      `,
    },
    {
      company: 'NORMANDY HADRONTHERAPY',
      location: 'Initialisation des Achats',
      mission: 'Définition processus achats et approvisionnements',
      image: '/normandy.jpg',
      details: `
Sollicitation de M. Christophe LE FOLL, Président

Projet européen de construction d’appareillages pour traitement de tumeurs par particules.
- Définition des processus d'achats et approvisionnements
- Préparation à l’intégration d’un ERP
- Traçabilité de l’avancement des travaux
      `,
    },
    {
      company: 'CORETEC GROUP',
      location: 'Management de transition',
      mission: "Changement d'ERP et revue de contrats",
      image: '/coretec.jpg',
      details: `
Mission de management de transition & revue de contrats.
Sollicitation de M. Yann LE CORRE, General Manager.

Recommandation LinkedIn :
"Olivier a intégré Coretec pendant plusieurs semaines comme consultant achats/supply chain
pour renforcer l'équipe dans le cadre d’un changement d’ERP. Opérationnel en front carré
et connaissant parfaitement notre métier, mission remplie avec succès."
      `,
    },
  ]

  const [selectedMission, setSelectedMission] = useState<typeof missions[0] | null>(null)

  return (
    <section className="py-16 bg-gray-50">
      <div className="fade-in">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
            Autres Missions Significatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => (
              <button
                key={index}
                onClick={() => setSelectedMission(mission)}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition text-left"
              >
                <div className="flex items-center mb-3">
                  {mission.image && (
                    <div className="w-12 h-12 mr-3 flex-shrink-0">
                      <Image
                        src={mission.image}
                        alt={mission.company}
                        width={120}
                        height={120}
                        className="rounded object-contain"
                      />
                    </div>
                  )}
                  <h3 className="font-bold text-lg text-gray-900">{mission.company}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-2">{mission.location}</p>
                <p className="text-gray-700 text-sm">{mission.mission}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMission && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedMission(null)} // clic sur overlay ferme
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()} // évite fermeture si clic dans la popup
          >
            {/* Bouton de fermeture */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedMission(null)}
            >
              ✕
            </button>

            <div className="flex items-center mb-6">
              {selectedMission.image && (
                <div className="w-14 h-14 mr-4 flex-shrink-0">
                  <Image
                    src={selectedMission.image}
                    alt={selectedMission.company}
                    width={120}
                    height={120}
                    className="rounded object-contain"
                  />
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedMission.company}</h3>
                <p className="text-gray-500">{selectedMission.location}</p>
              </div>
            </div>

            <p className="whitespace-pre-line text-gray-700 leading-relaxed text-sm">
              {selectedMission.details}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
