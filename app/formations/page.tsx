'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, Download } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

// --- Données Graphiques ---
const data = [
  { year: '2021', formes: 133, heures: 79 },
  { year: '2022', formes: 163, heures: 215 },
  { year: '2023', formes: 211, heures: 324 },
  { year: '2024', formes: 240, heures: 546 },
]

// --- Stars Component ---
function Stars({ count }: { count: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: i < count ? 1 : 0.8 }}
          transition={{ delay: i * 0.1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 ${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.417 8.268L12 18.896l-7.417 4.969L6 15.597 0 9.75l8.332-1.595z" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export default function Formations() {
  return (
    <div className="pt-16">
      {/* --- Hero Section --- */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Centre de <span className="text-gradient">Formations MANévok</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise reconnue et certifiée pour former vos équipes aux enjeux de la Supply-Chain et des Achats.
          </p>
          <div className="flex justify-center mt-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <Image src="/qualiopi.jpg" alt="Qualiopi" width={220} height={80} />
            </motion.div>
          </div> 
        </div>
      </section>

      {/* --- Certification Section --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
            <Image src="/formation1.jpg" alt="Formation" width={500} height={300} className="rounded-xl shadow-lg" />
          </motion.div>
          <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Certification Qualiopi</h2>
            <p className="text-gray-700 mb-4">
              La certification qualité a été délivrée à <span className="font-semibold">MANévok</span> au titre de la catégorie d’action suivante : <span className="text-blue-700 font-medium">ACTIONS DE FORMATION</span>.
            </p> 
            <p className="text-gray-600">
              Le programme est composé de plusieurs modules thématiques. La formation est accessible quinze jours après réception de la commande, sous réserve de l’accord de prise en charge du financeur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Enseignements Section --- */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="section-title mb-6">Exemples d’enseignements proposés</h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Connaître les outils fondamentaux de l’acheteur",
                "Mesurer les enjeux des Achats",
                "Identifier les sources de profit",
                "Construire un outil de consultation efficace",
                "Organiser la comparaison des offres",
                "Optimiser le choix des fournisseurs",
                "Comprendre les techniques de négociation",
                "Connaître les différents contrats d’achat",
                "Contrôler la qualité du service obtenu",
                "Gérer l’exécution des contrats",
                "Cas concrets et travaux de groupe"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Image src="/formation2.png" alt="Formation atelier" width={500} height={350} className="rounded-xl shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* --- Programme & Tarifs Section --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-6">Programme & Tarifs</h2>
          <p className="text-gray-600 mb-8">Téléchargez le programme complet et découvrez nos tarifs 2024 / 2025.</p>
          <a
            href="/pilliers_manevok.png"
            download="Programme_Manevok.png"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 shadow"
          >
            <Download className="w-5 h-5" />
            <span>Télécharger le programme</span>
          </a>
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Formations Groupe</h3>
              <p className="text-gray-600">Jusqu’à 8 personnes</p>
              <div className="text-2xl font-bold text-blue-700 mt-4">1080€ / jour</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Formations Individuelles</h3>
              <p className="text-gray-600">Par stagiaire</p>
              <div className="text-2xl font-bold text-blue-700 mt-4">530€ / jour</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats & Graphiques Section --- */}
      {/* --- Stats & Graphiques Section --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">
            Évolution de la formations MANévok
          </h2>
      
          {/* Stats globales avec étoiles */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Entreprises</h3>
              <Stars count={4} />
              <p className="text-sm text-gray-600 mt-2">Moyenne sur 2021-2024</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Stagiaires</h3>
              <Stars count={4} />
              <p className="text-sm text-gray-600 mt-2">Moyenne sur 2021-2024</p>
            </div>
          </div>
      
          {/* Graphiques */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Graphique personnes formées */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Nombre de personnes formées
              </h3>
              <div className="w-full h-72">
                <ResponsiveContainer>
                  <BarChart data={data}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip
                      formatter={(value: number) => [`${value} stagiaires`, '']}
                    />
                    <Bar dataKey="formes" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
      
            {/* Graphique heures de formation */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Nombre d’heures de formation
              </h3>
              <div className="w-full h-72">
                <ResponsiveContainer>
                  <BarChart data={data}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip
                      formatter={(value: number) => [`${value} heures`, '']}
                    />
                    <Bar dataKey="heures" fill="#10B981" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --- Avis Clients Section --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Avis Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Mme Valérie BEILLEVERT",
                role: "Planificatrice PDP - SAFRAN",
                text: "Très nombreux exemples concrets partagés… Formateur très dynamique",
                stars: 5,
              },
              {
                name: "M. Yann LE CORRE",
                role: "General Manager - OSE GROUP",
                text: "Opérationnel en front carré et connaissant parfaitement son métier…",
                stars: 5,
              },
              {
                name: "Mme Véronique GEORGES",
                role: "RH Europe Technologies",
                text: "MANévok m’a apporté la documentation nécessaire…",
                stars: 4,
              },
              {
                name: "Mlle Louise LESCOT",
                role: "Acheteuse ORATECH",
                text: "Documentation en adéquation avec nos projets et priorités",
                stars: 4,
              },
            ].map((avis, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg"
              >
                <Stars count={avis.stars} />
                <p className="italic text-gray-700 mt-3 mb-4">"{avis.text}"</p>
                <div className="font-bold text-gray-900">{avis.name}</div>
                <div className="text-sm text-gray-500">{avis.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
