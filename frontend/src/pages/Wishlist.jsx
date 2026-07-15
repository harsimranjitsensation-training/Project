import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const TOY_WISHLIST = [
  { id: 13, name: "RoboCoder STEM Robot Kit", description: "Build and program a treaded robotic companion with obstacles detection.", price: 4999, image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=600&q=80" },
  { id: 10, name: "Snap Circuit Explorer", description: "Electronic puzzle board to build working alarms, radios, and light matrices.", price: 1999, image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80" }
];

export default function Wishlist() {
  return (
    <>
      <Navbar />
      <div className="page-wrapper container">
        <div className="anim-fadein-up" style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 800 }}>Saved Toys</h1>
          <p className="text-muted">Toys saved for birthday or holiday gifts</p>
        </div>

        {TOY_WISHLIST.length > 0 ? (
          <div className="grid grid-cols-4 gap-6 anim-fadein-up">
            {TOY_WISHLIST.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={() => alert(`Added ${p.name} to cart!`)}
                onAddToWishlist={() => alert(`Already in wishlist.`)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state glass-card">
            <div className="empty-state-icon">🧸</div>
            <h2 style={{ marginBottom: '0.75rem' }}>Your toy list is empty</h2>
            <p className="text-muted" style={{ marginBottom: '2rem' }}>Browse the shop to save toys here.</p>
            <a href="/category/6-8" className="btn btn-primary">Start Browsing →</a>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
