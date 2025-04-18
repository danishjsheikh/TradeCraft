import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from "react-router-dom";
import './ProductsPage.css';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const products = [
    {
      id: 1,
      name: 'Virgin Coconut Oil',
      description: 'Cold-pressed virgin coconut oil with rich aroma and flavor.',
      origin: 'Sri Lanka',
      image: '/assets/coconut-oil.jpg',
      category: 'coconut'
    },
    {
      id: 2,
      name: 'Coconut Flour',
      description: 'Gluten-free flour made from dried coconut meat.',
      origin: 'Philippines',
      image: '/assets/coconut-flour.jpg',
      category: 'coconut'
    },
    {
      id: 3,
      name: 'Coconut Sugar',
      description: 'Natural sweetener made from coconut palm sap.',
      origin: 'Indonesia',
      image: '/assets/coconut-sugar.jpg',
      category: 'coconut'
    },
    {
      id: 4,
      name: 'Basmati Rice',
      description: 'Premium long-grain aromatic rice.',
      origin: 'India',
      image: '/assets/basmati-rice.jpg',
      category: 'rice'
    },
    {
      id: 5,
      name: 'Jasmine Rice',
      description: 'Fragrant rice with a subtle floral aroma.',
      origin: 'Thailand',
      image: '/assets/jasmine-rice.jpg',
      category: 'rice'
    },
    {
      id: 6,
      name: 'Brown Rice',
      description: 'Whole grain rice with nutty flavor and chewy texture.',
      origin: 'Various',
      image: '/assets/brown-rice.jpg',
      category: 'rice'
    },
    {
      id: 7,
      name: 'Red Onions',
      description: 'Medium-sized onions with purple-red skin and mild flavor.',
      origin: 'Spain',
      image: '/assets/red-onions.jpg',
      category: 'onion'
    },
    {
      id: 8,
      name: 'Yellow Onions',
      description: 'All-purpose onions with golden skin and sweet flavor when cooked.',
      origin: 'Netherlands',
      image: '/assets/yellow-onions.jpg',
      category: 'onion'
    },
    {
      id: 9,
      name: 'Fresh Mangoes',
      description: 'Sweet, juicy tropical fruit with vibrant flavor.',
      origin: 'Mexico',
      image: '/assets/mangoes.jpg',
      category: 'fruits'
    },
    {
      id: 10,
      name: 'Bananas',
      description: 'Energy-rich fruit perfect for quick snacks.',
      origin: 'Costa Rica',
      image: '/assets/bananas.jpg',
      category: 'fruits'
    },
    {
      id: 11,
      name: 'Organic Quinoa',
      description: 'Protein-rich ancient grain with a nutty flavor.',
      origin: 'Peru',
      image: '/assets/quinoa.jpg',
      category: 'others'
    },
    {
      id: 12,
      name: 'Organic Honey',
      description: 'Pure, unfiltered honey from wildflower meadows.',
      origin: 'New Zealand',
      image: '/assets/honey.jpg',
      category: 'others'
    }
  ];
  
  useEffect(() => {
    // Filter products based on active category
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
    
    // Scroll to category if hash is present in URL
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveCategory(hash);
    }
  }, [activeCategory]);
  
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    window.history.pushState(null, '', `#${category}`);
  };

  return (
    <div className="products-page">
      <div className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Discover our premium selection of high-quality food commodities</p>
        </div>
      </div>
      
      <section className="products-content section">
        <div className="container">
          <div className="category-filter">
            <button 
              className={activeCategory === 'all' ? 'active' : ''} 
              onClick={() => handleCategoryClick('all')}
            >
              All Products
            </button>
            <button 
              className={activeCategory === 'coconut' ? 'active' : ''} 
              onClick={() => handleCategoryClick('coconut')}
            >
              Coconut Products
            </button>
            <button 
              className={activeCategory === 'rice' ? 'active' : ''} 
              onClick={() => handleCategoryClick('rice')}
            >
              Rice
            </button>
            <button 
              className={activeCategory === 'onion' ? 'active' : ''} 
              onClick={() => handleCategoryClick('onion')}
            >
              Onions
            </button>
            <button 
              className={activeCategory === 'fruits' ? 'active' : ''} 
              onClick={() => handleCategoryClick('fruits')}
            >
              Fruits
            </button>
            <button 
              className={activeCategory === 'others' ? 'active' : ''} 
              onClick={() => handleCategoryClick('others')}
            >
              Other Products
            </button>
          </div>
          
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product}
                delay={index * 100}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="bulk-inquiry section">
        <div className="container">
          <div className="bulk-inquiry-content">
            <h2>Need Bulk Quantities?</h2>
            <p>We offer competitive prices for bulk orders. Contact our sales team for custom quotes.</p>
            <Link to="/contact" className="btn">
                          Get Quote
                        </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
