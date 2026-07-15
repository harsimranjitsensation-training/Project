import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const TOY_DATABASE = {
  "0-2": [
    { id: 1, name: "Sensory Elephant Plush", description: "BPA-free organic cotton plush toy with crackly textures and soothing sounds.", price: 999, badge: "Eco Friendly", image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Wooden Rainbow Stacker", description: "All-natural wooden stacking rings dyed with organic vegetable extracts.", price: 1299, image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Musical Infant Playgym", description: "Comes with hanging developmental rattles and a soft touch-activated piano keyboard.", price: 3499, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Organic Cotton Grip Teether", description: "Soft hand-crocheted animal grip teether designed for painful gums.", price: 599, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80" }
  ],
  "3-5": [
    { id: 5, name: "3D Magnetic Dream Castle", description: "60-piece colorful magnetic building tiles that boost spatial intelligence.", price: 3299, badge: "Trending", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Classic Chef Wooden Kitchen", description: "Miniature play kitchen with realistic stove clicks, turning dials, and utensil set.", price: 5999, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Phonics Alphabet Interactive Board", description: "Touch-activated talking chart that teaches letters, pronunciation, and spelling.", price: 1599, image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Organic Modeling Dough Set", description: "Wheat-free, non-drying modeling dough made with food-grade ingredients.", price: 899, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80" }
  ],
  "6-8": [
    { id: 9, name: "Vintage Wooden Marble Run", description: "Gravity-powered mechanical marble maze puzzle that develops logical reasoning.", price: 2499, badge: "STEM", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "Kids' Snap Circuit Explorer", description: "Safe electronic building blocks to build working alarms, radios, and light displays.", price: 1999, image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Kinetic Dream Moving Sand", description: "Hydrophobic modeling sand that flows through fingers like liquid magic.", price: 1499, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80" },
    { id: 12, name: "Programmable Smart Car", description: "Introduce basic programming concepts to children with this remote-controllable robot.", price: 4499, image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80" }
  ],
  "9-plus": [
    { id: 13, name: "RoboCoder STEM Robot Kit", description: "Build and program a dual-treaded smart robot equipped with obstacle detection.", price: 4999, badge: "Advanced", image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=600&q=80" },
    { id: 14, name: "SkyExplorer Solar System Kit", description: "Paint, build, and animate an electronic solar system with rotating orbits.", price: 1899, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80" },
    { id: 15, name: "Technic Mechanical Rally Buggy", description: "850-piece complex mechanical construct with independent suspension and gear steering.", price: 7999, image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80" },
    { id: 16, name: "Hydraulic Smart Robotic Arm", description: "Assemble an industrial robot arm completely driven by fluid pressure. No batteries.", price: 3999, image: "https://images.unsplash.com/photo-1617791160505-6f006e121980?auto=format&fit=crop&w=600&q=80" }
  ]
};

const AGE_INFO = {
  "0-2": { name: "Infants & Toddlers", desc: "Sensory stimuli, soft textures, and basic motor skill development toys." },
  "3-5": { name: "Preschool Explorers", desc: "Creative roleplay, interactive alphabet charts, and vibrant magnetic building blocks." },
  "6-8": { name: "Young Logic Builders", desc: "Beginner electronics kits, gravity wooden mazes, and logical reasoning games." },
  "9-plus": { name: "Advanced Innovators", desc: "Complex mechanics, robotics kits, solar system scale projects, and coding guides." }
};

const SORT_OPTIONS = ["Featured", "Price: Low to High", "Price: High to Low"];

export default function Category() {
  const { id } = useParams();
  const [sort, setSort] = useState("Featured");
  
  const currentKey = TOY_DATABASE[id] ? id : "0-2";
  const info = AGE_INFO[currentKey];
  let toys = TOY_DATABASE[currentKey];

  if (sort === "Price: Low to High") {
    toys = [...toys].sort((a, b) => a.price - b.price);
  } else if (sort === "Price: High to Low") {
    toys = [...toys].sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(236, 72, 153, 0.08))', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0', marginBottom: '3rem' }}>
          <div className="container">
            <p className="section-eyebrow anim-fadein-up" style={{ marginBottom: '0.5rem' }}>✦ Age Category</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.75rem', fontWeight: 800 }} className="anim-fadein-up delay-1">
              Toys for {id === "9-plus" ? "9+ Years" : `${id} Years`}
            </h1>
            <p className="text-muted anim-fadein-up delay-2" style={{ marginTop: '0.5rem' }}>{info.desc}</p>
          </div>
        </div>

        <div className="container">
          {/* Toolbar */}
          <div className="flex justify-between items-center" style={{ marginBottom: '2.5rem' }}>
            <div className="text-muted" style={{ fontSize: '0.9rem' }}>{toys.length} exclusive toys found</div>
            <div className="flex items-center gap-3">
              <span className="text-muted" style={{ fontSize: '0.875rem' }}>Sort by:</span>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="form-input"
                style={{ width: 'auto', padding: '0.5rem 1.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', color: 'var(--color-text-main)' }}
              >
                {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-4 gap-6 anim-fadein-up">
            {toys.map(p => (
              <ProductCard 
                key={p.id} 
                product={p}
                onAddToCart={() => alert(`Added ${p.name} to cart!`)}
                onAddToWishlist={() => alert(`Added ${p.name} to wishlist!`)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
