import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, CheckCircle } from 'lucide-react';
export function Hero() {
  return <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting Applications for 2024
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Future with{' '}
              <span className="text-primary">100% Tuition-Free</span> Education
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Join 500+ students who've received full scholarships to University
              of the People. We provide special support for refugees and
              underserved communities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button onClick={() => document.getElementById('signup')?.scrollIntoView({
              behavior: 'smooth'
            })} className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-2">
                Apply for Scholarship
                <ArrowRight size={20} />
              </button>
              <button onClick={() => document.getElementById('testimonials')?.scrollIntoView({
              behavior: 'smooth'
            })} className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                See Success Stories
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-yellow-500 fill-yellow-500" />
                <span>24/7 Instant Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span>Official Ambassadors</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Placeholder for student image - using a solid color block with pattern for now if no image, but using a generic education image URL if available or a nice gradient placeholder */}
              <div className="aspect-[4/3] bg-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Students studying together" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Floating Badge */}
                
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>;
}