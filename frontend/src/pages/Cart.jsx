import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CART_ITEMS = [
  { id: 5, name: "3D Magnetic Dream Castle", price: 3299, qty: 1, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=200&q=80" },
  { id: 2, name: "Wooden Rainbow Stacker", price: 1299, qty: 1, image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&w=200&q=80" }
];

export default function Cart() {
  const subtotal = CART_ITEMS.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <div className="page-wrapper container">
        <div className="anim-fadein-up" style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 800 }}>Your Toy Box (Cart)</h1>
          <p className="text-muted">{CART_ITEMS.length} custom toys inside</p>
        </div>

        <div className="cart-grid">
          {/* Items */}
          <div className="flex flex-col gap-4 anim-fadein-up">
            {CART_ITEMS.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div style={{ flex: 1 }}>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Quantity: {item.qty}</div>
                  <div className="cart-item-price">₹{(item.price * item.qty).toLocaleString('en-IN')}</div>
                </div>
                <button className="btn btn-ghost btn-sm" style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}>Remove</button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="anim-fadein-up delay-2">
            <div className="order-summary">
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="summary-row">
                <span>Eco Shipping</span>
                <span style={{ color: shipping === 0 ? '#10b981' : 'inherit' }}>
                  {shipping === 0 ? 'Free ✓' : `₹${shipping}`}
                </span>
              </div>
              <div className="summary-row">
                <span>Tax (18% GST)</span>
                <span>₹{Math.round(subtotal * 0.18).toLocaleString('en-IN')}</span>
              </div>
              <div className="divider"></div>
              <div className="summary-total">
                <span>Total</span>
                <span className="summary-total-price">₹{(total + Math.round(subtotal * 0.18)).toLocaleString('en-IN')}</span>
              </div>

              <div style={{ padding: '1.25rem 0', marginBottom: '1rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <div className="flex gap-2">
                    <input type="text" className="form-input" placeholder="Promo code" />
                    <button className="btn btn-ghost">Apply</button>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary w-full btn-lg">
                Proceed to Checkout →
              </button>
              <p className="text-muted text-center" style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
                🔒 Secure 256-bit SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
