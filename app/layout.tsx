import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ReCaptchaProvider } from '@/components/ReCaptchaProvider'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'MANévok - Lean Procurement Performance | Olivier KUNSTMANN',
  description: 'Consultant en supply-chain et achats industriels. Management, Expertise, Formation, Compétitivité. Un professionnel à vos côtés et à votre écoute.',
  keywords: 'supply-chain, achats industriels, procurement, management, formation, olivier kunstmann, manevok',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} ${poppins.variable} antialiased`}>
        <ReCaptchaProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ReCaptchaProvider>
      </body>
    </html>
  )
}