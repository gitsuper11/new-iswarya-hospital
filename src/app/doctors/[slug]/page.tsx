'use client';

import Link from 'next/link';
import { doctors } from '@/lib/data/doctors';
import { notFound } from 'next/navigation';

interface DoctorDetailPageProps {
  params: {
    slug: string;
  };
}

export default function DoctorDetailPage({ params }: DoctorDetailPageProps) {
  const doctor = doctors.find((d) => d.slug === params.slug);

  if (!doctor) {
    notFound();
  }

  // Get related doctors (same specialty)
  const relatedDoctors = doctors.filter((d) => d.specialty === doctor.specialty && d.id !== doctor.id).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blood-red to-[rgb(20,70,150)] py-8 px-4 text-white">
        <div className="container mx-auto">
          <Link href="/doctors" className="text-white hover:text-gray-200 text-sm flex items-center gap-2">
            <i className="fas fa-chevron-left"></i> Back to Doctors
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Doctor Image & Sidebar */}
            <div>
              <div className="bg-light-blue-bg rounded-xl overflow-hidden mb-6 shadow-lg">
                <img src={doctor.image} alt={doctor.name} className="w-full h-auto object-cover" />
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SPECIALTY</p>
                  <p className="text-lg font-bold text-blood-red">{doctor.specialty}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">EXPERIENCE</p>
                  <p className="text-lg font-bold text-gray-800">{doctor.experience}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">RATING</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-yellow-400">{doctor.rating}</span>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: Math.floor(doctor.rating) }).map((_, i) => (
                        <i key={i} className="fas fa-star text-sm"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">({doctor.reviews} reviews)</p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">CONTACT</p>
                  <a
                    href={`tel:${doctor.phone}`}
                    className="block w-full bg-blood-red text-white px-4 py-2 rounded-lg text-center hover:bg-red-900 transition-colors mb-2 text-sm"
                  >
                    <i className="fas fa-phone mr-2"></i> Call
                  </a>
                  <a
                    href={`mailto:${doctor.email}`}
                    className="block w-full bg-light-blue-bg text-blood-red px-4 py-2 rounded-lg text-center hover:bg-blue-100 transition-colors text-sm"
                  >
                    <i className="fas fa-envelope mr-2"></i> Email
                  </a>
                </div>
              </div>
            </div>

            {/* Doctor Details */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-blood-red mb-2">Dr. {doctor.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{doctor.specialty}</p>

              {/* Bio */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-blood-red mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed text-justify">{doctor.bio}</p>
              </section>

              {/* Qualifications */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-blood-red mb-4">Qualifications</h2>
                <ul className="space-y-2">
                  {doctor.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <i className="fas fa-check text-blood-red mt-1 flex-shrink-0"></i>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* CTA */}
              <section className="mb-8">
                <a href="https://wa.me/914420252025" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-blood-red text-white px-6 py-3 rounded-lg hover:bg-red-900 transition-colors shadow-lg font-semibold">
                    <i className="fas fa-calendar mr-2"></i> Book Appointment
                  </button>
                </a>
              </section>
            </div>
          </div>

          {/* Related Doctors */}
          {relatedDoctors.length > 0 && (
            <section className="mt-12 pt-12 border-t">
              <h2 className="text-2xl font-bold text-blood-red mb-8 text-center">Other {doctor.specialty} Specialists</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedDoctors.map((doc) => (
                  <Link key={doc.id} href={`/doctors/${doc.slug}`}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
                      <img src={doc.image} alt={doc.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-blood-red mb-1">Dr. {doc.name}</h3>
                        <p className="text-sm text-gray-600">{doc.specialty}</p>
                        <p className="text-xs text-gray-500 mt-2">{doc.experience}</p>
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
