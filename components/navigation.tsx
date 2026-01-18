"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Detect scroll for subtle background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine if we are on homepage
  const isHomePage = pathname === "/"

  // Dynamic background style
  const navBg = isHomePage
    ? isScrolled
      ? "bg-white/20 backdrop-blur-md shadow-md"
      : "bg-transparent"
    : "bg-[#003d3d] shadow-md" // solid for other pages

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/four-elements-logo.jpg"
              alt="Four Elements Connect Logo"
              width={50}
              height={50}
              className="rounded-full border border-white/50 p-1 shadow-md"
            />
            <div className="text-white drop-shadow-sm">
              <div className="text-lg font-bold tracking-wide uppercase">FOUR ELEMENTS</div>
              <div className="text-xs text-amber-300 tracking-[0.2em] uppercase">
                CONNECT
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-white font-medium">
            {[{ name: "HOME", href: "/" }, { name: "ABOUT US", href: "/about" }].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative hover:text-amber-300 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="hover:text-amber-300 transition-all duration-300">
                SERVICES
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white/90 rounded-xl shadow-xl overflow-hidden backdrop-blur-md transition-all duration-300 ${
                  isServicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 rotate-45"></div>
                <div className="py-2">
                  {[
                    { name: "All Services", href: "/services" },
                    { name: "Hotel Booking", href: "/services/hotel-booking" },
                    { name: "Visa Services", href: "/services/visa" },
                    { name: "Transport Services", href: "/services/transport" },
                    { name: "Tour Tickets", href: "/services/tickets" },
                    { name: "Excursions", href: "/services/excursions" },
                    { name: "MICE Events", href: "/services/mice" },
                  ].map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-6 py-3 text-gray-700 hover:bg-[#00b4db] hover:text-white hover:pl-8 transition-all duration-200 font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="hover:text-amber-300 transition-colors">
              CONTACT US
            </Link>
            <Link href="/faq" className="hover:text-amber-300 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
