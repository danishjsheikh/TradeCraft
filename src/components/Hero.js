import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    const ctaElement = ctaRef.current;

    if (titleElement) titleElement.classList.add('fade-in');
    
    setTimeout(() => {
      if (subtitleElement) subtitleElement.classList.add('fade-in');
    }, 400);
    
    setTimeout(() => {
      if (ctaElement) ctaElement.classList.add('slide-up');
    }, 800);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content container">
        <h1 ref={titleRef}>Nature's Finest <span>Commodities</span></h1>
        <p ref={subtitleRef}>Premium quality coconut products, rice, onions, fruits and more - directly from trusted sources.</p>
        <div className="hero-cta" ref={ctaRef}>
          <Link to="/products" className="btn">Explore Products</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
