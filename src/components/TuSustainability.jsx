import { useScrollReveal, useCountUp } from "../hooks/useScrollReveal";

function TargetItem({ targetNumber, suffix = "%", label, detail, isVisible, delay }) {
  const animatedValue = useCountUp(targetNumber, isVisible, 1600, 0);

  return (
    <div className="target-item" style={{ "--delay": delay }}>
      <div className="target-num-wrap">
        <span className="target-number">
          {animatedValue}
          <span className="target-unit">{suffix}</span>
        </span>
      </div>
      <div className="target-text-wrap">
        <h3 className="target-label">{label}</h3>
        <p className="target-detail">{detail}</p>
      </div>
    </div>
  );
}

function TuSustainability() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      className="tu-sustainability-section"
      id="tu-sustainability"
      ref={ref}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className={`tu-header-grid ${isVisible ? "tu-revealed" : ""}`}>
          <div className="tu-title-col">
            <div className="tu-eyebrow-wrap">
              <span className="tu-badge">INSTITUTIONAL HORIZON</span>
              <span className="eyebrow tu-eyebrow-text">
                TEZPUR UNIVERSITY · 2030
              </span>
            </div>
            <h2 className="tu-main-heading">
              A greener TU starts<br />
              <span className="tu-heading-accent">with everyday choices.</span>
            </h2>
          </div>

          <div className="tu-desc-col">
            <p className="tu-lead-text">
              Carbon Calc connects individual behaviour with Tezpur
              University's wider sustainability ambitions.
            </p>
            <div className="tu-notice-pill">
              <span className="pill-dot"></span>
              <span>Vision 2030 Campus Framework</span>
            </div>
          </div>
        </div>

        {/* 4 Targets Grid */}
        <div className={`tu-targets-grid ${isVisible ? "targets-revealed" : ""}`}>
          <TargetItem
            targetNumber={40}
            label="Renewable electricity"
            detail="Solar rooftop installations & campus green power grid integration."
            isVisible={isVisible}
            delay="0.1s"
          />
          <TargetItem
            targetNumber={40}
            label="Green campus coverage"
            detail="Preserving native biodiversity, botanical corridors & eco-zones."
            isVisible={isVisible}
            delay="0.2s"
          />
          <TargetItem
            targetNumber={100}
            label="Waste segregation & recycling"
            detail="Zero-landfill organic composting and source segregation in hostels."
            isVisible={isVisible}
            delay="0.3s"
          />
          <TargetItem
            targetNumber={75}
            label="Bicycle / EV campus movement"
            detail="Prioritizing non-motorized and electric transit on internal ring roads."
            isVisible={isVisible}
            delay="0.4s"
          />
        </div>

        {/* Mandatory Target Disclaimer Note */}
        <div className="tu-footer-meta">
          <div className="target-disclaimer-box">
            <span className="disclaimer-label">OFFICIAL NOTE:</span>
            <p className="disclaimer-text">
              <strong>TU SUSTAINABILITY TARGETS · 2030</strong> — Figures reflect institutional targets and strategic objectives, not current campus baseline achievements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TuSustainability;
