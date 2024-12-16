import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export function NavBar() {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];

  return (
      <nav className="fixed top-0 z-50 w-full bg-[#0a192f]/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-[#64ffda]">R.</a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                >
                  <span className="text-[#64ffda] mr-1">0{index + 1}.</span>
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#64ffda]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#112240] p-4">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                className="block py-2 text-[#8892b0] hover:text-[#64ffda] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-[#64ffda] mr-1">0{index + 1}.</span>
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
  );
}