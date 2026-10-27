'use client'

import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 7000)
  }

  return (
    <main className="min-h-screen bg-white text-soft-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-soft-900">Bookly</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-primary-600 transition">Home</a>
            <a href="#services" className="hover:text-primary-600 transition">Services</a>
            <a href="#about" className="hover:text-primary-600 transition">About</a>
            <a href="#booking" className="hover:text-primary-600 transition">Book Now</a>
            <a href="#contact" className="hover:text-primary-600 transition">Contact</a>
          </div>

          <a 
            href="#booking" 
            className="hidden sm:inline-flex bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-700 transition shadow-sm"
          >
            Book Appointment
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-1 text-sm font-medium">
              <a href="#" className="block py-2.5 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="block py-2.5 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="block py-2.5 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#booking" className="block py-2.5 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Book Now</a>
              <a href="#contact" className="block py-2.5 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a 
                href="#booking" 
                className="block mt-3 bg-primary-600 text-white text-center py-3 rounded-full font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-primary-600 font-medium mb-3 tracking-wide uppercase text-sm">Modern Dental Care</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-soft-900">
              Healthy Smiles Start Here
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Experience gentle, professional dental care in a calm and modern environment. Book your appointment online in under a minute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#booking" 
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition text-center shadow-md shadow-primary-200"
              >
                Book Appointment
              </a>
              <a 
                href="#services" 
                className="border border-gray-300 text-soft-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition text-center"
              >
                Our Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-primary-600 font-bold text-xl">4.9</span>
                <span className="text-primary-500">★★★★★</span>
              </div>
              <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
              <span>Trusted by 2,000+ patients</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1000&auto=format&fit=crop" 
                alt="Modern dental clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-medium mb-3 tracking-wide uppercase text-sm">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Complete Dental Care</h2>
            <p className="text-gray-600 max-w-xl mx-auto">From routine check-ups to advanced treatments — we provide everything you need for a healthy smile.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'General Check-up', desc: 'Thorough examination, cleaning, and personalized advice for long-term oral health.', icon: '🦷' },
              { title: 'Teeth Whitening', desc: 'Professional whitening treatments that deliver brighter, natural-looking results.', icon: '✨' },
              { title: 'Dental Implants', desc: 'Permanent solution for missing teeth with natural look and feel.', icon: '🔩' },
              { title: 'Orthodontics', desc: 'Clear aligners and braces to straighten your smile discreetly.', icon: '😁' },
              { title: 'Root Canal', desc: 'Gentle and effective treatment to save infected teeth.', icon: '🩺' },
              { title: 'Emergency Care', desc: 'Same-day appointments available for dental emergencies.', icon: '⚡' },
            ].map((service) => (
              <div 
                key={service.title} 
                className="bg-soft-50 border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-primary-100 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Us */}
      <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 bg-soft-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-primary-600 font-medium mb-3 tracking-wide uppercase text-sm">Why Bookly</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Care You Can Trust</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We combine modern technology with a gentle approach to make every visit comfortable and effective. Your smile is our priority.
            </p>

            <div className="space-y-5">
              {[
                { title: 'Experienced Dentists', text: 'Highly trained professionals with years of clinical experience.' },
                { title: 'Modern Equipment', text: 'State-of-the-art tools for precise and comfortable treatments.' },
                { title: 'Patient-Centered', text: 'We listen carefully and create treatment plans tailored to you.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '2k+', label: 'Happy Patients' },
              { value: '4.9', label: 'Average Rating' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                <p className="text-3xl font-bold text-primary-600">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-medium mb-3 tracking-wide uppercase text-sm">Book Online</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Schedule Your Visit</h2>
            <p className="text-gray-600">Fill out the form below and we’ll confirm your appointment shortly.</p>
          </div>

          {formSubmitted ? (
            <div className="bg-white border border-primary-200 rounded-2xl p-10 sm:p-12 text-center shadow-lg animate-[fadeIn_0.4s_ease-out]">
              {/* Animated Check Circle */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary-100 rounded-full animate-ping opacity-40"></div>
                <div className="relative w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-200">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-soft-900 mb-3">
                Appointment Request Sent!
              </h3>
              <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto">
                Thank you! We’ve received your booking request and will contact you shortly to confirm your preferred time.
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-primary-700 bg-primary-50 px-4 py-2 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Usually confirmed within a few hours
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+234 800 000 0000"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                  <select 
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  >
                    <option value="">Select time</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                <select 
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                >
                  <option value="">Select a service</option>
                  <option>General Check-up</option>
                  <option>Teeth Whitening</option>
                  <option>Dental Implants</option>
                  <option>Orthodontics</option>
                  <option>Root Canal</option>
                  <option>Emergency Care</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (optional)</label>
                <textarea 
                  rows={3}
                  placeholder="Any specific concerns or requests..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition text-lg shadow-md shadow-primary-200"
              >
                Confirm Booking Request
              </button>

              <p className="text-center text-sm text-gray-500">We’ll confirm your appointment within a few hours.</p>
            </form>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-soft-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-medium mb-3 tracking-wide uppercase text-sm">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold">What Our Patients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Amaka O.', text: 'The most comfortable dental experience I’ve ever had. The team is professional and very gentle.', rating: '★★★★★' },
              { name: 'David K.', text: 'Booked online in less than a minute and got a same-day appointment. Highly recommend Bookly!', rating: '★★★★★' },
              { name: 'Fatima S.', text: 'Clean clinic, modern equipment, and friendly staff. My teeth have never looked better.', rating: '★★★★★' },
            ].map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-md transition">
                <div className="text-primary-500 mb-4">{t.rating}</div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{t.text}"</p>
                <p className="font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center bg-primary-600 rounded-3xl p-10 sm:p-16 text-white shadow-xl shadow-primary-200">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready for a Healthier Smile?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">Book your appointment today and take the first step toward better oral health.</p>
          <a 
            href="#booking" 
            className="inline-flex bg-white text-primary-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition"
          >
            Book Your Appointment
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 sm:px-6 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-lg font-bold">Bookly</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Modern dental care with a personal touch. Your smile is our priority.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#services" className="hover:text-primary-600 transition">Services</a></li>
                <li><a href="#about" className="hover:text-primary-600 transition">About Us</a></li>
                <li><a href="#booking" className="hover:text-primary-600 transition">Book Appointment</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>123 Health Avenue</li>
                <li>Lagos, Nigeria</li>
                <li>+234 800 123 4567</li>
                <li>hello@bookly.clinic</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Mon – Fri: 8:00 AM – 6:00 PM</li>
                <li>Saturday: 9:00 AM – 3:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
            © 2026 Bookly Dental Clinic. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  )
}
