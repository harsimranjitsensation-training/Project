import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

const TOY_CATEGORIES = [
  { id: "0-2", name: "0-2 Years", count: "1,200", image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&w=600&q=80" },
  { id: "3-5", name: "3-5 Years", count: "3,400", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80" },
  { id: "6-8", name: "6-8 Years", count: "2,900", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80" },
  { id: "9-plus", name: "9+ Years", count: "1,800", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80" }
];

const TRENDING_TOYS = [
  { id: 1, name: "RoboCoder STEM Kit", description: "Learn coding basics with hands-on mechanical building blocks.", price: 4999, badge: "Best Seller", image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "3D Magnetic Dream Castle", description: "Vibrant magnetic tiles to design magnificent architectural structures.", price: 3299, badge: "Top Rated", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Vintage Wooden Marble Run", description: "Gravity-powered wooden puzzle maze to develop logic skills.", price: 2499, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "SkyExplorer Solar System Kit", description: "Build and rotate a glowing electronic solar system model.", price: 1899, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80" }
];

const SAFETY_PROMISES = [
  { icon: "🛡️", title: "100% Non-Toxic", sub: "BPA-free & organic finishes" },
  { icon: "🇪🇺", title: "EN71 Certified", sub: "Meets strict safety standards" },
  { icon: "🧩", title: "Skill Development", sub: "Designed by child educators" },
  { icon: "↩️", title: "Easy Returns", sub: "30-day hassle-free replacement" }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Safety & Promise Bar */}
      <section className="container" style={{ marginTop: '3.5rem' }}>
        <div className="trust-bar anim-fadein-up">
          {SAFETY_PROMISES.map((promise) => (
            <div key={promise.title} className="trust-item">
              <div className="trust-icon">{promise.icon}</div>
              <div>
                <div className="trust-title">{promise.title}</div>
                <div className="trust-sub">{promise.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories by Age Group */}
      <section id="categories" className="section container">
        <div className="section-header">
          <div className="section-eyebrow anim-fadein-up">✦ Discover by Age</div>
          <h2 className="section-title anim-fadein-up delay-1">
            Shop by <span className="gradient-text">Age Group</span>
          </h2>
          <p className="section-subtitle anim-fadein-up delay-2">
            Every developmental milestone deserves the perfect toy. Choose the right match for your kid.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 anim-fadein-up delay-2">
          {TOY_CATEGORIES.map(c => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      {/* Hot & Trending Section */}
      <section className="section container" style={{ paddingTop: 0 }}>
        <div className="section-header flex justify-between items-center" style={{ marginBottom: '2.5rem' }}>
          <div>
            <div className="section-eyebrow anim-fadein-up">✦ Hot Toys</div>
            <h2 className="section-title anim-fadein-up delay-1" style={{ marginBottom: 0 }}>
              Trending <span className="gradient-text">Creations</span>
            </h2>
          </div>
          <a href="/category/9-plus" className="btn btn-ghost anim-fadein-up">View All Toys →</a>
        </div>
        <div className="grid grid-cols-4 gap-6 anim-fadein-up delay-2">
          {TRENDING_TOYS.map(toy => (
            <ProductCard
              key={toy.id}
              product={toy}
              onAddToCart={() => alert(`Added ${toy.name} to cart!`)}
              onAddToWishlist={() => alert(`Added ${toy.name} to wishlist!`)}
            />
          ))}
        </div>
      </section>

      {/* Special Promo Section */}
      <section className="container" style={{ paddingBottom: '6.5rem' }}>
        <div className="anim-fadein-up" style={{
          background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
          borderRadius: '2rem',
          padding: '4rem',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ position: 'absolute', top: '-60px', right: '150px', width: '250px', height: '250px', background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }}></div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.75rem', color: 'white' }}>First Purchase Discount</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: '1rem' }}>
              Gift Your Child The<br />Freedom to Create
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', marginBottom: '2rem' }}>
              Get <strong>20% off</strong> on any educational or STEM toy. Use code <strong>CREATIVE20</strong> at checkout.
            </p>
            <a href="/signup" className="btn" style={{ background: 'white', color: '#8b5cf6', fontWeight: 700, padding: '0.875rem 2rem' }}>
              Get Coupon Code →
            </a>
          </div>
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <div style={{ fontSize: '6rem', lineHeight: 1, filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.35))' }}>🧸</div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container" style={{ paddingBottom: '6.5rem' }}>
        <div className="newsletter-section anim-fadein-up">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>✦ ToyVerse Club</div>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Join the <span className="gradient-text">Wonder Club</span>
            </h2>
            <p className="text-muted" style={{ maxWidth: '480px', margin: '0 auto 2.5rem' }}>
              Receive age-appropriate learning guides, safety alerts, and exclusive members-only deals.
            </p>
            <div className="newsletter-input-group">
              <input type="email" className="form-input" placeholder="Enter your email address..." />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
