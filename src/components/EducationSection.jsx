import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Globe, UserCheck } from 'lucide-react';

const EDUCATION = [
  {
    id: 0,
    degree: 'Java Full-Stack Developer Degree',
    school: 'YouCode (UM6P) – Safi',
    location: 'Safi, Morocco',
    period: '2023 – 2025',
    emoji: '🎓',
    color: '#7c3aed',
    border: 'rgba(124,58,237,0.3)',
    glow: 'rgba(124,58,237,0.1)',
    badge: 'YouCode (UM6P)',
    badgeColor: '#a78bfa',
    highlights: [
      'Full-stack development with Java 8+, Spring Boot, Spring Data JPA, Spring Security, and Angular',
      'Database engineering with PostgreSQL, MySQL, MongoDB, and H2',
      'State management (NgRx/RxJS), RESTful API design, Maven, Git, and Agile/Scrum methodologies',
    ],
  },
  {
    id: 1,
    degree: 'DUT in Computer Engineering',
    school: 'École Supérieure de Technologie (EST) – Agadir',
    location: 'Agadir, Morocco',
    period: '2021 – 2023',
    emoji: '🏛️',
    color: '#06b6d4',
    border: 'rgba(6,182,212,0.3)',
    glow: 'rgba(6,182,212,0.08)',
    badge: 'University Diploma in Technology',
    badgeColor: '#67e8f9',
    highlights: [
      'Core computer science: algorithms, data structures, object-oriented programming',
      'Web development fundamentals (HTML5, CSS3, JavaScript, PHP, Laravel)',
      'Systems & database design with UML, MERISE, MySQL, and SQL Server',
    ],
  },
  {
    id: 2,
    degree: 'High School Diploma in Physical Sciences',
    school: 'Lycée Al Maarifa – Aït Melloul',
    location: 'Aït Melloul, Morocco',
    period: '2020 – 2021',
    emoji: '📜',
    color: '#ec4899',
    border: 'rgba(236,72,153,0.3)',
    glow: 'rgba(236,72,153,0.08)',
    badge: 'Baccalaureate',
    badgeColor: '#f472b6',
    highlights: [
      'Secondary education diploma specializing in Physical Sciences',
      'Strong mathematical, analytical, and logical problem-solving foundation',
    ],
  },
];

const CERTIFICATIONS = [
  { name: 'Virtual Assistant Certificate', org: 'ALX', year: 'Sep – Nov 2024', color: '#f97316', emoji: '📜' },
];

const LANGUAGES = [
  { name: 'Arabic', level: 'Native', flag: '🇲🇦', color: '#7c3aed' },
  { name: 'French', level: 'Fluent', flag: '🇫🇷', color: '#06b6d4' },
  { name: 'English', level: 'Upper-Intermediate', flag: '🇬🇧', color: '#ec4899' },
];

const SOFT_SKILLS = [
  'Rapid Adaptability',
  'Autonomy',
  'Analytical & Investigative Mindset',
  'Strong Interpersonal Skills',
  'Rigor & Attention to Detail',
];

