import React, { useEffect } from 'react';
import { NavBar } from './NavBar';
import { HeroSection } from './HeroSection';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';
import { EducationSection } from './EducationSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

function Portfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    // Ensure all elements are marked visible immediately if observer is not supported or as a fallback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.dataset.delay) || 0;
            setTimeout(() => entry.target.classList.add('visible'), Math.min(delay, 200));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: '120px 0px 120px 0px' }
    );
    elements.forEach((el) => observer.observe(el));

    // Safety fallback: ensure all elements become visible after 600ms
    const fallbackTimer = setTimeout(() => {
      elements.forEach((el) => el.classList.add('visible'));
    }, 600);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh', position: 'relative', overflowX: 'hidden', transition: 'background 0.4s ease' }}>
      {/* Animated background orbs */}
      <div className="bg-animated" aria-hidden="true">
        <div className="orb orb-violet" />
        <div className="orb orb-cyan" />
        <div className="orb orb-pink" />
      </div>

      {/* Grid overlay */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* Page content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <NavBar />
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;