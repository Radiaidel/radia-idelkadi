import React, { useState } from 'react';
import { Mail, Github, Linkedin, Phone, MapPin, Send, MessageSquare, FileDown } from 'lucide-react';

const CONTACTS = [
  { icon: <Mail size={21}/>,     label:'Email',    value:'idelkadiradia@gmail.com',           href:'mailto:idelkadiradia@gmail.com',            color:'#ec4899', bg:'rgba(236,72,153,0.1)',  border:'rgba(236,72,153,0.3)', desc:'Best way to reach me'   },
  { icon: <Phone size={21}/>,    label:'Phone',    value:'+212 6 43 56 50 89',                href:'tel:+212643565089',                         color:'#86efac', bg:'rgba(134,239,172,0.1)', border:'rgba(134,239,172,0.3)',desc:'Direct line'             },
  { icon: <Linkedin size={21}/>, label:'LinkedIn', value:'linkedin.com/in/radia-idelkadi',     href:'https://linkedin.com/in/radia-idelkadi',    color:'#60a5fa', bg:'rgba(96,165,250,0.1)',  border:'rgba(96,165,250,0.3)', desc:'Connect professionally'  },
  { icon: <Github size={21}/>,   label:'GitHub',   value:'github.com/Radiaidel',              href:'https://github.com/Radiaidel',             color:'#a78bfa', bg:'rgba(167,139,250,0.1)', border:'rgba(167,139,250,0.3)',desc:'Browse my repositories'    },
  { icon: <MapPin size={21}/>,   label:'Location', value:'Rabat, Morocco',                    href:'https://maps.google.com/?q=Rabat+Morocco', color:'#fdba74', bg:'rgba(251,191,36,0.1)',  border:'rgba(251,191,36,0.3)', desc:'Based in Rabat'         },
];

export function ContactSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="contact" style={{ padding: '100px 28px', position: 'relative' }}>
      <div aria-hidden="true" style={{ position:'absolute', left:'50%', top:'20%', transform:'translateX(-50%)', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 65%)', filter:'blur(90px)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign:'center', marginBottom:72 }}>
          <p className="section-number" style={{ textAlign:'center' }}>06 — CONTACT</p>
          <h2 className="section-title" style={{ textAlign:'center' }}>
            Let's{' '}
            <span style={{ background:'linear-gradient(135deg,#7c3aed,#ec4899)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Connect
            </span>
          </h2>
          <div style={{ width:56, height:4, background:'linear-gradient(135deg,#7c3aed,#ec4899)', borderRadius:2, margin:'14px auto 0' }} />
          <p style={{ color:'var(--text-muted)', marginTop:22, fontSize:'1.05rem', maxWidth:520, margin:'22px auto 0', lineHeight:1.78 }}>
            Whether it's a collaboration, job opportunity, or just a tech conversation — my inbox is always open!
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:48, alignItems:'start' }}>

          {/* Contact list */}
          <div>
            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {CONTACTS.map((c, i) => (
                <a
                  key={c.label} href={c.href}
                  target={c.href.startsWith('mailto') || c.href.startsWith('tel') ? undefined : '_blank'} rel="noopener noreferrer"
                  className="reveal contact-link"
                  data-delay={i * 75}
                  onMouseEnter={() => setHovered(c.label)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display:'flex', alignItems:'center', gap:16, padding:'17px 20px',
                    borderRadius:16, textDecoration:'none',
                    border:`1px solid ${hovered===c.label ? c.border : 'var(--border)'}`,
                    background: hovered===c.label ? c.bg : 'var(--bg-glass)',
                    backdropFilter:'blur(16px)',
                    transition:'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                    transform: hovered===c.label ? 'translateX(8px)' : 'translateX(0)',
                    boxShadow: hovered===c.label ? `0 8px 32px ${c.bg}` : 'none',
                  }}
                >
                  <div style={{ width:46, height:46, borderRadius:12, background:c.bg, border:`1px solid ${c.border}`, display:'flex', alignItems:'center', justifyContent:'center', color:c.color, flexShrink:0, transition:'transform 0.2s', transform:hovered===c.label?'scale(1.1)':'scale(1)' }}>
                    {c.icon}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <p style={{ fontSize:'0.7rem', color:'var(--text-faint)', marginBottom:2, fontFamily:"'JetBrains Mono',monospace" }}>{c.label}</p>
                    <p style={{ fontSize:'0.9rem', fontWeight:600, color: hovered===c.label ? c.color : 'var(--text-primary)', transition:'color 0.2s', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{c.value}</p>
                    <p style={{ fontSize:'0.72rem', color:'var(--text-faint)', marginTop:2 }}>{c.desc}</p>
                  </div>
                  <span style={{ color:'var(--text-faint)', transition:'transform 0.2s', transform:hovered===c.label?'translateX(4px)':'translateX(0)' }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA panel */}
          <div className="reveal" data-delay="200">
            <div style={{ padding:38, borderRadius:24, border:'1px solid rgba(124,58,237,0.28)', background:'linear-gradient(135deg,rgba(124,58,237,0.1),rgba(6,182,212,0.06))', backdropFilter:'blur(20px)', marginBottom:20, textAlign:'center' }}>
              <div style={{ width:62, height:62, borderRadius:18, background:'var(--grad-primary)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 22px', boxShadow:'0 0 40px rgba(124,58,237,0.4)' }}>
                <MessageSquare size={26} style={{ color:'white' }} />
              </div>
              <h3 style={{ fontSize:'1.35rem', fontWeight:800, color:'var(--text-primary)', fontFamily:"'Space Grotesk',sans-serif", marginBottom:10 }}>
                Open to Opportunities
              </h3>
              <p style={{ fontSize:'0.93rem', color:'var(--text-muted)', lineHeight:1.72, marginBottom:26 }}>
                I'm actively seeking full-time roles in Full-Stack Java/Angular development, technical consulting, or EDI/XML data engineering.
              </p>
              <a href="mailto:idelkadiradia@gmail.com" className="btn-primary" style={{ display:'inline-flex', alignItems:'center', gap:8, textDecoration:'none', width:'100%', justifyContent:'center', marginBottom:12 }}>
                <Send size={15}/> Send me an Email
              </a>
              <a href={`${import.meta.env.BASE_URL}idelkadi-radia-cv.pdf`} download="Radia_Idelkadi_CV.pdf" className="btn-outline" style={{ display:'inline-flex', alignItems:'center', gap:8, textDecoration:'none', width:'100%', justifyContent:'center' }}>
                <FileDown size={15}/> Download Resume
              </a>
            </div>

            {/* Status indicator */}
            <div style={{ display:'flex', alignItems:'center', gap:12, padding:'13px 18px', borderRadius:12, border:'1px solid rgba(34,197,94,0.22)', background:'rgba(34,197,94,0.06)', backdropFilter:'blur(12px)' }}>
              <span style={{ width:10, height:10, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 10px rgba(34,197,94,0.6)', flexShrink:0, animation:'glowPulse 2s ease-in-out infinite' }} />
              <div>
                <p style={{ fontSize:'0.82rem', fontWeight:600, color:'#86efac' }}>Available for opportunities</p>
                <p style={{ fontSize:'0.7rem', color:'var(--text-faint)', marginTop:1 }}>Response within 24–48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}