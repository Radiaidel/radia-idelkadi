import React, { useState } from 'react';
import { Github, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 0, featured: true,
    title: 'Neovesta – Residence Management Application',
    subtitle: 'Full-Stack Java / Angular Academic Project',
    description: 'A comprehensive application for managing residents, contracts, services, and reservations. Built with a Spring Boot backend exposing REST APIs coupled with a dynamic Angular frontend.',
    emoji: '🏢',
    color: '#7c3aed',
    border: 'rgba(124,58,237,0.3)',
    tagColor: '#a78bfa',
    tagBg: 'rgba(124,58,237,0.12)',
    impact: ['Resident & contract management', 'Spring Boot REST APIs', 'Dynamic Angular interface'],
    stack: ['Java', 'Spring Boot', 'Angular', 'REST API', 'Spring Data JPA'],
    github: 'https://github.com/Radiaidel',
  },
  {
    id: 1, featured: true,
    title: 'EcoCycle – Recycling Management Application',
    subtitle: 'Full-Stack Frontend Academic Project',
    description: 'A responsive Single Page Application (SPA) for managing recycling requests, collection tracking, and a points reward system. Implements centralized state management with NgRx.',
    emoji: '♻️',
    color: '#06b6d4',
    border: 'rgba(6,182,212,0.3)',
    tagColor: '#67e8f9',
    tagBg: 'rgba(6,182,212,0.1)',
    impact: ['Centralized NgRx state management', 'Recycling & points tracking', 'Responsive Tailwind CSS SPA'],
    stack: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'Tailwind CSS'],
    github: 'https://github.com/Radiaidel',
  },
  {
    id: 2, featured: true,
    title: 'Academic & Professional Orientation Platform',
    subtitle: 'Technical-Functional Internship Project (VisionOrientation)',
    description: 'Design and functional modeling of an orientation platform for students and professionals. Analyzed requirements using UML and crafted interactive mockups and wireframes in Figma.',
    emoji: '🎓',
    color: '#ec4899',
    border: 'rgba(236,72,153,0.3)',
    tagColor: '#f472b6',
    tagBg: 'rgba(236,72,153,0.1)',
    impact: ['UML Requirement Modeling', 'Interactive Figma Wireframes', 'Functional Specifications'],
    stack: ['UML', 'Figma', 'Requirements Analysis', 'UI Mockups'],
    github: 'https://github.com/Radiaidel',
  },
  {
    id: 3, featured: false,
    title: 'Crowdfunding Platform',
    subtitle: 'Full-Stack Developer Internship Project (ValaBleu)',
    description: 'Designed and developed a web-based crowdfunding platform using the Laravel framework, covering requirement analysis, system architecture, database modeling, and feature implementation.',
    emoji: '🚀',
    color: '#14b8a6',
    border: 'rgba(20,184,166,0.3)',
    tagColor: '#5eead4',
    tagBg: 'rgba(20,184,166,0.1)',
    stack: ['Laravel', 'PHP', 'MySQL', 'Full-Stack Dev'],
    github: 'https://github.com/Radiaidel',
  },
  {
    id: 4, featured: false,
    title: 'Motorcycle Rental & Reservation Website',
    subtitle: 'Web Developer Internship Project (ValaBleu)',
    description: 'Designed and deployed a motorcycle rental and reservation portal using the WordPress CMS, featuring customized reservation workflows and responsive layouts.',
    emoji: '🏍️',
    color: '#f97316',
    border: 'rgba(249,115,22,0.3)',
    tagColor: '#fdba74',
    tagBg: 'rgba(249,115,22,0.1)',
    stack: ['WordPress', 'CMS', 'PHP', 'MySQL'],
    github: 'https://github.com/Radiaidel',
  },
];

