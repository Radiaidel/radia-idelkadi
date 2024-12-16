import {
  Github, Linkedin, Mail, Menu, X, TestTube, ExternalLink
} from 'lucide-react';

export function ProjectsSection(){
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
      
    return <>
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
    </>  
}