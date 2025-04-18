import React, { useRef, useEffect } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service, delay = 0 }) => {
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
    <div className="service-card" ref={cardRef}>
      <div className="service-icon">
        <i className={service.icon}></i>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
