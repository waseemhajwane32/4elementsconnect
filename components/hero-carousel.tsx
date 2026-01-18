"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const heroSlides = [
  {
    image: "/dubai_overview.jpg",
    title: "Welcome to Four Elements Connect",
    subtitle: "Enjoy Luxurious Trip With Us",
  },
  {
    image: "/palm-jumeirah-atlantis-aerial-sunset-view.jpg",
    title: "Iconic Palm Jumeirah",
    subtitle: "Experience Dubai's Man-Made Wonder",
  },
  {
    image: "/dubai-marina-skyline-night-lights-yachts.jpg",
    title: "Dubai Marina Nights",
    subtitle: "Witness the City That Never Sleeps",
  },
  {
    image: "/khor-fakkan-beach-mountains-turquoise-water.jpg",
    title: "Khor Fakkan Paradise",
    subtitle: "Discover UAE's Hidden Coastal Gem",
  },
  {
    image: "/ferrari-world-abu-dhabi-red-building-aerial.jpg",
    title: "Ferrari World Abu Dhabi",
    subtitle: "Feel the Thrill of Speed and Luxury",
  },
  {
    image: "/dubai-nightlife-rooftop-bar-skyline-view.jpg",
    title: "Dubai Nightlife",
    subtitle: "Experience World-Class Entertainment",
  },
  {
    image: "/burj-al-arab-hotel-sunset-beach-luxury.jpg",
    title: "Burj Al Arab",
    subtitle: "Stay at the World's Most Luxurious Hotel",
  },
  {
    image: "/dubai-desert-safari-dune-bashing-adventure.jpg",
    title: "Desert Safari Adventures",
    subtitle: "Discover the Magic of Arabian Sands",
  },
  {
    image: "/jebel-jais-mountain-uae-highest-peak-view.jpg",
    title: "Jebel Jais Mountain",
    subtitle: "Conquer UAE's Highest Peak",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 z-20" />

          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            quality={100}
            sizes="100vw"
          />
        </div>
      ))}

    
      {/* Arabic Calligraphy Circle Overlay - Always Visible */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px] animate-[spin_60s_linear_infinite]">
          <Image
            src="/arabic-calligraphy-circle-ornate-gold.jpg"
            alt="Arabic Calligraphy"
            fill
            className="object-contain opacity-50"
            priority
          />
        </div>
      </div>
      

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 max-w-5xl">
        <h2
          className={`text-2xl md:text-3xl mb-4 font-light tracking-wide transition-all duration-700 drop-shadow-[0_4px_12px_rgba(0,0,0,1)] ${
            currentSlide >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {heroSlides[currentSlide].title}
        </h2>
        <h1
          className={`text-4xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-700 delay-200 drop-shadow-[0_6px_16px_rgba(0,0,0,1)] ${
            currentSlide >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {heroSlides[currentSlide].subtitle}
        </h1>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-white shadow-lg"
                : "w-3 h-3 bg-white/50 hover:bg-white/75 hover:scale-125"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
