'use client'

import Image from 'next/image'
import { Video, ExternalLink, PlayCircle } from 'lucide-react'
import { FadeUp, SlideIn } from '@/components/Animated'

// ===== CONFIGURATION : Modifier ces variables pour ajouter/modifier du contenu =====

// Webinars et Vidéos
const webinars = [
  {
    id: 1,
    title: "Comment la digitalisation permet-elle d'optimiser ses achats industriels !",
    organization: "ALTIOR",
    date: "17 Juin 2022",
    description: "MANévok a animé le Webinar organisé par ALTIOR. ALTIOR est une société française qui s'est appropriée les technologies des géants du numérique pour mettre à la disposition des TPI et PMI à vocation industrielle, une solution de gestion économique complète.",
    videoUrl: "https://www.youtube.com/embed/ZSIa9QuB8s8?si=toKLiPf8eDwm0sJO",
    thumbnail: "/affiche-altior-webinar.png",
  },
  // Ajouter d'autres webinars ici
]

// Publications en Français
const publicationsFR = [
  {
    id: 1,
    title: "PIC-PDP-EXO",
    subtitle: "Mettre en place un PIC-PDP sur des articles de négoce",
    date: "03/2023",
    pdfUrl: "https://drive.google.com/file/d/1ePKJ0CL_Njzo8C7vr2nfRQGSXl_PIStt/view",
  },
  {
    id: 2,
    title: "Sécurisation",
    subtitle: "Sécuriser ses approvisionnements",
    date: "07/2021",
    pdfUrl: "https://drive.google.com/file/d/11qrHBtTnW4bSyMr1OO4bED_IOS1CJeza/view",
  },
  {
    id: 3,
    title: "Veille",
    subtitle: "Organiser une veille stratégique",
    date: "05/2021",
    pdfUrl: "https://drive.google.com/file/d/11pYRdmFLFx7pXIhUwuzGvwXzjTvvV4X6/view",
  },
  {
    id: 4,
    title: "Négociation",
    subtitle: "Préparer une négociation",
    date: "03/2021",
    pdfUrl: "https://drive.google.com/file/d/11jjntQVGyKIi9BMJ-I3AB9hrXErvRNB8/view",
  },
  {
    id: 5,
    title: "Le C.D.C.",
    subtitle: "La rédaction de cahier des charges",
    date: "02/2021",
    pdfUrl: "https://drive.google.com/file/d/11rkvPRaCjZ-Sx9g5UT6f01O_JtNFxJe6/view",
  },
  {
    id: 6,
    title: "Continuité",
    subtitle: "La continuité d'activité",
    date: "01/2021",
    pdfUrl: "https://drive.google.com/file/d/125Ic32eBRu3c_FyzdJMZfxoesTOVC12A/view",
  },
  {
    id: 7,
    title: "QUIZZ Achat",
    subtitle: "Petit Quizz en ligne pour tester vos connaissances",
    date: "12/2020",
    pdfUrl: "https://docs.google.com/forms/d/1midwXliRJozBK8pB6Z2oXStXMRbcwTv80BeHbrxoFAU/edit?usp=sharing",
  },
  // Ajouter d'autres publications françaises ici
]

// Publications en Anglais
const publicationsEN = [
  {
    id: 1,
    title: "S&OP-MPS-EXO",
    subtitle: "To set up a S&OP-MPS on trade items",
    date: "03/2023",
    pdfUrl: "https://drive.google.com/file/d/10-9fb_JQby84NjZOraGRg-HyG5odyl4B/view",
  },
  {
    id: 2,
    title: "Supplies",
    subtitle: "To secure your supplies",
    date: "07/2021",
    pdfUrl: "https://drive.google.com/file/d/11ls2773I-ig9McyMke64Z6aARIjv6IUs/view",
  },
  {
    id: 3,
    title: "Intelligence",
    subtitle: "To organize your business intelligence",
    date: "01/2021",
    pdfUrl: "https://drive.google.com/file/d/11eKI_1I-J15UjS4KxA9IRZ5HT5V5DGpq/view",
  },
  {
    id: 4,
    title: "Negociation",
    subtitle: "To prepare your negociation",
    date: "01/2021",
    pdfUrl: "https://drive.google.com/file/d/12Bp9xQGG0O4_17SIOAJw3-AYieU3J2zh/view",
  },
  {
    id: 5,
    title: "Specifications",
    subtitle: "To build spécifications",
    date: "01/2021",
    pdfUrl: "https://drive.google.com/file/d/12904-rcNDLO48tqnTZus_oIjHENVcuOq/view",
  },
  {
    id: 6,
    title: "Continuity",
    subtitle: "To continue business thrue purchasing",
    date: "01/2021",
    pdfUrl: "https://drive.google.com/file/d/12JbbN_gtwRBE7IRevkSPOQLaLRiEXlA1/view",
  },
  // Ajouter d'autres publications anglaises ici
]

