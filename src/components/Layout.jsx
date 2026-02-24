import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Layout({ children }) {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleMouse = (e) => {
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      if (cursorDotRef.current)
        cursorDotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/ChittiBabu_Frontend_Developer_Exp.pdf";
    link.download = "ChittiBabu_Frontend_Developer_4yrs_Exp.pdf";
    link.click();
  };

  return (
    <>
      <div className="grain-overlay" />
      <div ref={cursorRef} className="cursor-ring" />
      <div ref={cursorDotRef} className="cursor-dot" />

      {/* NAVBAR */}
      <nav className="navbar">
        <button onClick={() => smoothScroll("home")} className="navbar-logo" style={{ cursor: "pointer", background: "none", border: "none", padding: "0" }}>

          <img src="/logo.png" alt="Chitti Babu Gutti Logo" className="navbar-logo-img" />
        </button>

        <ul className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => smoothScroll(item.id)}
                className="navbar-link"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="btn-resume" onClick={handleDownload}>⬇ Resume</button>
          <button className="btn-hire" onClick={() => smoothScroll("contact")}>Hire Me</button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => smoothScroll(item.id)}
            className="navbar-link"
            style={{ background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left" }}
          >
            {item.label}
          </button>
        ))}
        <button className="btn-resume" onClick={handleDownload} style={{ width: "fit-content", marginTop: "8px" }}>⬇ Resume</button>
      </div>

      {/* PAGE CONTENT */}
      <main className="page-wrapper">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-name">CHITTI BABU <span>GUTTI</span></div>

        <div className="footer-copy">© 2024 All Rights Reserved</div>
      </footer>
    </>
  );
}
