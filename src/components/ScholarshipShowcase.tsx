import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Heart } from 'lucide-react';
const scholarships = [{
  id: 1,
  studentName: 'Ahmed M.',
  country: 'Syria',
  program: 'Computer Science',
  screenshot: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  thankYouNote: 'Thank you for believing in me when I had lost all hope. This scholarship gave me a second chance at life. I promise to make the most of this opportunity and help others like me in the future.'
}, {
  id: 2,
  studentName: 'Maria S.',
  country: 'Venezuela',
  program: 'Business Administration',
  screenshot: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  thankYouNote: "Words cannot express my gratitude. Your support has transformed not just my life, but my entire family's future. I am forever grateful for this life-changing opportunity."
}, {
  id: 3,
  studentName: 'David K.',
  country: 'Kenya',
  program: 'Health Science',
  screenshot: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  thankYouNote: 'This scholarship is a dream come true. Thank you for seeing potential in me and giving me the tools to succeed. I will work hard every day to honor this gift.'
}, {
  id: 4,
  studentName: 'Priya R.',
  country: 'India',
  program: 'Education',
  screenshot: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  thankYouNote: 'Thank you for opening doors I thought were forever closed. Your guidance and support have given me confidence to pursue my dreams. I am deeply grateful.'
}, {
  id: 5,
  studentName: 'Carlos P.',
  country: 'Colombia',
  program: 'Information Technology',
  screenshot: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  thankYouNote: 'From the bottom of my heart, thank you. This scholarship has changed everything for me and my family. I will make you proud and pay this kindness forward.'
}, {
  id: 6,
  studentName: 'Amina H.',
  country: 'Somalia',
  program: 'Psychology',
  screenshot: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  thankYouNote: 'Thank you for giving me hope when I had none. Your support means the world to me. I promise to use this education to help my community and make a difference.'
}];
function ScholarshipCard({
  scholarship,
  index
}: {
  scholarship: (typeof scholarships)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    delay: index * 0.1
  }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} className="relative group cursor-pointer">
      <motion.div animate={{
      height: isHovered ? '600px' : '320px'
    }} transition={{
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }} className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Screenshot */}
        <div className="absolute inset-0">
          <img src={scholarship.screenshot} alt={`${scholarship.studentName}'s scholarship acceptance`} className="w-full h-full object-cover object-top" />
          {/* Gradient overlay at bottom when collapsed */}
          <motion.div animate={{
          opacity: isHovered ? 0 : 1
        }} transition={{
          duration: 0.3
        }} className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Student info badge (always visible at bottom) */}
        <motion.div animate={{
        y: isHovered ? -80 : 0,
        opacity: isHovered ? 0 : 1
      }} transition={{
        duration: 0.4
      }} className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="flex items-center gap-3 mb-2">
            <Award className="text-yellow-400 fill-yellow-400" size={20} />
            <span className="text-white font-semibold text-lg">
              {scholarship.studentName}
            </span>
          </div>
          <p className="text-white/90 text-sm">
            {scholarship.country} • {scholarship.program}
          </p>
        </motion.div>

        {/* Thank you note overlay (visible on hover) */}
        <motion.div animate={{
        opacity: isHovered ? 1 : 0
      }} transition={{
        duration: 0.4,
        delay: isHovered ? 0.2 : 0
      }} className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/90 to-primary/80 backdrop-blur-sm flex flex-col justify-end p-8 pointer-events-none">
          <motion.div animate={{
          y: isHovered ? 0 : 20
        }} transition={{
          duration: 0.4,
          delay: 0.1
        }}>
            <Heart className="text-white mb-4" size={32} />
            <p className="text-white text-lg leading-relaxed mb-6 italic">
              "{scholarship.thankYouNote}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-lg">
                  {scholarship.studentName}
                </p>
                <p className="text-white/90 text-sm">
                  {scholarship.country} • {scholarship.program}
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white text-sm font-semibold">
                  Scholarship Recipient
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hover instruction hint */}
      <motion.div animate={{
      opacity: isHovered ? 0 : 1
    }} className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-lg z-20">
        Hover to read note
      </motion.div>
    </motion.div>;
}
export function ScholarshipShowcase() {
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award size={18} className="fill-yellow-600" />
            Scholarship Acceptances
          </motion.div>

          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Celebrating Our Scholars
          </motion.h2>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the actual scholarship acceptance letters and heartfelt thank
            you notes from students whose lives have been transformed.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => <ScholarshipCard key={scholarship.id} scholarship={scholarship} index={index} />)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Want to be our next success story?
          </p>
          <button onClick={() => document.getElementById('signup')?.scrollIntoView({
          behavior: 'smooth'
        })} className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1 inline-flex items-center gap-2">
            Start Your Application
            <Award size={20} />
          </button>
        </motion.div>
      </div>
    </section>;
}