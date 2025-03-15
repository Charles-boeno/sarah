"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface MenuItem {
  label: string
  href: string
  icon?: React.ReactNode
  description?: string
  submenu?: MenuItem[]
}

export default function MainMenu() {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const menuItems: MenuItem[] = [
    {
      label: "Início",
      href: "#home",
      description: "Página inicial",
    },
    {
      label: "Serviços",
      href: "#services",
      description: "Nossos serviços de estética",
      submenu: [
        { label: "Tratamentos Faciais", href: "#facial" },
        { label: "Skincare", href: "#skincare" },
        { label: "Maquiagem", href: "#makeup" },
        { label: "Massagens", href: "#massage" },
      ],
    },
    {
      label: "Produtos",
      href: "#products",
      description: "Produtos exclusivos",
    },
    {
      label: "Localização",
      href: "#location",
      description: "Como nos encontrar",
    },
  ]

  const toggleSubmenu = (label: string) => {
    if (activeItem === label) {
      setActiveItem(null)
    } else {
      setActiveItem(label)
    }
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

    setActiveItem(null)
  }

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-center gap-1">
        {menuItems.map((item) => (
          <li key={item.label} className="relative">
            {item.submenu ? (
              <div>
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors",
                    activeItem === item.label
                      ? "bg-pink-100 text-pink-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-pink-600",
                  )}
                  aria-expanded={activeItem === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", activeItem === item.label && "rotate-180")}
                  />
                </button>
                {activeItem === item.label && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white p-2 shadow-lg">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.label}
                        href={subitem.href}
                        onClick={(e) => handleScroll(e, subitem.href)}
                        className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-600"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

