import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Award, Heart, TrendingUp } from 'lucide-react';
const impacts = [{
  title: 'Afghan Refugee Program',
  description: 'Specialized support for Afghan women and refugees to reclaim their right to education.',
  icon: Heart,
  stat: '50+ Lives Changed',
  color: 'bg-rose-500'
}, {
  title: 'Global Reach',
  description: 'Connecting students from over 50 countries with quality higher education opportunities.',
  icon: Globe2,
  stat: '50+ Countries',
  color: 'bg-blue-500'
}, {
  title: '100% Success Rate',
  description: "Every student we've guided through the full process has received scholarship approval.",
  icon: Award,
  stat: 'Guaranteed Results',
  color: 'bg-yellow-500'
}, {
  title: 'Life-Changing Impact',
  description: 'From refugees to working parents, we help anyone with a dream to study.',
  icon: TrendingUp,
  stat: 'Unlimited Potential',
  color: 'bg-green-500'
}];
export function ImpactSection() {
  return <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Changing Lives Through Education
          </h2>
          <p className="text-lg text-gray-600">
            For half a decade, we've been the bridge between ambition and
            opportunity, helping students worldwide access the education they
            deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <div className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                {item.stat}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}