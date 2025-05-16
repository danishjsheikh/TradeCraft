import React from "react";
import "./ContactPage.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const containerStyle = {
  width: "100%",
  height: "250px", // Reduced height
};

const center = {
  lat: 15.3173,
  lng: 75.7139,
};

const locations = [
  {
    position: { lat: 19.1738, lng: 72.956 }, // Mumbai
  },
  {
    position: { lat: 13.3531, lng: 74.785 }, // Manipal
  },
];

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries and support</p>
        </div>
      </div>

      {/* Contact Section - Now Full Width */}
      <section className="contact-section section" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div className="contact-content-wrapper">
            {/* Full Width: Contact Info & Map */}
            <div className="contact-info-column">
              <div className="contact-info-card">
                <h2>Get in Touch</h2>

                <div className="info-blocks-wrapper">
                  <div className="info-block">
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-content">
                      <h3>Maharashtra Office</h3>
                      <p>
                        <a href ="https://maps.app.goo.gl/PCS71F5oceQjBVs36" target="_blank">
                        513, 5th Floor, Shree Samart Plaza, Gupta Bhavan,
                        RRT Road, Opp. Mulund West Railway Station,
                        Mumbai 400080
                        </a>
                      </p>
                      <div className="mini-map">
                        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
                          <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={locations[0].position}
                            zoom={14}
                          >
                            <Marker position={locations[0].position} />
                          </GoogleMap>
                        </LoadScript>
                      </div>
                    </div>
                  </div>

                  <div className="info-block">
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-content">
                      <h3>Karnataka Office</h3>
                      <p>
                        <a href ="https://maps.app.goo.gl/mc7J1QxbCYccL54M9" target="_blank">
                        GRACE, 265-4(3), Mangala Colony, Off Alevoor Road,
                        Manipal, Udupi District, Karnataka 576104
                        </a>
                      </p>
                      <div className="mini-map">
                        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
                          <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={locations[1].position}
                            zoom={14}
                          >
                            <Marker position={locations[1].position} />
                          </GoogleMap>
                        </LoadScript>
                      </div>
                    </div>
                  </div>

                  <div className="contact-details-grid">
                    <div className="info-block contact-detail-item">
                      <div className="info-icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="info-content">
                        <h3>Phone</h3>
                        <p>
                          <a href="tel:+919819830716">Mobile: +91 9819830716</a>
                        </p>
                        <p>
                          <a href="tel:+918202575200"> Tel: 0820-2575200</a>
                        </p>
                      </div>
                    </div>

                    <div className="info-block contact-detail-item">
                      <div className="info-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="info-content">
                        <h3>Email</h3>
                        <p>
                          <a href="mailto:trading@tradecraft.co.in">
                            trading@tradecraft.co.in
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="info-block contact-detail-item">
                      <div className="info-icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="info-content">
                        <h3>Working Hours</h3>
                        <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                        <p>Sat: 10:00 AM – 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section - Now Full Width and Below Contact with reduced spacing */}
      <section className="about-section section">
        <div className="container">
          <div className="about-content-wrapper">
            <div className="about-summary-card">
              <h2>About Tradecraft</h2>
              <div className="about-summary-content">
                <p className="company-intro">
                  TradeCraft is a newly established venture, bringing
                  decades of experience in international trade and export
                  operations. With a strong farmer network, modern
                  logistics, and a quality-first mindset, we serve all
                  global destinations.
                </p>
                
                <div className="info-boxes-container">
                  <div className="company-mission">
                    <h3>Our Mission</h3>
                    <p>
                      We aim to create sustainable value chains that benefit farmers, 
                      processors, and consumers alike. By focusing on quality products 
                      and ethical business practices, we're building trade relationships 
                      that last for generations.
                    </p>
                  </div>
                  
                  <div className="company-vision">
                    <h3>Our Vision</h3>
                    <p>
                      To become the leading agricultural export company known for 
                      connecting premium Indian produce with global markets while 
                      empowering local farming communities through fair trade practices 
                      and sustainable agricultural methods.
                    </p>
                  </div>
                  
                  <div className="company-expertise">
                    <h3>Our Expertise</h3>
                    <p>
                      With specialized knowledge in quality control, international 
                      logistics, and regulatory compliance, we handle every aspect of 
                      the export process. Our team's extensive experience ensures 
                      smooth operations from farm to international destination.
                    </p>
                  </div>
                </div>
                
                <div className="value-tags">
                  <span>Quality</span>
                  <span>Integrity</span>
                  <span>Sustainability</span>
                  <span>Innovation</span>
                  <span>Partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;