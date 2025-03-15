"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile"

const products = [
  {
    id: 1,
    name: "Sérum Facial Hidratante",
    price: "R$ 129,90",
    image: "/placeholder.svg?height=800&width=600&text=Sérum+Facial",
  },
  {
    id: 2,
    name: "Máscara de Ouro 24k",
    price: "R$ 189,90",
    image: "/placeholder.svg?height=800&width=600&text=Máscara+de+Ouro",
  },
  {
    id: 3,
    name: "Creme Anti-idade Noturno",
    price: "R$ 159,90",
    image: "/placeholder.svg?height=800&width=600&text=Creme+Anti-idade",
  },
  {
    id: 4,
    name: "Kit Skincare Essencial",
    price: "R$ 249,90",
    image: "/placeholder.svg?height=800&width=600&text=Kit+Skincare",
  },
  {
    id: 5,
    name: "Protetor Solar Facial FPS 50",
    price: "R$ 89,90",
    image: "/placeholder.svg?height=800&width=600&text=Protetor+Solar",
  },
  {
    id: 6,
    name: "Óleo Facial Nutritivo",
    price: "R$ 119,90",
    image: "/placeholder.svg?height=800&width=600&text=Óleo+Facial",
  },
  {
    id: 7,
    name: "Esfoliante Facial Suave",
    price: "R$ 79,90",
    image: "/placeholder.svg?height=800&width=600&text=Esfoliante+Facial",
  },
  {
    id: 8,
    name: "Tônico Facial Revitalizante",
    price: "R$ 69,90",
    image: "/placeholder.svg?height=800&width=600&text=Tônico+Facial",
  },
  {
    id: 9,
    name: "Máscara Hidratante Noturna",
    price: "R$ 99,90",
    image: "/placeholder.svg?height=800&width=600&text=Máscara+Hidratante",
  },
  {
    id: 10,
    name: "Kit Limpeza Facial Profunda",
    price: "R$ 199,90",
    image: "/placeholder.svg?height=800&width=600&text=Kit+Limpeza",
  },
  {
    id: 11,
    name: "Hidratante Facial com Colágeno",
    price: "R$ 149,90",
    image: "/placeholder.svg?height=800&width=600&text=Hidratante+Colágeno",
  },
  {
    id: 12,
    name: "Sérum Anti-Manchas",
    price: "R$ 139,90",
    image: "/placeholder.svg?height=800&width=600&text=Sérum+Anti-Manchas",
  },
]

export default function ProductCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const isMobile = useMobile()

  // Check if we need to show controls (if content overflows)
  useEffect(() => {
    const checkOverflow = () => {
      if (carouselRef.current) {
        const { scrollWidth, clientWidth } = carouselRef.current
        setShowControls(scrollWidth > clientWidth)
      }
    }

    checkOverflow()
    window.addEventListener("resize", checkOverflow)

    return () => window.removeEventListener("resize", checkOverflow)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return

    const { scrollWidth, clientWidth } = carouselRef.current
    const scrollAmount = clientWidth * (isMobile ? 0.9 : 0.8)
    const maxScroll = scrollWidth - clientWidth

    const newPosition =
      direction === "left"
        ? Math.max(scrollPosition - scrollAmount, 0)
        : Math.min(scrollPosition + scrollAmount, maxScroll)

    carouselRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })

    setScrollPosition(newPosition)
  }

  const cardWidth = isMobile ? "w-[180px] sm:w-[220px]" : "w-[280px]"
  const imageHeight = isMobile ? "h-[200px] sm:h-[250px]" : "h-[350px]"

  return (
    <div className="relative">
      <div
        className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-hide pb-6"
        ref={carouselRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={`group flex-shrink-0 ${cardWidth} bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <div className={`relative ${imageHeight} w-full overflow-hidden`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-3 md:p-4">
              <h3 className="font-semibold text-sm md:text-base text-gray-800 line-clamp-1">{product.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-medium text-sm md:text-base text-amber-600">{product.price}</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-3 w-3 md:h-4 md:w-4 fill-current text-amber-400" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="mt-3">
                <Link
                  href={`https://wa.me/5545998502400?text=Olá%20Sarah,%20gostaria%20de%20comprar%20o%20produto:%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xs md:text-sm" size="sm">
                    <ShoppingCart className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" /> Comprar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 rounded-full bg-white p-1 md:p-2 text-gray-700 shadow-lg hover:bg-pink-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 rounded-full bg-white p-1 md:p-2 text-gray-700 shadow-lg hover:bg-pink-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </>
      )}
    </div>
  )
}

