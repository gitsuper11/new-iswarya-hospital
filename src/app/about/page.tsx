'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blood-red to-[rgb(20,70,150)] py-12 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Iswarya Hospital</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Leading quaternary care hospital committed to excellence in healthcare
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blood-red mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Iswarya Hospital was founded with a singular vision: to provide world-class quaternary care healthcare services that combine medical excellence with compassionate patient care. With our state-of-the-art facilities and a team of highly qualified specialists, we have been serving patients across the country for years.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our commitment to innovation, research, and patient satisfaction has made us one of the most trusted healthcare institutions in the region. We continue to evolve and adapt to the changing healthcare needs of our community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every day, our dedicated team works tirelessly to turn healthcare challenges into opportunities for patient recovery and wellness.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-80">
              <img
                src="https://iswarya.com/wp-content/uploads/2025/06/1.webp"
                alt="Hospital"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 px-4 bg-light-blue-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold text-blood-red mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide comprehensive, high-quality healthcare services with a patient-centered approach, ensuring accessibility and affordability while maintaining the highest medical standards.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold text-blood-red mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted healthcare destination, where innovation meets compassion, and where every patient receives care that transforms lives and sets new standards of excellence.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold text-blood-red mb-4">Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Patient care, medical excellence, integrity, innovation, compassion, and community service form the foundation of every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blood-red mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'fas fa-heart',
                title: 'Patient Care',
                description: 'Patient welfare is at the center of everything we do'
              },
              {
                icon: 'fas fa-microscope',
                title: 'Excellence',
                description: 'Commitment to the highest standards of medical practice'
              },
              {
                icon: 'fas fa-flask',
                title: 'Innovation',
                description: 'Continuous research and adoption of latest technologies'
              },
              {
                icon: 'fas fa-handshake',
                title: 'Compassion',
                description: 'Empathy and respect for every patient and family member'
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-[#FFEEEE] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl text-blood-red mb-4">
                  <i className={value.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-blood-red mb-3">{value.title}</h3>
                <p className="text-sm text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="w-full py-12 px-4 bg-light-blue-bg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blood-red mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '400+ Hospital Beds',
                icon: 'fas fa-hospital',
                description: 'State-of-the-art facilities across all departments'
              },
              {
                title: 'Organ Transplant Center',
                icon: 'fas fa-heartbeat',
                description: 'Advanced organ transplant capabilities with high success rates'
              },
              {
                title: 'Robotic Surgery Suite',
                icon: 'fas fa-robot',
                description: 'Minimally invasive surgical procedures with precision technology'
              },
              {
                title: 'Advanced Cancer Center',
                icon: 'fas fa-microscope',
                description: 'Comprehensive cancer care with latest treatment modalities'
              },
              {
                title: 'Advanced ICU',
                icon: 'fas fa-hospital',
                description: 'Fully equipped ICU with 24/7 critical care monitoring'
              },
              {
                title: '24/7 Stroke Units',
                icon: 'fas fa-brain',
                description: 'Specialized stroke care with emergency response protocols'
              },
            ].map((achievement, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex items-start gap-6">
                <div className="text-3xl text-blood-red flex-shrink-0 w-16 text-center">
                  <i className={achievement.icon}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blood-red mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-700">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blood-red mb-12 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Muthukumaran',
                position: 'Chief Executive Officer',
                specialty: 'Cardio-Thoracic & Vascular Surgery',
                image: 'https://images.unsplash.com/photo-1612349317150-e88e6ff1fcc2?w=400&h=400&fit=crop'
              },
              {
                name: 'Dr. Vivek A N',
                position: 'Chief Medical Officer',
                specialty: 'General Medicine & Internal Care',
                image: 'https://images.unsplash.com/photo-1622253692010-333348147106?w=400&h=400&fit=crop'
              },
              {
                name: 'Dr. Pavithra',
                position: 'Director of Patient Care',
                specialty: 'Emergency Medicine',
                image: 'https://images.unsplash.com/photo-1594824476967-48c21ce26b8d?w=400&h=400&fit=crop'
              },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow text-center">
                <div className="h-48 overflow-hidden bg-light-blue-bg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-blood-red mb-1">Dr. {member.name}</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-2">{member.position}</p>
                  <p className="text-xs text-gray-600">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 px-4 bg-blood-red text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '5000+', label: 'Doctors' },
              { number: '50000+', label: 'Happy Patients' },
              { number: '25+', label: 'Specialties' },
              { number: '15+', label: 'Years of Service' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-sm md:text-base opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blood-red mb-6">Experience World-Class Healthcare</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who have found compassionate, quality care at Iswarya Hospital. We're ready to support your health journey.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/doctors">
              <button className="bg-blood-red text-white px-8 py-3 rounded-lg hover:bg-red-900 transition-colors font-semibold shadow-lg">
                Meet Our Doctors
              </button>
            </Link>
            <a href="https://wa.me/914420252025" target="_blank" rel="noopener noreferrer">
              <button className="bg-light-blue-bg text-blood-red px-8 py-3 rounded-lg hover:bg-blue-100 transition-colors font-semibold border-2 border-blood-red">
                <i className="fas fa-whatsapp mr-2"></i> Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
