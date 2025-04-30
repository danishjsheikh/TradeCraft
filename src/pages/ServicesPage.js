import React from "react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import "./ServicesPage.css";

const ServicesPage = () => {
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
    {
      id: 4,
      title: "Regulatory Expertise",
      description:
        "Navigating complex customs and regulations to ensure smooth global trade and reduced risks.",
      icon: "fas fa-balance-scale",
    },
    {
      id: 5,
      title: "Cost-Effective Solutions",
      description:
        "Leveraging negotiated carrier rates and local knowledge to reduce shipping costs and avoid delays.",
      icon: "fas fa-dollar-sign",
    },
    {
      id: 6,
      title: "End-to-End Logistics",
      description:
        "Tailored logistics services backed by deep experience to streamline your global supply chain.",
      icon: "fas fa-network-wired",
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
