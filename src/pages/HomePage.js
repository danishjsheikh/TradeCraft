import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import "./HomePage.css";


const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Semi Husked Coconuts",
      description: `
      <p>Semi husked coconuts are mature coconuts with the outer green husk partially removed, leaving the hard shell intact while retaining some of the fibrous coir. 
      This makes them ideal for export as they are more compact than fully husked coconuts, while still offering protection to the inner shell and water content.
      These coconuts are naturally rich in coconut water and have thick, firm white meat, making them ideal for various culinary and industrial purposes. 
      They are harvested in a matured state and selected carefully for quality, weight, and shelf life.</p>
      
      <p><strong>Uses</strong>: Consumption, Cooking, Rituals, Cosmetics, Processing, Export</p>
      
      <p>🥥 <strong>Standard Export Packing Methods</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Capacity: Typically hold 25 coconuts per bag.<br>
      Weight: Each bag weighs approximately 13–14 kg.<br>
      Features: Durable, moisture-resistant, and suitable for long-distance transportation.
      </br>
      <strong>2. Gunny (Jute) Bags</strong><br>
      Capacity: Also accommodate around 25 coconuts per bag.<br>
      Weight: Similar to PP bags, each weighs about 13–14 kg.<br>
      Features: Eco-friendly and breathable, allowing air circulation to prevent mold.
      </br>
      <strong>3. Palletized Packing</strong><br>
      Configuration: Bags are stacked on wooden pallets, typically 50 bags per pallet.<br>
      Container Load: A 40-foot reefer container can hold approximately 20 pallets, totaling around 1,000 bags or 25,000 kg of coconuts.<br>
      Advantages: Facilitates easy loading/unloading and complies with certain countries' import regulations.</p>
      
      <p>📦 <strong>Container Loading Specifications</strong>
      </br>
      Container Type: 40-foot reefer container.<br>
      Total Bags: Approximately 1,000 bags per container.<br>
      Total Weight: Around 25,000 kg of semi-husked coconuts.<br>
      Pallets: 20 pallets per container, with 50 bags each.<br>
      Net Weight: Approximately 26,500 kg, accounting for pallet weight.</p>`,
      image: [
        "/assets/products/coconuts/coconut.jpg",
        "/assets/products/coconuts/coconut_1.jpg",
        "/assets/products/coconuts/coconut_2.jpg"
      ],
      category: "coconut",
    },
    {
      id: 2,
      name: "Basmati Rice",
      description: `
      <p>Grown primarily in the northwestern regions of India — Punjab, Haryana, and Uttar Pradesh — 1121 Basmati Rice (White, Steam, Sella/Parboiled) is globally prized for its distinctive aroma, exceptional grain length, and elongation upon cooking. 
      It is ideal for culinary excellence in biryanis and other premium rice dishes.</p>

      <p><strong>Uses</strong>: Cooking, Export, Retail, Horeca, Catering, Gourmet</p>

      <p>🧺 <strong>Types of Packing Materials</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Durable and economical packaging, suitable for bulk transport.
      </br>
      <strong>2. BOPP Laminated Bags</strong><br>
      Premium printed packaging with high moisture resistance and a polished appearance, ideal for branding and retail.
      </br>
      <strong>3. Jute Bags</strong><br>
      Eco-friendly and breathable, offering traditional appeal and sustainable packaging solutions.
      </br>
      <strong>Available Packing Sizes</strong>: 10 kg, 15 kg, 25 kg (Custom sizes available as per buyer requirement)</p>

      <p>📦 <strong>Container Loading Specifications</strong><br>
      Container Type: 20-foot container<br>
      Load Capacity: Approx. 25 Metric Tons (MT)</p>`,

      image: ["/assets/products/rice/basmati_rice.png"],
      category: "rice",
    },
    {
      id: 3,
      name: "Onions",
      description: `
      <p>Export-quality onions include varieties such as <b>Podisu Onion</b>, <b>Red Onion</b>, <b>White Onion</b>, <b>Krishnapuram Rose Onion</b>, and <b>Bangalore Rose Onion</b>. These onions are carefully graded and typically range in size from 45mm to 60mm, making them suitable for international markets and diverse culinary applications.</p>

      <p><b>Uses</b>: Cooking, Export, Retail, Processing, Horeca</p>

      <p><b>🧺 Types of Packing Materials</b><br>
      <b>Mesh Bags</b><br>
      Widely used for onion packaging, breathable and lightweight, available in 6kg, 10kg, and 20kg sizes depending on buyer requirements.<br>

      <b>Customized Packing</b><br>
      Packing can be tailored based on importing country regulations and client specifications.</p>
      
      <p><b>📦 Container Loading Specifications</b><br>
      Container Type: Reefer Containers<br>
      Temperature Range: 45–55°F<br>
      Loading in 20ft Container: Approx. 12.5–13 Metric Tons<br>
      Loading in 40ft Container: Approx. 28 Metric Tons</p>`,

      image: [
        "/assets/products/onions/onion.jpg",
        "/assets/products/onions/onion_1.jpg"
      ],
      category: "onion",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Sourcing & Procurement",
      description:
        "Identifying and sourcing high-quality agricultural products from local farmers with international quality checks.",
      icon: "fas fa-seedling",
    },
    {
      id: 2,
      title: "Logistics & Supply Chain",
      description:
        "Coordinating transport, freight, and customs clearance for both sea and air shipments with timely delivery.",
      icon: "fas fa-shipping-fast",
    },
    {
      id: 3,
      title: "Documentation & Compliance",
      description:
        "Managing export/import documents and ensuring compliance with global trade and safety standards.",
      icon: "fas fa-file-alt",
    },
  ];
  console.log("App rendered");

  return (
    <div className="home-page">
      <Hero />

      <section className="featured-products section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                delay={index * 200}
              />
            ))}
          </div>
          <div className="view-all">
            <Link to="/products" className="btn">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section section">
        <div className="container">
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <h2>About Tradecraft</h2>
              <p>
                At TradeCraft, we may be a new name in the market — but behind
                it lies a legacy of experience, trust, and deep-rooted
                expertise. Based in Karnataka and Maharashtra, we are an
                agricultural export company specializing in premium rice, fresh
                onions, and coconuts, and various other agri products sourced
                directly from the heart of India's farmlands.
              </p>
              <p>
                While TradeCraft is a newly established venture, our team brings
                with it decades of hands-on experience in international trade
                and export operations. We've navigated global markets, built
                strong supply chains, and earned the trust of clients worldwide
                — and now, we're channeling all of that into a fresh, focused
                agri-export brand built for the future.
              </p>
              <p>
                With a strong farmer network, modern logistics, and a
                quality-first mindset, we look to serve all global destinations,
                ensuring every shipment reflects the care, commitment, and
                consistency it deserves.
              </p>

              <Link to="/contact" className="btn">
                Learn More
              </Link>
            </div>
            <div className="about-image" data-aos="fade-left">
              <div className="image-wrapper">
                <img src="/assets/farmers-working.webp" alt="Tradecraft farmers" />
              </div>
              <div className="image-wrapper">
                <img src="/assets/workers.jpg" alt="Workers processing commodities" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                delay={index * 200}
              />
            ))}
          </div>
          <div className="view-all">
            <Link to="/services" className="btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Source the Best Commodities?</h2>
            <p>
              Connect with us today and discover the difference quality makes.
            </p>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-slider">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Tradecraft has been our reliable partner for sourcing quality
                  rice and coconut products. Their commitment to quality is
                  unmatched."
                </p>
                <div className="testimonial-author">
                  <div className="author-details">
                    <h4>John Smith</h4>
                    <p>Food Processing Inc.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "We've been working with Tradecraft for over 5 years now, and
                  they have consistently delivered premium quality commodities
                  on time."
                </p>
                <div className="testimonial-author">
                  <div className="author-details">
                    <h4>Sarah Johnson</h4>
                    <p>Global Foods Ltd.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
