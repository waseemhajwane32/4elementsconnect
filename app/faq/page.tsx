"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What hotel booking services do you provide?",
      answer:
        "We offer comprehensive hotel booking services across Dubai and the UAE, including luxury 5-star resorts, business hotels, budget-friendly accommodations, and family-friendly properties. We provide the best rates, instant confirmations, and personalized recommendations based on your preferences and budget.",
    },
    {
      question: "Can I get special rates for hotel bookings?",
      answer:
        "Yes! We have partnerships with major hotel chains and properties across Dubai, allowing us to offer exclusive rates and special packages. Whether you're booking for business, leisure, or group travel, we can secure competitive pricing and added benefits.",
    },
    {
      question: "Do you offer hotel + visa packages?",
      answer:
        "We provide convenient packages that combine hotel bookings with visa processing services. This ensures a seamless travel experience with coordinated arrangements and often better overall pricing.",
    },
    {
      question: "What visa services do you provide?",
      answer:
        "We provide comprehensive visa services including tourist visas, business visas, transit visas, and multi-entry visas for the UAE. Our team handles all documentation and ensures fast processing with high approval rates.",
    },
    {
      question: "How long does visa processing take?",
      answer:
        "Standard visa processing typically takes 3-5 business days. We also offer express services for urgent requirements, which can be completed within 24-48 hours depending on the visa type.",
    },
    {
      question: "What types of transport services do you offer?",
      answer:
        "We offer airport transfers, hotel transfers, city tours, private chauffeur services, group transport solutions, and 24/7 availability. All our vehicles are modern, well-maintained, and driven by professional chauffeurs.",
    },
    {
      question: "Can I book tour tickets through your company?",
      answer:
        "Yes! We provide booking services for all major attractions in Dubai including Burj Khalifa, Dubai Frame, Museum of the Future, theme parks, desert safaris, yacht tours, and more at competitive prices.",
    },
    {
      question: "Do you organize corporate events and MICE services?",
      answer:
        "We specialize in MICE (Meetings, Incentives, Conferences, and Exhibitions) services including venue selection, logistics planning, accommodation arrangements, and complete event management.",
    },
    {
      question: "What are your payment methods?",
      answer:
        "We accept multiple payment methods including credit/debit cards, bank transfers, and cash payments. For corporate clients, we also offer invoice-based payment options.",
    },
    {
      question: "Is customer support available 24/7?",
      answer:
        "Yes, our customer support team is available 24/7 to assist you with any queries, bookings, or emergencies. You can reach us via phone, email, or WhatsApp.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <Image src="/dubai-skyline-night-cityscape.jpg" alt="FAQ" fill className="object-cover brightness-50" />
        </div>
        <h1 className="relative z-10 text-6xl font-bold text-white tracking-wider">FAQ</h1>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Find answers to common questions about our services
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-red-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && <div className="px-6 pb-5 text-gray-700 leading-relaxed">{faq.answer}</div>}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-red-50 border-l-4 border-red-600 p-6 rounded">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Still have questions?</h3>
              <p className="text-gray-700 mb-4">
                Can't find the answer you're looking for? Our customer support team is here to help!
              </p>
              <Link
                href="/contact"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors font-semibold"
              >
                Contact Us
              </Link>
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
