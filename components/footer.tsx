import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, Globe, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/four-elements-logo.jpg"
                alt="Four Elements Connect"
                width={60}
                height={60}
                className="rounded-full bg-white p-1"
              />
              <div>
                <h3 className="text-2xl font-bold text-blue-400">FOUR ELEMENTS</h3>
                <p className="text-sm text-orange-500 font-semibold">CONNECT</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Four Elements Connect is a premier travel and tourism company in Dubai, offering exceptional experiences
              including city tours, desert safaris, yacht rentals, hotel bookings, and customized holiday packages.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-400 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-500 border-b-2 border-orange-500 pb-2 inline-block">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-500 border-b-2 border-orange-500 pb-2 inline-block">
              OUR SERVICES
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/hotel-booking"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/services/visa"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                  Visa Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/transport"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                  Transport Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tickets"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                  Tour Tickets
                </Link>
              </li>
              <li>
                <Link
                  href="/services/excursions"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                  Excursions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mice"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                  MICE Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-500 border-b-2 border-orange-500 pb-2 inline-block">
              CONTACT US
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 hover:text-orange-400 transition-colors group">
                <Phone className="w-5 h-5 mt-0.5 text-blue-400 group-hover:text-orange-400" />
                <a href="tel:+971567761946" className="flex-1">
                  +971 50 181 3142
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-orange-400 transition-colors group">
                <Mail className="w-5 h-5 mt-0.5 text-blue-400 group-hover:text-orange-400" />
                <a href="mailto:ops@fourelementsconnect.com" className="flex-1 break-all">
                  ops@fourelementsconnect.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300 hover:text-orange-400 transition-colors group">
                <Globe className="w-5 h-5 mt-0.5 text-blue-400 group-hover:text-orange-400" />
                <a
                  href="https://www.fourelementsconnect.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  www.fourelementsconnect.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 text-blue-400" />
                <span className="flex-1">Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Four Elements Connect Tourism LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
