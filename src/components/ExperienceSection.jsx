import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 0,
    role: 'Technical-Functional Consultant',
    type: 'Full-Time (CDI) & Internship',
    company: 'Cegedim',
    location: 'Rabat, Morocco',
    period: 'April 2025 – Present',
    emoji: '⚡',
    color: '#7c3aed',
    badgeClass: 'badge-violet',
    highlights: [
      'Analysis & Compliance: Conducted studies of existing systems and analyzed requirements/specifications to identify gaps and adapt solutions for the electronic invoicing reform in France.',
      'Configuration & Data Flows: Implemented technical solutions through internal tool configuration, alongside data flow processing and adaptation using XML and XSLT.',
      'Quality, Debugging & VSR Support: Investigated errors during testing/integration phases and managed post-go live (VSR) debugging down to root cause identification and patch delivery.',
      'Client Relations & Coordination: Facilitated client meetings to explain technical aspects, provided functional guidance, tracked requirements, and acted as a liaison with technical teams.',
      'Agility & Tools: Rapidly learned and mastered proprietary internal tools for efficient configuration rollouts.',
    ],
    stack: ['Electronic Invoicing', 'EDI', 'XML', 'XSLT', 'UBL 1.6 / 2.1', 'EN 16931', 'Gap Analysis', 'VSR Debugging', 'JIRA'],
  },
  {
    id: 1,
    role: 'Technical-Functional Intern',
    type: 'Internship',
    company: 'VisionOrientation',
    location: 'Agadir, Morocco',
    period: 'April 2024 – July 2024',
    emoji: '🎯',
    color: '#06b6d4',
    badgeClass: 'badge-cyan',
    highlights: [
      'Participated in the design of an academic and professional orientation platform.',
      'Analyzed and modeled functional requirements using UML.',
      'Created interactive wireframes and UI mockups with Figma.',
    ],
    stack: ['UML', 'Figma', 'Requirements Analysis', 'Wireframing', 'Functional Modeling'],
  },
  {
    id: 2,
    role: 'Full-Stack Developer Intern',
    type: 'Internship',
    company: 'ValaBleu',
    location: 'Agadir, Morocco',
    period: 'April 2023 – June 2023',
    emoji: '🚀',
    color: '#ec4899',
    badgeClass: 'badge-pink',
    highlights: [
      'Designed and developed a crowdfunding platform using the Laravel framework.',
      'Actively participated in requirements analysis and system design.',
      'Implemented full-stack features including database architecture and backend business logic.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Full-Stack Dev', 'Requirements Analysis'],
  },
  {
    id: 3,
    role: 'Web Developer Intern',
    type: 'Internship',
    company: 'ValaBleu',
    location: 'Taroudant, Morocco',
    period: 'July 2022 – August 2022',
    emoji: '🏍️',
    color: '#14b8a6',
    badgeClass: 'badge-green',
    highlights: [
      'Designed and deployed a motorcycle rental and reservation website utilizing the WordPress CMS.',
      'Configured custom themes, booking workflows, and responsive layouts.',
    ],
    stack: ['WordPress', 'CMS', 'PHP', 'MySQL', 'Web Development'],
  },
];

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" style={{ padding: '100px 28px', position: 'relative' }}>
      <div aria-hidden="true" style={{ position:'absolute', left:-80, bottom:'10%', width:360, height:360, borderRadius:'50%', background:'radial-gradient(circle,rgba(6,182,212,0.1) 0%,transparent 70%)', filter:'blur(80px)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p className="section-number">03 — EXPERIENCE</p>
          <h2 className="section-title">
            Professional{' '}
            <span style={{ background:'var(--grad-primary)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Journey
            </span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ position:'absolute', left:24, top:8, bottom:8, width:2, background:'linear-gradient(to bottom,#7c3aed,#06b6d4,rgba(20,184,166,0.2))', borderRadius:1 }} />

          <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.id}
                className="reveal"
                data-delay={i * 120}
                style={{ paddingLeft: 60, position: 'relative' }}
              >
                {/* Timeline dot */}
                <div style={{
                  position:'absolute', left:16, top:28,
                  width:18, height:18, borderRadius:'50%',
                  background: exp.color,
                  border:`3px solid var(--bg-base)`,
                  boxShadow:`0 0 16px ${exp.color}80`,
                  transition:'transform 0.25s',
                  transform: expanded === exp.id ? 'scale(1.35)' : 'scale(1)',
                  zIndex: 1,
                }} />

                {/* Card */}
                <div style={{
                  borderRadius:22, overflow:'hidden',
                  border:`1px solid ${expanded === exp.id ? `${exp.color}40` : 'var(--border)'}`,
                  background: expanded === exp.id ? `${exp.color}08` : 'var(--bg-glass)',
                  backdropFilter:'blur(16px)',
                  transition:'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                  boxShadow: expanded === exp.id ? `0 12px 40px ${exp.color}20` : 'none',
                }}>
                  {/* Header Row — always visible */}
                  <button
                    onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                    style={{ width:'100%', display:'flex', alignItems:'center', gap:16, padding:'22px 26px', background:'none', border:'none', cursor:'pointer', textAlign:'left' }}
                  >
                    {/* Emoji icon */}
                    <div style={{ fontSize:'1.7rem', width:46, height:46, borderRadius:12, background:`${exp.color}18`, border:`1px solid ${exp.color}30`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      {exp.emoji}
                    </div>

                    {/* Info */}
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:10, marginBottom:6 }}>
                        <h3 style={{ fontSize:'1.08rem', fontWeight:700, color:'var(--text-primary)', fontFamily:"'Space Grotesk',sans-serif" }}>
                          {exp.role}
                        </h3>
                        <span className={`badge ${exp.badgeClass}`}>
                          <Briefcase size={10} /> {exp.type}
                        </span>
                      </div>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:14 }}>
                        <span style={{ fontSize:'0.88rem', fontWeight:600, color:exp.color }}>{exp.company}</span>
                        <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:'0.76rem', color:'var(--text-muted)' }}><MapPin size={11}/>{exp.location}</span>
                        <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:'0.76rem', color:'var(--text-muted)' }}><Calendar size={11}/>{exp.period}</span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <div style={{ color: expanded === exp.id ? exp.color : 'var(--text-muted)', flexShrink:0, transition:'color 0.2s' }}>
                      {expanded === exp.id ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                    </div>
                  </button>

                  {/* Expanded body */}
                  {expanded === exp.id && (
                    <div style={{ padding:'0 26px 26px' }}>
                      <div style={{ height:1, background:`linear-gradient(to right,${exp.color}40,transparent)`, marginBottom:22 }} />

                      {/* Highlights */}
                      <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:11, marginBottom:22 }}>
                        {exp.highlights.map((h, hi) => (
                          <li key={hi} style={{ display:'flex', gap:12, alignItems:'flex-start', color:'var(--text-secondary)', fontSize:'0.91rem', lineHeight:1.65 }}>
                            <span style={{ width:6, height:6, borderRadius:'50%', background:exp.color, marginTop:8, flexShrink:0, boxShadow:`0 0 6px ${exp.color}60` }} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Stack tags */}
                      <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                        {exp.stack.map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}