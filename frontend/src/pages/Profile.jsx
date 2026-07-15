import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TOY_ORDERS = [
  { id: "#ORD-5542", date: "Jul 12, 2026", total: "₹4,999", status: "delivered", items: 1 },
  { id: "#ORD-5431", date: "Jun 20, 2026", total: "₹1,299", status: "shipped", items: 1 },
];

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="page-wrapper container">
        <div className="profile-grid anim-fadein-up">
          {/* Sidebar */}
          <div className="profile-sidebar">
            <div className="profile-avatar">JS</div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontWeight: 700 }}>John Smith</div>
              <div className="text-muted" style={{ fontSize: '0.875rem' }}>john.smith@email.com</div>
            </div>
            <div className="divider"></div>
            <div style={{ marginTop: '1rem' }}>
              {[['📦', 'Order History', true], ['👤', 'Parent Profile', false], ['📍', 'Address Book', false], ['♡', 'Kids Toy Box', false]].map(([icon, label, active]) => (
                <a key={label} href="#" className={`profile-nav-link ${active ? 'active' : ''}`}>
                  <span>{icon}</span> {label}
                </a>
              ))}
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                <a href="/signin" className="profile-nav-link" style={{ color: '#ef4444' }}>
                  <span>↩</span> Sign Out
                </a>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="anim-fadein-up delay-1">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4" style={{ marginBottom: '2.5rem' }}>
              {[['2', 'Toys Purchased'], ['₹6,298', 'Total Spent'], ['5.0★', 'Feedback Rating']].map(([v, l]) => (
                <div key={l} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, background: 'linear-gradient(135deg,#8b5cf6,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{v}</div>
                  <div className="text-muted" style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>{l}</div>
                </div>
              ))}
            </div>

            {/* Orders Table */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Purchase History</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {TOY_ORDERS.map(o => (
                    <tr key={o.id}>
                      <td style={{ fontWeight: 600 }}>{o.id}</td>
                      <td className="text-muted">{o.date}</td>
                      <td className="text-muted">{o.items} toy{o.items > 1 ? 's' : ''}</td>
                      <td style={{ fontWeight: 700 }}>{o.total}</td>
                      <td><span className={`status-badge status-${o.status}`}>{o.status.charAt(0).toUpperCase() + o.status.slice(1)}</span></td>
                      <td><button className="btn btn-ghost btn-sm">View Details</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
