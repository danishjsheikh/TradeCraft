import React from "react";
import CertificateCard from "../components/CertificateCard";
import "./CertificatesPage.css";

const CertificatesPage = () => {
  const certificates = [
    {
      id: 1,
      name: "APEDA Certification",
      // description:
      //   "Our products are certified organic, ensuring they are grown without synthetic pesticides or fertilizers.",
      icon: "/certificates/APEDA_CERTIFICATE.pdf",
    },
    {
      id: 2,
      name: "Avina Udyam",
      // description:
      //   "Recognized for excellence and innovation under the Avina Udyam Certification, empowering growth and sustainability in enterprises.",
      icon: "/certificates/AVINA_UDYAM.pdf",
    },
    {
      id: 3,
      name: "Tradecraft GST Certificate",
      // description:
      //   "Officially registered under the Goods and Services Tax (GST) regime, enabling compliant and transparent business operations.",
      icon: "/certificates/TRADECRAFT_GST_CERTIFICATE.pdf",
    },
    {
      id: 4,
      name: "Tradecraft IEC",
      // description:
      //   "Authorized with an Importer Exporter Code (IEC) for conducting international trade operations.",
      icon: "/certificates/TRADECRAFT_IEC.pdf",
    },
    {
      id: 5,
      name: "FSSAI License",
      // description:
      //   "Authorized with FSSAI for food safety and Standards.",
      icon: "/certificates/FSSAI LICENSE.pdf",
    },
  ];

  return (
    <div className="certificates-page">
      <div className="certificates-hero">
        <div className="container">
          <h1>Our Certificates</h1>
          <p>Quality assurance through recognized certifications</p>
        </div>
      </div>

      <section className="certificates-section section">
        <div className="container">
          <h2 className="section-title">Quality Certifications</h2>
          <div className="certificates-grid">
            {certificates.map((certificate, index) => {
              return (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  delay={index * 25}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="quality-commitment section">
        <div className="container">
          <div className="quality-content">
            <div className="quality-text">
              <h2>Our Commitment to Quality</h2>
              <p>
                At Tradecraft, we're dedicated to providing only the highest
                quality products. Our certifications are more than just logos —
                they represent our ongoing commitment to excellence,
                sustainability, and ethical business practices.
              </p>
              <p>
                We work closely with farmers and producers who share our vision
                for quality and sustainability. Every step of our supply chain
                is carefully monitored to ensure that our high standards are
                consistently met.
              </p>
              <p>
                Our quality control team regularly conducts inspections and
                tests on all products to verify they meet the stringent
                requirements of our certifications and our own internal quality
                benchmarks.
              </p>
            </div>
            <div className="quality-image">
              <img src="/assets/quality_inspection.png" alt="Quality inspection" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificatesPage;