// Présentation Vidéo
const speechVideo = {
  title: "Présentation de MANévok",
  videoUrl: "https://www.youtube.com/embed/dVvdoHlseUc?si=2pZwamTHciPVyn3u",
}

// ===== FIN DE LA CONFIGURATION =====

export default function Publications() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-gradient">Publications</span> & Ressources
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Découvrez nos webinars, publications et programmes de formation pour optimiser vos achats industriels
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Webinars et Vidéos Section */}
      {webinars.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="container mx-auto px-4">
            <FadeUp>
              <div className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">Webinars & Vidéos</h2>
                <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                  Revivez nos événements et découvrez nos expertises en vidéo
                </p>
              </div>
            </FadeUp>

            {/* Carte centrée */}
            <div className="max-w-5xl mx-auto">
              {webinars.map((webinar, index) => (
                <FadeUp key={webinar.id} delay={0.1}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                    {/* En-tête */}
                    <div className="mb-6 flex items-center justify-between text-sm">
                      <span className="font-semibold text-blue-600">{webinar.organization}</span>
                      <span className="text-gray-500">{webinar.date}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{webinar.title}</h3>

                    {/* Grille : Image à gauche + Vidéo à droite */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Image de l'affiche */}
                      <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden">
                        <Image
                          src={webinar.thumbnail}
                          alt={webinar.title}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Vidéo YouTube (plus petite) */}
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          src="https://www.youtube.com/embed/ZSIa9QuB8s8?si=toKLiPf8eDwm0sJO"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{webinar.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Publications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Publications Françaises */}
          <FadeUp>
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                Visualisez et téléchargez les publications françaises sélectionnées :
              </h2>
            </div>
          </FadeUp>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-4">
              {publicationsFR.map((pub, index) => (
                <FadeUp key={pub.id} delay={index * 0.03}>
                  <div className="flex items-center gap-4">
                    <a
                      href={pub.pdfUrl}
                      download
                      target='_blank'
                      className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm uppercase min-w-[180px] text-center"
                    >
                      {pub.title}
                    </a>
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold text-amber-600">{pub.date}</span> : {pub.subtitle}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-300 my-12 max-w-4xl mx-auto"></div>

          {/* Publications Anglaises */}
          <FadeUp>
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                View and download selected english publications:
              </h2>
            </div>
          </FadeUp>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {publicationsEN.map((pub, index) => (
                <FadeUp key={pub.id} delay={index * 0.03}>
                  <div className="flex items-center gap-4">
                    <a
                      href={pub.pdfUrl}
                      download
                        target='_blank'
                      className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm uppercase min-w-[180px] text-center"
                    >
                      {pub.title}
                    </a>
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold text-amber-600">{pub.date}</span>: {pub.subtitle}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Présentation Vidéo */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">{speechVideo.title}</h2>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                {/* Vidéo YouTube */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={speechVideo.videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1976D2] via-[#2196F3] to-[#4FC3F7] text-white text-center">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Besoin d&apos;un accompagnement personnalisé ?
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Contactez-moi pour discuter de vos enjeux et découvrir comment optimiser votre performance achats
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-600 font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Prendre contact
              <ExternalLink size={22} />
            </a>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
