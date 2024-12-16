export function ExperienceSection() {
    const experiences = [
        {
          company: 'VisionOrientation (Agadir)',
          position: 'Final Year Internship',
          period: 'April-July 2024',
          description:
            'Contributed to the design phase using UML and created mockups with Figma for an orientation website.',
          logo: `${import.meta.env.BASE_URL}/vision-orientation.jpg`,
          technologies: ['UML', 'Figma'],
        },
        {
          company: 'ValaOrange (Agadir)',
          position: 'Graduation Internship',
          period: 'April-June 2023',
          description:
            'Designed and developed a crowdfunding website using Laravel.',
          logo: `${import.meta.env.BASE_URL}/valaOrange-logo.png`,
          technologies: ['Laravel', 'PHP', 'Bootstrap', 'MySQL'],
        },
        {
          company: 'ValaBleu (Taroudant)',
          position: 'Initiation Internship',
          period: 'July-August 2022',
          description:
            'Designed and developed a motorcycle rental website using WordPress.',
          logo: `${import.meta.env.BASE_URL}/valableu-logo.png`,
          technologies: ['WordPress', 'Elementor', 'CSS', 'HTML'],
        },
      ];

    return (
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
                        </div>))}
                </div>
            </div>
        </section>
    );
}