import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-[#64ffda] mb-5 font-mono">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">
            Idelkadi Radia.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-8">
            I build things for the web.
          </h2>
          <p className="text-[#8892b0] max-w-xl mb-12 text-lg">
            I'm a full-stack developer specializing in Java and Angular. As a final-year trainee at YouCode, I am dedicated to mastering the art of creating accessible, human-centered web applications.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/Radiaidel" className="text-[#64ffda] hover:text-[#ccd6f6] transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/radia-idelkadi" className="text-[#64ffda] hover:text-[#ccd6f6] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:idelkadiradia@gmail.com" className="text-[#64ffda] hover:text-[#ccd6f6] transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative group">
          <div className="relative z-10">
            <img
              src={`${import.meta.env.BASE_URL}/profile.jpg`}
              alt="Radia Idelkadi"
              className="rounded-lg object-cover w-full h-full hover:grayscale transition-all"
            />
          </div>
          <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
        </div>
      </div>
    </section>
  );
}
