import React, { useRef, useEffect, useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, delay = 0 }) => {
  const cardRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ensure product.images is defined and has images
  const images = product.image && product.image.length > 0 ? product.image : [];

  const handleNextImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

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
          <img src={images[0] || '/path/to/default/image.jpg'} alt={product.name} />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <div className="product-description" dangerouslySetInnerHTML={{ __html: product.description }}></div>
          <button className="btn" onClick={() => setShowModal(true)}>View Details</button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
            <div className="modal-img-container">
              <img
                src={images[currentImageIndex] || '/path/to/default/image.jpg'}
                alt={product.name}
                className="modal-image"
              />
              <button className="prev-btn" onClick={handlePrevImage}>
                &#8249;
              </button>
              <button className="next-btn" onClick={handleNextImage}>
                &#8250;
              </button>
            </div>
            <h2>{product.name}</h2>
            <div className="product-description" dangerouslySetInnerHTML={{ __html: product.description }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
