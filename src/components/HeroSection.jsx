import React, { useEffect, useState } from 'react';
import { FileDown, ArrowDown, MapPin, Building2, Sparkles, ArrowRight } from 'lucide-react';
import { Github, Linkedin, Mail } from 'lucide-react';

const ROLES = [
  'Technical-Functional Consultant',
  'Java / Angular Full-Stack Engineer',
  'EDI & Electronic Invoicing Specialist',
  'XML & XSLT Solutions Developer',
];

export function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const role = ROLES[roleIdx];
    if (typing) {
      if (charIdx < role.length) {
        const t = setTimeout(() => { setDisplayed(role.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 52);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2400);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => { setDisplayed(role.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 28);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(i => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [typing, charIdx, roleIdx]);

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '96px 28px 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative glows */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '18%', right: '8%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(124,58,237,0.18) 0%,transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '15%', left: '5%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,rgba(6,182,212,0.14) 0%,transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 960, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>


          {/* Greeting */}
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '1.1rem', color: 'var(--violet)', marginBottom: 12, fontWeight: 600 }}>
            Hi there, I'm
          </p>

          {/* Name */}
          <h1 style={{
            fontSize: 'clamp(2.8rem,8.5vw,5.8rem)', fontWeight: 900,
            letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 16, textAlign: 'center',
          }}>
            <span style={{ color: 'var(--text-primary)' }}>Radia </span>
            <span style={{ background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Idelkadi.
            </span>
          </h1>

          {/* Typewriter subtitle */}
          <h2 style={{
            fontSize: 'clamp(1.2rem,3.8vw,2.2rem)', fontWeight: 700,
            color: 'var(--text-secondary)', marginBottom: 28,
            minHeight: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          }}>
            {displayed}
            <span style={{
              display: 'inline-block', width: 3, height: '1em',
              background: 'var(--grad-accent)',
              borderRadius: 2, verticalAlign: 'middle', marginLeft: 4,
              animation: 'cursorBlink 1s step-end infinite',
            }} />
          </h2>

          {/* Description */}
          <p style={{
            fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--text-secondary)',
            maxWidth: 680, margin: '0 auto 36px', textAlign: 'center',
          }}>
            Technical-Functional Consultant at{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Cegedim</strong>,
            specializing in the French{' '}
            <strong style={{ background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Electronic Invoicing reform
            </strong>
            , EDI specifications, XML/XSLT flows, UBL standards — and building scalable{' '}
            <strong style={{ color: 'var(--violet)', fontWeight: 700 }}>Java/Angular</strong> solutions.
          </p>

          {/* Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 38 }}>
            {[
              { icon: <Building2 size={13} />, text: 'Cegedim', bg: 'rgba(2,132,199,0.1)', border: 'rgba(2,132,199,0.25)', color: 'var(--violet)' },
              { icon: <MapPin size={13} />, text: 'Rabat, Morocco', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.25)', color: 'var(--violet)' },
              { icon: null, text: 'Open to Opportunities', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)', color: '#10b981' },
            ].map(({ icon, text, bg, border, color }) => (
              <span key={text} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 16px', borderRadius: 999, fontSize: '0.8rem', fontFamily: "'JetBrains Mono',monospace", color, background: bg, border: `1px solid ${border}`, fontWeight: 600, backdropFilter: 'blur(8px)' }}>
                {icon}{text}
              </span>
            ))}
          </div>

          {/* CTA Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', justifyContent: 'center' }}>
            <a href={`${import.meta.env.BASE_URL}idelkadi-radia-cv.pdf`} download="Radia_Idelkadi_CV.pdf" className="btn-primary">
              <FileDown size={17} /> Download CV (EN)
            </a>
            <a href={`${import.meta.env.BASE_URL}idelkadi-radia-cv-fr.pdf`} download="Radia_Idelkadi_CV_FR.pdf" className="btn-outline">
              <FileDown size={17} /> CV (FR)
            </a>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600, padding: '12px 10px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--violet)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              View Projects <ArrowRight size={15} />
            </button>
            <div style={{ width: 1, height: 28, background: 'var(--border)', margin: '0 4px' }} />
            {[
              { href: 'https://github.com/Radiaidel', icon: <Github size={20} />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/radia-idelkadi', icon: <Linkedin size={20} />, label: 'LinkedIn' },
              { href: 'mailto:idelkadiradia@gmail.com', icon: <Mail size={20} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} title={label}
                target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)', textDecoration: 'none', padding: 10, borderRadius: 12, border: '1px solid var(--border)', background: 'var(--bg-glass)', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--violet)'; e.currentTarget.style.borderColor = 'var(--border-accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>


      </section>

      {/* ══════════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════════ */}
      <section id="about" style={{ padding: '100px 28px', position: 'relative' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <div className="reveal" style={{ marginBottom: 60 }}>
            <p className="section-number">01 — ABOUT ME</p>
            <h2 className="section-title">
              Who I am &{' '}
              <span style={{ background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                what I do
              </span>
            </h2>
            <div className="section-divider" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 32, alignItems: 'start' }}>

            {/* Bio text */}
            <div className="reveal">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.82 }}>
                <p>
                  Hello! I'm{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>Radia Idelkadi</strong>{' '}
                  — a Technical-Functional Consultant and Full-Stack Developer based in{' '}
                  <strong style={{ color: 'var(--violet)' }}>Rabat, Morocco</strong>.
                </p>
                <p>
                  At <strong style={{ color: 'var(--cyan)' }}>Cegedim</strong>, I work on compliance solutions for the French
                  Electronic Invoicing reform — analyzing DO specifications, performing gap analyses,
                  configuring tools, and implementing{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>XML/XSLT data flow transformations</strong>{' '}
                  using UBL (1.6/2.1) and EN 16931 standards.
                </p>
                <p>
                  With a Full-Stack foundation from{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>YouCode (UM6P)</strong> and a DUT
                  from{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>EST Agadir</strong>, I bridge the technical
                  and functional worlds fluently.
                </p>
              </div>

              <div className="reveal" data-delay="150" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
                {[
                  { label: 'Location', value: 'Rabat, Morocco', color: 'var(--violet)' },
                  { label: 'Company', value: 'Cegedim', color: 'var(--cyan)' },
                  { label: 'Email', value: 'idelkadiradia@gmail.com', color: 'var(--pink)' },
                  { label: 'Role', value: 'Tech-Functional + Full-Stack', color: '#22c55e' },
                ].map(({ label, value, color }) => (
                  <div key={label} style={{ padding: '12px 18px', borderRadius: 12, border: '1px solid var(--border)', background: 'var(--bg-glass)', backdropFilter: 'blur(12px)', transition: 'border-color 0.2s' }}>
                    <p style={{ fontSize: '0.65rem', fontFamily: "'JetBrains Mono',monospace", color: 'var(--text-faint)', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
                    <p style={{ fontSize: '0.88rem', color, fontWeight: 600 }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="reveal" data-delay="200">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { num: '4+', label: 'Years Learning', sub: 'YouCode (UM6P) + EST Agadir', grad: 'var(--grad-primary)' },
                  { num: '4', label: 'Internships & Roles', sub: 'Cegedim, VisionOrientation, ValaBleu', grad: 'var(--grad-cool)' },
                  { num: '10+', label: 'Academic & Pro Projects', sub: 'Java, Angular, Spring Boot, Laravel', grad: 'var(--grad-accent)' },
                  { num: '3', label: 'Languages Spoken', sub: 'Arabic, French, English', grad: 'var(--grad-warm)' },
                ].map(({ num, label, sub, grad }) => (
                  <div key={label} className="glass-card" style={{ padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 18 }}>
                    <span style={{ fontSize: '2.1rem', fontWeight: 900, fontFamily: "'Space Grotesk',sans-serif", background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, minWidth: 52 }}>
                      {num}
                    </span>
                    <div>
                      <p style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.92rem' }}>{label}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.76rem', marginTop: 2 }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
