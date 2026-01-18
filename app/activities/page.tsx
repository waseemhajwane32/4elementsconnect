import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function ActivitiesPage() {
  const activities = [
    {
      title: "Helicopter Tours",
      description: "Experience Dubai from the sky with breathtaking aerial views of iconic landmarks.",
      image: "/dubai-helicopter-tour-aerial-view.jpg",
      href: "/activities/helicopter-tours",
    },
    {
      title: "Desert Safari Tours",
      description: "Adventure through golden sand dunes with dune bashing, camel rides, and traditional entertainment.",
      image: "/desert-safari-dubai-group-adventure.jpg",
      href: "/activities/desert-safari",
    },
    {
      title: "Yacht Tour",
      description: "Sail through Dubai Marina on a luxury yacht with stunning waterfront views.",
      image: "/luxury-yacht-dubai-marina-cruise.jpg",
      href: "/activities/yacht-tour",
    },
    {
      title: "Burj Khalifa",
      description: "Visit the world's tallest building and enjoy panoramic views from the observation deck.",
      image: "/burj-khalifa-observation-deck-view.jpg",
      href: "/activities/burj-khalifa",
    },
    {
      title: "Dubai Frame",
      description: "Walk through the iconic golden frame connecting old and new Dubai.",
      image: "/dubai-frame.jpg",
      href: "/activities/dubai-frame",
    },
    {
      title: "Aquaventure Waterpark",
      description: "Splash into adventure at one of the world's largest waterparks at Atlantis.",
      image: "/atlantis-aquaventure-waterpark.jpg",
      href: "/activities/aquaventure",
    },
    {
      title: "Dubai City Tour",
      description: "Explore Dubai's rich culture and modern marvels on a comprehensive city tour.",
      image: "/dubai-city-tour.png",
      href: "/activities/city-tour",
    },
    {
      title: "Dhow Cruise",
      description: "Enjoy a romantic dinner cruise along Dubai Marina or Creek on a traditional dhow.",
      image: "/dhow-cruise-dubai-marina.jpg",
      href: "/activities/dhow-cruise",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#0f3460] to-[#1a1a2e]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Dubai Activities</h1>
          <p className="text-xl md:text-2xl">Discover Unforgettable Experiences in Dubai</p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Link
                key={index}
                href={activity.href}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0f3460] group-hover:text-[#e94560] transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                  <div className="mt-4 flex items-center text-[#e94560] font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
