import { useState, useEffect } from "react";
import { useCountUp } from "../hooks/useScrollReveal";

function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Trigger entrance animation right after mount
        const timer = setTimeout(() => {
            setMounted(true);
        }, 80);
        return () => clearTimeout(timer);
    }, []);

    const animatedKg = useCountUp(6.4, mounted, 1500, 1);

    return (
        <section className="hero" id="hero-calculator">
            <div className={`hero-content ${mounted ? "hero-enter" : ""}`}>
                <div className="hero-eyebrow-wrapper">
                    <span className="hero-badge">CAMPUS INITIATIVE</span>
                    <p className="eyebrow">TEZPUR UNIVERSITY · SUSTAINABILITY</p>
                </div>

                <h1 className="hero-headline">
                    <span className="headline-line">
                        <span className="headline-inner">Know Your Impact.</span>
                    </span>
                    <span className="headline-line headline-accent">
                        <span className="headline-inner">Shape Our Campus.</span>
                    </span>
                </h1>

                <p className="hero-description">
                    Understand your everyday carbon footprint and discover practical
                    changes that can make the biggest difference.
                </p>

                <div className="hero-actions">
                    <a href="#preview" className="primary-button hero-cta">
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

                    <a href="#how-it-works" className="secondary-button text-button">
                        <span>How it works</span>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </div>

                <div className="hero-meta-row">
                    <div className="meta-item">
                        <span className="meta-dot"></span>
                        <span>Built for students, faculty & staff</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-sep">/</span>
                        <span>Est. ~3 min assessment</span>
                    </div>
                </div>
            </div>

            {/* Right Data-Driven Card */}
            <div className={`footprint-showcase ${mounted ? "card-enter" : ""}`}>
                <div className="footprint-card">
                    <div className="card-top-bar">
                        <div className="tag-group">
                            <span className="indicator-pill"></span>
                            <span className="card-tag">ILLUSTRATIVE EXAMPLE</span>
                        </div>
                        <span className="card-unit-label">INDEX: CO₂e / DAY</span>
                    </div>

                    <div className="card-hero-metric">
                        <div className="big-number-wrap">
                            <span className="big-number-val">{animatedKg}</span>
                            <div className="metric-unit-col">
                                <span className="unit-primary">kg CO₂e</span>
                                <span className="unit-secondary">per day estimated</span>
                            </div>
                        </div>
                        <div className="benchmark-tag">
                            <span className="bench-title">TU Est. Range</span>
                            <span className="bench-val">4.5 – 9.2 kg</span>
                        </div>
                    </div>

                    <div className="carbon-breakdown">
                        <div className="breakdown-header">
                            <span className="label-caps">EMISSION BREAKDOWN</span>
                            <span className="breakdown-note">Share of total</span>
                        </div>

                        {/* Transport */}
                        <div className="breakdown-row">
                            <div className="row-labels">
                                <span className="category-title">
                                    <span className="cat-num">01</span> Transportation
                                </span>
                                <span className="percentage-val">46%</span>
                            </div>
                            <div className="progress-track">
                                <div
                                    className="progress-fill fill-transport"
                                    style={{ width: mounted ? "46%" : "0%" }}
                                ></div>
                            </div>
                        </div>

                        {/* Energy */}
                        <div className="breakdown-row">
                            <div className="row-labels">
                                <span className="category-title">
                                    <span className="cat-num">02</span> Energy
                                </span>
                                <span className="percentage-val">28%</span>
                            </div>
                            <div className="progress-track">
                                <div
                                    className="progress-fill fill-energy"
                                    style={{ width: mounted ? "28%" : "0%" }}
                                ></div>
                            </div>
                        </div>

                        {/* Food */}
                        <div className="breakdown-row">
                            <div className="row-labels">
                                <span className="category-title">
                                    <span className="cat-num">03</span> Food
                                </span>
                                <span className="percentage-val">18%</span>
                            </div>
                            <div className="progress-track">
                                <div
                                    className="progress-fill fill-food"
                                    style={{ width: mounted ? "18%" : "0%" }}
                                ></div>
                            </div>
                        </div>

                        {/* Waste */}
                        <div className="breakdown-row">
                            <div className="row-labels">
                                <span className="category-title">
                                    <span className="cat-num">04</span> Waste
                                </span>
                                <span className="percentage-val">8%</span>
                            </div>
                            <div className="progress-track">
                                <div
                                    className="progress-fill fill-waste"
                                    style={{ width: mounted ? "8%" : "0%" }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Opportunity Highlight */}
                    <div className="card-opportunity">
                        <div className="opp-header">
                            <span className="opp-badge">YOUR BIGGEST OPPORTUNITY</span>
                            <span className="opp-icon">⚡</span>
                        </div>
                        <h4 className="opp-title">Transportation</h4>
                        <p className="opp-desc">
                            Small changes to your commute could have the largest effect on
                            your footprint.
                        </p>
                    </div>

                    <div className="card-disclaimer-note">
                        <span>* Illustrative numbers only. Not actual TU statistics.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

