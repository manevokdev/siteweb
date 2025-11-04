'use client'
export const dynamic = 'force-dynamic'
import { useState } from 'react'
import { Mail, Phone, Send, CircleCheck as CheckCircle } from 'lucide-react'
import CalendlyWidget from '@/components/CalendlyWidget'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        }, 5000)
      } else {
        setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
      }
    } catch (err) {
      setError('Impossible d\'envoyer le message. Vérifiez votre connexion internet.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contactez <span className="text-gradient">MANévok</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Bonjour, Je vous remercie de votre visite. Si vous me laissez vos coordonnées,
              je ne manquerai pas de revenir très rapidement vers vous.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Informations de contact */}
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Prendre rendez-vous</h2>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Réservez votre créneau</h3>
                <p className="text-gray-600 mb-4">
                  Choisissez le créneau qui vous convient le mieux pour discuter de vos besoins.
                </p>

                {/* Calendly */}
                <CalendlyWidget />

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Informations importantes :</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Consultation gratuite de 30 minutes</li>
                    <li>• Disponible en présentiel ou visioconférence</li>
                    <li>• Réponse garantie sous 24h</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="slide-up">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Envoyez-moi un message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message envoyé !</h3>
                    <p className="text-green-600 mb-2">Merci pour votre message. Je vous recontacterai très rapidement.</p>
                    <p className="text-sm text-green-600">Un email de confirmation vous a été envoyé.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                        <p className="text-sm">{error}</p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom / Prénom *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Votre nom complet"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email" 
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="votre.email@exemple.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                          Sujet
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="mission-urgence">Mission d&apos;urgence</option>
                          <option value="management-transition">Management de transition</option>
                          <option value="formation">Formation</option>
                          <option value="conseil">Conseil stratégique</option>
                          <option value="autre">Autre demande</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Décrivez votre besoin, votre contexte et vos attentes..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RGPD Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Protection des données personnelles</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                MANévok recueille vos données afin de traiter votre demande de contact.
                Les données requises sont nécessaires pour en assurer le suivi, vous contacter
                et sont réservées à l&apos;usage exclusif de notre société. Conformément à la RGPD,
                vous pouvez exercer vos droits de rectification, d&apos;opposition, d&apos;effacement,
                de portabilité et de limitation du traitement en nous contactant à l&apos;adresse
                <a href="mailto:contact@manevok.com" className="text-blue-600 hover:text-blue-800 ml-1">
                  contact@manevok.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
