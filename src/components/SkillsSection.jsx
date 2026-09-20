import React, { useState } from 'react';
import { FaJava, FaAngular, FaReact, FaGitAlt, FaDocker, FaLinux, FaHtml5, FaCss3Alt, FaDatabase, FaFileCode, FaPhp } from 'react-icons/fa';
import { SiSpring, SiHibernate, SiPostgresql, SiMysql, SiMongodb, SiJavascript, SiTypescript, SiTailwindcss, SiJira, SiGithub, SiPostman, SiIntellijidea, SiSwagger, SiXml, SiLaravel } from 'react-icons/si';

const CATS = [
  {
    id: 'tech-func', label: 'Technical-Functional',
    color: '#7c3aed', glow: 'rgba(124,58,237,0.18)', border: 'rgba(124,58,237,0.3)',
    skills: [
      { icon: <FaFileCode />,  name: 'Gap Analysis', color: '#a78bfa' },
      { icon: <FaFileCode />,  name: 'DO Specs',     color: '#c084fc' },
      { icon: <FaFileCode />,  name: 'System Config',color: '#818cf8' },
      { icon: <FaFileCode />,  name: 'Client Support',color: '#38bdf8' },
      { icon: <FaFileCode />,  name: 'Facilitation', color: '#34d399' },
      { icon: <FaFileCode />,  name: 'Evolutions',   color: '#fbbf24' },
    ],
  },
  {
    id: 'edi-xml', label: 'Electronic Invoicing & EDI',
    color: '#06b6d4', glow: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.3)',
    skills: [
      { icon: <SiXml />,       name: 'XML / XSLT',  color: '#67e8f9' },
      { icon: <FaFileCode />,  name: 'EDI Flows',   color: '#38bdf8' },
      { icon: <FaFileCode />,  name: 'UBL 1.6 / 2.1',color: '#818cf8' },
      { icon: <FaFileCode />,  name: 'EN 16931',    color: '#f472b6' },
      { icon: <FaFileCode />,  name: 'E-Invoicing', color: '#34d399' },
      { icon: <FaFileCode />,  name: 'Data Control', color: '#fbbf24' },
    ],
  },
  {
    id: 'backend', label: 'Backend (Java)',
    color: '#f97316', glow: 'rgba(249,115,22,0.15)', border: 'rgba(249,115,22,0.3)',
    skills: [
      { icon: <FaJava />,      name: 'Java 8+',      color: '#f97316' },
      { icon: <SiSpring />,    name: 'Spring Boot', color: '#86efac' },
      { icon: <SiSpring />,    name: 'Spring Data', color: '#4ade80' },
      { icon: <SiSpring />,    name: 'Spring Sec',  color: '#a78bfa' },
      { icon: <SiHibernate />, name: 'Hibernate',   color: '#c084fc' },
      { icon: <FaDatabase />,  name: 'REST API',    color: '#38bdf8' },
      { icon: <FaFileCode />,  name: 'Maven',       color: '#f87171' },
    ],
  },
  {
    id: 'frontend', label: 'Frontend',
    color: '#ec4899', glow: 'rgba(236,72,153,0.15)', border: 'rgba(236,72,153,0.3)',
    skills: [
      { icon: <FaAngular />,     name: 'Angular',    color: '#f87171' },
      { icon: <SiTypescript />,  name: 'TypeScript', color: '#60a5fa' },
      { icon: <SiJavascript />,  name: 'JS (ES6+)',  color: '#fbbf24' },
      { icon: <FaHtml5 />,       name: 'HTML5/CSS3', color: '#f97316' },
      { icon: <SiTailwindcss />, name: 'Tailwind',   color: '#67e8f9' },
      { icon: <FaFileCode />,    name: 'RxJS / NgRx',color: '#c084fc' },
    ],
  },
  {
    id: 'database', label: 'Databases',
    color: '#10b981', glow: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.3)',
    skills: [
      { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#60a5fa' },
      { icon: <SiMysql />,      name: 'MySQL',      color: '#f97316' },
      { icon: <FaDatabase />,   name: 'SQL Server', color: '#f87171' },
      { icon: <SiMongodb />,    name: 'MongoDB',    color: '#86efac' },
      { icon: <FaDatabase />,   name: 'MariaDB/H2', color: '#38bdf8' },
    ],
  },
  {
    id: 'tools', label: 'Tools, Testing & Methods',
    color: '#3b82f6', glow: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.3)',
    skills: [
      { icon: <FaGitAlt />,       name: 'Git / GitHub',color: '#f87171' },
      { icon: <SiJira />,         name: 'JIRA',       color: '#60a5fa' },
      { icon: <SiPostman />,      name: 'Postman',    color: '#f97316' },
      { icon: <SiSwagger />,      name: 'Swagger',    color: '#86efac' },
      { icon: <FaDocker />,       name: 'Docker',     color: '#67e8f9' },
      { icon: <FaFileCode />,     name: 'UML / Figma',color: '#c084fc' },
      { icon: <FaFileCode />,     name: 'JUnit/Mockito',color: '#34d399' },
    ],
  },
];

