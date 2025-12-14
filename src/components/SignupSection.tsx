import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, MessageCircle } from 'lucide-react';
export function SignupSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send data to backend
  };
  return <section id="signup" className="py-24 bg-primary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Future?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              Apply now and get matched with an advisor within 24 hours. Don't
              let tuition fees stop you from achieving your dreams.
            </p>

            <ul className="space-y-4 mb-10">
              {['100% Tuition-Free Education', 'Accredited US Degree', '24/7 Support from Ambassadors', 'Instant Response Guarantee'].map((item, i) => <li key={i} className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>)}
            </ul>

            <div className="flex items-center gap-6 text-sm font-medium text-blue-100">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>Responds in &lt; 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={18} />
                <span>WhatsApp Support</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-2xl p-8 shadow-2xl">
            {isSubmitted ? <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Application Received!
                </h3>
                <p className="text-gray-600 mb-6">
                  We've received your details. An ambassador will contact you
                  via email within 24 hours.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="text-primary font-semibold hover:underline">
                  Submit another application
                </button>
              </div> : <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Started Today
                </h3>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John Doe" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country of Residence
                  </label>
                  <select id="country" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                    <option>Select your country</option>
                    <option>Afghanistan</option>
                    <option>Nigeria</option>
                    <option>Philippines</option>
                    <option>India</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="situation" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Situation
                  </label>
                  <select id="situation" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                    <option>Student</option>
                    <option>Refugee / Asylum Seeker</option>
                    <option>Working Professional</option>
                    <option>Other</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 mt-2">
                  Apply for Scholarship
                </button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  By applying, you agree to receive guidance from our
                  ambassadors. Your data is secure.
                </p>
              </form>}
          </motion.div>
        </div>
      </div>
    </section>;
}