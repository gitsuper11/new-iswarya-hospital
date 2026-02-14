'use client';

import Link from 'next/link';
import ServiceCard from '@/components/features/services/ServiceCard';
import { services } from '@/lib/data/services';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blood-red to-[rgb(20,70,150)] py-12 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hospital Services</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive healthcare services available 24/7 for your convenience
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          {/* Desktop Grid (4 columns) */}
          <div className="hidden md:grid grid-cols-4 gap-6 mb-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Mobile Grid (2 columns) */}
          <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Details Cards */}
      <section className="w-full py-12 px-4 bg-light-blue-bg">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-blood-red mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={service.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl text-blood-red flex-shrink-0">
                    <i className={service.icon}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blood-red mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-700">{service.description}</p>
                  </div>
                </div>
                <Link href={`#service-${service.slug}`}>
                  <button className="text-blood-red hover:text-red-900 text-sm font-semibold flex items-center gap-2 mt-4">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-blood-red mb-6">Need a Service?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your healthcare needs or schedule an appointment with our specialists
          </p>
          <a href="https://wa.me/914420252025" target="_blank" rel="noopener noreferrer">
            <button className="bg-blood-red text-white px-8 py-3 rounded-lg hover:bg-red-900 transition-colors font-semibold shadow-lg">
              <i className="fas fa-whatsapp mr-2"></i> Contact via WhatsApp
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
