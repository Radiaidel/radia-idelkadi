export function EducationSection() {
    const education = [
        {
            institution: 'YouCode (UM6P)',
            degree: 'Full-stack Java Developer',
            period: '2023-2025 (ongoing)',
            location: 'Safi, Morocco',
            logo: `${import.meta.env.BASE_URL}/youcode-logo.png`
        },
        {
            institution: 'Higher School of Technology of Agadir',
            degree: 'University Degree in Computer Engineering (DUT)',
            period: '2021-2023',
            location: 'Agadir, Morocco',
            logo: `${import.meta.env.BASE_URL}/esta-logo.png`
        },
        {
            institution: 'Al Maarifa High School',
            degree: 'Baccalaureate in Physical Sciences',
            period: '2020-2021',
            location: 'Ait Melloul, Morocco',
            logo: `${import.meta.env.BASE_URL}/almaarifa-logo.png`
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
            logo: `${import.meta.env.BASE_URL}/alx-logo.png`
        }
    ];

    return (
        <>
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
        </>


    );
}