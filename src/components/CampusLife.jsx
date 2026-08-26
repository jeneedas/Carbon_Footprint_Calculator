import { useScrollReveal } from "../hooks/useScrollReveal";

const CATEGORIES = [
  {
    num: "01",
    tag: "MOBILITY",
    title: "Transport",
    desc: "How you travel to and around campus.",
    detail: "Daily transit, personal vehicles, campus shuttles & bicycle usage.",
    factors: ["Fuel type", "Commute distance", "Carpooling frequency"],
  },
  {
    num: "02",
    tag: "POWER",
    title: "Energy",
    desc: "The energy behind your everyday routine.",
    detail: "Hostel rooms, labs, department ACs, lighting & electronics.",
    factors: ["Appliance hours", "Air conditioning", "Standby power"],
  },
  {
    num: "03",
    tag: "DIET",
    title: "Food",
    desc: "Your food choices and food waste.",
    detail: "Canteen meals, mess diet patterns, packaging & meal surplus.",
    factors: ["Meal sourcing", "Dairy & protein ratio", "Plate waste"],
  },
  {
    num: "04",
    tag: "CIRCULARITY",
    title: "Waste",
    desc: "What you consume, discard and segregate.",
    detail: "Paper, plastics, e-waste, composting & single-use disposables.",
    factors: ["Segregation habits", "Single-use items", "Recycling rate"],
  },
];

function CampusLife() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="campus-life-section" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`section-header-editorial ${isVisible ? "reveal-in" : ""}`}>
          <div className="header-left">
            <span className="eyebrow">YOUR EVERYDAY CAMPUS LIFE</span>
            <h2 className="section-title">
              Every habit leaves<br />
              <span className="title-muted">an impact.</span>
            </h2>
          </div>
          <div className="header-right">
            <p className="section-lead-text">
              Carbon emissions at Tezpur University aren't abstract data points—they are the cumulative footprint of hundreds of daily micro-decisions across hostels, classrooms, and cafeterias.
            </p>
          </div>
        </div>

        {/* Editorial 4-Column Grid with Hairline Dividers */}
        <div className={`life-editorial-grid ${isVisible ? "grid-revealed" : ""}`}>
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.num}
              className="life-grid-item"
              style={{ "--delay": `${idx * 0.12}s` }}
            >
              <div className="item-top-row">
                <span className="item-num-editorial">{cat.num}</span>
                <span className="item-tag-mono">{cat.tag}</span>
              </div>

              <div className="item-body">
                <h3 className="item-title">{cat.title}</h3>
                <p className="item-desc">{cat.desc}</p>
                <p className="item-detail">{cat.detail}</p>
              </div>

              <div className="item-factors">
                <span className="factor-header">Key Drivers</span>
                <ul className="factor-list">
                  {cat.factors.map((f, i) => (
                    <li key={i}>
                      <span className="bullet-dash">—</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CampusLife;
