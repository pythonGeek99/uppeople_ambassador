import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Clock, HeartHandshake } from 'lucide-react';
const stats = [{
  icon: Users,
  value: '500+',
  label: 'Students Helped',
  color: 'text-blue-600',
  bg: 'bg-blue-100'
}, {
  icon: GraduationCap,
  value: '100%',
  label: 'Tuition Coverage',
  color: 'text-purple-600',
  bg: 'bg-purple-100'
}, {
  icon: Clock,
  value: '24/7',
  label: 'Support Available',
  color: 'text-green-600',
  bg: 'bg-green-100'
}, {
  icon: HeartHandshake,
  value: '50+',
  label: 'Refugees Supported',
  color: 'text-pink-600',
  bg: 'bg-pink-100'
}];
export function TrustBar() {
  return <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className={`p-3 rounded-full ${stat.bg} mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}