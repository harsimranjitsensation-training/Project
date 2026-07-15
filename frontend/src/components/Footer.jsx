import { Link } from "react-router-dom";

const SOCIALS = [
  { icon: "𝕏", label: "Twitter" },
  { icon: "▷", label: "YouTube" },
  { icon: "⊙", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Flame */}
                <path d="M9 18C9 20.5 10.5 22 12 22C13.5 22 15 20.5 15 18H9Z" fill="#ff7b54" opacity="0.8"/>
                <path d="M10 18C10 19.5 11 20.5 12 20.5C13 20.5 14 19.5 14 18H10Z" fill="#ff6b8b"/>
                {/* Body */}
                <path d="M12 2C15 6 16.5 10 16.5 14.5C16.5 16 15.5 17 14 17H10C8.5 17 7.5 16 7.5 14.5C7.5 10 9 6 12 2Z" fill="url(#footer-grad)" />
                {/* Fins */}
                <path d="M7.5 13L4.5 16.5V17H7.5V13Z" fill="#7c3aed"/>
                <path d="M16.5 13L19.5 16.5V17H16.5V13Z" fill="#7c3aed"/>
                {/* Window */}
                <circle cx="12" cy="9" r="2" fill="#fffbf7"/>
                <circle cx="12" cy="9" r="1" fill="#22d3ee"/>
                
                <defs>
                  <linearGradient id="footer-grad" x1="12" y1="2" x2="12" y2="17" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff7b54"/>
                    <stop offset="0.5" stopColor="#ff6b8b"/>
                    <stop offset="1" stopColor="#7c3aed"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="gradient-text">ToyVerse</span>
            </div>
            <p className="footer-brand-desc">
              Unlocking imagination, creativity, and STEM skills for kids across India. Premium, child-safe learning toys.
            </p>
            <div className="flex gap-3" style={{ marginTop: '1.5rem' }}>
              {SOCIALS.map(s => (
                <button key={s.label} className="btn-icon" style={{ fontSize: '1rem' }} title={s.label}>{s.icon}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-col-title">Shop by Age</div>
            <Link to="/category/0-2" className="footer-link">0-2 Years</Link>
            <Link to="/category/3-5" className="footer-link">3-5 Years</Link>
            <Link to="/category/6-8" className="footer-link">6-8 Years</Link>
            <Link to="/category/9-plus" className="footer-link">9+ Years</Link>
          </div>
          <div>
            <div className="footer-col-title">About Us</div>
            {["Our Story", "Pedagogy & Design", "Safety Protocols", "Parent Reviews", "Press & Awards"].map(l => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>
          <div>
            <div className="footer-col-title">Support</div>
            {["Parent Helpdesk", "Track Gift Order", "Easy Replacements", "FAQ", "Shipping Policy"].map(l => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ToyVerse. All rights reserved.</span>
          <span>Crafted with ♥ for Curious Minds</span>
        </div>
      </div>
    </footer>
  );
}
