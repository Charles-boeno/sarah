import Link from "next/link"
import { ChevronRight, ChevronLeft, Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCarousel from "@/components/product-carousel"
import MainBanner from "@/components/main-banner"
import WhatsAppButton from "@/components/whatsapp-button"
import LocationSection from "@/components/location-section"
import MainMenu from "@/components/main-menu"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-white/90 to-white/0">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <div className="relative">
              <span className="font-serif text-xl font-bold tracking-wider">
                <span className="text-pink-500">Sarah</span>
                <span className="text-amber-500">Est</span>
                <span className="text-pink-500 hidden sm:inline">eticista</span>
              </span>
            </div>
          </Link>
          <div className="flex items-center justify-center">
            <MainMenu />
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Main Banner */}
      <section id="home">
        <MainBanner />
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 md:py-16 bg-gradient-to-r from-pink-50 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Meus Produtos</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:bg-pink-100">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:bg-pink-100">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <ProductCarousel />
        </div>
      </section>

      {/* Location Section */}
      <section id="location">
        <LocationSection />
      </section>

      {/* Footer */}
      <footer id="about" className="bg-gray-100 border-t border-gray-200 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 font-serif text-xl font-bold tracking-wider">
                <span className="text-pink-500">Sarah</span>
                <span className="text-amber-500">Est</span>
                <span className="text-pink-500">eticista</span>
              </div>
              <p className="text-sm text-gray-600">
                Transformando beleza em arte desde 2010. Nossos tratamentos exclusivos são desenvolvidos para realçar
                sua beleza natural.
              </p>
              <div className="mt-4 flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-pink-500">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-pink-500">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-pink-500">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div id="services">
              <h3 className="mb-4 text-lg font-medium text-gray-800">Serviços</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#facial" className="hover:text-pink-500">
                    Tratamentos Faciais
                  </Link>
                </li>
                <li>
                  <Link href="#skincare" className="hover:text-pink-500">
                    Skincare Personalizado
                  </Link>
                </li>
                <li>
                  <Link href="#makeup" className="hover:text-pink-500">
                    Maquiagem Profissional
                  </Link>
                </li>
                <li>
                  <Link href="#massage" className="hover:text-pink-500">
                    Massagens Terapêuticas
                  </Link>
                </li>
                <li>
                  <Link href="#spa" className="hover:text-pink-500">
                    Spa Day
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-800">Links Úteis</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#about" className="hover:text-pink-500">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    Termos de Serviço
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-800">Contato</h3>
              <address className="not-italic">
                <p className="text-sm text-gray-600">R. Borges de Medeiros, 1820</p>
                <p className="text-sm text-gray-600">Centro - Toledo/PR</p>
                <p className="mt-2 text-sm text-gray-600">contato@sarahesteticista.com</p>
                <p className="text-sm text-gray-600">(45) 99850-2400</p>
              </address>
              <Link
                href="https://wa.me/5545998502400?text=Olá%20Sarah,%20gostaria%20de%20agendar%20um%20horário!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-4 bg-gradient-to-r from-pink-400 to-amber-400 text-white hover:opacity-90">
                  Agendar Consulta
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            <p>© 2023 Sarah Esteticista. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

