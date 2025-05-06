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
        <div className="contact-grid-two-column">
          {/* Left: Contact Info */}
          <div className="contact-info-modern">
            <h2>Get in Touch</h2>
            <p>
              We’re here to assist you with inquiries about our products,
              services, or partnerships.
            </p>

            <div className="info-block">
              <h3>Addresses</h3>
              <p>
                <strong>Maharashtra Office:</strong><br />
                513, 5th Floor, Shree Samart Plaza, Gupta Bhavan, RRT Road, Opp. Mulund West Railway Station, Mumbai 400080
              </p>
              <p>
                <strong>Karnataka Office:</strong><br />
                GRACE, 265-4(3), Mangala Colony, Off Alevoor Road, Manipal, Udupi District, Karnataka 576104.
              </p>
            </div>

            <div className="info-block">
              <h3>Contact</h3>
              <p>
                <strong>Phone:</strong> <a href="tel:+919819830716">+91 9819830716</a>
              </p>
              <p>
                <strong>Tel:</strong> <a href="tel:+918202575200">0820-2575200</a>
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:trading@tradecraft.co.in">trading@tradecraft.co.in</a>
              </p>
            </div>

            <div className="info-block">
              <h3>Working Hours</h3>
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p>Sat: 10:00 AM – 4:00 PM</p>
            </div>
          </div>

          {/* Right: Maps */}
          <div className="contact-maps">
            <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
              <div className="map-box">
                <h4>Maharashtra Office</h4>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={locations[0].position}
                  zoom={14}
                >
                  <Marker position={locations[0].position} />
                </GoogleMap>
              </div>
              <div className="map-box">
                <h4>Karnataka Office</h4>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={locations[1].position}
                  zoom={14}
                >
                  <Marker position={locations[1].position} />
                </GoogleMap>
              </div>
            </LoadScript>
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

      </div>
  );
};

export default ContactPage;
