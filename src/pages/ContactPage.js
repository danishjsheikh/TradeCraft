import React, { useState } from "react";
import "./ContactPage.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 15.3173, // Center between Maharashtra and Karnataka
  lng: 75.7139,
};

// Coordinates for the two addresses
const locations = [
  {
    position: { lat: 19.1738, lng: 72.956 }, // Mumbai
    // label: "Maharashtra Office",
  },
  {
    position: { lat: 13.3531, lng: 74.785 }, // Manipal
    // label: "Karnataka Office",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Form is valid, submit it
      setFormSubmitted(true);
      setFormErrors({});
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      // Form has errors
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries and support</p>
        </div>
      </div>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Have questions about our products or services? Our team is here
                to help you.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h3>Address</h3>
                    <p>
                      Maharashtra: 513, 5th Floor, Shree Samart Plaza, Gupta
                      Bhavan, RRT Road, Opp. Mulund West Railway Station, Mumbai
                      400080
                      <br />
                      Karnataka: GRACE, 265-4(3), Mangala Colony, Off Alevoor
                      Road, Manipal, Udupi District, Karnataka 576104.
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h3>Phone</h3>
                    <p>+91 9819830716</p>
                    <p>Tel: 0820-2575200</p>
                  </div>
                </div>

                <div className="contact-method">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>Email</h3>
                    <p>morris@tradecraft.co.in</p>
                    {/* <p>sales@tradecraft.com</p> */}
                  </div>
                </div>

                <div className="contact-method">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h3>Working Hours</h3>
                    <p>Monday - Friday: 9AM - 6PM</p>
                    <p>Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
              {/* 
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div> */}
            </div>

            <div className="contact-form-container">
              {formSubmitted ? (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  <h3>Thank You!</h3>
                  <p>
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                  <button
                    className="btn"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2>Send Us a Message</h2>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={formErrors.name ? "error" : ""}
                      />
                      {formErrors.name && (
                        <span className="error-message">{formErrors.name}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={formErrors.email ? "error" : ""}
                      />
                      {formErrors.email && (
                        <span className="error-message">
                          {formErrors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={formErrors.message ? "error" : ""}
                      ></textarea>
                      {formErrors.message && (
                        <span className="error-message">
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section">
        <div className="container">
          <h2 className="section-title">About Tradecraft</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                TradeCraft is a newly established venture, our team brings with
                it decades of hands-on experience in international trade and
                export operations. We've navigated global markets, built strong
                supply chains, and earned the trust of clients worldwide — and
                now, we're channeling all of that into a fresh, focused
                agri-export brand built for the future.
              </p>
              <p>
                With a strong farmer network, modern logistics, and a
                quality-first mindset, we look to serve all global destinations,
                ensuring every shipment reflects the care, commitment, and
                consistency it deserves.
              </p>
              <h3>Our Values</h3>
              <ul>
                <li>
                  <strong>Quality:</strong> We are committed to providing only
                  the highest quality products.
                </li>
                <li>
                  <strong>Integrity:</strong> We conduct business with honesty
                  and transparency.
                </li>
                <li>
                  <strong>Sustainability:</strong> We promote environmentally
                  responsible farming and trade practices.
                </li>
                <li>
                  <strong>Innovation:</strong> We continuously seek better ways
                  to serve our customers and partners.
                </li>
                <li>
                  <strong>Partnership:</strong> We build strong, mutually
                  beneficial relationships with our suppliers and customers.
                </li>
              </ul>
            </div>
            <div className="about-images">
              <div className="about-image">
                <img src="/assets/farm_field.jpg" alt="farm" />
              </div>
              <div className="about-image">
                <img
                  src="/assets/workers.jpg"
                  alt="Workers processing commodities"
                />
              </div>
              <div className="about-image">
                <img src="/assets/groceries.jpg" alt="Groceries" />
              </div>
              <div className="about-image">
                <img src="/assets/quality.webp" alt="Quality inspection" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
          <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
            <div className="map-wrapper">
              {/* Maharashtra Office Map */}
              <div className="map-box">
                <h3>Maharashtra Office</h3>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={locations[0].position}
                  zoom={14}
                >
                  <Marker
                    position={locations[0].position}
                    label={locations[0].label}
                  />
                </GoogleMap>
              </div>

              {/* Karnataka Office Map */}
              <div className="map-box">
                <h3>Karnataka Office</h3>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={locations[1].position}
                  zoom={14}
                >
                  <Marker
                    position={locations[1].position}
                    label={locations[1].label}
                  />
                </GoogleMap>
              </div>
            </div>
          </LoadScript>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
