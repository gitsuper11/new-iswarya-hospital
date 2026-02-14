'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import DoctorCard from '@/components/features/doctors/DoctorCard';
import ServiceCard from '@/components/features/services/ServiceCard';
import BlogCard from '@/components/features/blog/BlogCard';
import { doctors } from '@/lib/data/doctors';
import { treatments } from '@/lib/data/treatments';
import { services } from '@/lib/data/services';
import { blogPosts } from '@/lib/data/blog';
import { testimonials } from '@/lib/data/testimonials';

export default function Home() {
  const [doctorSliderIndex, setDoctorSliderIndex] = useState(0);
  const [blogSliderIndex, setBlogSliderIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const docsPerSlide = 3;
  const maxDoctorSlides = Math.ceil(doctors.length / docsPerSlide);
  const maxBlogSlides = Math.ceil(blogPosts.length / 3);

  return (
    <>
      {/* Video Hero Section */}
      <section className="w-full relative overflow-hidden">
        <video className="w-full h-auto object-cover" autoPlay loop muted playsInline>
          <source src="https://videos.files.wordpress.com/UYmAdNVC/iswarya-hospital-70sec-without-end-clip.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-4 py-8 md:pt-4 md:py-20 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-blood-red mb-4 leading-tight">
            Quaternary Care. Unmatched Excellence. For the Most Complex Cases..
          </h1>
          <p className="text-xs md:text-sm text-gray-700 mb-6">
            At Iswarya Hospital, we are dedicated to providing world-class healthcare services with a human touch. Our team of expert doctors and state-of-the-art
            facilities ensure the best possible outcomes for our patients. Your health is our priority.
          </p>
          <div className="flex flex-row gap-3 md:gap-4 items-center justify-center md:justify-start">
            <a href="https://wa.me/914420252025" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-[#FF0000] text-white px-4 py-3 rounded-lg hover:bg-[#CC0000] transition-colors shadow-lg text-sm md:text-base md:px-6">
                Book An Appointment
              </button>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://iswarya.com/wp-content/uploads/2025/06/1.webp"
            alt="Hospital Interior"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-white py-8 px-4 shadow-inner">
        <div className="container mx-auto">
          {/* Mobile Scrollable Row */}
          <div className="md:hidden flex space-x-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            <StatCard icon="fas fa-brain" title="24/7" subtitle="STROKE UNITS" />
            <StatCard icon="fas fa-ambulance" title="24/7" subtitle="EMERGENCY" />
            <StatCard icon="fas fa-microscope" title="Advanced" subtitle="CANCER CENTRE" />
            <StatCard icon="fas fa-robot-medical" title="AI-Powered" subtitle="CT/MRI" />
            <StatCard icon="fas fa-procedures" title="400+" subtitle="BEDS AVAILABLE" />
            <StatCard icon="fas fa-heartbeat" title="Organ" subtitle="TRANSPLANT" />
            <StatCard icon="fas fa-robot" title="Robotic" subtitle="SURGERY" />
            <StatCard icon="fas fa-hospital" title="Advanced" subtitle="ICU" />
            <StatCard icon="fas fa-stethoscope" title="All" subtitle="SPECIALIZATIONS" />
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-9 gap-3">
            <StatCard icon="fas fa-brain" title="24/7" subtitle="STROKE UNITS" />
            <StatCard icon="fas fa-ambulance" title="24/7" subtitle="EMERGENCY" />
            <StatCard icon="fas fa-microscope" title="Advanced" subtitle="CANCER CENTRE" />
            <StatCard icon="fas fa-robot-medical" title="AI-Powered" subtitle="CT/MRI" />
            <StatCard icon="fas fa-procedures" title="400+" subtitle="BEDS AVAILABLE" />
            <StatCard icon="fas fa-heartbeat" title="Organ" subtitle="TRANSPLANT" />
            <StatCard icon="fas fa-robot" title="Robotic" subtitle="SURGERY" />
            <StatCard icon="fas fa-hospital" title="Advanced" subtitle="ICU" />
            <StatCard icon="fas fa-stethoscope" title="All" subtitle="SPECIALIZATIONS" />
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="w-full bg-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blood-red mb-8">Meet Our Expert Doctors</h2>
          <div className="relative">
            <div className="flex overflow-x-auto md:overflow-hidden gap-6 pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
              {doctors.slice(doctorSliderIndex * docsPerSlide, (doctorSliderIndex + 1) * docsPerSlide).map((doctor) => (
                <div key={doctor.id} className="flex-shrink-0 w-[12rem] md:w-auto">
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
            </div>
            <button
              onClick={() => setDoctorSliderIndex((prev) => (prev - 1 + maxDoctorSlides) % maxDoctorSlides)}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
              title="Previous doctors"
            >
              <i className="fas fa-chevron-left text-blood-red text-xl"></i>
            </button>
            <button
              onClick={() => setDoctorSliderIndex((prev) => (prev + 1) % maxDoctorSlides)}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
              title="Next doctors"
            >
              <i className="fas fa-chevron-right text-blood-red text-xl"></i>
            </button>
          </div>
          <Link href="/doctors" className="inline-block mt-10 bg-blood-red text-white px-6 py-3 rounded-lg hover:bg-red-900 transition-colors shadow-lg">
            View All Doctors
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blood-red mb-8">Our Services</h2>

          {/* Mobile Grid (2x3) */}
          <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-6 mb-8">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <Link href="/services" className="inline-block bg-blood-red text-white px-6 py-3 rounded-lg hover:bg-red-900 transition-colors shadow-lg">
            View All Services
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full bg-light-blue-bg py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blood-red mb-8">Latest from Our Blog</h2>
          <div className="relative">
            <div className="flex overflow-x-auto md:overflow-hidden gap-6 pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
              {blogPosts.slice(blogSliderIndex * 3, (blogSliderIndex + 1) * 3).map((post) => (
                <div key={post.id} className="flex-shrink-0 w-72 md:w-96">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
            <button
              onClick={() => setBlogSliderIndex((prev) => (prev - 1 + maxBlogSlides) % maxBlogSlides)}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
              title="Previous blog posts"
            >
              <i className="fas fa-chevron-left text-blood-red text-xl"></i>
            </button>
            <button
              onClick={() => setBlogSliderIndex((prev) => (prev + 1) % maxBlogSlides)}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
              title="Next blog posts"
            >
              <i className="fas fa-chevron-right text-blood-red text-xl"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blood-red mb-8">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.slice(testimonialIndex * 2, (testimonialIndex + 1) * 2).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-blood-red">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-gray-700 mb-4 italic">&quot;{testimonial.testimonial}&quot;</p>
                <p className="text-sm font-semibold text-blood-red">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
                <div className="flex mt-2 text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <i key={i} className="fas fa-star text-xs"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function StatCard({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="bg-[#FFEEEE] rounded-xl p-3 md:p-4 text-center shadow-md hover:shadow-lg transition-shadow flex-shrink-0 w-32 md:w-auto snap-center">
      <i className={`${icon} text-[#FF0000] text-lg md:text-xl mb-1 md:mb-2 block`}></i>
      <h3 className="text-[rgb(0,41,104)] text-sm md:text-lg font-bold mb-1">{title}</h3>
      <p className="text-[10px] md:text-xs text-[rgb(0,41,104)] font-medium tracking-tight">{subtitle}</p>
    </div>
  );
}
