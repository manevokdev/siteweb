'use client'

import { Download, FileText, Shield, Award, BookOpen, Users } from 'lucide-react'

export default function Legale() {
  const documents = [
    {
      title: "Mentions Légales de MANévok",
      description: "Informations légales complètes de l'entreprise",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      downloadUrl: "https://drive.google.com/file/d/10i9thl5j8SwuGjYPJPyoiXrNmOc7FWl0/view",
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Certificat Assurances Responsabilités Civiles",
      description: "Police d'assurance RC Pro n° 78862718 - AVIVA ASSURANCES",
      icon: <Shield className="w-8 h-8 text-green-600" />,
      downloadUrl: "https://drive.google.com/file/d/1p2VFUqPY5YfeL_BQ98Pl7rw434nIlgB5/view",
      color: "from-green-50 to-green-100"
    },
    {
      title: "Conditions Générales de Ventes C.G.V. 1.01",
      description: "Conditions générales de vente et de prestation",
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      downloadUrl: "https://drive.google.com/file/d/10kot5V8MeNe6EeD8pUTz7EVfg58WEaa8/view",
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "Règlement intérieur de MANévok",
      description: "Règlement intérieur de l'organisme de formation",
      icon: <BookOpen className="w-8 h-8 text-orange-600" />,
      downloadUrl: "https://drive.google.com/file/d/10cHgGc-F25BEEZk7WlHIdx5X1t2FnM-d/view",
      color: "from-orange-50 to-orange-100"
    },
    {
      title: "Livret d'accueil de la formation",
      description: "Guide d'accueil pour les stagiaires en formation",
      icon: <Users className="w-8 h-8 text-teal-600" />,
      downloadUrl: "https://drive.google.com/file/d/1AuvWWiTxYZsh0-fo0IzwwHo1k0sF1Leh/view",
      color: "from-teal-50 to-teal-100"
    },
    {
      title: "Certification Actions de Formations QUALIOPI",
      description: "Certification qualité des organismes de formation",
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      downloadUrl: "https://drive.google.com/file/d/1J75lhPw1vGHyOwsqxqWPme-YLslCdhiz/view",
      color: "from-yellow-50 to-yellow-100"
    }
  ]

  const handleDownload = (url: string, title: string) => {
    // Simuler le téléchargement - à remplacer par les vrais liens
    console.log(`Téléchargement de: ${title}`)
    // window.open(url, '_blank')
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Documents <span className="text-gradient">Légaux</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cette page regroupe l'intégralité des informations légales et réglementaires.
            </p>
            <p className="text-lg text-gray-500">
              Ces informations sont accessibles en sélectionnant le document correspondant au lien souhaité.
            </p>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <a
                key={index}
                href={doc.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br ${doc.color} p-8 rounded-2xl shadow-lg card-hover group transition`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {doc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {doc.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {doc.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    Document PDF
                  </span>
                  <div className="bg-white p-2 rounded-lg shadow-sm group-hover:bg-blue-50 transition-colors duration-300">
                    <Download className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance Info */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Assurance Responsabilité Civile</h2>
              <p className="text-xl text-blue-100 mb-6">
                Les activités de MANévok sont couvertes par une police d'assurances RC Pro
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Numéro de contrat</h3>
                  <p className="text-yellow-400 font-mono text-lg">78862718</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Assureur</h3>
                  <p className="text-yellow-400 text-lg">AVIVA ASSURANCES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note importante */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-yellow-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Note importante</h3>
                  <p className="text-yellow-700 text-sm">
                    Tous les documents sont au format PDF et nécessitent un lecteur PDF pour être consultés. 
                    Si vous rencontrez des difficultés pour accéder à un document, n'hésitez pas à nous contacter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}