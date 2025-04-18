import React, { useRef, useEffect } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, delay = 0 }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div className="product-card" ref={cardRef}>
      <div className="product-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-origin">
          <i className="fas fa-map-marker-alt"></i> Origin: {product.origin}
        </div>
        <button className="btn">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