export function ProjectsSection() {
  const featured = PROJECTS.filter(p => p.featured);
  const others   = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" style={{ padding: '100px 28px', position: 'relative' }}>
      <div aria-hidden="true" style={{ position:'absolute', left:'25%', bottom:'10%', width:380, height:380, borderRadius:'50%', background:'radial-gradient(circle,rgba(124,58,237,0.08) 0%,transparent 70%)', filter:'blur(90px)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p className="section-number">05 — PROJECTS</p>
          <h2 className="section-title">
            Featured{' '}
            <span style={{ background:'var(--grad-accent)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Work
            </span>
          </h2>
          <div className="section-divider-accent" />
          <p style={{ color:'var(--text-muted)', marginTop:16, maxWidth:580, fontSize:'0.98rem', lineHeight:1.7 }}>
            Real-world applications built with clean architecture, best practices, and attention to user experience.
          </p>
        </div>

        {/* Featured Cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))', gap:22, marginBottom:48 }}>
          {featured.map((project, i) => (
            <div
              key={project.id}
              className="reveal project-card"
              data-delay={i * 100}
              style={{ padding: 30 }}
            >
              {/* Top row */}
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
                <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <span style={{ fontSize:'1.9rem', width:50, height:50, borderRadius:14, background:`${project.color}18`, border:`1px solid ${project.border}`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    {project.emoji}
                  </span>
                  <span style={{ fontSize:'0.67rem', fontFamily:"'JetBrains Mono',monospace", color:project.tagColor, background:project.tagBg, border:`1px solid ${project.border}`, padding:'3px 11px', borderRadius:999, fontWeight:600 }}>
                    {project.subtitle}
                  </span>
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ color:'var(--text-muted)', display:'flex', padding:8, borderRadius:8, border:'1px solid var(--border)', transition:'all 0.2s', textDecoration:'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color=project.color; e.currentTarget.style.borderColor=project.border; }}
                  onMouseLeave={e => { e.currentTarget.style.color='var(--text-muted)'; e.currentTarget.style.borderColor='var(--border)'; }}
                >
                  <Github size={15} />
                </a>
              </div>

              <h3 style={{ fontSize:'1.2rem', fontWeight:800, color:'var(--text-primary)', fontFamily:"'Space Grotesk',sans-serif", marginBottom:10, lineHeight:1.3 }}>
                {project.title}
              </h3>
              <p style={{ color:'var(--text-muted)', fontSize:'0.88rem', lineHeight:1.72, marginBottom:18 }}>
                {project.description}
              </p>

              {/* Impact */}
              <div style={{ display:'flex', flexDirection:'column', gap:6, marginBottom:18 }}>
                {project.impact.map(imp => (
                  <div key={imp} style={{ display:'flex', alignItems:'center', gap:8, fontSize:'0.82rem', color:'var(--text-secondary)' }}>
                    <span style={{ width:5, height:5, borderRadius:'50%', background:project.color, flexShrink:0 }} />
                    {imp}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {project.stack.map(tag => (
                  <span key={tag} style={{ fontSize:'0.7rem', fontFamily:"'JetBrains Mono',monospace", padding:'3px 10px', borderRadius:999, color:project.tagColor, background:project.tagBg, border:`1px solid ${project.border}` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <p style={{ fontSize:'0.78rem', fontFamily:"'JetBrains Mono',monospace", color:'var(--text-faint)', marginBottom:22, display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ color:'var(--border)' }}>—</span> More Projects
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:16 }}>
            {others.map((p, i) => (
              <div key={p.id} className="reveal glass-card" data-delay={i * 80} style={{ padding:22 }}>
                <div style={{ display:'flex', gap:12, alignItems:'flex-start', marginBottom:12 }}>
                  <span style={{ fontSize:'1.5rem', flexShrink:0 }}>{p.emoji}</span>
                  <div style={{ flex:1 }}>
                    <h4 style={{ fontSize:'0.93rem', fontWeight:700, color:'var(--text-primary)', fontFamily:"'Space Grotesk',sans-serif", marginBottom:3 }}>{p.title}</h4>
                    <p style={{ fontSize:'0.75rem', color:'var(--text-muted)' }}>{p.subtitle}</p>
                  </div>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color:'var(--text-muted)', display:'flex', transition:'color 0.2s', textDecoration:'none', flexShrink:0 }}
                    onMouseEnter={e => e.currentTarget.style.color=p.color}
                    onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}
                  ><Github size={15}/></a>
                </div>
                <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', lineHeight:1.6, marginBottom:12 }}>{p.description.slice(0,90)}…</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                  {p.stack.slice(0,4).map(tag => (
                    <span key={tag} style={{ fontSize:'0.66rem', fontFamily:"'JetBrains Mono',monospace", padding:'2px 9px', borderRadius:999, color:'var(--text-secondary)', background:'var(--bg-glass)', border:'1px solid var(--border)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="reveal" style={{ textAlign:'center' }}>
          <a
            href="https://github.com/Radiaidel" target="_blank" rel="noopener noreferrer"
            style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'13px 30px', borderRadius:14, border:'1px solid var(--border)', background:'var(--bg-glass)', color:'var(--text-secondary)', textDecoration:'none', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.84rem', fontWeight:600, backdropFilter:'blur(14px)', transition:'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(124,58,237,0.45)'; e.currentTarget.style.color='var(--violet)'; e.currentTarget.style.background='rgba(124,58,237,0.08)'; e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(124,58,237,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-secondary)'; e.currentTarget.style.background='var(--bg-glass)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
          >
            <Github size={17}/> See All Projects on GitHub <ArrowRight size={15}/>
          </a>
        </div>
      </div>
    </section>
  );
}