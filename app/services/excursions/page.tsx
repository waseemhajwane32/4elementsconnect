import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ExcursionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 to-[#0f3460]/70 z-10" />
        <Image src="/desert-safari-dubai-group-adventure.jpg" alt="Excursions" fill className="object-cover" />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold">EXCURSIONS</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Explore Dubai's Best Adventures</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Explore iconic destinations and hidden gems with our curated excursions. Ideal for families, solo
              travelers, and groups seeking cultural, adventurous, or leisure experiences.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Desert Safari */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/desert-safari-dubai-group-adventure.jpg"
                    alt="Desert Safari"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Desert Safari</h3>
                  <p className="text-gray-600 mb-4">
                    Experience dune bashing, camel riding, and traditional Bedouin entertainment under the stars.
                  </p>
                </div>
              </div>

              {/* Dubai City Tour */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src="/dubai-city-tour.png" alt="Dubai City Tour" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Dubai City Tour</h3>
                  <p className="text-gray-600 mb-4">
                    Discover Dubai's iconic landmarks including Burj Khalifa, Dubai Mall, and Palm Jumeirah.
                  </p>
                </div>
              </div>

              {/* Dhow Cruise */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src="/dhow-cruise-dubai-marina.jpg" alt="Dhow Cruise" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Dhow Cruise</h3>
                  <p className="text-gray-600 mb-4">
                    Enjoy a romantic dinner cruise along Dubai Creek or Marina with stunning city views.
                  </p>
                </div>
              </div>

              {/* Abu Dhabi Tour */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src="/sheikh-zayed-mosque-abu-dhabi.jpg" alt="Abu Dhabi Tour" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Abu Dhabi Tour</h3>
                  <p className="text-gray-600 mb-4">
                    Visit Sheikh Zayed Mosque, Emirates Palace, and Louvre Abu Dhabi on a full-day tour.
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
