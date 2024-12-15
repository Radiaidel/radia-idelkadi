import React, { useState } from 'react';
import {
  Github, Linkedin, Mail, Menu, X, TestTube, ExternalLink
} from 'lucide-react';

import { FaReact, FaJava, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill, RiBootstrapFill } from "react-icons/ri";
import { SiSpringboot, SiJira, SiJunit5, SiApachemaven, SiUml, SiSpringsecurity, SiSwagger, SiPostman, SiSpring, SiPostgresql, SiMysql, SiMariadbfoundation, SiMongodb, SiHibernate, SiJenkins } from "react-icons/si";
import { BsFiletypeJava } from "react-icons/bs";
import { GrDocker } from "react-icons/gr";
function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];

  const skillCategories = {
    'Front-end': [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'JavaScript (ES6+)', icon: <DiJavascript /> },
      { name: 'HTML5', icon: <TiHtml5 /> },
      { name: 'CSS3', icon: <IoLogoCss3 /> },
      { name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
      { name: 'Bootstrap', icon: <RiBootstrapFill /> }
    ],
    'Back-end (Java/Spring)': [
      { name: 'Java 8+', icon: <FaJava /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Spring Data JPA', icon: <SiSpring /> },
      { name: 'Spring Security', icon: <SiSpringsecurity /> },
      { name: 'Jakarta EE', icon: <BsFiletypeJava /> }
    ],
    'Databases & ORM': [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MariaDB', icon: <SiMariadbfoundation /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Hibernate', icon: <SiHibernate /> }
    ],
    'projectManagement': [
      { name: 'JIRA', icon: <SiJira /> },
      { name: 'Maven', icon: <SiApachemaven /> },
      { name: 'UML', icon: <SiUml /> },
      { name: 'Figma', icon: <FaFigma /> }
    ],
    'versionControl': [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> }
    ],
    'apiTools': [
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Swagger', icon: <SiSwagger /> }
    ],
    'devOps': [
      { name: 'Docker', icon: <GrDocker /> },
      { name: 'Jenkins', icon: <SiJenkins /> }
    ],


  };

  const experiences = [
    {
      company: 'VisionOrientation (Agadir)',
      position: 'Final Year Internship',
      period: 'April-July 2024',
      description:
        'Contributed to the design phase using UML and created mockups with Figma for an orientation website.',
      logo: 'public/vision-orientation.jpg',
      technologies: ['UML', 'Figma'],
    },
    {
      company: 'ValaOrange (Agadir)',
      position: 'Graduation Internship',
      period: 'April-June 2023',
      description:
        'Designed and developed a crowdfunding website using Laravel.',
      logo: 'public/valaOrange-logo.png',
      technologies: ['Laravel', 'PHP', 'Bootstrap', 'MySQL'],
    },
    {
      company: 'ValaBleu (Taroudant)',
      position: 'Initiation Internship',
      period: 'July-August 2022',
      description:
        'Designed and developed a motorcycle rental website using WordPress.',
      logo: 'public/valableu-logo.png',
      technologies: ['WordPress', 'Elementor', 'CSS', 'HTML'],
    },
  ];

  const education = [
    {
      institution: 'YouCode (UM6P)',
      degree: 'Full-stack Java Developer',
      period: '2023-2025 (ongoing)',
      location: 'Safi, Morocco',
      logo: 'public/youcode-logo.png'
    },
    {
      institution: 'Higher School of Technology of Agadir',
      degree: 'University Degree in Computer Engineering (DUT)',
      period: '2021-2023',
      location: 'Agadir, Morocco',
      logo: 'public/esta-logo.png'
    },
    {
      institution: 'Al Maarifa High School',
      degree: 'Baccalaureate in Physical Sciences',
      period: '2020-2021',
      location: 'Ait Melloul, Morocco',
      logo: 'public/almaarifa-logo.png'
    }
  ];

  const certifications = [
    {
      certification: 'ALX Virtual Assistant Certification',
      issuer: 'ALX Morocco',
      period: '09/2024 - 11/2024',
      identifier: 'CMN-VA-0924 (C#6-VA)',
      skills: ['Virtual Assistance', 'Administrative Support'],
      link: 'https://intranet.alxswe.com/certificates/L2Rs7Gep9Z',
      logo: 'public/alx-logo.png'
    }
  ];
  const projects = [
    {
      title: "ProdCat Manager",
      description: "A REST API built with Spring Boot, providing product and category management functionality. The application is secured with Spring Security and integrates with MariaDB for data storage. Features include automated testing with JUnit, CI/CD pipeline using Jenkins, containerization with Docker, and detailed API documentation with Swagger.",
      tech: ["Spring Boot", "MariaDB", "Docker", "Jenkins", "Spring Security", "Swagger", "JUnit"],
      img: "https://www.shipbob.com/wp-content/smush-webp/2022/06/PRODUCT-RANGE.jpg.webp",
      github: "https://github.com/Radiaidel/ProdCat-Manager",
      external: "#"
   },
   
   {
    title: "Dataware",
    description: "A project management web application built with Java 8, Servlets, JSP, and MySQL. The app allows users to manage projects, tasks, and teams with CRUD operations, user authentication, and task tracking. It features a responsive UI with Bootstrap, efficient data handling with pagination, and follows an MVC architecture. The application utilizes Java Time API, Lambda expressions, and Stream API for performance optimization. Developed using Maven for dependency management and deployed on Tomcat.",
    tech: ["Java 8", "Servlets", "JSP", "MySQL", "Bootstrap", "Maven", "JSTL", "JDBC"],
    img: "https://www.wimi-teamwork.com/static/medias/logiciels-gestion-des-taches-1280x640-1.png",
    github: "https://github.com/Radiaidel/dataware-java",
    external: "#"
},
    {
      title: "CitroTrack",
      description: "A REST API developed with Spring Boot for the management of farms, citrus tree productivity, harvests, and sales. The project incorporates API documentation (Swagger), unit tests (JUnit/Mockito), and entity conversion using MapStruct. It allows efficient tracking of farm operations including farm creation, field management, tree planting, harvest tracking, and sales processing.",
      tech: ["Spring Boot", "PostgeSQL", "JUnit/Mockito", "Swagger", "MapStruct"],
      img: "https://maghreb.simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fpng%2Fhunters-league-6735f5eadd465974114435.png&w=1280&q=75",
      github: "https://github.com/Radiaidel/CitroTrack",
      external: "#"
   }
   
  ];
  

  function getIconColor(skillName) {
    const colors = {
      'React.js': '#61dafb',
      'JavaScript (ES6+)': '#f7df1e',
      'HTML5': '#e34f26',
      'CSS3': '#1572b6',
      'Tailwind CSS': '#06b6d4',
      'Bootstrap': '#7952b3',
      'Java 8+': '#f89820',
      'Spring Boot': '#6db33f',
      'Spring Data JPA': '#6db33f',
      'Spring Security': '#6db33f',
      'Jakarta EE': '#007396',
      'PostgreSQL': '#336791',
      'MySQL': '#4479a1',
      'MariaDB': '#ffffff',
      'MongoDB': '#47a248',
      'Hibernate': '#59666c',
      'Git': '#f05032',
      'GitHub': '#181717',
      'Postman': '#ff6c37',
      'Swagger': '#85ea2d',
      'JIRA': '#0052cc',
      'Maven': '#c71a36',
      'UML': '#e0e0e0',
      'Figma': '#f24e1e',
      'Docker': '#2496ed',
      'Jenkins': '#d33833',
      'JUnit': '#25a162',
      'Mockito': '#b4b4b4',
      'JaCoCo': '#ffaf00'
    };

    return colors[skillName] || '#64ffda'; // Default to green if not found
  }

  return (
    <div className="bg-[#0a192f] text-[#8892b0] min-h-screen">
      {/* Navbar */}
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

      {/* Hero Section */}
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
              I'm a full-stack developer specializing in Java and Angular.As a final-year trainee at YouCode, I am dedicated to mastering the art of creating accessible, human-centered web applications.
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
                src="public/profile.jpg"
                alt="Radia Idelkadi"
                className="rounded-lg object-cover w-full h-full  hover:grayscale transition-all"
              />
            </div>
            <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="flex items-center text-3xl font-bold text-[#ccd6f6] mb-12">
            <span className="text-[#64ffda] font-mono mr-2">01.</span>
            About Me
          </h2>
          <div className="space-y-4 text-justify">
            <p>
              Hello! My name is Radia, and I’m a Full Stack Java/Angular Developer based in Morocco. I’m passionate about building dynamic, user-friendly, and high-performance web applications that solve real-world problems and create meaningful digital experiences.
            </p>
            <p>
              My journey into software development began with a fascination for problem-solving and creativity. During my training at <strong>YouCode</strong>, I’ve gained solid expertise in <strong>Java</strong>, <strong>Angular</strong>, and modern web technologies. I thrive on tackling technical challenges and transforming ideas into impactful solutions.
            </p>
            <p>
              Currently, as I complete my program at <strong>YouCode</strong>, I’m focused on developing accessible and human-centered products. My approach blends technical proficiency with attention to detail and design to create exceptional results.
            </p>
            <p>
              Outside of development, I’m constantly exploring new technologies, engaging in creative hobbies, and staying inspired by the ever-evolving tech industry. I am driven by a passion for continuous learning and growth, both personally and professionally.
            </p>
          </div>



        </div>
      </section>




      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#0a192f]">
        <div className="container mx-auto px-4 text-start">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12">
            <span className="text-[#64ffda] font-mono mr-2">02.</span>
            Technical Skills
          </h2>

          {/* Grid of Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div
                key={category}
                className="bg-[#112240] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Title */}
                <h3 className="text-xl text-center font-semibold text-[#64ffda] mb-4">{category}</h3>

                {/* Skills in Category */}
                <ul className="grid grid-cols-3 gap-4 justify-items-center">
                  {skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex flex-col items-center"
                    >
                      {/* Icon */}
                      <div
                        className="text-4xl mb-2"
                        style={{ color: getIconColor(skill.name) }}
                      >
                        {skill.icon}
                      </div>
                      {/* Skill Name */}
                      <p className="text-sm text-[#ccd6f6]">{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="flex items-center text-3xl font-bold text-[#ccd6f6] mb-12">
            <span className="text-[#64ffda] font-mono mr-2">03.</span>
            Experience
          </h2>
          <div className="flex flex-col items-center space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-transform w-full max-w-4xl"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[#ccd6f6]">
                          {exp.company}
                        </h3>
                        <p className="text-[#64ffda]">{exp.position}</p>
                      </div>
                      <span className="text-sm font-mono">{exp.period}</span>
                    </div>
                    <p>{exp.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#64ffda1] border border-[#64ffda] text-gray text-sm font-mono px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Education and Certifications Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="flex items-center text-3xl font-bold text-[#ccd6f6] mb-12">
            <span className="text-[#64ffda] font-mono mr-2">04.</span>
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Education Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-[#ccd6f6] border-b border-[#64ffda] pb-2">
                Education
              </h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-transform"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-[#ccd6f6]">
                            {edu.institution}
                          </h3>
                          <p className="text-[#64ffda]">{edu.degree}</p>
                        </div>
                        <span className="text-sm font-mono">{edu.period}</span>
                      </div>
                      {edu.location && <p>{edu.location}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Column */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-[#ccd6f6] border-b border-[#64ffda] pb-2">
                Certifications
              </h3>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-transform"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={cert.logo}
                      alt={`${cert.certification} logo`}
                      className="w-12 h-12 object-contain rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-[#ccd6f6]">
                            {cert.certification}
                          </h3>
                          <p className="text-[#64ffda]">{cert.issuer}</p>
                        </div>
                        <span className="text-sm font-mono">{cert.period}</span>
                      </div>
                      <p className="mb-2 text-sm">{cert.identifier}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[#64ffda] text-xs font-mono bg-[#0a192f] px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#0a192f]">
        <div className="container mx-auto px-4">
          <h2 className="flex items-center text-3xl font-bold text-[#ccd6f6] mb-12">
            <span className="text-[#64ffda] font-mono mr-2">03.</span>
            Some Things I've Built
          </h2>
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.title} className="relative">
                <div
                  className={`grid md:grid-cols-2 gap-8 ${index === 1 ? "md:grid-cols-2 md:gap-12" : ""
                    }`}
                >
                  {/* Description Section */}
                  <div
                    className={`${index === 1 ? "md:order-2" : "md:order-1"
                      }`}
                  >
                    <p className="text-[#64ffda] font-mono mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">
                      {project.title}
                    </h3>
                    <div className="bg-[#112240] p-6 rounded mb-4">
                      <p className="text-[#8892b0]">{project.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-4 text-[#8892b0] font-mono text-sm mb-8">
                      {project.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="text-[#ccd6f6] hover:text-[#64ffda]"
                      >
                        <Github size={20} />
                      </a>
                      {project.external && (
                        <a
                          href={project.external}
                          className="text-[#ccd6f6] hover:text-[#64ffda]"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Image Section */}
                  <div
                    className={`relative group ${index === 1 ? "md:order-1" : "md:order-2"
                      }`}
                  >
                    <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition-colors"></div>
                    <img
                      src={project.img}
                      alt={project.title}
                      className="rounded w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#64ffda] font-mono mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
          <p className="text-[#8892b0] max-w-md mx-auto mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <a
            href="mailto:idelkadiradia@gmail.com"
            className="border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda]/10 transition-colors inline-block"
          >
            Say Hello
          </a>
        </div>
      </section>
      <hr />

      <footer className="bg-[#0a192f] py-8 text-center">
        <div className="container mx-auto px-4 flex justify-between items-center ">
          <p className="text-[#8892b0] text-sm ">
            Designed & Built by <span className="text-[#64ffda]">idelkadi-radia</span>
          </p>

          <p className="text-[#8892b0] text-xs ">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>

  );
}

export default Portfolio;