import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const MENU = [
  { id: 'about', label: 'About', num: '01' },
  { id: 'skills', label: 'Skills', num: '02' },
  { id: 'experience', label: 'Experience', num: '03' },
  { id: 'education', label: 'Education', num: '04' },
  { id: 'projects', label: 'Projects', num: '05' },
  { id: 'contact', label: 'Contact', num: '06' },
];

const SOCIALS = [
  { href: 'https://github.com/Radiaidel', icon: <Github size={17} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/radia-idelkadi', icon: <Linkedin size={17} />, label: 'LinkedIn' },
  { href: 'mailto:idelkadiradia@gmail.com', icon: <Mail size={17} />, label: 'Email' },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let cur = '';
      MENU.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`nav-bar${scrolled ? ' scrolled' : ''}`}
      style={{ transition: 'all 0.35s ease' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '72px', position: 'relative' }}>

          {/* ── DESKTOP MENU (CENTERED) ── */}
          <div className="nav-desktop-menu">
            {MENU.map(({ id, label, num }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
                  padding: '4px 2px', position: 'relative',
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.62rem', color: active === id ? 'var(--violet)' : 'var(--text-muted)', letterSpacing: '0.1em', transition: 'color 0.2s' }}>
                  {num}.
                </span>
                <span style={{ fontSize: '0.86rem', fontWeight: 600, color: active === id ? 'var(--text-primary)' : 'var(--text-secondary)', transition: 'color 0.2s' }}>
                  {label}
                </span>
                {active === id && (
                  <span style={{ position: 'absolute', bottom: -3, left: 0, right: 0, height: 2, background: 'var(--grad-accent)', borderRadius: 1 }} />
                )}
              </button>
            ))}

            {/* Divider */}
            <div style={{ width: 1, height: 24, background: 'var(--border)', margin: '0 4px' }} />

            {/* Socials */}
            {SOCIALS.map(({ href, icon, label }) => (
              <a
                key={label} href={href} title={label}
                target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', display: 'flex', textDecoration: 'none', transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--violet)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* ── MOBILE HAMBURGER BUTTON (RIGHT-ALIGNED ON MOBILE) ── */}
          <div className="nav-mobile-btn" style={{ marginLeft: 'auto' }}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              style={{ background: 'var(--bg-glass)', border: '1px solid var(--border)', borderRadius: 10, padding: 8, color: 'var(--text-primary)', cursor: 'pointer', display: 'flex' }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU DRAWER ── */}
      {isOpen && (
        <div style={{
          background: 'var(--bg-base)', backdropFilter: 'blur(24px)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '16px 20px 24px',
          display: 'flex', flexDirection: 'column', gap: 6,
          boxShadow: 'var(--shadow-md)',
        }}>
          {MENU.map(({ id, label, num }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: active === id ? 'rgba(2,132,199,0.1)' : 'transparent',
                border: `1px solid ${active === id ? 'rgba(2,132,199,0.3)' : 'transparent'}`,
                borderRadius: 12, padding: '12px 16px', cursor: 'pointer',
                textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12, width: '100%',
                color: active === id ? 'var(--violet)' : 'var(--text-primary)',
                transition: 'all 0.2s',
              }}
            >
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.72rem', color: 'var(--violet)', fontWeight: 600 }}>{num}.</span>
              <span style={{ fontWeight: 600, fontSize: '0.94rem' }}>{label}</span>
            </button>
          ))}
          <div style={{ display: 'flex', gap: 20, marginTop: 10, paddingTop: 14, borderTop: '1px solid var(--border)', justifyContent: 'center' }}>
            {SOCIALS.map(({ href, icon, label }) => (
              <a key={label} href={href} title={label} style={{ color: 'var(--text-primary)', display: 'flex', textDecoration: 'none' }}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}