import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
const testimonials = [{
  name: 'Fatima R.',
  country: 'Afghanistan',
  role: 'Business Admin Student',
  quote: "As a refugee, I thought my education was over. This platform guided me through every step. Now I'm studying tuition-free.",
  badge: 'Refugee Program',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
}, {
  name: 'Emmanuel K.',
  country: 'Nigeria',
  role: 'Computer Science',
  quote: 'The 24/7 support was incredible. Whenever I was stuck on the application, someone replied instantly. Truly expert guidance.',
  badge: 'Scholarship Recipient',
  image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
}, {
  name: 'Sarah L.',
  country: 'Philippines',
  role: 'Health Science',
  quote: "I didn't believe it was real at first. But they helped me get a 100% scholarship. I'm now in my second year!",
  badge: 'Honor Student',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
}];
export function Testimonials() {
  return <section id="testimonials" className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Students, Real Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the community of students who have transformed their lives
            through education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative">
              <Quote className="absolute top-6 right-6 text-primary/10 w-12 h-12" />

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
              </div>

              <p className="text-gray-700 italic mb-8 relative z-10">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500">
                    {item.country} • {item.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 inline-block bg-blue-50 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                {item.badge}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}