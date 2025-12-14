import React, { useEffect, useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'How It Works',
    href: '#how-it-works'
  }, {
    name: 'Success Stories',
    href: '#testimonials'
  }, {
    name: 'Blog',
    href: '#'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-primary p-2 rounded-lg text-white">
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-tight">
                UoPeople
              </span>
              <span className="text-xs text-primary font-medium tracking-wide">
                AMBASSADORS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-600 hover:text-primary font-medium transition-colors text-sm">
                {link.name}
              </a>)}
            <button onClick={() => document.getElementById('signup')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white border-t border-gray-100 overflow-hidden">
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-800 font-medium py-2 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>)}
              <button onClick={() => {
            setIsMobileMenuOpen(false);
            document.getElementById('signup')?.scrollIntoView({
              behavior: 'smooth'
            });
          }} className="bg-primary text-white px-6 py-3 rounded-lg font-semibold w-full mt-4">
                Apply Now
              </button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}