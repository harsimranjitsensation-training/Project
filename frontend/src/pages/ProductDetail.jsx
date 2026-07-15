import { useParams, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TOY_DATABASE = {
  1: {
    name: "RoboCoder STEM Robot Kit",
    price: 4999,
    originalPrice: 5999,
    description: "Introduce your child to code, engineering, and artificial intelligence with our award-winning treaded robot. Designed by developmental specialists, this kit comes with snap-together blocks, electric motors, and a scratch-based drag-and-drop mobile programming interface.",
    features: ["BPA-Free Durable Shell", "Scratch-based Visual Block Programming", "Obstacle Detection Sensors", "USB Rechargeable Motors", "Ages 9+ Recommended"],
    images: [
      "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.9,
    reviews: 1422,
  }
};

const FALLBACK_TOY = {
  name: "Classic Wooden Puzzle & Block Set",
  price: 1499,
  originalPrice: 1999,
  description: "A premium set of child-safe geometric wooden building blocks designed to improve color coordination, creative spatial imagination, and fine motor skills. Handcrafted from organic rubberwood.",
  features: ["100% Organic Rubberwood", "Water-based Non-toxic Dyes", "Sanded Smooth Edges", "Ages 3+ Recommended"],
  images: [
    "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80"
  ],
  rating: 4.8,
  reviews: 955,
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = TOY_DATABASE[id] || FALLBACK_TOY;
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(product.rating) ? "★" : "☆"
  );

  return (
    <>
      <Navbar />
      <div className="page-wrapper container">
        <div className="product-detail-grid anim-fadein-up">
          {/* Gallery */}
          <div>
            <img src={product.images[activeImg]} alt={product.name} className="detail-img" />
            <div className="detail-thumbs">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="thumb"
                  className={`detail-thumb ${activeImg === i ? "active" : ""}`}
                  onClick={() => setActiveImg(i)}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="anim-fadein-up delay-1">
            <div className="detail-badge">● Child Safe EN71 Certified</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2 }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: '#f97316', fontSize: '1rem', letterSpacing: '0.05em' }}>{stars.join('')}</span>
              <span style={{ fontWeight: 700 }}>{product.rating}</span>
              <span className="text-muted" style={{ fontSize: '0.875rem' }}>({product.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div className="detail-price">₹{product.price.toLocaleString('en-IN')}</div>
              <span style={{ color: 'var(--color-text-muted)', textDecoration: 'line-through', fontSize: '1rem' }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 700 }}>
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            <p className="text-muted" style={{ lineHeight: 1.7, marginBottom: '2rem' }}>{product.description}</p>

            {/* Features */}
            <div className="flex" style={{ flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
              {product.features.map(f => (
                <span key={f} className="feature-chip">{f}</span>
              ))}
            </div>

            {/* Quantity + CTA */}
            <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem' }}>
              <div className="qty-control">
                <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <span className="qty-value">{qty}</span>
                <button className="qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
              </div>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => alert('Added to cart!')}>
                Add to Cart
              </button>
              <button className="btn-icon" title="Wishlist" onClick={() => alert('Saved to wishlist!')}>♡</button>
            </div>
            <button className="btn btn-ghost w-full">Buy Now — Instant Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
