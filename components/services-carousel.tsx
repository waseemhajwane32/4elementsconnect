"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Service {
  title: string
  description: string
  image: string
  link: string
}

const services: Service[] = [
  {
    title: "HOTEL BOOKING",
    description:
      "Seamless hotel reservations across Dubai and UAE. From luxury resorts to budget-friendly stays, we offer the best rates, instant confirmations, and personalized accommodation solutions.",
    image: "/luxury-hotel-dubai-interior-lobby.jpg",
    link: "/services/hotel-booking",
  },
  {
    title: "VISA SERVICES",
    description:
      "Expert visa processing for tourism, business, and multi-purpose travel. We ensure smooth documentation, fast approvals, and complete support for stress-free international travel.",
    image: "/uae-passport-with-visa-approval-stamp.jpg",
    link: "/services/visa",
  },
  {
    title: "TRANSPORT SERVICES",
    description:
      "Reliable transport solutions for airport and hotel transfers, city tours, and group travel. Travel comfortably and on time with our fleet of modern, well-maintained vehicles.",
    image: "/luxury-black-suvs-parked-in-dubai.jpg",
    link: "/services/transport",
  },
  {
    title: "TOUR TICKETS",
    description:
      "Book flight, attraction, and intercity tickets easily with us. Enjoy competitive prices, confirmed bookings, and seamless ticketing support for all your travel plans.",
    image: "/museum-of-the-future-dubai-architecture.jpg",
    link: "/services/tickets",
  },
  {
    title: "EXCURSIONS",
    description:
      "Explore iconic destinations and hidden gems with our curated excursions. Ideal for families, solo travelers, and groups seeking cultural, adventurous, or leisure experiences.",
    image: "/desert-safari-dubai-group-adventure.jpg",
    link: "/services/excursions",
  },
  {
    title: "MICE EVENTS",
    description:
      "Complete MICE solutions including meetings, incentives, conferences, and exhibitions. We manage planning, logistics, and execution for seamless corporate and business events.",
    image: "/business-conference-event-presentation.jpg",
    link: "/services/mice",
  },
]

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [visibleSlides, setVisibleSlides] = useState(3)

  const maxIndex = Math.max(0, services.length - visibleSlides)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        return next > maxIndex ? 0 : next
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(Math.min(index, maxIndex))
      setIsAutoPlaying(false)
      setTimeout(() => setIsAutoPlaying(true), 8000)
    },
    [maxIndex],
  )

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }, [maxIndex])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }, [maxIndex])

  const getVisibleSlides = () => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  useEffect(() => {
    const handleResize = () => {
      const slides = getVisibleSlides()
      setVisibleSlides(slides)
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, services.length - slides)))
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="flex-shrink-0 px-4" style={{ width: `${100 / visibleSlides}%` }}>
              <Link href={service.link} className="group cursor-pointer block">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-center mb-3 text-orange-600 group-hover:text-orange-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center mb-4 line-clamp-3">{service.description}</p>
                    <div className="text-center">
                      <span className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors duration-300 font-semibold">
                        Read More
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex ? "bg-orange-600 w-8 h-3" : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
