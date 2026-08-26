import { useScrollReveal, useCountUp } from "../hooks/useScrollReveal";

const BREAKDOWN_DATA = [
  { name: "Transportation", percent: 46, kg: 2.94, color: "var(--green)" },
  { name: "Energy", percent: 28, kg: 1.79, color: "var(--green-light)" },
  { name: "Food", percent: 18, kg: 1.15, color: "var(--sage)" },
  { name: "Waste", percent: 8, kg: 0.51, color: "var(--muted-dark)" },
];

function ImpactPreview() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15, triggerOnce: true });
  const animatedScore = useCountUp(6.4, isVisible, 1500, 1);

  return (
    <section className="impact-preview-section" id="preview" ref={ref}>
      <div className="section-container">
        {/* Section Intro */}
        <div className={`impact-section-header ${isVisible ? "reveal-in" : ""}`}>
          <div className="impact-header-badge-row">
            <span className="eyebrow">PREVIEW YOUR REPORT</span>
            <span className="preview-indicator">INTERACTIVE SIMULATION</span>
          </div>
          <h2 className="section-title">
            Understand what drives<br />
            <span className="title-muted">your footprint.</span>
          </h2>
          <p className="impact-header-subtitle">
            After a brief 3-minute assessment, you'll receive a high-resolution breakdown identifying exactly where your carbon intensity originates.
          </p>
        </div>

        {/* Real Product Preview Dashboard UI */}
        <div className={`product-preview-shell ${isVisible ? "preview-animated" : ""}`}>
          {/* Top Mock Window Bar */}
          <div className="preview-window-topbar">
            <div className="window-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="window-title-badge">
              <span>REPORT_SIMULATION_V1.0 // TEZPUR_UNIVERSITY</span>
            </div>
            <div className="window-status">
              <span className="status-indicator-live"></span>
              <span>CALCULATED</span>
            </div>
          </div>

          {/* 3-Column Editorial Product Layout */}
          <div className="preview-dashboard-grid">
            {/* Column 1: Primary Score */}
            <div className="preview-col-metric">
              <div className="col-tag-row">
                <span className="col-tag">ILLUSTRATIVE RESULT</span>
              </div>

              <div className="metric-display-main">
                <div className="metric-large-num">
                  {animatedScore}
                  <span className="metric-unit-text">kg</span>
                </div>
                <div className="metric-unit-descriptor">
                  <strong>CO₂ equivalent</strong>
                  <span>per student / day</span>
                </div>
              </div>

              <div className="metric-context-card">
                <div className="ctx-row">
                  <span className="ctx-label">TU Average Estimate</span>
                  <span className="ctx-val">7.8 kg/day</span>
                </div>
                <div className="ctx-row">
                  <span className="ctx-label">Your Relative Tier</span>
                  <span className="ctx-badge-green">-18% Below Avg</span>
                </div>
              </div>

              <div className="disclaimer-mini">
                * Sample profile based on daily shared transit & campus hostel residency.
              </div>
            </div>

            {/* Column 2: Breakdown Bars */}
            <div className="preview-col-breakdown">
              <div className="col-tag-row">
                <span className="col-tag">EMISSION PROPORTIONS</span>
                <span className="col-sublabel">By Category</span>
              </div>

              <div className="breakdown-items-container">
                {BREAKDOWN_DATA.map((item) => (
                  <div key={item.name} className="breakdown-item-wrap">
                    <div className="item-label-line">
                      <span className="item-cat-name">{item.name}</span>
                      <div className="item-stats-duo">
                        <span className="item-kg">{item.kg} kg</span>
                        <strong className="item-pct">{item.percent}%</strong>
                      </div>
                    </div>
                    <div className="item-progress-bar-bg">
                      <div
                        className="item-progress-bar-fill"
                        style={{
                          width: isVisible ? `${item.percent}%` : "0%",
                          backgroundColor: item.color,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stacked Composition Line */}
              <div className="stacked-segment-bar">
                <div
                  className="seg seg-1"
                  style={{ width: isVisible ? "46%" : "0%" }}
                  title="Transport: 46%"
                ></div>
                <div
                  className="seg seg-2"
                  style={{ width: isVisible ? "28%" : "0%" }}
                  title="Energy: 28%"
                ></div>
                <div
                  className="seg seg-3"
                  style={{ width: isVisible ? "18%" : "0%" }}
                  title="Food: 18%"
                ></div>
                <div
                  className="seg seg-4"
                  style={{ width: isVisible ? "8%" : "0%" }}
                  title="Waste: 8%"
                ></div>
              </div>
            </div>

            {/* Column 3: Recommended Action */}
            <div className="preview-col-action">
              <div className="col-tag-row">
                <span className="col-tag highlight">YOUR BIGGEST OPPORTUNITY</span>
              </div>

              <div className="action-card-content">
                <div className="action-icon-wrap">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="action-target-domain">Transportation</h3>
                <p className="action-prescription">
                  Small changes to your commute could have the largest effect on your footprint.
                </p>
                <div className="action-stat-pill">
                  <span>Potential Reduction:</span>
                  <strong>-1.2 kg CO₂e / day</strong>
                </div>
              </div>

              <div className="action-card-footer">
                <a href="#hero-calculator" className="preview-cta-btn">
                  <span>Calculate Yours Now</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactPreview;