export function EducationSection() {
  return (
    <section id="education" style={{ padding: '100px 28px', position: 'relative' }}>
      <div aria-hidden="true" style={{ position:'absolute', right:-60, top:'20%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(236,72,153,0.1) 0%,transparent 70%)', filter:'blur(70px)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p className="section-number">04 — EDUCATION & CREDENTIALS</p>
          <h2 className="section-title">
            Academic &{' '}
            <span style={{ background:'var(--grad-accent)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Qualifications
            </span>
          </h2>
          <div className="section-divider-accent" />
        </div>

        {/* Education cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(310px,1fr))', gap:22, marginBottom:60 }}>
          {EDUCATION.map((edu, i) => (
            <div
              key={edu.id}
              className="reveal"
              data-delay={i * 140}
              style={{
                borderRadius:24, padding:28, position:'relative', overflow:'hidden',
                border:`1px solid ${edu.border}`,
                background:`linear-gradient(135deg,${edu.glow},var(--bg-glass))`,
                backdropFilter:'blur(20px)',
                transition:'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow=`0 20px 50px ${edu.glow}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
            >
              <div aria-hidden="true" style={{ position:'absolute', top:-30, right:-30, width:100, height:100, borderRadius:'50%', background:`radial-gradient(circle,${edu.color}18,transparent)`, pointerEvents:'none' }} />

              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:18 }}>
                <span style={{ fontSize:'2.2rem' }}>{edu.emoji}</span>
                <span style={{ fontSize:'0.68rem', fontFamily:"'JetBrains Mono',monospace", color:edu.badgeColor, background:`${edu.color}15`, border:`1px solid ${edu.border}`, padding:'3px 12px', borderRadius:999, fontWeight:600 }}>
                  {edu.badge}
                </span>
              </div>

              <h3 style={{ fontSize:'1.08rem', fontWeight:800, color:'var(--text-primary)', fontFamily:"'Space Grotesk',sans-serif", marginBottom:6, lineHeight:1.3 }}>
                {edu.degree}
              </h3>
              <p style={{ fontSize:'0.88rem', fontWeight:600, color:edu.color, marginBottom:12 }}>{edu.school}</p>

              <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:18 }}>
                <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:'0.76rem', color:'var(--text-muted)' }}><Calendar size={11}/>{edu.period}</span>
                <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:'0.76rem', color:'var(--text-muted)' }}><MapPin size={11}/>{edu.location}</span>
              </div>

              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:8 }}>
                {edu.highlights.map((h, hi) => (
                  <li key={hi} style={{ display:'flex', gap:10, alignItems:'flex-start', color:'var(--text-secondary)', fontSize:'0.82rem', lineHeight:1.5 }}>
                    <span style={{ width:5, height:5, borderRadius:'50%', background:edu.color, marginTop:7, flexShrink:0 }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Lower Row: Certifications, Languages, Soft Skills */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:22 }}>
          {/* Certifications */}
          <div className="reveal glass-card" style={{ padding:26 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
              <Award size={18} style={{ color:'var(--orange)' }} />
              <h3 style={{ fontSize:'1.05rem', fontWeight:700, color:'var(--text-primary)', fontFamily:"'Space Grotesk',sans-serif" }}>
                Certification
              </h3>
            </div>
            {CERTIFICATIONS.map(cert => (
              <div key={cert.name} style={{ padding:16, borderRadius:16, border:'1px solid var(--border)', background:'var(--bg-glass)' }}>
                <p style={{ fontSize:'0.9rem', fontWeight:700, color:'var(--text-primary)', marginBottom:4 }}>{cert.name}</p>
                <p style={{ fontSize:'0.78rem', color:'var(--violet)', fontWeight:600 }}>{cert.org}</p>
                <span style={{ display:'inline-block', marginTop:8, padding:'2px 10px', borderRadius:999, fontSize:'0.7rem', fontFamily:"'JetBrains Mono',monospace", color:cert.color, background:`${cert.color}15`, border:`1px solid ${cert.color}30`, fontWeight:600 }}>
                  {cert.year}
                </span>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="reveal glass-card" data-delay="100" style={{ padding:26 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
              <Globe size={18} style={{ color:'var(--cyan)' }} />
              <h3 style={{ fontSize:'1.05rem', fontWeight:700, color:'var(--text-primary)', fontFamily:"'Space Grotesk',sans-serif" }}>
                Languages
              </h3>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {LANGUAGES.map(lang => (
                <div key={lang.name} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 14px', borderRadius:12, border:'1px solid var(--border)', background:'var(--bg-glass)' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <span style={{ fontSize:'1.2rem' }}>{lang.flag}</span>
                    <span style={{ fontSize:'0.88rem', fontWeight:600, color:'var(--text-primary)' }}>{lang.name}</span>
                  </div>
                  <span style={{ fontSize:'0.76rem', fontFamily:"'JetBrains Mono',monospace", color:lang.color, fontWeight:600 }}>{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="reveal glass-card" data-delay="200" style={{ padding:26 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
              <UserCheck size={18} style={{ color:'var(--pink)' }} />
              <h3 style={{ fontSize:'1.05rem', fontWeight:700, color:'var(--text-primary)', fontFamily:"'Space Grotesk',sans-serif" }}>
                Soft Skills
              </h3>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {SOFT_SKILLS.map(skill => (
                <span key={skill} className="tech-tag" style={{ fontSize:'0.78rem', padding:'6px 12px' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}