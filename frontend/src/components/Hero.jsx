import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Orbs */}
      <div className="hero-bg">
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>
      </div>

      <div className="hero-content container">
        <div className="hero-grid">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            <div className="hero-eyebrow">
              <span>🚀</span>
              Play, Learn & Innovate
            </div>
            <h1 className="hero-title">
              Where Imagination <br />
              <span className="gradient-text">Meets Play.</span>
            </h1>
            <p className="hero-subtitle">
              Explore our premium collection of educational, creative, and smart toys designed to inspire minds across every age group.
            </p>
            <div className="hero-cta">
              <Link to="#categories" className="btn btn-primary btn-lg">
                Explore Age Groups
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/category/9-plus" className="btn btn-ghost btn-lg">
                Advanced STEM
              </Link>
            </div>
            
            <div className="hero-stats">
              <div>
                <div className="stat-number">10K+</div>
                <div className="stat-label">Curated Toys</div>
              </div>
              <div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Child Safe</div>
              </div>
              <div>
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Parent Rating</div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual">
            <div className="hero-img-container anim-float">
              <img
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Premium Educational Toy"
                className="hero-img"
              />
              
              {/* Floating Badge 1 */}
              <div className="hero-floating-card hero-floating-card-1">
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#8b5cf6,#ec4899)', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'1.1rem' }}>🧩</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Brain Booster</div>
                  <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>STEM Certified</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="hero-floating-card hero-floating-card-2">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🏆</div>
                <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>Top Brand</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.75rem' }}>Award Winning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
