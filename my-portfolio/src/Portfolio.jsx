import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  Database,
  Brain,
  Award,
  Rocket,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    // certifications: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">

      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/70 backdrop-blur-xl z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sandhiya.S
            </div>
            <ul className="flex gap-8 text-sm font-medium">
              {Object.keys(sectionRefs).map((sec) => (
                <li
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className={`cursor-pointer hover:text-purple-400 transition-all duration-300 relative group ${
                    activeSection === sec ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  {sec.toUpperCase()}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-transform duration-300 ${
                    activeSection === sec ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        ref={sectionRefs.home}
        className="relative h-screen flex flex-col justify-center items-center"
      >
        <div className="text-center z-10 space-y-6 animate-fade-in">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-6xl font-bold">
                S
              </div>
            </div>
          </div>
          
          <h1 className="text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Hi, I'm Sandhiya
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-xl text-gray-300 mb-6">
            <span className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/50 backdrop-blur">
              Full-Stack Developer
            </span>
            <span className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/50 backdrop-blur">
              AI Enthusiast
            </span>
            <span className="px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/50 backdrop-blur">
              Cloud & DevOps
            </span>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable, intelligent applications that solve real-world problems
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <ChevronDown size={40} className="absolute bottom-10 animate-bounce text-purple-400" />
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="min-h-screen py-20 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with a knack for creating elegant solutions 
                to complex problems. With expertise in modern web technologies, AI integration, 
                and cloud architecture, I bring ideas to life.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to build products 
                that make a real difference. I specialize in React, Django, PostgreSQL, LLM Models and 
                cutting-edge DevOps practices.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'Django', 'PostgreSQL', 'Tailwind', 'Python', 'JavaScript', 'MySQL', 'Git/GitHub', 'RAG', 'LLM', 'Gen AI'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30 text-sm font-medium hover:scale-105 transition-transform cursor-default">
                    {skill}
                  </span> 
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <Code size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">1.5+ Years</h3>
                      <p className="text-gray-400 text-sm">Development Experience</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center">
                      <Rocket size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">2+ Projects</h3>
                      <p className="text-gray-400 text-sm">Successfully Completed & Ongoing Support</p>

                      {/* <p className="text-gray-400 text-sm">Completed & Actively Maintained</p> */}
                    </div>
                  </div>

                  {/* <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Award Winner</h3>
                      <p className="text-gray-400 text-sm">AI Automation Excellence</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section ref={sectionRefs.projects} className="min-h-screen py-20 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Some of my recent work that I'm proud of
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl 
                                border border-purple-500/20 hover:border-purple-500/50 transition-all 
                                duration-300 transform hover:-translate-y-2 h-full">

              {/* <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2"> */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Employee Self-Service & Company Website</h3>
                        <p className="text-gray-400 mb-6">
                        Contributing to the development of a comprehensive Employee Self-Service (ESS) platform and company 
                        website using Django, MySQL, and React. My role includes implementing modules for employee profile 
                        management, request workflows, and resource access within a secure, responsive interface. The system 
                        enhances internal communication, streamlines HR operations, and improves overall employee experience.
                        </p>


                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs border border-purple-500/30">PYTHON</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs border border-blue-500/30">CELERY</span>
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs border border-pink-500/30">DJANGO RESTAPI</span>
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs border border-pink-500/30">REACT</span>
                </div>
              </div>
            </div>

            {/* <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Multi-Tenant SaaS App</h3>
                <p className="text-gray-400 mb-6">Django-powered SaaS platform with PostgreSQL schema-based isolation. Scalable architecture for enterprise clients.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs border border-green-500/30">Django</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs border border-blue-500/30">PostgreSQL</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs border border-purple-500/30">Docker</span>
                </div>
              </div>
            </div> */}

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              {/* <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-2"> */}

              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl 
border border-purple-500/20 hover:border-purple-500/50 transition-all 
duration-300 transform hover:-translate-y-2 h-full">

                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">ML Analytics Engine</h3>
                <p className="text-gray-400 mb-6">
                    End-to-end ML analytics engine combining predictive modeling, RAG-enhanced insights, and 
                    multi-format ingestion (database, PDF, Excel).  An advanced AI automation platform integrating LLMs with Retrieval-Augmented Generation for 
                        context-aware SQL generation and analytics. Users can upload PDFs or Excel files through the UI 
                        and query them using natural language, with real-time answers delivered through a React frontend 
                        and Django-PostgreSQL backend. Includes interactive charts, tables, and AI-driven 
                    summaries to transform complex datasets into actionable intelligence.
                    </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs border border-pink-500/30">RAG</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs border border-purple-500/30"> SCIKIT-LEARN</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs border border-blue-500/30">VECTOR DB</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs border border-blue-500/30">LANGCHAIN/LANGGRAPGH</span>
                </div>
              </div>
            </div>

            {/* <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">DevOps & CI/CD Pipeline</h3>
                <p className="text-gray-400 mb-6">Automated deployment pipeline with Docker, Kubernetes, GitHub Actions, and cloud infrastructure management.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs border border-blue-500/30">Kubernetes</span>
                  <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs border border-cyan-500/30">Docker</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs border border-purple-500/30">AWS</span>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </section>

      {/* Experience */}
      <section ref={sectionRefs.experience} className="min-h-screen py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            My professional journey and milestones
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border 
border-yellow-500/20 hover:border-yellow-500/50 transition-all h-full flex flex-col">

              {/* <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all"> */}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
                    <p className="text-purple-400 mb-3">1.5+ Years Experience</p>
                    <p className="text-gray-400 leading-relaxed">
                      Led full-stack development projects, implemented AI-driven solutions, 
                      and architected scalable cloud infrastructure for clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Award size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Award Winner</h3>
                    <p className="text-purple-400 mb-3">Innovation Excellence</p>
                    <p className="text-gray-400 leading-relaxed">
                      Recognized for developing cutting-edge automation and AI solutions 
                      that improved operational efficiency by 60%.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border 
border-yellow-500/20 hover:border-yellow-500/50 transition-all h-full flex flex-col">

              {/* <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all"> */}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Brain size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">AI Integration Specialist</h3>
                    <p className="text-purple-400 mb-3">Machine Learning & Automation</p>
                    <p className="text-gray-400 leading-relaxed">
                      Integrated LLM models into production systems, 
                      delivering intelligent automation solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Rocket size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Cloud Architect</h3>
                    <p className="text-purple-400 mb-3">DevOps & Infrastructure</p>
                    <p className="text-gray-400 leading-relaxed">
                      Designed and deployed cloud-native applications on AWS with CI/CD pipelines, 
                      ensuring 99.9% uptime.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </section>

         {/* Education */}
      <section ref={sectionRefs.education} className="min-h-screen py-20 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            My academic background and qualifications
          </p>

          <div className="space-y-8">
            {/* Post Graduate */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Award size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Master of Science in Microbiology (MSc)</h3>
                    <p className="text-purple-400 mb-3">Bharathiar University • 2021 - 2023 • Percentage: 83%</p>
                    {/* <p className="text-gray-400 leading-relaxed">
                      Advanced studies in Software Engineering, Database Management, and Artificial Intelligence. 
                      Specialized in full-stack development and machine learning applications.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Under Graduate */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Award size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Microbiology (BSc)</h3>
                    <p className="text-purple-400 mb-3">Bharathiar University • 2018 - 2021 • Percentage: 80%</p>
                    {/* <p className="text-gray-400 leading-relaxed">
                      Completed comprehensive coursework in Computer Science fundamentals, programming languages, 
                      web development, and database management systems.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* HSC */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Award size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-purple-400 mb-3">Kongu Vellalar Matriculation Higher Secondary School • 2016 - 2018 • Percentage: 90%</p>
                    {/* <p className="text-purple-400 mb-3"></p> */}
                    {/* <p className="text-gray-400 leading-relaxed">
                      Focused on Biology, Chemistry, Mathematics, and Physics. Built strong analytical and 
                      problem-solving skills with emphasis on programming fundamentals.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* SSLC */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Award size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Secondary School Leaving Certificate (SSLC)</h3>
                    <p className="text-purple-400 mb-3">Komarappa Sengunthar Girls High School • 2015 - 2016 • Percentage: 95%</p>
                    {/* <p className="text-gray-400 leading-relaxed">
                      Completed secondary education with strong foundation in Mathematics, Science, and basic 
                      computer applications. Developed early interest in technology and programming.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Certifications */}
      {/* <section ref={sectionRefs.certifications} className="min-h-screen py-20 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Professional certifications and achievements
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all h-full flex flex-col">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Award size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">AWS Certified Developer</h3>
                    <p className="text-purple-400 mb-3">Amazon Web Services • 2024</p>
                    <p className="text-gray-400 leading-relaxed">
                      Certified in developing and maintaining applications on AWS platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all h-full flex flex-col">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Brain size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Machine Learning Specialization</h3>
                    <p className="text-purple-400 mb-3">Coursera • 2023</p>
                    <p className="text-gray-400 leading-relaxed">
                      Completed comprehensive ML course covering supervised and unsupervised learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all h-full flex flex-col">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Code size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Full Stack Web Development</h3>
                    <p className="text-purple-400 mb-3">Platform Name • 2023</p>
                    <p className="text-gray-400 leading-relaxed">
                      Mastered React, Django, and modern web development best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all h-full flex flex-col">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Database size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Database Administration</h3>
                    <p className="text-purple-400 mb-3">Certification Body • 2024</p>
                    <p className="text-gray-400 leading-relaxed">
                      Expertise in PostgreSQL, MySQL optimization and database design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Experience */}
      {/* <section ref={sectionRefs.experience} className="min-h-screen py-20 px-8"></section> */}

      {/* Contact */}
      <section ref={sectionRefs.contact} className="min-h-screen py-20 px-8 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            As I explore new career opportunities, I welcome professional connections and conversations.
            You may reach me at:
            {/* Have a project in mind? Let's build something amazing together */}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            <a href="mailto:sandhiyasandhiya8701@gmail.com" className="group relative block">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all transform hover:-translate-y-2">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email</h3>
                    <p className="text-gray-400">sandhiyasandhiya8701@gmail.com</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://linkedin.com/in/sandhiya-s-12a305203" target="_blank" rel="noopener noreferrer" className="group relative block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:-translate-y-2">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Linkedin size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                    <p className="text-gray-400">linkedin.com/in/sandhiya-s-12a305203</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://github.com/Sandhiya1127" target="_blank" rel="noopener noreferrer" className="group relative block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:-translate-y-2">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Github size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">GitHub</h3>
                    <p className="text-gray-400">github.com/Sandhiya1127</p>
                  </div>
                </div>
              </div>
            </a>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Code size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Open to Work</h3>
                    <p className="text-gray-400">Available for freelance projects</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* <div className="text-center pt-12 border-t border-gray-700/50">
            <p className="text-gray-400">
              © 2024 Sandhiya. Built with React & Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm mt-2">
            Thoughtfully designed and developed with passion.
              {/* Crafted with passion and lots of ☕ */}
            {/* </p> */}
          {/* </div> */} 

        </div>
      </section>

    </div>
  );
}