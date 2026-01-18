import Navigation from "@/components/navigation"
import HeroCarousel from "@/components/hero-carousel"
import ServicesCarousel from "@/components/services-carousel"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroCarousel />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">OUR SERVICES</h2>
            <p className="text-orange-500 text-lg">Plan Your Dubai Trip with Our Best Visa Deals</p>
          </div>

          <div className="mb-12">
            <ServicesCarousel />
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-[#2196F3] text-white px-8 py-3 rounded hover:bg-[#1976D2] transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70">
            <div className="flex justify-center">
              <Image
                src="/pegasus-airlines-logo.jpg"
                alt="Pegasus"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/wizz-air-logo-purple.jpg"
                alt="Wizz Air"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/emirates-airlines-logo.jpg"
                alt="Emirates"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/turkish-airlines-logo.png"
                alt="Turkish Airlines"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image src="/sunexpress-logo.jpg" alt="SunExpress" width={150} height={60} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image
                src="/atlantis-the-palm-logo.jpg"
                alt="Atlantis"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/marriott-hotels-logo.jpg"
                alt="Marriott"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image src="/sofitel-hotels-logo.jpg" alt="Sofitel" width={150} height={60} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image
                src="/address-hotels-logo.jpg"
                alt="Address Hotels"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/ferrari-world-logo.jpg"
                alt="Ferrari World"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Activities Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">TOP ACTIVITES TO DO IN DUBAI</h2>
            <p className="text-gray-400 text-lg">Experience the Best Adventures Dubai Has to Offer</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Link href="/activities/helicopter-tours" className="group cursor-pointer">
              <div className="relative h-72 overflow-hidden rounded-lg">
                <Image
                  src="/dubai-helicopter-tour-aerial-view.jpg"
                  alt="Helicopter Tours"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-center mt-4 text-white">HELICOPTER TOURS</h3>
            </Link>

            <Link href="/activities/desert-safari" className="group cursor-pointer">
              <div className="relative h-72 overflow-hidden rounded-lg">
                <Image
                  src="/desert-safari-dubai-group-adventure.jpg"
                  alt="Desert Safari Tours"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-center mt-4 text-white">DESERT SAFARI TOURS</h3>
            </Link>

            <Link href="/activities/yacht-tour" className="group cursor-pointer">
              <div className="relative h-72 overflow-hidden rounded-lg">
                <Image
                  src="/luxury-yacht-dubai-marina-cruise.jpg"
                  alt="Yacht Tour"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-center mt-4 text-white">YACHT TOUR</h3>
            </Link>

            <Link href="/activities/burj-khalifa" className="group cursor-pointer">
              <div className="relative h-72 overflow-hidden rounded-lg">
                <Image
                  src="/burj-khalifa-observation-deck-view.jpg"
                  alt="Burj Khalifa"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-center mt-4 text-white">BURJ KHALIFA</h3>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/activities"
              className="inline-block bg-[#2196F3] text-white px-8 py-3 rounded hover:bg-[#1976D2] transition-colors font-semibold"
            >
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-5xl font-bold">EXCELLENT</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-3xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600">Based on 100+ reviews</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Uruk Emir ÇELİK",
                text: "Şirketin işi ve alakasına hayran kaldım. Saat farkı olmasına rağmen her neyse duygumuzda alırmızda oldular.",
              },
              {
                name: "betül saraç",
                text: "Ayhan beyın ve firmasının bana ve çocuklarıma turu deneyimi çok güzel bir deneyim oldu. Ayhan bey çok iyi bir arkadaş.",
              },
              {
                name: "Fatih Atik",
                text: "The desert safari was an unforgettable adventure, culture, and breathtaking scenery.",
              },
              {
                name: "Amir Nor",
                text: "Good arrangement, very friendly and polite team. We enjoyed the days we spent with them.",
              },
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{review.name}</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-yellow-400 text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
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
