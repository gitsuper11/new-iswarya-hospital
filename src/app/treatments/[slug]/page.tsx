'use client';

import Link from 'next/link';
import { treatments } from '@/lib/data/treatments';
import { doctors } from '@/lib/data/doctors';
import { notFound } from 'next/navigation';

interface TreatmentDetailPageProps {
  params: {
    slug: string;
  };
}

export default function TreatmentDetailPage({ params }: TreatmentDetailPageProps) {
  const treatment = treatments.find((t) => t.slug === params.slug);

  if (!treatment) {
    notFound();
  }

  // Get specialist doctors for this treatment
  const specialistDoctors = doctors.filter((doctor) =>
    treatment.doctors.includes(doctor.name) || doctor.specialty.toLowerCase().includes(treatment.name.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blood-red to-[rgb(20,70,150)] py-8 px-4 text-white">
        <div className="container mx-auto">
          <Link href="/treatments" className="text-white hover:text-gray-200 text-sm flex items-center gap-2">
            <i className="fas fa-chevron-left"></i> Back to Specializations
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Treatment Image & Icon */}
            <div>
              <div className="bg-light-blue-bg rounded-xl overflow-hidden mb-6 shadow-lg">
                <img src={treatment.image} alt={treatment.name} className="w-full h-auto object-cover" />
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="text-6xl text-blood-red mb-4">
                  <i className={treatment.icon}></i>
                </div>
                <p className="text-sm text-gray-600 mb-4">{treatment.description}</p>
                <a href="https://wa.me/914420252025" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-blood-red text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-colors font-semibold">
                    <i className="fas fa-calendar mr-2"></i> Schedule Consultation
                  </button>
                </a>
              </div>
            </div>

            {/* Treatment Details */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-blood-red mb-6">{treatment.name}</h1>

              {/* Full Description */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-blood-red mb-4">About {treatment.name}</h2>
                <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-wrap">{treatment.fullDescription}</p>
              </section>

              {/* Procedures */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-blood-red mb-4">Available Procedures & Treatments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {treatment.procedures.map((proc, idx) => (
                    <div key={idx} className="bg-light-blue-bg rounded-lg p-4 flex items-start gap-3">
                      <i className="fas fa-check-circle text-blood-red mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700">{proc}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Why Choose Us */}
              <section className="mb-8 bg-[#FFEEEE] rounded-xl p-6">
                <h2 className="text-xl font-bold text-blood-red mb-4">Why Choose Iswarya Hospital for {treatment.name}?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <i className="fas fa-star text-blood-red mt-1 flex-shrink-0"></i>
                    <span>Expert specialists with decades of experience</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <i className="fas fa-star text-blood-red mt-1 flex-shrink-0"></i>
                    <span>State-of-the-art medical equipment and technology</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <i className="fas fa-star text-blood-red mt-1 flex-shrink-0"></i>
                    <span>Comprehensive patient care and support</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <i className="fas fa-star text-blood-red mt-1 flex-shrink-0"></i>
                    <span>Proven track record of successful outcomes</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <i className="fas fa-star text-blood-red mt-1 flex-shrink-0"></i>
                    <span>Patient-centered approach with compassionate care</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          {/* Specialist Doctors */}
          {specialistDoctors.length > 0 && (
            <section className="mt-12 pt-12 border-t">
              <h2 className="text-2xl font-bold text-blood-red mb-8 text-center">Our Specialist Doctors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {specialistDoctors.map((doctor) => (
                  <Link key={doctor.id} href={`/doctors/${doctor.slug}`}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
                      <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-blood-red mb-1">Dr. {doctor.name}</h3>
                        <p className="text-sm text-gray-600">{doctor.specialty}</p>
                        <p className="text-xs text-gray-500 mt-2">{doctor.experience}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="text-yellow-400 text-sm">★ {doctor.rating}</span>
                          <span className="text-xs text-gray-500">({doctor.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}
