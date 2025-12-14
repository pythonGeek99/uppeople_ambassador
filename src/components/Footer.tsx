import React from 'react';
import { GraduationCap, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white/10 p-2 rounded-lg text-white">
                <GraduationCap size={24} />
              </div>
              <span className="font-bold text-white text-lg">
                UoPeople Ambassadors
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering students worldwide to access quality, tuition-free
              education. We are the bridge to your future.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => <a key={i} href="#" className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#signup" className="hover:text-primary transition-colors">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Refugee Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Scholarship Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>support@uopeople-ambassadors.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="text-xs text-gray-500 mt-4">
                Available 24/7 for urgent inquiries.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} UoPeople Ambassadors. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Built with expertise by UoPeople Ambassadors</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Secure Platform
            </span>
          </div>
        </div>
      </div>
    </footer>;
}