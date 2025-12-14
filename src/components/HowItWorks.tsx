import React from 'react';
import { motion } from 'framer-motion';
import { FileText, UserCheck, MessageCircle, PartyPopper } from 'lucide-react';
const steps = [{
  number: '01',
  title: 'Submit Application',
  description: 'Fill out our simple 1-minute form to tell us about your educational goals and current situation.',
  icon: FileText
}, {
  number: '02',
  title: 'Get Matched',
  description: 'Our system instantly matches you with an expert ambassador who understands your specific needs.',
  icon: UserCheck
}, {
  number: '03',
  title: 'Receive Guidance',
  description: 'Get 24/7 support via WhatsApp or email to complete your scholarship application perfectly.',
  icon: MessageCircle
}, {
  number: '04',
  title: 'Celebrate Acceptance',
  description: 'Receive your acceptance letter and 100% scholarship approval. Welcome to the revolution!',
  icon: PartyPopper
}];
export function HowItWorks() {
  return <section id="how-it-works" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Your Path to a Scholarship in 4 Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've streamlined the process to make it as easy as possible. No
            confusion, just clear guidance.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all text-center group">
                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={28} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>)}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button onClick={() => document.getElementById('signup')?.scrollIntoView({
          behavior: 'smooth'
        })} className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/40 transition-all hover:-translate-y-1">
            Start Your Application
          </button>
        </div>
      </div>
    </section>;
}