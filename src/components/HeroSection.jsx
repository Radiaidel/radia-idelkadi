import React from 'react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';

export function HeroSection() {
    return (
        <>
            <section id="home" className="min-h-screen flex items-center pt-16">
                    <div className="container mx-auto px-4 text-center ">
                        <p className="text-[#64ffda] mb-5 font-mono">Hi, my name is</p>
                        <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">
                            Idelkadi Radia.
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-8">
                            I build things for the web.
                        </h2>
                        <p className="text-[#8892b0] text-center  mb-12 text-lg">
                            I'm a full-stack developer specializing in Java and Angular. As a final-year trainee at YouCode, I am dedicated to mastering the art of creating accessible, human-centered web applications.
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href={`${import.meta.env.BASE_URL}/idelkadi-radia-cv.pdf`}
                                    download
                                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-all duration-300"
                                >
                                    <FileDown size={20} />
                                    Download CV
                                </a>
                            </div>
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
                            Hello! My name is Radia, and I'm a Full Stack Java/Angular Developer based in Morocco. I'm passionate about building dynamic, user-friendly, and high-performance web applications that solve real-world problems and create meaningful digital experiences.
                        </p>
                        <p>
                            My journey into software development began with a fascination for problem-solving and creativity. During my training at <strong>YouCode</strong>, I've gained solid expertise in <strong>Java</strong>, <strong>Angular</strong>, and modern web technologies. I thrive on tackling technical challenges and transforming ideas into impactful solutions.
                        </p>
                        <p>
                            Currently, as I complete my program at <strong>YouCode</strong>, I'm focused on developing accessible and human-centered products. My approach blends technical proficiency with attention to detail and design to create exceptional results.
                        </p>
                        <p>
                            Outside of development, I'm constantly exploring new technologies, engaging in creative hobbies, and staying inspired by the ever-evolving tech industry. I am driven by a passion for continuous learning and growth, both personally and professionally.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
