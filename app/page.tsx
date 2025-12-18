"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  ExternalLink,
  ArrowRight,
  Briefcase,
  Code2,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export default function ModernPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "experience",
        "education",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "PT. Data Kreatif",
      period: "Dec 2024 - Dec 2025",
      location: "Hybrid",
      description:
        "Developed Hospital Information Management System (SIMRS) and EMR for RS Ngoerah Sun",
      skills: [
        "Laravel",
        "PHP",
        "JavaScript",
        "PostgreSQL",
        "REST APIs",
        "Web Socket",
      ],
      color: "blue",
    },
    {
      title: "IT Support",
      company: "CV Surya Jaya Makmur",
      period: "Dec 2023 - Nov 2024",
      location: "On-site",
      description: "Full-stack development and IT infrastructure management",
      skills: [
        "Laravel",
        "WordPress",
        "Google Apps Script",
        "Meta Ads",
        "MySQL",
      ],
      color: "purple",
    },
    {
      title: "Frontend Web Developer",
      company: "Sociolite",
      period: "Sep 2023 - Dec 2023",
      location: "Remote",
      description: "Worked on major banking project in Indonesia",
      skills: ["Vue.js", "Nuxt.js", "Laravel", "Strapi"],
      color: "green",
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "May 2023 - Sep 2023",
      location: "Remote",
      description: "Web development and IT infrastructure projects",
      skills: ["WordPress", "Networking", "CCTV Systems", "Next.js"],
      color: "orange",
    },
  ];

  const projects = [
    {
      title: "Budget Tracker with AI Insights",
      period: "Dec 2025",
      description:
        "Web app to track income & expenses with AI-powered insights and personalized budget recommendations",
      tech: ["Next.js", "Supabase", "TailwindCSS", "Hugging Face"],
      gradient: "from-violet-600 to-indigo-600",
    },
    {
      title: "Hospital Management Information System",
      period: "Jan 2025 - Nov 2025",
      description:
        "Integrated platform for managing hospital operations, administrative, and medical service activities",
      tech: [
        "Laravel",
        "PHP",
        "JavaScript",
        "PostgreSQL",
        "REST APIs",
        "Web Socket",
      ],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Fleet Management Information System",
      period: "Nov 2025",
      description:
        "Platform for managing bus fleet operations including drivers, bookings, payments, and financial reports",
      tech: ["Next.js", "MySQL", "ShadcnUI", "Prisma"],
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      title: "Watch Party",
      period: "Nov 2025",
      description: "A platform for watching together with friends in real-time",
      tech: ["Next.js", "WebRTC", "Socket.io"],
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "Online Shop",
      period: "Jan 2024",
      description:
        "Online store with responsive design featuring admin panel and payment gateway",
      tech: ["Wordpress", "MySQL"],
      gradient: "from-pink-600 to-rose-600",
    },
    {
      title: "Company Profile",
      period: "Oct 2023",
      description:
        "Company Profile with responsive design featuring admin panel",
      tech: ["Laravel", "Vue.js", "MySQL"],
      gradient: "from-pink-600 to-rose-600",
    },
    {
      title: "Company Profile with Online Shop",
      period: "May 2023 - Jun 2023",
      description:
        "Comprehensive company profile website integrated with e-commerce functionality",
      tech: ["WordPress", "WooCommerce", "Elementor"],
      gradient: "from-purple-600 to-fuchsia-600",
    },
  ];

  const skills = [
    {
      category: "Backend",
      items: ["Laravel", "PHP", "Node.js", "PostgreSQL", "MySQL", "REST APIs"],
    },
    {
      category: "Frontend",
      items: [
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "JavaScript",
        "TailwindCSS",
        "React",
      ],
    },
    {
      category: "Tools",
      items: [
        "WordPress",
        "Git",
        "Docker",
        "Meta Ads",
        "Google Apps Script",
        "Strapi",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] transition-all duration-1000"
          style={{
            left: `${20 + mousePos.x * 30}%`,
            top: `${10 + mousePos.y * 20}%`,
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] transition-all duration-1000"
          style={{
            right: `${10 + mousePos.x * 30}%`,
            bottom: `${20 + mousePos.y * 20}%`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/50 to-slate-950" />
      </div>

      {/* Dot Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.15)_1px,transparent_0)] [background-size:40px_40px] pointer-events-none" />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold hover:scale-105 transition-transform"
            >
              <span className="text-blue-400">M</span>
              <span className="text-purple-400">T</span>
              <span className="text-cyan-400">H</span>
            </button>

            <div className="hidden md:flex items-center gap-2">
              {["About", "Experience", "Education", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.toLowerCase()
                        ? "bg-slate-800 text-white"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            <div className="px-6 py-4 space-y-2">
              {["About", "Experience", "Education", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-6 pt-20"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-slate-300">
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="inline-block hover:scale-105 transition-transform cursor-default">
                Muhammad
              </span>{" "}
              <span className="inline-block hover:scale-105 transition-transform cursor-default">
                Thoriqul
              </span>{" "}
              <span className="inline-block hover:scale-105 transition-transform cursor-default bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                Hisyam
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
              Software Engineer & Full Stack Developer
            </p>

            <p className="text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed">
              Crafting scalable web applications and information systems with
              modern technologies. Specialized in Laravel, Next.js, and
              AI-powered solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
              >
                View Projects
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-all border border-slate-700"
              >
                Get in Touch
              </button>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/muhammad-thoriqul-hisyam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all border border-slate-700/50 hover:border-slate-600"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Thoriqul-Hisyam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all border border-slate-700/50 hover:border-slate-600"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:thoriqulh12@gmail.com"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all border border-slate-700/50 hover:border-slate-600"
              >
                <Mail size={20} />
              </a>
              <div className="h-6 w-px bg-slate-700" />
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={16} />
                <span className="text-sm">Surabaya, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="text-blue-400" size={24} />
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-xl text-slate-300 leading-relaxed">
                I'm a Software Engineer with 2+ years of experience building
                scalable web applications.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                My journey in tech has taken me from developing hospital
                information systems to creating AI-powered financial tools. I
                specialize in full-stack development with Laravel and Next.js,
                turning complex problems into elegant solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    2+
                  </div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
                <div className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    10+
                  </div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {skills.map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all"
                >
                  <h3 className="text-lg font-semibold mb-4 text-slate-200">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <Briefcase className="text-purple-400" size={24} />
            <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 -ml-px" />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 w-5 h-5 bg-slate-950 border-4 border-blue-500 rounded-full -ml-2.5 shadow-lg shadow-blue-500/50 z-10" />

                  {/* Content */}
                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] ${
                      idx % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/40 transition-all hover:scale-[1.02]">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-slate-300 font-medium mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-slate-500 flex items-center gap-1.5">
                          <MapPin size={14} />
                          {exp.location}
                        </p>
                      </div>

                      <p className="text-slate-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 rounded-md transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for opposite side on desktop */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <GraduationCap className="text-cyan-400" size={24} />
            <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 -ml-px" />

            <div className="space-y-12">
              {/* Bachelor's Degree */}
              <div className="relative flex items-center md:flex-row">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 w-5 h-5 bg-slate-950 border-4 border-purple-500 rounded-full -ml-2.5 shadow-lg shadow-purple-500/50 z-10" />

                <div className="w-full md:w-[calc(50%-2.5rem)] md:pr-8">
                  <div className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800/40 transition-all hover:scale-[1.02]">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                          Current
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                        Bachelor's Degree
                      </h3>
                      <p className="text-lg text-slate-300 font-medium mb-2">
                        Universitas Terbuka
                      </p>
                      <p className="text-sm text-slate-500">
                        Information Systems
                      </p>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Pursuing a Bachelor's degree in Information Systems,
                      focusing on software development, database management, and
                      system analysis.
                    </p>
                  </div>
                </div>

                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </div>

              {/* Vocational High School */}
              <div className="relative flex items-center md:flex-row-reverse">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 w-5 h-5 bg-slate-950 border-4 border-cyan-500 rounded-full -ml-2.5 shadow-lg shadow-cyan-500/50 z-10" />

                <div className="w-full md:w-[calc(50%-2.5rem)] md:pl-8">
                  <div className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/40 transition-all hover:scale-[1.02]">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                          Graduated
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        Vocational High School
                      </h3>
                      <p className="text-lg text-slate-300 font-medium mb-2">
                        SMK Negeri 1 Surabaya
                      </p>
                      <p className="text-sm text-slate-500">
                        Software Engineering
                      </p>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Specialized in software engineering with focus on
                      programming fundamentals, web development, and database
                      management.
                    </p>
                  </div>
                </div>

                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="text-cyan-400" size={24} />
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-800/20 backdrop-blur-sm rounded-xl border border-slate-800/50 hover:border-slate-700/50 overflow-hidden transition-all hover:scale-[1.02]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors pr-2">
                      {project.title}
                    </h3>
                    <ExternalLink
                      size={18}
                      className="text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0"
                    />
                  </div>

                  <p className="text-sm text-slate-500 mb-4 flex items-center gap-1.5">
                    <Calendar size={12} />
                    {project.period}
                  </p>

                  <p className="text-slate-400 mb-6 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-slate-700/50 border border-slate-600/50 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Have a project in mind? Let's create something amazing together.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:thoriqulh12@gmail.com"
                className="group p-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <Mail className="mx-auto mb-4 text-blue-400" size={32} />
                <p className="text-sm text-slate-400 mb-2">Email</p>
                <p className="font-semibold group-hover:text-blue-400 transition-colors">
                  Send a message
                </p>
              </a>

              <a
                href="https://linkedin.com/in/muhammad-thoriqul-hisyam"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all hover:scale-105"
              >
                <Linkedin className="mx-auto mb-4 text-purple-400" size={32} />
                <p className="text-sm text-slate-400 mb-2">LinkedIn</p>
                <p className="font-semibold group-hover:text-purple-400 transition-colors">
                  Connect
                </p>
              </a>

              <a
                href="https://github.com/Thoriqul-Hisyam"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:scale-105"
              >
                <Github className="mx-auto mb-4 text-cyan-400" size={32} />
                <p className="text-sm text-slate-400 mb-2">GitHub</p>
                <p className="font-semibold group-hover:text-cyan-400 transition-colors">
                  View code
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 Muhammad Thoriqul Hisyam.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
