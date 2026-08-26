import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand */}
        <a href="/" className="navbar-brand">
          <div className="brand-badge">
            <span>TU</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Carbon Calc</span>
            <span className="brand-university">Tezpur University</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Main Navigation">
          <a href="#how-it-works" className="nav-link">
            How It Works
          </a>
          <a href="#tu-sustainability" className="nav-link">
            TU Sustainability
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
        </nav>

        {/* CTA */}
        <div className="navbar-actions">
          <a href="#hero-calculator" className="navbar-button">
            <span>Calculate My Footprint</span>
            <svg
              className="btn-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`bar-line ${mobileMenuOpen ? "open" : ""}`}></span>
            <span className={`bar-line ${mobileMenuOpen ? "open" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "drawer-open" : ""}`}>
        <nav className="mobile-links">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link"
          >
            How It Works
          </a>
          <a
            href="#tu-sustainability"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link"
          >
            TU Sustainability
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link"
          >
            About
          </a>
          <a
            href="#hero-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-cta-btn"
          >
            Calculate My Footprint →
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;