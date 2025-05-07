import React, { useState } from "react";
import "./ContactPage.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

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
      setFormSubmitted(true);
      setFormErrors({});
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
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

      {/* Combined Contact & Form Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-content-wrapper">
            {/* Left Column: Contact Info & Map */}
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
                        513, 5th Floor, Shree Samart Plaza, Gupta Bhavan,
                        <br /> RRT Road, Opp. Mulund West Railway Station,
                        <br /> Mumbai 400080
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
                        GRACE, 265-4(3), Mangala Colony, Off Alevoor Road,
                        <br /> Manipal, Udupi District, Karnataka 576104
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
                    <div className="info-block">
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

                    <div className="info-block">
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

                    <div className="info-block">
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

            {/* Right Column: Contact Form & About */}
            <div className="contact-form-column">
              <div className="contact-form-card">
                {formSubmitted ? (
                  <div className="form-success">
                    <i className="fas fa-check-circle"></i>
                    <h2>Thank You!</h2>
                    <p>
                      Your message has been sent successfully. We'll get back to
                      you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <h2>Send Us a Message</h2>

                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="name">Your Name*</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={formErrors.name ? "error" : ""}
                        />
                        {formErrors.name && (
                          <div className="error-message">{formErrors.name}</div>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email Address*</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={formErrors.email ? "error" : ""}
                        />
                        {formErrors.email && (
                          <div className="error-message">
                            {formErrors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
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
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={formErrors.message ? "error" : ""}
                      ></textarea>
                      {formErrors.message && (
                        <div className="error-message">
                          {formErrors.message}
                        </div>
                      )}
                    </div>

                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              <div className="about-summary-card">
                <h2>About Tradecraft</h2>
                <div className="about-summary-content">
                  <div className="about-text-column">
                    <p>
                      TradeCraft is a newly established venture, bringing
                      decades of experience in international trade and export
                      operations. With a strong farmer network, modern
                      logistics, and a quality-first mindset, we serve all
                      global destinations.
                    </p>
                    <div className="value-tags">
                      <span>Quality</span>
                      <span>Integrity</span>
                      <span>Sustainability</span>
                      <span>Innovation</span>
                      <span>Partnership</span>
                    </div>
                  </div>
                  <div className="about-image-column">
                    <div className="about-image-grid">
                      <img src="/assets/farm_field.jpg" alt="Farm field" />
                      {/* <img
                        src="/assets/quality.webp"
                        alt="Quality inspection"
                      /> */}
                      <img src="/assets/groceries.jpg" alt="Groceries" />
                      <img
                        src="/assets/workers.jpg"
                        alt="Workers processing commodities"
                      />
                    </div>
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

export default ContactPage;
