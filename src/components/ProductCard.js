import React, { useRef, useEffect, useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, delay = 0 }) => {
  const cardRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

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

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <>
      <div className="product-card" ref={cardRef}>
        <div className="product-img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button className="btn" onClick={() => setShowModal(true)}>View Details</button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
            <img src={product.image} alt={product.name} className="modal-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
