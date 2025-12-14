import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap } from 'lucide-react';
interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function SignupModal({
  isOpen,
  onClose
}: SignupModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 3000);
  };
  return <AnimatePresence>
      {isOpen && <>
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />

          {/* Modal */}
          <motion.div initial={{
        opacity: 0,
        scale: 0.9,
        y: 20
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.9,
        y: 20
      }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10">
              <X size={24} />
            </button>

            <div className="bg-primary p-6 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-30 transform rotate-12 scale-150"></div>
              <h3 className="text-2xl font-bold relative z-10">
                Don't Miss Out!
              </h3>
              <p className="text-blue-100 text-sm mt-2 relative z-10">
                Join 500+ students who transformed their lives.
              </p>
            </div>

            <div className="p-6">
              {isSubmitted ? <div className="text-center py-8">
                  <h4 className="text-xl font-bold text-green-600 mb-2">
                    You're on the list!
                  </h4>
                  <p className="text-gray-600">We'll be in touch shortly.</p>
                </div> : <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                      Full Name
                    </label>
                    <input type="text" required className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                      Email
                    </label>
                    <input type="email" required className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="email@example.com" />
                  </div>

                  <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg shadow-lg transition-all mt-2">
                    Get Started Now
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                    <Zap size={14} className="text-yellow-500 fill-yellow-500" />
                    <span>Instant response - 24/7 support</span>
                  </div>
                </form>}
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
}