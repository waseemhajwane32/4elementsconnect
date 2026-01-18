import Navigation from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function TransportServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <Image
            src="/airport-terminal-travelers-modern.jpg"
            alt="Transport Services"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <h1 className="relative z-10 text-6xl font-bold text-white tracking-wider">TRANSPORT SERVICES</h1>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/luxury-black-suvs-mercedes-gmc-parked-in-dubai-wit.jpg"
                alt="Luxury Vehicles"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">TRANSPORT SERVICES</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fly By Deniz takes pride in offering dependable and comfortable transport services tailored to meet the
                diverse needs of travelers. Whether you're arriving at the airport or exploring the city, our vehicles
                and drivers ensure that your journey is smooth, safe, and on time. With a strong focus on customer
                satisfaction, we provide clean, well-maintained vehicles and courteous, professional drivers who make
                every ride pleasant and stress-free.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From solo travelers to families and large groups, our transport solutions are designed to deliver
                convenience and flexibility. We offer everything from private car hires and hotel transfers to group
                shuttles and sightseeing tours, allowing you to travel without worry. Our team is available around the
                clock to support your schedule, ensuring prompt pick-ups and drop-offs no matter the time of day.
              </p>
            </div>
          </div>

          {/* Vehicle Gallery */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/professional-chauffeur-with-mercedes-luxury-car-in.jpg"
                alt="Professional Chauffeur"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/chauffeur-opening-door-of-black-gmc-suv.jpg"
                alt="Luxury SUV Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/fleet-of-luxury-vehicles-mercedes-gmc-parked-toget.jpg"
                alt="Vehicle Fleet"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Service Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border-2 border-red-500 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Airport Transfers</h3>
              <p className="text-gray-600">Hassle-free pickups and drop-offs to and from the airport</p>
            </div>
            <div className="border-2 border-red-500 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">City Tours & Sightseeing</h3>
              <p className="text-gray-600">Explore destinations in comfort with guided transport options</p>
            </div>
            <div className="border-2 border-red-500 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hotel Transfers</h3>
              <p className="text-gray-600">Seamless travel between your accommodation and key locations</p>
            </div>
            <div className="border-2 border-red-500 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Private Chauffeur Services</h3>
              <p className="text-gray-600">Professional drivers and premium vehicles at your service</p>
            </div>
            <div className="border-2 border-red-500 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Group Transport Solutions</h3>
              <p className="text-gray-600">Buses, vans, and minibuses for corporate or tourist groups</p>
            </div>
            <div className="border-2 border-red-500 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock service to match your travel schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="bg-[#E53935] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">6,834+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-lg">Destinations Covered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg">Customized Tour Packages</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">7,853+</div>
              <div className="text-lg">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971567761946"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
