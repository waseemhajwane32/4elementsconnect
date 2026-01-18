import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function MICEEventsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 to-[#0f3460]/70 z-10" />
        <Image src="/business-conference-event-presentation.jpg" alt="MICE Events" fill className="object-cover" />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold">MICE EVENTS</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Professional Event Management Services</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Complete MICE solutions including meetings, incentives, conferences, and exhibitions. We manage planning,
              logistics, and execution for seamless corporate and business events.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Corporate Meetings */}
              <Link href="/services/mice/corporate-meetings" className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-64">
                    <Image
                      src="/business-conference-event-presentation.jpg"
                      alt="Corporate Meetings"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Corporate Meetings</h3>
                    <p className="text-gray-600 mb-4">
                      Professional meeting spaces with state-of-the-art technology and full support services.
                    </p>
                    <span className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>

              {/* Conferences */}
              <Link href="/services/mice/conferences" className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-64">
                    <Image
                      src="/business-conference-dubai.jpg"
                      alt="Conferences"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Conferences</h3>
                    <p className="text-gray-600 mb-4">
                      Large-scale conference management with venue selection, logistics, and attendee coordination.
                    </p>
                    <span className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>

              {/* Incentive Programs */}
              <Link href="/services/mice/incentive-programs" className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-64">
                    <Image
                      src="/corporate-incentive-travel-dubai.jpg"
                      alt="Incentive Programs"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Incentive Programs</h3>
                    <p className="text-gray-600 mb-4">
                      Reward your team with exclusive experiences and luxury travel packages in Dubai.
                    </p>
                    <span className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>

              {/* Exhibitions */}
              <Link href="/services/mice/exhibitions" className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-64">
                    <Image
                      src="/trade-exhibition-dubai.jpg"
                      alt="Exhibitions"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">Exhibitions</h3>
                    <p className="text-gray-600 mb-4">
                      Complete exhibition management from booth design to visitor engagement strategies.
                    </p>
                    <span className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
