'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header Section */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blood-red">
              Iswarya Hospital
            </Link>
          </div>

          {/* Mobile Navigation Icons */}
          <div className="md:hidden flex items-center justify-end space-x-3 bg-white p-3 shadow-sm">
            {/* WhatsApp */}
            <a
              href="https://wa.me/914420252025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 hover:bg-green-100 p-3 rounded-full transition-all duration-200 flex items-center justify-center w-12 h-12"
              title="WhatsApp"
            >
              <i className="fab fa-whatsapp text-green-600 text-xl"></i>
            </a>

            {/* Call */}
            <a
              href="tel:+914420252025"
              className="bg-gray-50 hover:bg-gray-100 p-3 rounded-full transition-all duration-200 flex items-center justify-center w-12 h-12"
              title="Call"
            >
              <i className="fas fa-phone-alt text-blood-red text-xl"></i>
            </a>

            {/* Emergency */}
            <a
              href="tel:+914420252025"
              className="relative bg-blood-red/10 hover:bg-blood-red/20 p-3 rounded-full transition-all duration-200 flex items-center justify-center w-12 h-12"
              title="Emergency"
            >
              <i className="fas fa-ambulance text-blood-red text-xl"></i>
              <span className="absolute top-0 right-0 h-3 w-3 bg-blood-red rounded-full animate-pulse ring-2 ring-blood-red/30"></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-blood-red transition-colors">
              Home
            </Link>
            <Link href="/doctors" className="text-gray-700 hover:text-blood-red transition-colors">
              Doctors
            </Link>
            <Link href="/treatments" className="text-gray-700 hover:text-blood-red transition-colors">
              Treatments
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blood-red transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blood-red transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blood-red transition-colors">
              About
            </Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-blood-red transition-colors">
              Contact
            </Link>
            <a
              href="https://wa.me/914420252025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blood-red text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors shadow"
            >
              Book Appointment
            </a>
          </div>
        </nav>
      </header>

      {/* Bottom Mobile Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg md:hidden z-50">
        <div className="flex justify-around py-2">
          <Link
            href="/doctors"
            className="flex flex-col items-center text-xs text-gray-700 hover:text-blood-red transition-colors"
          >
            <i className="fas fa-user-md text-xl mb-1"></i>
            <span>Doctors</span>
          </Link>
          <Link
            href="/contact-us"
            className="flex flex-col items-center text-xs text-gray-700 hover:text-blood-red transition-colors"
          >
            <i className="fas fa-calendar-alt text-xl mb-1"></i>
            <span>Book App.</span>
          </Link>
          <a
            href="https://wa.me/914420252025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-xs text-gray-700 hover:text-blood-red transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
            </svg>
            <span>WhatsApp</span>
          </a>
          <a
            href="tel:+914420252025"
            className="flex flex-col items-center text-xs text-gray-700 hover:text-blood-red transition-colors"
          >
            <i className="fas fa-phone-alt text-xl mb-1"></i>
            <span>Call</span>
          </a>
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col items-center text-xs text-gray-700 hover:text-blood-red transition-colors focus:outline-none"
          >
            <i className="fas fa-bars text-xl mb-1"></i>
            <span>Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed bottom-24 left-0 w-full bg-white rounded-t-md shadow-lg md:hidden z-40 border border-gray-200">
          <div className="py-2">
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-blue-bg hover:text-blood-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-blue-bg hover:text-blood-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-blue-bg hover:text-blood-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/treatments"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-blue-bg hover:text-blood-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Treatments
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-blue-bg hover:text-blood-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-blue-bg hover:text-blood-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Add inline styles for animations */}
      <style>{`
        @keyframes emergency-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        .animate-pulse {
          animation: emergency-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
}
