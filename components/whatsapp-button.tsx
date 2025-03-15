"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const phoneNumber = "5545998502400" // Formato internacional sem caracteres especiais
  const message = "Olá Sarah, gostaria de agendar um horário!"

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible)
  }

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 mb-2 w-64 rounded-lg bg-white p-4 shadow-lg">
          <button
            onClick={toggleTooltip}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="mb-3 text-sm font-medium text-gray-800">Agende seu horário pelo WhatsApp</p>
          <p className="mb-3 text-sm text-gray-600">(45) 99850-2400</p>
          <Link
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-md bg-[#25D366] px-4 py-2 text-sm font-medium text-white hover:bg-[#1da851]"
          >
            Iniciar conversa
          </Link>
        </div>
      )}

      <button
        onClick={toggleTooltip}
        className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Contato WhatsApp"
      >
        <div className="relative h-8 w-8 md:h-10 md:w-10">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="WhatsApp"
            width={40}
            height={40}
            className="h-full w-full"
            style={{
              content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 175.216 175.552'%3E%3Cpath fill='%23ffffff' d='M85.7,0.3C38.4,0.3,0,38.7,0,86c0,16,4.4,31,12.1,43.9l-13,38.1l39.8-12.8c12.4,6.8,26.6,10.7,41.8,10.7c47.3,0,85.7-38.4,85.7-85.7S133,0.3,85.7,0.3z M135.7,120.7c-2.1,5.9-12.3,11.4-16.9,11.6c-4.6,0.2-8.8,2.1-29.5-6.1c-24.9-9.9-40.7-34.3-41.9-35.9c-1.2-1.6-10-13.3-10-25.4c0-12.1,6.2-18,8.6-20.5c2.4-2.5,5.2-3.1,6.9-3.1c1.7,0,3.5,0,5,0.1c1.6,0.1,3.8-0.6,5.9,4.5c2.2,5.3,7.5,18.2,8.1,19.5c0.6,1.3,1,2.8,0.2,4.6c-0.8,1.8-1.2,2.9-2.4,4.5c-1.2,1.6-2.6,3.5-3.7,4.7c-1.2,1.3-2.5,2.8-1.1,5.5c1.4,2.7,6.4,11.6,13.7,18.8c9.4,9.3,17.4,12.2,19.9,13.5c2.5,1.3,3.9,1.1,5.4-0.6c1.5-1.7,6.3-7.4,8-9.9c1.7-2.5,3.4-2.1,5.7-1.3c2.3,0.8,14.6,6.9,17.1,8.1c2.5,1.2,4.1,1.8,4.7,2.8C137.8,111.3,137.8,114.8,135.7,120.7z'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </button>
    </div>
  )
}

