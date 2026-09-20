import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const NAV = [
  { id:'about',      label:'About'      },
  { id:'skills',     label:'Skills'     },
  { id:'experience', label:'Experience' },
  { id:'education',  label:'Education'  },
  { id:'projects',   label:'Projects'   },
  { id:'contact',    label:'Contact'    },
];

export function Footer() {
  return (
    <footer style={{ borderTop:'1px solid var(--border)', background:'var(--nav-bg)', backdropFilter:'blur(16px)', padding:'48px 28px 32px', position:'relative' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>

        {/* Top Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:40, marginBottom:40 }}>
          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:36, height:36, borderRadius:10, background:'var(--grad-primary)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem', fontWeight:800, color:'white', fontFamily:"'Space Grotesk',sans-serif" }}>
                R.
              </div>
              <span style={{ fontSize:'0.94rem', fontWeight:700, color:'var(--text-primary)', fontFamily:"'Space Grotesk',sans-serif" }}>
                Radia Idelkadi
              </span>
            </div>
            <p style={{ fontSize:'0.83rem', color:'var(--text-muted)', lineHeight:1.68, maxWidth:210 }}>
              Technical-Functional Consultant & Full-Stack Java/Angular Engineer.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize:'0.68rem', fontFamily:"'JetBrains Mono',monospace", color:'var(--text-faint)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:14 }}>
              Navigation
            </p>
            <nav style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:7 }}>
              {NAV.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })}
                  style={{ background:'none', border:'none', cursor:'pointer', color:'var(--text-muted)', fontSize:'0.84rem', textAlign:'left', padding:'3px 0', transition:'color 0.2s', fontFamily:'inherit' }}
                  onMouseEnter={e => e.currentTarget.style.color='var(--violet)'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p style={{ fontSize:'0.68rem', fontFamily:"'JetBrains Mono',monospace", color:'var(--text-faint)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:14 }}>
              Connect
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:9 }}>
              {[
                { href:'mailto:idelkadiradia@gmail.com',         icon:<Mail size={13}/>, label:'idelkadiradia@gmail.com'     },
                { href:'https://github.com/Radiaidel',           icon:<Github size={13}/>, label:'github.com/Radiaidel'      },
                { href:'https://linkedin.com/in/radia-idelkadi', icon:<Linkedin size={13}/>, label:'linkedin.com/in/radia-idelkadi' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  style={{ display:'flex', alignItems:'center', gap:7, color:'var(--text-muted)', textDecoration:'none', fontSize:'0.81rem', transition:'color 0.2s', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}
                  onMouseEnter={e => e.currentTarget.style.color='var(--violet)'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}
                >
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height:1, background:'linear-gradient(to right,transparent,rgba(124,58,237,0.28),transparent)', marginBottom:26 }} />

        {/* Bottom row */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:14 }}>
          <p style={{ fontSize:'0.78rem', color:'var(--text-faint)', display:'flex', alignItems:'center', gap:6 }}>
            © {new Date().getFullYear()} Radia Idelkadi — Built with{' '}
            <Heart size={12} style={{ color:'#ec4899', fill:'#ec4899' }} />
            {' '}React & Tailwind CSS
          </p>
          <button
            onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            style={{ display:'flex', alignItems:'center', gap:6, padding:'7px 16px', borderRadius:10, border:'1px solid var(--border)', background:'var(--bg-glass)', color:'var(--text-muted)', cursor:'pointer', fontSize:'0.76rem', fontFamily:"'JetBrains Mono',monospace", backdropFilter:'blur(12px)', transition:'all 0.22s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(124,58,237,0.4)'; e.currentTarget.style.color='var(--violet)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-muted)'; }}
          >
            <ArrowUp size={13}/> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}