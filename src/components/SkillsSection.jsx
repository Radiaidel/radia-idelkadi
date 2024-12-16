import React from 'react';
import { 
  FaReact, FaJava, FaGitAlt, FaGithub, FaFigma 
} from "react-icons/fa";
import { 
  DiJavascript 
} from "react-icons/di";
import { 
  TiHtml5 
} from "react-icons/ti";
import { 
  IoLogoCss3 
} from "react-icons/io5";
import { 
  RiTailwindCssFill, RiBootstrapFill 
} from "react-icons/ri";
import { 
  SiSpringboot, SiJira, SiJunit5, SiApachemaven, SiUml, 
  SiSpringsecurity, SiSwagger, SiPostman, SiSpring, 
  SiPostgresql, SiMysql, SiMariadbfoundation, SiMongodb, 
  SiHibernate, SiJenkins 
} from "react-icons/si";
import { BsFiletypeJava } from "react-icons/bs";
import { GrDocker } from "react-icons/gr";

export function SkillsSection() {
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
    <section id="skills" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4 text-start">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12">
          <span className="text-[#64ffda] font-mono mr-2">02.</span>
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="bg-[#112240] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl text-center font-semibold text-[#64ffda] mb-4">{category}</h3>

              <ul className="grid grid-cols-3 gap-4 justify-items-center">
                {skills.map((skill) => (
                  <li key={skill.name} className="flex flex-col items-center">
                    <div
                      className="text-4xl mb-2"
                      style={{ color: getIconColor(skill.name) }}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-sm text-[#ccd6f6]">{skill.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
