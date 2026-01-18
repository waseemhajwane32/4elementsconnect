import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Check } from "lucide-react"

export default function HotelBookingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <Image
            src="/luxury-hotel-dubai-interior-lobby.jpg"
            alt="Hotel Booking Services"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">HOTEL BOOKING SERVICES</h1>
          <p className="text-xl md:text-2xl">Your Perfect Stay Awaits in Dubai</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Seamless Hotel Reservations Across Dubai & UAE
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center mb-6">
            Four Elements Connect offers comprehensive hotel booking services tailored to your preferences and budget.
            Whether you're seeking luxury 5-star resorts, boutique hotels, or budget-friendly accommodations, we ensure
            the best rates, instant confirmations, and personalized service for an unforgettable stay in Dubai and
            across the UAE.
          </p>
        </div>
      </section>

      {/* Hotel Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Hotel Categories</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Luxury Hotels */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <Image src="/luxury-5-star-hotel-dubai-burj-al-arab-atlantis.jpg" alt="Luxury Hotels" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Luxury Hotels</h3>
                <p className="text-gray-600 mb-4">
                  Experience world-class hospitality at Dubai's finest 5-star properties including Burj Al Arab,
                  Atlantis The Palm, and Armani Hotel.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Premium locations and amenities</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Exclusive deals and packages</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>VIP check-in services</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Business Hotels */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <Image src="/business-hotel-dubai-downtown-conference-room.jpg" alt="Business Hotels" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Business Hotels</h3>
                <p className="text-gray-600 mb-4">
                  Ideal for corporate travelers with modern facilities, meeting rooms, and convenient locations near
                  business districts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>High-speed WiFi and workspaces</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Conference and meeting facilities</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Airport transfer arrangements</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Budget Hotels */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <Image src="/budget-friendly-hotel-dubai-clean-comfortable-room.jpg" alt="Budget Hotels" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Budget-Friendly Hotels</h3>
                <p className="text-gray-600 mb-4">
                  Comfortable and affordable accommodations perfect for budget-conscious travelers without compromising
                  on quality.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Best value for money</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Clean and comfortable rooms</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Strategic locations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Book Hotels With Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Best Price Guarantee</h3>
                <p className="text-gray-600">
                  We negotiate exclusive rates with hotels to ensure you get the best possible prices for your stay.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Instant Confirmation</h3>
                <p className="text-gray-600">
                  Receive immediate booking confirmations with all details sent directly to your email.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Wide Selection</h3>
                <p className="text-gray-600">
                  Access to thousands of hotels across Dubai, Abu Dhabi, and the entire UAE to match your preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">24/7 Support</h3>
                <p className="text-gray-600">
                  Our dedicated team is available round-the-clock to assist with bookings, changes, or special requests.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Flexible Options</h3>
                <p className="text-gray-600">
                  Choose from various room types, meal plans, and cancellation policies to suit your travel needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Special Packages</h3>
                <p className="text-gray-600">
                  Exclusive hotel + tour packages, honeymoon specials, and family deals for added value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Popular Hotel Destinations</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Downtown Dubai</h3>
              <p className="text-gray-600 text-sm">Near Burj Khalifa and Dubai Mall</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Dubai Marina</h3>
              <p className="text-gray-600 text-sm">Waterfront luxury and dining</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Palm Jumeirah</h3>
              <p className="text-gray-600 text-sm">Iconic island resorts</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-orange-600">Jumeirah Beach</h3>
              <p className="text-gray-600 text-sm">Beachfront properties</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Perfect Stay?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today and let our hotel booking experts find the ideal accommodation for your Dubai visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971567761946"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="mailto:ops@fourelementsconnect.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Email Us
            </a>
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
