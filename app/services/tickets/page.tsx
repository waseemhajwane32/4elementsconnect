import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function TourTicketsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 to-[#0f3460]/70 z-10" />
        <Image src="/museum-of-the-future-dubai-architecture.jpg" alt="Tour Tickets" fill className="object-cover" />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold">TOUR TICKETS</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Book Your Dubai Attraction Tickets</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Book flight, attraction, and intercity tickets easily with us. Enjoy competitive prices, confirmed
              bookings, and seamless ticketing support for all your travel plans.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Burj Khalifa */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src="/burj-khalifa-dubai.jpg" alt="Burj Khalifa" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Burj Khalifa</h3>
                  <p className="text-gray-600 mb-4">
                    Visit the world's tallest building and enjoy breathtaking views from the observation deck.
                  </p>
                </div>
              </div>

              {/* Museum of the Future */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/museum-of-the-future-dubai-architecture.jpg"
                    alt="Museum of the Future"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Museum of the Future</h3>
                  <p className="text-gray-600 mb-4">
                    Experience innovation and technology at Dubai's most iconic modern landmark.
                  </p>
                </div>
              </div>

              {/* Dubai Frame */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src="/dubai-frame.jpg" alt="Dubai Frame" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Dubai Frame</h3>
                  <p className="text-gray-600 mb-4">See old and new Dubai through the world's largest picture frame.</p>
                </div>
              </div>

              {/* Atlantis Aquaventure */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/atlantis-aquaventure-waterpark.jpg"
                    alt="Atlantis Aquaventure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Atlantis Aquaventure</h3>
                  <p className="text-gray-600 mb-4">
                    Enjoy thrilling water slides and marine adventures at the Middle East's largest waterpark.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
