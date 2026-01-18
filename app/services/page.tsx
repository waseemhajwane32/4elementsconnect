import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <Image
            src="/airport-terminal-travelers-modern.jpg"
            alt="Services"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <h1 className="relative z-10 text-6xl font-bold text-white tracking-wider">SERVICES</h1>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hotel Booking */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80">
                <Image src="/luxury-hotel-dubai-interior-lobby.jpg" alt="Hotel Booking" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">HOTEL BOOKING</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Seamless hotel reservations across Dubai and UAE. From luxury resorts to budget-friendly stays, we
                  offer the best rates and instant confirmations.
                </p>
                <Link
                  href="/services/hotel-booking"
                  className="inline-block bg-[#E53935] text-white px-6 py-3 rounded hover:bg-[#c62828] transition-colors font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Visa Services */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80">
                <Image
                  src="/uae-passport-with-visa-approval-stamp.jpg"
                  alt="Visa Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">VISA SERVICES</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Expert visa processing for tourism, business, and multi-purpose. We ensure smooth documentation, fast
                  approvals, and complete support for stress-free international travel.
                </p>
                <Link
                  href="/services/visa"
                  className="inline-block bg-[#E53935] text-white px-6 py-3 rounded hover:bg-[#c62828] transition-colors font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Transport Services */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80">
                <Image
                  src="/luxury-black-suvs-parked-in-dubai.jpg"
                  alt="Transport Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">TRANSPORT SERVICES</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Reliable transport solutions for airport transfers, city tours, and group travel. Travel comfortably
                  and on time with our fleet of modern, well-maintained vehicles.
                </p>
                <Link
                  href="/services/transport"
                  className="inline-block bg-[#E53935] text-white px-6 py-3 rounded hover:bg-[#c62828] transition-colors font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Tour Tickets */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80">
                <Image
                  src="/museum-of-the-future-dubai-architecture.jpg"
                  alt="Tour Tickets"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">TOUR TICKETS</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Book flight, attraction, and intercity travel tickets easily with us. Enjoy competitive prices,
                  confirmed bookings, and seamless ticketing support for your travel plans.
                </p>
                <Link
                  href="/services/tickets"
                  className="inline-block bg-[#E53935] text-white px-6 py-3 rounded hover:bg-[#c62828] transition-colors font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Excursions service */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80">
                <Image src="/desert-safari-dubai-group-adventure.jpg" alt="Excursions" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">EXCURSIONS</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore iconic destinations and hidden gems with our curated excursions. Ideal for families, solo
                  travelers, and groups seeking cultural, adventurous, or leisure experiences.
                </p>
                <Link
                  href="/services/excursions"
                  className="inline-block bg-[#E53935] text-white px-6 py-3 rounded hover:bg-[#c62828] transition-colors font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* MICE Events service */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80">
                <Image
                  src="/business-conference-event-presentation.jpg"
                  alt="MICE Events"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">MICE EVENTS</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete MICE solutions including meetings, incentives, conferences, and exhibitions. We manage
                  planning, logistics, and execution for seamless corporate and business events.
                </p>
                <Link
                  href="/services/mice"
                  className="inline-block bg-[#E53935] text-white px-6 py-3 rounded hover:bg-[#c62828] transition-colors font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
