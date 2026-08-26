import { useScrollReveal } from "../hooks/useScrollReveal";

const STEPS = [
  {
    stepNum: "01",
    label: "INPUT HABITS",
    title: "MEASURE",
    desc: "Tell us about your everyday habits.",
    subtext:
      "A fast, 3-minute questionnaire tailored to university routines—from hostel appliances to daily campus commute.",
  },
  {
    stepNum: "02",
    label: "ANALYZE METRICS",
    title: "UNDERSTAND",
    desc: "See what contributes most to your estimated footprint.",
    subtext:
      "Instant visual decomposition into emission domains with comparative campus reference benchmarks.",
  },
  {
    stepNum: "03",
    label: "TAKE ACTION",
    title: "ACT",
    desc: "Receive practical strategies based on your habits.",
    subtext:
      "Realistic, high-leverage steps designed specifically for Tezpur University students, faculty, and campus staff.",
  },
];

function HowItWorks() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="how-it-works-section" id="how-it-works" ref={ref}>
      <div className="section-container">
        {/* Section Intro */}
        <div className={`hiw-header ${isVisible ? "reveal-in" : ""}`}>
          <div className="hiw-title-block">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2 className="section-title">From habits to action.</h2>
          </div>
          <p className="hiw-subtitle">
            Carbon Calc turns everyday choices into understandable insights and
            practical next steps.
          </p>
        </div>

        {/* 3 Step Editorial Row */}
        <div className={`steps-editorial-row ${isVisible ? "steps-revealed" : ""}`}>
          {STEPS.map((s, idx) => (
            <div
              key={s.stepNum}
              className="step-editorial-card"
              style={{ "--delay": `${idx * 0.15}s` }}
            >
              <div className="step-card-top">
                <span className="step-num-large">{s.stepNum}</span>
                <span className="step-tag-mono">{s.label}</span>
              </div>

              <div className="step-card-content">
                <h3 className="step-card-title">{s.title}</h3>
                <p className="step-card-desc">{s.desc}</p>
                <p className="step-card-subtext">{s.subtext}</p>
              </div>

              <div className="step-card-footer">
                <span className="step-indicator-line"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