export function SkillsSection() {
  const [active, setActive] = useState(null);
  const displayed = active ? CATS.filter(c => c.id === active) : CATS;

  return (
    <section id="skills" style={{ padding: '100px 28px', position: 'relative' }}>
      <div aria-hidden="true" style={{ position:'absolute', right:-100, top:'10%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 70%)', filter:'blur(80px)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 60 }}>
          <p className="section-number">02 — SKILLS</p>
          <h2 className="section-title">
            Technical{' '}
            <span style={{ background:'var(--grad-primary)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Expertise
            </span>
          </h2>
          <div className="section-divider" />
          <p style={{ color:'var(--text-muted)', marginTop:14, fontSize:'0.98rem', maxWidth:560 }}>
            A blend of technical depth and functional breadth — from XML pipelines to modern web frameworks.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal" style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom:44 }}>
          {[{ id: null, label: 'All Skills' }, ...CATS.map(c => ({ id: c.id, label: c.label, color: c.color, border: c.border }))].map(tab => (
            <button
              key={tab.id ?? 'all'}
              onClick={() => setActive(active === tab.id ? (tab.id ? null : null) : tab.id)}
              style={{
                padding:'8px 20px', borderRadius:10, cursor:'pointer',
                fontFamily:"'JetBrains Mono',monospace", fontSize:'0.8rem', fontWeight:600,
                letterSpacing:'0.04em', transition:'all 0.2s ease',
                border: `1px solid ${active === tab.id ? (tab.border || 'rgba(124,58,237,0.45)') : 'var(--border)'}`,
                background: active === tab.id ? `${tab.color || '#7c3aed'}18` : 'var(--bg-glass)',
                color: active === tab.id ? (tab.color || '#a78bfa') : 'var(--text-muted)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:22 }}>
          {displayed.map((cat, ci) => (
            <div key={cat.id} className="reveal glass-card" data-delay={ci * 80} style={{ padding: 26 }}>
              {/* Category header */}
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:22 }}>
                <div style={{ width:34, height:34, borderRadius:10, background:`${cat.color}1a`, border:`1px solid ${cat.border}`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <div style={{ width:11, height:11, borderRadius:'50%', background:cat.color, boxShadow:`0 0 10px ${cat.color}80` }} />
                </div>
                <h3 style={{ fontSize:'0.98rem', fontWeight:700, color:cat.color, fontFamily:"'Space Grotesk',sans-serif" }}>
                  {cat.label}
                </h3>
                <span style={{ marginLeft:'auto', fontSize:'0.68rem', fontFamily:"'JetBrains Mono',monospace", color:'var(--text-faint)', padding:'2px 8px', borderRadius:999, background:'var(--bg-glass)', border:'1px solid var(--border)' }}>
                  {cat.skills.length} skills
                </span>
              </div>

              {/* Icon grid */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(76px,1fr))', gap:9 }}>
                {cat.skills.map(({ icon, name, color }) => (
                  <div key={name} className="skill-icon-card" title={name}>
                    <span className="icon-wrap" style={{ color, fontSize:'2.1rem' }}>{icon}</span>
                    <span style={{ fontSize:'0.65rem', color:'var(--text-muted)', fontFamily:"'JetBrains Mono',monospace", lineHeight:1.3, textAlign:'center' }}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra knowledge tags */}
        <div className="reveal" data-delay="300" style={{ marginTop: 44 }}>
          <p style={{ fontSize:'0.7rem', fontFamily:"'JetBrains Mono',monospace", color:'var(--text-faint)', marginBottom:14, textTransform:'uppercase', letterSpacing:'0.12em' }}>
            Additional Knowledge
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {['UML / MERISE','Clean Code','SOLID Principles','Design Patterns','Scrum / Agile','Git Flow','MVC Architecture','EN 16931 Standard','EDI Workflows','API Documentation','Microservices Concepts'].map(tag => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
