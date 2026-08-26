import { useScrollReveal } from "../hooks/useScrollReveal";

function FinalCta() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="final-cta-section" ref={ref}>
      <div className="section-container">
        <div className={`final-cta-card ${isVisible ? "reveal-in" : ""}`}>
          <div className="cta-eyebrow-wrap">
            <span className="eyebrow">START WITH A FEW QUESTIONS</span>
          </div>

          <h2 className="cta-headline">
            Ready to understand<br />
            <span className="headline-accent">your impact?</span>
          </h2>

          <p className="cta-description">
            Discover your carbon footprint and find the changes that matter most.
          </p>

          <div className="cta-action-wrap">
            <a href="#hero-calculator" className="primary-button cta-btn-large">
              <span>Calculate My Footprint</span>
              <svg
                className="btn-arrow"
                width="16"
                height="16"
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
          </div>

          <div className="cta-meta-footnote">
            <span>Free & open to all TU community members · No login required</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
