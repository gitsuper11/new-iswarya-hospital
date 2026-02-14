'use client';

import Link from 'next/link';
import { useState } from 'react';
import { treatments } from '@/lib/data/treatments';

export default function TreatmentsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blood-red to-[rgb(20,70,150)] py-12 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Specializations</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive medical services across all major specialties with world-class expertise
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatments.map((treatment) => (
              <div key={treatment.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-light-blue-bg">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blood-red mb-2">{treatment.name}</h3>
                      <p className="text-sm text-gray-700">{treatment.description}</p>
                    </div>
                    <i className={`${treatment.icon} text-3xl text-blood-red flex-shrink-0`}></i>
                  </div>

                  {/* Expandable Content */}
                  {expandedId === treatment.id && (
                    <div className="border-t pt-4 mt-4 animate-in fade-in slide-in-from-top-2">
                      <h4 className="font-semibold text-blood-red mb-3 text-sm">Available Procedures:</h4>
                      <ul className="space-y-2 mb-4">
                        {treatment.procedures.map((proc, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <i className="fas fa-check text-blood-red mt-0.5 flex-shrink-0 text-xs"></i>
                            <span>{proc}</span>
                          </li>
                        ))}
                      </ul>

                      {treatment.doctors.length > 0 && (
                        <>
                          <h4 className="font-semibold text-blood-red mb-3 text-sm">Specialist Doctors:</h4>
                          <ul className="space-y-1 mb-4">
                            {treatment.doctors.map((doctorName, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                <i className="fas fa-user text-blood-red text-xs"></i>
                                {doctorName}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )}

                  {/* Button */}
                  <button
                    onClick={() => setExpandedId(expandedId === treatment.id ? null : treatment.id)}
                    className="w-full mt-4 bg-light-blue-bg text-blood-red px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors font-semibold text-sm"
                  >
                    {expandedId === treatment.id ? 'Show Less' : 'Learn More'}
                    <i className={`fas fa-chevron-${expandedId === treatment.id ? 'up' : 'down'} ml-2`}></i>
                  </button>

                  {/* Detailed Page Link */}
                  <Link href={`/treatments/${treatment.slug}`}>
                    <button className="w-full mt-2 bg-blood-red text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors font-semibold text-sm">
                      Full Details <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
