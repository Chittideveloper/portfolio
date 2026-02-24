import { useEffect, useRef, useState } from "react";
import { SKILLS, PROJECTS, EXPERIENCE } from "../data";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Skills.css";
import "../styles/Projects.css";
import "../styles/Experience.css";
import "../styles/Contact.css";

const TOOLS = [
  "React.js", "JavaScript ES6+", "HTML5", "CSS3",
  "Tailwind CSS", "Bootstrap", "Material UI",
  "Git", "GitHub", "Postman", "Vercel", "VS Code",
  "Chrome DevTools", "Axios", "Fetch API",
];

const SKILL_CATEGORIES = [
  {
    title: "Core Languages",
    icon: "⌨️",
    items: ["HTML5", "CSS3", "JavaScript ES6+"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚛️",
    items: ["React.js", "Bootstrap", "Material UI", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    items: ["VS Code", "Git", "GitHub", "Postman", "Chrome DevTools", "Vercel"],
  },
  {
    title: "Other Skills",
    icon: "✨",
    items: ["Responsive Design", "On-Page SEO", "Web Performance", "REST API Integration"],
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    items: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Time Management"],
  },
];

const IndexPage = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true); },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/ChittiBabu_Frontend_Developer_Exp.pdf";
    link.download = "ChittiBabu_Frontend_Developer_4yrs_Exp.pdf";
    link.click();
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `Hi Chitti Babu,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919493540926?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-bg-grid" />
        <div className="hero-glow" />

        <div className="home-inner">
          {/* Left */}
          <div className="home-left">
            <div className="home-tag anim d1">
              <span className="home-tag-line" />
              Front-End Developer
            </div>

            <h1 className="home-name anim d2"><span>GUTTI</span><br />
              CHITTI BABU
            </h1>

            <p className="home-bio anim d3">
              Building scalable, high-performance web applications with React.js — delivering clean code, elegant UI, and seamless user experiences.
            </p>

            <div className="home-exp-badge anim d4">
              <div className="exp-item">
                <span className="exp-num">4<span className="exp-plus">+</span></span>
                <span className="exp-label">Years Exp.</span>
              </div>
              <div className="exp-divider" />
              <div className="exp-item">
                <span className="exp-num">15<span className="exp-plus">+</span></span>
                <span className="exp-label">Apps Built</span>
              </div>
              <div className="exp-divider" />
              <div className="exp-item">
                <span className="exp-num">40<span className="exp-plus">%</span></span>
                <span className="exp-label">Perf. Gain</span>
              </div>
            </div>

            <div className="home-cta anim d5">
              <button className="btn-primary" onClick={() => smoothScroll("projects")}>
                View Projects <span>→</span>
              </button>
              <button className="btn-outline" onClick={() => smoothScroll("contact")}>
                Get In Touch
              </button>
              <button className="btn-outline home-dl-btn" onClick={handleDownload}>
                ⬇ Resume
              </button>
            </div>

            <div className="home-socials anim d6">
              <a href="mailto:chittibabugutti7@gmail.com" className="social-link">📧 Email</a>
              <a href="https://linkedin.com/in/Chittibabu" target="_blank" rel="noopener noreferrer" className="social-link">💼 LinkedIn</a>
              <a href="https://github.com/Chittibabu" target="_blank" rel="noopener noreferrer" className="social-link">🐙 GitHub</a>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="home-right anim d4">
            <div className="avatar-frame">
              <div className="avatar-bg">
                <img src="/logo.png" alt="Chitti Babu Logo" />
              </div>
              <div className="avatar-corner corner-tl" />
              <div className="avatar-corner corner-tr" />
              <div className="avatar-corner corner-bl" />
              <div className="avatar-corner corner-br" />
            </div>

            <div className="float-card float-top">
              <div className="float-num">15<span>+</span></div>
              <div className="float-label">Web Apps Built</div>
            </div>
            <div className="float-card float-bot">
              <div className="float-num">40<span>%</span></div>
              <div className="float-label">Load Time Reduced</div>
            </div>
            <div className="float-card float-mid">
              <div className="float-num">30<span>%</span></div>
              <div className="float-label">Dev Time Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-page page-enter">
        <div className="section-container">
          <div className="page-breadcrumb anim d1">Home / <span>About</span></div>
          <div className="section-header anim d2">
            <span className="section-num">01</span>
            <h2 className="section-title">ABOUT ME</h2>
            <div className="section-line" />
          </div>

          <div className="about-grid">
            {/* Left - Text */}
            <div className="about-left anim d3">
              <div className="about-tag">Who I am</div>
              <p className="about-para">
                I'm a <strong className="hl">Front-End Developer with 4+ years of experience</strong> crafting high-performance, scalable web applications. Currently working at <strong className="hl">Trans Global Geomatics Pvt Ltd, Hyderabad</strong>, where I build and maintain 15+ production React applications.
              </p>
              <p className="about-para">
                I specialise in translating complex requirements into clean, intuitive interfaces — with a strong focus on <strong className="hl">reusable component architecture</strong>, REST API integration, and front-end performance optimisation.
              </p>
              <p className="about-para">
                Through lazy loading, code splitting, and smart state management strategies, I've consistently achieved up to <strong className="hl">40% reduction in load times</strong> and <strong className="hl">30% improvement in development efficiency</strong> across projects.
              </p>

              <div className="about-actions">
                <button className="btn-primary" onClick={() => smoothScroll("projects")}>View Projects →</button>
                <button className="btn-outline" onClick={() => smoothScroll("contact")}>Let's Talk</button>
              </div>
            </div>

            {/* Right - Stats + Info */}
            <div className="about-right">
              <div className="about-stats anim d4">
                {[
                  { num: "4+", label: "Years of Experience" },
                  { num: "15+", label: "Web Apps Delivered" },
                  { num: "40%", label: "Performance Gain" },
                  { num: "10+", label: "Client Projects" },
                ].map((s) => (
                  <div className="stat-card" key={s.label}>
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="about-info anim d5">
                {[
                  { icon: "🎓", label: "Education", value: "B.Tech CSE — Vikas College of Engineering, Vijayawada (2018–2022)" },
                  { icon: "💼", label: "Current Role", value: "Front-End Developer @ Trans Global Geomatics Pvt Ltd" },
                  { icon: "📍", label: "Location", value: "Hyderabad, India" },
                  { icon: "📱", label: "Phone", value: "+91 9493540926" },
                  { icon: "📧", label: "Email", value: "chittibabugutti7@gmail.com" },
                ].map((info) => (
                  <div className="info-row" key={info.label}>
                    <span className="info-icon">{info.icon}</span>
                    <div>
                      <div className="info-label">{info.label}</div>
                      <div className="info-value">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="about-tools anim d5">
            <div className="tools-title">Tools & Technologies</div>
            <div className="tools-grid">
              {TOOLS.map((t) => (
                <span key={t} className="tool-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="about-hobbies anim d6">
            <div className="tools-title">Beyond Code</div>
            <div className="hobbies-row">
              {[
                { icon: "🎨", label: "Drawing & Sketching" },
                { icon: "💻", label: "Exploring New Tech" },
                { icon: "🎵", label: "Listening to Music" },
                { icon: "⚽", label: "Outdoor Sports" },
              ].map((h) => (
                <div className="hobby-card" key={h.label}>
                  <span className="hobby-icon">{h.icon}</span>
                  <span className="hobby-label">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="skills-page page-enter">
        <div className="section-container">
          <div className="page-breadcrumb anim d1">Home / <span>Skills</span></div>
          <div className="section-header anim d2">
            <span className="section-num">02</span>
            <h2 className="section-title">SKILLS</h2>
            <div className="section-line" />
          </div>

          {/* Proficiency Bars */}
          <div className="skills-bars-section anim d3" ref={skillsRef}>
            <div className="skills-bars-title">Proficiency Levels</div>
            <div className="skills-bars-grid">
              {SKILLS.map((sk, i) => (
                <div className="skill-bar-row" key={sk.name}>
                  <div className="skill-bar-top">
                    <span className="skill-bar-name">{sk.name}</span>
                    <span className="skill-bar-pct">{sk.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: skillsVisible ? `${sk.level}%` : "0%",
                        transitionDelay: `${i * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Cards */}
          <div className="skills-categories anim d4">
            <div className="skills-bars-title">Skill Categories</div>
            <div className="cat-grid">
              {SKILL_CATEGORIES.map((cat) => (
                <div className="cat-card" key={cat.title}>
                  <div className="cat-header">
                    <span className="cat-icon">{cat.icon}</span>
                    <span className="cat-title">{cat.title}</span>
                  </div>
                  <div className="cat-items">
                    {cat.items.map((item) => (
                      <span key={item} className="cat-item">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements highlight */}
          <div className="skills-achievements anim d5">
            <div className="skills-bars-title">Key Achievements</div>
            <div className="achievements-grid">
              {[
                { icon: "🏆", text: "Recognized for building reusable React components that reduced development time by 30%" },
                { icon: "⚡", text: "Optimized application performance through lazy loading & code splitting — 40% load time reduction" },
                { icon: "🗺️", text: "Implemented real-time vehicle tracking using Leaflet maps and REST APIs" },
                { icon: "📦", text: "Successfully delivered 10+ client projects within deadlines maintaining high UI/UX standards" },
              ].map((a, i) => (
                <div className="achievement-card" key={i}>
                  <span className="ach-icon">{a.icon}</span>
                  <p className="ach-text">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-page page-enter">
        <div className="section-container">
          <div className="page-breadcrumb anim d1">Home / <span>Projects</span></div>
          <div className="section-header anim d2">
            <span className="section-num">03</span>
            <h2 className="section-title">PROJECTS</h2>
            <div className="section-line" />
          </div>

          <p className="projects-intro anim d3">
            A selection of production-ready applications built with React.js, REST APIs, and modern frontend tooling — delivered at Trans Global Geomatics and beyond.
          </p>

          <div className="projects-grid anim d4">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className={`proj-card${activeProject === proj.id ? " proj-card--open" : ""}`}
                style={{ "--accent": proj.accent }}
                onClick={() => setActiveProject(activeProject === proj.id ? null : proj.id)}
              >
                <div className="proj-card-top">
                  <div className="proj-left">
                    <span className="proj-icon">{proj.icon}</span>
                    <div>
                      <div className="proj-tag">{proj.tag}</div>
                      <div className="proj-title">{proj.title}</div>
                    </div>
                  </div>
                  <div className="proj-right">
                    <span className="proj-year">{proj.year}</span>
                    <span className="proj-toggle">{activeProject === proj.id ? "−" : "+"}</span>
                  </div>
                </div>

                <p className="proj-desc">{proj.desc}</p>

                {/* Expanded detail */}
                <div className={`proj-detail${activeProject === proj.id ? " proj-detail--show" : ""}`}>
                  <div className="proj-detail-divider" />
                  <p className="proj-detail-text">{proj.detail}</p>
                  <div className="proj-tech-list">
                    {proj.tech.map((t) => (
                      <span key={t} className="proj-tech">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="proj-bar" />
              </div>
            ))}
          </div>

          {/* Summary stats */}
          <div className="projects-summary anim d5">
            {[
              { num: "4", label: "Featured Projects" },
              { num: "15+", label: "Total Apps Built" },
              { num: "2022", label: "Started Career" },
              { num: "100%", label: "Responsive Design" },
            ].map((s) => (
              <div className="psum-card" key={s.label}>
                <div className="psum-num">{s.num}</div>
                <div className="psum-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="exp-page page-enter">
        <div className="section-container">
          <div className="page-breadcrumb anim d1">Home / <span>Experience</span></div>
          <div className="section-header anim d2">
            <span className="section-num">04</span>
            <h2 className="section-title">EXPERIENCE</h2>
            <div className="section-line" />
          </div>

          {/* Timeline */}
          <div className="exp-timeline anim d3">
            {EXPERIENCE.map((exp, idx) => (
              <div className="exp-entry" key={exp.company}>
                <div className="exp-timeline-line">
                  <div className="exp-dot" />
                  {idx < EXPERIENCE.length - 1 && <div className="exp-connector" />}
                </div>
                <div className="exp-content">
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-location">📍 {exp.location}</span>
                  </div>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-role">{exp.role}</div>
                  <ul className="exp-points">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="exp-point">
                        <span className="exp-arrow">→</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="edu-section anim d4">
            <div className="edu-label">Education</div>
            <div className="edu-card">
              <div className="edu-left">
                <div className="edu-degree">B.Tech in Computer Science</div>
                <div className="edu-school">Vikas College of Engineering, Vijayawada</div>
              </div>
              <div className="edu-right">
                <span className="edu-year">2018 – 2022</span>
                <span className="edu-badge">🎓 Graduated</span>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="soft-section anim d5">
            <div className="edu-label">Soft Skills</div>
            <div className="soft-grid">
              {["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Time Management", "Attention to Detail"].map((sk) => (
                <div className="soft-card" key={sk}>
                  <span className="soft-dot" />{sk}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-page page-enter">
        <div className="section-container">
          <div className="page-breadcrumb anim d1">Home / <span>Contact</span></div>
          <div className="section-header anim d2">
            <span className="section-num">05</span>
            <h2 className="section-title">CONTACT</h2>
            <div className="section-line" />
          </div>

          <div className="contact-grid">
            {/* Left - Info */}
            <div className="contact-info anim d3">
              <h2 className="contact-headline">
                LET'S BUILD<br /><span>SOMETHING</span><br />GREAT.
              </h2>
              <p className="contact-bio">
                I'm open to full-time roles, freelance projects, and collaborations. If you have a project in mind or just want to say hello, my inbox is always open.
              </p>

              <div className="contact-links">
                {[
                  { icon: "📧", label: "Email", value: "chittibabugutti7@gmail.com", href: "mailto:chittibabugutti7@gmail.com" },
                  { icon: "📱", label: "Phone", value: "+91 9493540926", href: "tel:+919493540926" },
                  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/Chittibabu", href: "https://linkedin.com/in/Chittibabu" },
                  { icon: "🐙", label: "GitHub", value: "github.com/Chittibabu", href: "https://github.com/Chittibabu" },
                ].map((link) => (
                  <a key={link.label} href={link.href} className="contact-link" target="_blank" rel="noopener noreferrer">
                    <span className="clink-icon">{link.icon}</span>
                    <div>
                      <div className="clink-label">{link.label}</div>
                      <div className="clink-value">{link.value}</div>
                    </div>
                    <span className="clink-arrow">→</span>
                  </a>
                ))}
              </div>

              <div className="contact-avail">
                <div className="avail-dot" />
                <span>Available for new opportunities</span>
              </div>

              <button className="btn-outline contact-dl-btn" onClick={handleDownload}>
                ⬇ Download Resume
              </button>
            </div>

            {/* Right - Form */}
            <div className="contact-form-wrap anim d4">
              <div className="form-header">
                <span className="form-tag">Send a Message</span>
              </div>

              {sent && (
                <div className="form-success">
                  ✅ Opening WhatsApp... Thanks for reaching out!
                </div>
              )}

              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleFormChange}
                      className="form-input" placeholder="John Doe" required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleFormChange}
                      className="form-input" placeholder="john@example.com" required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleFormChange}
                    className="form-input" placeholder="Project Inquiry / Job Opportunity"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleFormChange}
                    className="form-input form-textarea" rows="6"
                    placeholder="Tell me about your project or opportunity..." required
                  />
                </div>
                <button type="submit" className="btn-primary form-submit-btn">
                  Send Message <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
