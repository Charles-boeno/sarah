"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Calendar } from "lucide-react"
import Link from "next/link"

const banners = [
  {
    id: 1,
    title: "Tratamentos Exclusivos",
    subtitle: "Conheça nossa linha premium de cuidados faciais",
    description: "Desenvolvidos com ingredientes naturais e tecnologia avançada para resultados surpreendentes.",
    image: "/placeholder.svg?height=1080&width=1920&text=Tratamentos+Exclusivos",
    gradient: "from-pink-500/20 to-amber-500/20",
  },
  {
    id: 2,
    title: "Skincare Personalizado",
    subtitle: "Produtos formulados para o seu tipo de pele",
    description: "Nossa equipe de especialistas desenvolve rotinas exclusivas para suas necessidades específicas.",
    image: "/placeholder.svg?height=1080&width=1920&text=Skincare+Personalizado",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Spa Day Completo",
    subtitle: "Uma experiência de relaxamento e beleza",
    description: "Reserve um dia especial para cuidar de você com nossos pacotes completos de spa.",
    image: "/placeholder.svg?height=1080&width=1920&text=Spa+Day+Completo",
    gradient: "from-amber-500/20 to-pink-500/20",
  },
]

export default function MainBanner() {
  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const banner = banners[currentBanner]

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={banner.image || "/placeholder.svg"}
          alt={banner.title}
          fill
          priority
          className="object-cover transition-opacity duration-1000"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} mix-blend-overlay`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 flex h-full flex-col justify-end pb-10 md:pb-20 px-4 md:px-6">
        <div className="max-w-2xl animate-fade-in space-y-2 md:space-y-4">
          <h2 className="text-xs md:text-sm font-medium uppercase tracking-wider text-amber-600">{banner.subtitle}</h2>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-800">{banner.title}</h1>
          <p className="text-sm md:text-lg text-gray-700">{banner.description}</p>

          <div className="flex gap-4 pt-2 md:pt-4">
            <Link
              href="https://wa.me/5545998502400?text=Olá%20Sarah,%20gostaria%20de%20agendar%20um%20horário!"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-green-500 hover:bg-green-600 px-3 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium text-white transition-colors"
            >
              <Calendar className="mr-1 md:mr-2 inline-block h-4 w-4 md:h-5 md:w-5" /> Agende seu horário
            </Link>
          </div>
        </div>

        <div className="absolute bottom-4 md:bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`h-1 w-6 md:w-10 rounded-full transition-all ${
                index === currentBanner ? "bg-pink-500" : "bg-gray-300"
              }`}
              aria-label={`Ver banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

