'use client';

import Link from 'next/link';
import { useState } from 'react';
import DoctorCard from '@/components/features/doctors/DoctorCard';
import { doctors } from '@/lib/data/doctors';

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Get unique specialties
  const specialties = ['All', ...new Set(doctors.map((doc) => doc.specialty))];

  // Filter doctors based on specialty and search
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blood-red to-[rgb(20,70,150)] py-12 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Doctors</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Meet our team of highly qualified specialists dedicated to your health and wellness
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="w-full py-8 px-4 bg-light-blue-bg">
        <div className="container mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search doctors by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blood-red shadow-md"
            />
          </div>

          {/* Specialty Filter */}
          <div>
            <p className="text-sm font-semibold text-blood-red mb-3">Filter by Specialty:</p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSpecialty === specialty
                      ? 'bg-blood-red text-white shadow-lg'
                      : 'bg-white text-blood-red border border-blood-red hover:bg-blood-red hover:text-white'
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          {filteredDoctors.length > 0 ? (
            <>
              <p className="text-center text-gray-600 mb-8">
                Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDoctors.map((doctor) => (
                  <Link key={doctor.id} href={`/doctors/${doctor.slug}`}>
                    <DoctorCard doctor={doctor} />
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 mb-4">No doctors found matching your criteria</p>
              <button
                onClick={() => {
                  setSelectedSpecialty('All');
                  setSearchTerm('');
                }}
                className="bg-blood-red text-white px-6 py-2 rounded-lg hover:bg-red-900 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
