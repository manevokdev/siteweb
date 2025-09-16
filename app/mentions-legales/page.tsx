'use client'

import { Shield, Phone, Mail, MapPin } from 'lucide-react'

export default function MentionsLegales() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-gray-600">
              Informations légales et réglementaires
            </p>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Éditeur du site */}
            <div className="bg-blue-50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-2" />
                Éditeur du site
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Raison sociale</h3>
                  <p className="text-gray-700">MANévok</p>
                  <p className="text-gray-600 text-sm">Management de la compétitivité</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dirigeant</h3>
                  <p className="text-gray-700">Olivier KUNSTMANN</p>
                </div>
              </div>
            </div>

            {/* Coordonnées */}
            <div className="bg-gray-50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Adresse</p>
                    <p className="text-gray-700">
                      1, Allée de l'Orée du Bois<br />
                      14220 SAINT-LAURENT-DE-CONDEL
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Téléphone</p>
                    <a href="tel:+33616874240" className="text-blue-600 hover:text-blue-800">
                      +33 6 16 87 42 40
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:contact@manevok.com" className="text-blue-600 hover:text-blue-800">
                      contact@manevok.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Assurance */}
            <div className="bg-green-50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Assurance Responsabilité Civile Professionnelle</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Assureur</h3>
                  <p className="text-gray-700">AVIVA ASSURANCES</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Numéro de contrat</h3>
                  <p className="text-gray-700 font-mono">78862718</p>
                </div>
              </div>
            </div>

            {/* Hébergement */}
            <div className="bg-purple-50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h2>
              <p className="text-gray-700">
                Ce site est hébergé par des services de cloud computing sécurisés, 
                garantissant une disponibilité et une sécurité optimales.
              </p>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-700">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit 
                est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>

            {/* Protection des données */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Protection des données personnelles</h2>
              <p className="text-gray-700 mb-4">
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au 
                Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
                de rectification, d'effacement, d'opposition, de portabilité et de limitation du traitement 
                des données vous concernant.
              </p>
              <p className="text-gray-700 mb-4">
                Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé 
                par MANévok pour traiter votre demande de contact. Les données collectées ne sont 
                communiquées qu'aux seuls destinataires suivants : Olivier KUNSTMANN.
              </p>
              <p className="text-gray-700">
                Pour exercer ces droits ou pour toute question sur le traitement de vos données, 
                vous pouvez nous contacter à l'adresse : 
                <a href="mailto:contact@manevok.com" className="text-blue-600 hover:text-blue-800 ml-1">
                  contact@manevok.com
                </a>
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700 mb-4">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez notre site.
              </p>
              <p className="text-gray-700">
                Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. 
                Vous pouvez supprimer tous les cookies qui sont déjà sur votre ordinateur et vous pouvez 
                configurer la plupart des navigateurs pour empêcher leur placement.
              </p>
            </div>

            {/* Limitation de responsabilité */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation de responsabilité</h2>
              <p className="text-gray-700 mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site est 
                périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                ou des lacunes.
              </p>
              <p className="text-gray-700">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                merci de bien vouloir le signaler par email à l'adresse 
                <a href="mailto:contact@manevok.com" className="text-blue-600 hover:text-blue-800 ml-1">
                  contact@manevok.com
                </a>, en décrivant le problème de la manière la plus précise possible.
              </p>
            </div>

            {/* Droit applicable */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit applicable</h2>
              <p className="text-gray-700">
                Tout litige en relation avec l'utilisation du site 
                <span className="font-medium"> www.manevok.com </span>
                est soumis au droit français. En dehors des cas où la loi ne le permet pas, 
                il est fait attribution exclusive de juridiction aux tribunaux compétents de Caen.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}