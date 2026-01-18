import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ExhibitionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 to-[#0f3460]/70 z-10" />
        <Image src="/trade-exhibition-dubai.jpg" alt="Exhibitions" fill className="object-cover" />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold">EXHIBITIONS</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">Complete Exhibition Management</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            From concept to execution, we provide end-to-end exhibition management services. Whether you're exhibiting
            at a trade show or organizing your own exhibition, we ensure maximum impact and visitor engagement.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Exhibition Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Custom booth design and construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Exhibition space planning and layout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Graphics, signage, and branding materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Audio-visual equipment and technology integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Event Coordination</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Exhibitor and visitor registration management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Marketing and promotional campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>On-site logistics and staff coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Post-event analysis and reporting</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Plan Your Exhibition</h3>
            <p className="text-gray-700 mb-6">
              Let us help you create an exhibition that showcases your brand and drives meaningful business connections.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
