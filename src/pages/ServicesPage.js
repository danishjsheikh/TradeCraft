import React from "react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import "./ServicesPage.css";

const ServicesPage = () => {
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
    {
      id: 4,
      title: "Custom Packaging",
      description:
        "We offer branding and packaging solutions to fit your specific requirements.",
      icon: "fas fa-box",
    },
    {
      id: 5,
      title: "Sourcing Solutions",
      description:
        "We find the best quality products from trusted suppliers worldwide.",
      icon: "fas fa-search",
    },
    {
      id: 6,
      title: "Consultancy",
      description:
        "Get advice on market trends, pricing strategies, and product selection.",
      icon: "fas fa-comments",
    },
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive solutions for your food commodity needs</p>
        </div>
      </div>

      <section className="services-grid-section section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="service-process section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Consultation</h3>
                <p>
                  We start by understanding your specific needs and
                  requirements.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Selection</h3>
                <p>
                  We select the best products that match your quality standards.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Quality Check</h3>
                <p>
                  All products undergo rigorous quality checks before packaging.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Packaging</h3>
                <p>Products are packaged according to your specifications.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Shipping</h3>
                <p>Safe and timely delivery to your desired location.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta section">
        <div className="container">
          <div className="service-cta-content">
            <h2>Need a Custom Solution?</h2>
            <p>
              Contact our team and we'll create a tailored service package for
              your specific needs.
            </p>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
