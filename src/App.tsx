import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ImpactSection } from './components/ImpactSection';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { ScholarshipShowcase } from './components/ScholarshipShowcase';
import { AboutSection } from './components/AboutSection';
import { SignupSection } from './components/SignupSection';
import { Footer } from './components/Footer';
import { SignupModal } from './components/SignupModal';
import { MigrationNoticeModal } from './components/MigrationNoticeModal';
export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [isMigrationModalOpen, setIsMigrationModalOpen] = useState(false);
  const [migrationModalClosed, setMigrationModalClosed] = useState(false);
  useEffect(() => {
    // Open migration notice modal after 10 seconds
    const migrationTimer = setTimeout(() => {
      setIsMigrationModalOpen(true);
    }, 10000);
    // Open signup modal only after scrolling 70% down the page AND migration modal has been closed
    const handleScroll = () => {
      if (!hasOpened && migrationModalClosed) {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
        if (scrollPercent > 0.7) {
          setIsModalOpen(true);
          setHasOpened(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(migrationTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasOpened, migrationModalClosed]);
  const handleMigrationModalClose = () => {
    setIsMigrationModalOpen(false);
    setMigrationModalClosed(true);
  };
  return <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navigation />

      <main>
        <Hero />
        <TrustBar />
        <ImpactSection />
        <HowItWorks />
        <Testimonials />
        <ScholarshipShowcase />
        <AboutSection />
        <SignupSection />
      </main>

      <Footer />

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <MigrationNoticeModal isOpen={isMigrationModalOpen} onClose={handleMigrationModalClose} />
    </div>;
}