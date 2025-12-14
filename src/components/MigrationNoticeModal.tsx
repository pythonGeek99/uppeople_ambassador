import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, Mail, ExternalLink } from 'lucide-react';
interface MigrationNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function MigrationNoticeModal({
  isOpen,
  onClose
}: MigrationNoticeModalProps) {
  return <AnimatePresence>
      {isOpen && <>
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" />

          {/* Modal - Centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div initial={{
          opacity: 0,
          scale: 0.95,
          y: 20
        }} animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} exit={{
          opacity: 0,
          scale: 0.95,
          y: 20
        }} className="w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto">
              <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white rounded-full p-2 shadow-lg" aria-label="Close modal">
                <X size={24} />
              </button>

              <div className="overflow-y-auto max-h-[90vh]">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-30 transform rotate-12 scale-150"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <AlertCircle size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">
                        Important Notice: Website Migration
                      </h2>
                      <p className="text-orange-100 text-lg">
                        Temporary Service Interruption
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Main Message */}
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <h3 className="font-bold text-gray-900 text-xl mb-3">
                      What Happened?
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Due to our hosting provider's rebranding and migration
                      requirements, combined with limited funding for our legacy
                      database migration, our main website and backend services
                      are currently offline.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>
                        All backend services have been temporarily disconnected
                      </strong>{' '}
                      as we work on the migration process. This means
                      application submissions, user accounts, and database
                      features are not currently functional.
                    </p>
                  </div>

                  {/* Screenshot Section */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg">
                      Official Notification from 000webhost
                    </h3>
                    <div className="border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                      <img src="/image.png" alt="000webhost offline notification email" className="w-full h-auto" />
                    </div>
                  </div>

                  {/* Current Status */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-3">
                      Current Status
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>
                          Backend services and database:{' '}
                          <strong>Offline</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✗</span>
                        <span>
                          Application submissions:{' '}
                          <strong>Temporarily unavailable</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>
                          This portfolio showcase: <strong>Active</strong>{' '}
                          (frontend only)
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Help Section */}
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                    <h3 className="font-bold text-gray-900 text-lg mb-3">
                      How You Can Help
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We're actively working to restore full functionality, but
                      we need support to complete the migration and integrate
                      our backend systems. If you'd like to help us make this
                      revolution happen again, or if you have questions, please
                      reach out:
                    </p>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600 mb-2 font-semibold">
                        Project Manager & Developer:
                      </p>
                      <p className="text-lg font-bold text-gray-900 mb-1">
                        Hamza Yusuf
                      </p>
                      <a href="mailto:hy423728@gmail.com" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors">
                        <Mail size={18} />
                        hy423728@gmail.com
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Portfolio Note */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <strong>About This Showcase:</strong> This website
                      represents the work developed and managed by Hamza Yusuf
                      for the UoPeople Ambassadors initiative. While the backend
                      is temporarily offline, this frontend demonstrates the
                      design, user experience, and vision of the platform.
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center pt-4">
                    <button onClick={onClose} className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1">
                      Continue Exploring Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>}
    </AnimatePresence>;
}