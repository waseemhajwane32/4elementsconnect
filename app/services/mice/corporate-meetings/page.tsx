import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function CorporateMeetingsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 to-[#0f3460]/70 z-10" />
        <Image
          src="/business-conference-event-presentation.jpg"
          alt="Corporate Meetings"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold">CORPORATE MEETINGS</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">Professional Meeting Spaces</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Our corporate meeting services provide state-of-the-art facilities and comprehensive support for your
            business gatherings. From intimate board meetings to large corporate assemblies, we ensure every detail is
            perfectly executed.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Meeting Facilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Modern conference rooms with flexible seating arrangements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>High-speed internet and video conferencing equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Professional audio-visual systems and presentation tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Dedicated technical support staff</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Additional Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Catering and refreshment services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Registration and attendee management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Transportation and accommodation arrangements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>On-site event coordination</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Corporate Meeting?</h3>
            <p className="text-gray-700 mb-6">
              Contact us today to discuss your requirements and receive a customized proposal for your corporate event.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
