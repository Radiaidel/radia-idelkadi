import React, { useState } from 'react';
import { Home, User, Briefcase, Code, Award, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { category: 'Front-end', technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Bootstrap/Tailwind CSS'] },
    { category: 'Back-end (Java/Spring)', technologies: ['Java 8+', 'Spring Framework', 'Jakarta EE'] },
    { category: 'Databases', technologies: ['MySQL', 'PostgreSQL', 'SQL Server', 'JPA/Hibernate'] },
    { category: 'Tools', technologies: ['Git', 'Docker', 'Jenkins', 'Postman', 'Swagger'] },
    { category: 'Testing', technologies: ['JUnit', 'Mockito'] }
  ];

  const projects = [
    {
      name: 'Dataware',
      description: 'Web Application for Project Management',
      technologies: ['Java 8', 'Servlets', 'JSP', 'MySQL', 'Bootstrap', 'Maven'],
      githubLink: 'https://github.com/Radiaidel/dataware-java'
    },
    {
      name: 'EduConnect',
      description: 'RESTful API for Training Centers',
      technologies: ['Spring Boot', 'PostgreSQL', 'Unit Testing'],
      githubLink: 'https://github.com/Radiaidel/EduConnect'
    }
  ];

  const experiences = [
    {
      company: 'VisionOrientation',
      period: 'Avril-Juillet 2024',
      role: 'Stage de fin d\'année',
      description: 'Contribution à la phase de conception en utilisant UML et au maquettage avec Figma pour un site d\'orientation.'
    },
    {
      company: 'ValaBleu',
      period: 'Juillet-Aout 2022',
      role: 'Stage d\'initiation',
      description: 'Conception et développement d\'un site web de Location de motos en utilisant WordPress.'
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="text-center p-8">
            <img 
              src={`${import.meta.env.BASE_URL}profile.jpg`} 
              alt="Radia Idelkadi" 
              className="mx-auto rounded-full w-48 h-48 object-cover mb-4 border-4 border-blue-500"
            />
            <h1 className="text-3xl font-bold text-blue-600">Radia Idelkadi</h1>
            <p className="text-xl text-gray-600">Développeur Java - Angular</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="mailto:idelkadiradia@gmail.com" className="text-blue-500 hover:text-blue-700">
                idelkadiradia@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/radia-idelkadi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                LinkedIn
              </a>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">À propos de moi</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Formation</h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Développeur JAVA Full-stack</strong><br />
                    YouCode (UM6P), SAFI (2023-2025)
                  </li>
                  <li>
                    <strong>DUT Génie Informatique</strong><br />
                    Ecole Supérieure de Technologie d'Agadir (2021-2023)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Langues</h3>
                <ul>
                  <li>Arabe: Langue maternelle</li>
                  <li>Français: Intermédiaire avancé</li>
                  <li>Anglais: Intermédiaire avancé</li>
                </ul>
              </div>
            </div>
          </div>
        );
      // ... (reste du code inchangé)
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="flex justify-around py-3">
          {[
            { section: 'home', icon: Home },
            { section: 'about', icon: User },
            { section: 'skills', icon: Code },
            { section: 'projects', icon: Briefcase },
            { section: 'experience', icon: Award },
            { section: 'contact', icon: MessageCircle }
          ].map(({ section, icon: Icon }) => (
            <button 
              key={section}
              onClick={() => setActiveSection(section)}
              className={`
                flex flex-col items-center 
                ${activeSection === section ? 'text-blue-600' : 'text-gray-500'}
                hover:text-blue-600 transition duration-300
              `}
            >
              <Icon size={24} />
              <span className="text-xs capitalize">{section}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-8 pb-20">
        {renderSection()}
      </main>
    </div>
  );
};

export default Portfolio;