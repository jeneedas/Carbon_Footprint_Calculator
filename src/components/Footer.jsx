function Footer() {
  return (
    <footer className="footer-editorial" id="about">
      <div className="section-container">
        <div className="footer-main-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-badge">TU</div>
              <div>
                <span className="footer-brand-name">Carbon Calc</span>
                <span className="footer-university">Tezpur University</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              An institutional climate-action tool designed to translate individual campus routines into measurable, collective ecological progress.
            </p>
          </div>

          {/* Navigation Col */}
          <div className="footer-nav-col">
            <span className="footer-nav-heading">NAVIGATION</span>
            <ul className="footer-nav-list">
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#tu-sustainability">TU Sustainability</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#preview">Preview Result</a>
              </li>
            </ul>
          </div>

          {/* Institutional Col */}
          <div className="footer-inst-col">
            <span className="footer-nav-heading">CAMPUS</span>
            <address className="footer-address">
              Tezpur University<br />
              Napaam, Sonitpur<br />
              Assam 784028, India
            </address>
          </div>
        </div>

        {/* Bottom Bar with Disclaimer */}
        <div className="footer-bottom-bar">
          <p className="footer-disclaimer">
            <strong>Disclaimer:</strong> Carbon estimates are indicative and depend on activity data and emission factors. Calculations are designed for educational and campus awareness purposes.
          </p>
          <div className="footer-copy">
            <span>© {new Date().getFullYear()} Tezpur University · All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
