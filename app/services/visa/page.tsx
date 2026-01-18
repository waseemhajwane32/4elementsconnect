import Navigation from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"

export default function VisaServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 to-[#0f3460]/70 z-10" />
        <Image src="/uae-passport-with-visa-approval-stamp.jpg" alt="Visa Services" fill className="object-cover" />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold">VISA SERVICES</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Hassle-Free UAE Visa Processing</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Expert visa processing for tourism, business, and multi-purpose. We ensure smooth documentation, fast
              approvals, and complete support for stress-free international travel.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Tourist Visa */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/uae-passport-with-visa-approval-stamp.jpg"
                    alt="Tourist Visa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Tourist Visa</h3>
                  <p className="text-gray-600 mb-4">
                    30-day and 90-day tourist visas with fast processing and guaranteed approval.
                  </p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    <li>✓ 30 Days Single Entry</li>
                    <li>✓ 90 Days Multiple Entry</li>
                    <li>✓ Fast Processing (2-3 days)</li>
                  </ul>
                </div>
              </div>

              {/* Transit Visa */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src="/airport-transit-visa.jpg" alt="Transit Visa" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Transit Visa</h3>
                  <p className="text-gray-600 mb-4">48-hour and 96-hour transit visas for layovers in Dubai.</p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    <li>✓ 48 Hours Transit</li>
                    <li>✓ 96 Hours Transit</li>
                    <li>✓ Same Day Processing</li>
                  </ul>
                </div>
              </div>

              {/* Business Visa */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src="/business-visa-uae.jpg" alt="Business Visa" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Business Visa</h3>
                  <p className="text-gray-600 mb-4">14-day and 30-day business visas for corporate travelers.</p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    <li>✓ 14 Days Business Visa</li>
                    <li>✓ 30 Days Business Visa</li>
                    <li>✓ Multiple Entry Options</li>
                  </ul>
                </div>
              </div>

              {/* Long Term Visa */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image src="/uae-residence-visa.jpg" alt="Long Term Visa" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Long Term Visa</h3>
                  <p className="text-gray-600 mb-4">Extended stay visas for residents and long-term visitors.</p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    <li>✓ 6 Months Multiple Entry</li>
                    <li>✓ 1 Year Multiple Entry</li>
                    <li>✓ Renewal Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
              <ul className="space-y-3 text-gray-400">
                <li>📞 +971 50 181 3142</li>
                <li>✉️ ops@fourelementsconnect.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
