'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log form data (in production, this would send to a server)
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blood-red to-[rgb(20,70,150)] py-12 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            We're here to help. Reach out to us for any medical inquiries or assistance.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-3xl text-blood-red mb-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-lg font-bold text-blood-red mb-2">Address</h3>
              <p className="text-sm text-gray-700">
                110, Rajiv Gandhi Salai,<br />
                OMR, Chennai<br />
                Tamil Nadu 600096
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-3xl text-blood-red mb-4">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-lg font-bold text-blood-red mb-2">Phone</h3>
              <p className="text-sm text-gray-700">
                <a href="tel:+914420252025" className="hover:underline">
                  +91 44 2025 2025
                </a>
                <br />
                <a href="tel:+919876543210" className="hover:underline">
                  Emergency: 24/7
                </a>
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-3xl text-blood-red mb-4">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-lg font-bold text-blood-red mb-2">Email</h3>
              <p className="text-sm text-gray-700">
                <a href="mailto:info@iswarya.com" className="hover:underline">
                  info@iswarya.com
                </a>
                <br />
                <a href="mailto:appointments@iswarya.com" className="hover:underline">
                  appointments@iswarya.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-light-blue-bg rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-blood-red mb-6">Send us a Message</h2>
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                  <i className="fas fa-check-circle mb-2 text-xl block"></i>
                  <p className="font-semibold">Thank you for reaching out!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blood-red"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blood-red"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blood-red"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blood-red"
                      title="Select inquiry subject"
                    >
                      <option value="">Select a subject</option>
                      <option value="Appointment">Book Appointment</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Medical Records">Medical Records</option>
                      <option value="Billing">Billing Question</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Emergency">Emergency</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blood-red resize-none"
                      placeholder="Please tell us how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blood-red text-white px-6 py-3 rounded-lg hover:bg-red-900 transition-colors font-semibold shadow-lg"
                  >
                    Send Message <i className="fas fa-paper-plane ml-2"></i>
                  </button>
                </form>
              )}
            </div>

            {/* Hospital Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-blood-red mb-4">Hospital Hours</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t">
                    <span>Emergency</span>
                    <span className="font-semibold text-blood-red">24/7 Available</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFEEEE] rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-blood-red mb-4">Quick Support</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/914420252025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <i className="fab fa-whatsapp text-2xl text-blood-red"></i>
                    <div>
                      <p className="font-semibold text-blood-red text-sm">WhatsApp</p>
                      <p className="text-xs text-gray-600">Chat with us instantly</p>
                    </div>
                  </a>
                  <a
                    href="tel:+914420252025"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <i className="fas fa-phone text-2xl text-blood-red"></i>
                    <div>
                      <p className="font-semibold text-blood-red text-sm">Call Now</p>
                      <p className="text-xs text-gray-600">Speak with our staff</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-64 border-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1357340093844!2d80.2416!3d12.8281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c5f5f5f5f5f%3A0x0!2sIswarya%20Hospital!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Iswarya Hospital Location Map"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
