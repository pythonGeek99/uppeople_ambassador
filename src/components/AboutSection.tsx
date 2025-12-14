import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ambassador Team" className="rounded-2xl shadow-2xl relative z-10 w-full" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-gray-100">
                <p className="font-bold text-gray-900 text-lg mb-1">
                  5+ Years Experience
                </p>
                <p className="text-gray-600 text-sm">
                  Helping students navigate the scholarship process since 2019.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Student Ambassadors Helping Students
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are official University of the People student ambassadors.
              We've been where you are, and we know exactly what it takes to get
              accepted and secure a full scholarship.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is simple: make quality education accessible to
              everyone, regardless of their financial situation or background.
              We specialize in helping refugees and students from underserved
              communities.
            </p>

            <ul className="space-y-4 mb-10">
              {['Official UoPeople Ambassadors', 'Specialized Refugee Support Program', 'Direct Access to Admissions Guidance', 'Community of 500+ Successful Scholars'].map((item, i) => <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>)}
            </ul>

            <button className="text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-2 group">
              Learn More About Our Mission
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>;
}