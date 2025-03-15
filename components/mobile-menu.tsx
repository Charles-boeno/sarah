"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface MenuItem {
  label: string
  href: string
  description?: string
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems: MenuItem[] = [
    { label: "Início", href: "#home", description: "Página inicial" },
    { label: "Serviços", href: "#services", description: "Nossos serviços de estética" },
    { label: "Produtos", href: "#products", description: "Produtos exclusivos" },
    { label: "Localização", href: "#location", description: "Como nos encontrar" },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 bg-white p-4 shadow-lg">
          <nav>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="flex flex-col rounded-md px-3 py-2 hover:bg-pink-50"
                  >
                    <span className="font-medium text-gray-800">{item.label}</span>
                    {item.description && <span className="mt-1 text-xs text-gray-500">{item.description}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

