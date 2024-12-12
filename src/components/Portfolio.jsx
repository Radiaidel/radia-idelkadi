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
              src="/api/placeholder/200/200" 
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
      case 'skills':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Compétences Techniques</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{skillGroup.category}</h3>
                  <ul className="space-y-1">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="bg-blue-50 px-2 py-1 rounded text-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Projets</h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Voir sur GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Expériences Professionnelles</h2>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-gray-600 mb-2">{exp.period}</p>
                  <p className="font-medium">{exp.role}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nom" 
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea 
                  placeholder="Votre message" 
                  rows="4" 
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button 
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        );
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