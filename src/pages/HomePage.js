import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import "./HomePage.css";
import farmers_working from "./assets/farmers-working.webp";
import workers from "./assets/workers.jpg";

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Coconut Oil",
      description:
        "Pure, organic virgin coconut oil extracted using traditional methods.",
      origin: "Sri Lanka",
      image: "/assets/coconut-oil.jpg",
    },
    {
      id: 2,
      name: "Basmati Rice",
      description:
        "Long-grain aromatic rice known for its distinctive flavor and aroma.",
      origin: "India",
      image: "/assets/basmati-rice.jpg",
    },
    {
      id: 3,
      name: "Red Onions",
      description:
        "Fresh and crisp red onions with rich flavor perfect for any dish.",
      origin: "Spain",
      image: "/assets/red-onions.jpg",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Bulk Supply",
      description:
        "We provide large scale supply solutions for restaurants, supermarkets and food manufacturers.",
      icon: "fas fa-truck",
    },
    {
      id: 2,
      title: "Quality Assurance",
      description:
        "Every product goes through rigorous quality checks before reaching our customers.",
      icon: "fas fa-certificate",
    },
    {
      id: 3,
      title: "Global Delivery",
      description:
        "We deliver our premium commodities to doorsteps across the globe.",
      icon: "fas fa-globe",
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
                <img src={farmers_working} alt="Tradecraft farmers" />
              </div>
              <div className="image-wrapper">
                <img src={workers} alt="Workers processing commodities" />
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
