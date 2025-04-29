import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import "./ProductsPage.css";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    {
      id: 1,
      name: "Virgin Coconut Oil",
      description:
        "Cold-pressed virgin coconut oil with rich aroma and flavor.",

      image: "/assets/coconut-oil.jpg",
      category: "coconut",
    },
    {
      id: 2,
      name: "Coconut Flour",
      description: "Gluten-free flour made from dried coconut meat.",

      image: "/assets/coconut-flour.jpg",
      category: "coconut",
    },
    {
      id: 3,
      name: "Coconut Sugar",
      description: "Natural sweetener made from coconut palm sap.",

      image: "/assets/coconut-sugar.jpg",
      category: "coconut",
    },
    {
      id: 4,
      name: "Basmati Rice",
      description: "Premium long-grain aromatic rice.",
      image: "/assets/basmati-rice.jpg",
      category: "rice",
    },
    {
      id: 5,
      name: "Jasmine Rice",
      description: "Fragrant rice with a subtle floral aroma.",

      image: "/assets/jasmine-rice.jpg",
      category: "rice",
    },
    {
      id: 6,
      name: "Brown Rice",
      description: "Whole grain rice with nutty flavor and chewy texture.",

      image: "/assets/brown-rice.jpg",
      category: "rice",
    },
    {
      id: 7,
      name: "Red Onions",
      description: "Medium-sized onions with purple-red skin and mild flavor.",
      image: "/assets/red-onions.jpg",
      category: "onion",
    },
    {
      id: 8,
      name: "Yellow Onions",
      description:
        "All-purpose onions with golden skin and sweet flavor when cooked.",

      image: "/assets/yellow-onions.jpg",
      category: "onion",
    },
    {
      id: 9,
      name: "Fresh Mangoes",
      description: "Sweet, juicy tropical fruit with vibrant flavor.",

      image: "/assets/mangoes.jpg",
      category: "fruits",
    },
    {
      id: 10,
      name: "Bananas",
      description: "Energy-rich fruit perfect for quick snacks.",

      image: "/assets/bananas.jpg",
      category: "fruits",
    },
    {
      id: 11,
      name: "Organic Quinoa",
      description: "Protein-rich ancient grain with a nutty flavor.",
      image: "/assets/quinoa.jpg",
      category: "others",
    },
    {
      id: 12,
      name: "Organic Honey",
      description: "Pure, unfiltered honey from wildflower meadows.",
      image: "/assets/honey.jpg",
      category: "others",
    },

    // Plates
    {
      id: 13,
      name: "12″ round plate",
      description:
        "Eco-friendly large dinner plate made from fallen palm leaves.",
      image: "/assets/products/plates/round_plate_12.webp",
      category: "plates",
    },
    {
      id: 14,
      name: "10″ Round Plate",
      description: `Lightweight and 
      
      
      
      qeflhqlehfiqehfiqfqhfi
      qkejklqwjriqeoqiopeqkwlfnqef
      aklhdjahfqgfueqgldjqeliejwqokeoqwe
      
      asfjhajfhajshfuqhdiqqqq
      ajfdgagdfafadad
      sturdy bamboo plate with natural texture.fusevbfsuhbfshbhs fhs uh fauh fuha fhae gjbuafbhfbhsfis`,

      image: "/assets/products/plates/round_plate_10.webp",
      category: "plates",
    },
    {
      id: 15,
      name: "10″x10″ Square Plate",
      description: "Biodegradable square plate ideal for serving main courses.",

      image: "assets/products/plates/square_plate_10_10.webp",
      category: "plates",
    },
    {
      id: 16,
      name: "9″ Round Plate",
      description:
        "Traditional Indian-style serving plate made from banana leaf.",
      image: "/assets/products/plates/round_plate_9.webp",
      category: "plates",
    },
    {
      id: 17,
      name: "9″x9″ Square Plate",
      description:
        "Hand-carved coconut shell plate, great for display or dry items.",

      image: "/assets/products/plates/square_plate_9_9.webp",
      category: "plates",
    },
    {
      id: 18,
      name: "8″ Round Plate",
      description: "Oval-shaped disposable plate ideal for snacks or desserts.",
      image: "/assets/products/plates/round_plate_8.webp",
      category: "plates",
    },
    {
      id: 19,
      name: "8″×8″ Square Plate",
      description: "Unique textured plate crafted from natural bamboo.",

      image: "/assets/products/plates/square_plate_8_8.webp",
      category: "plates",
    },
    {
      id: 20,
      name: "7″ Round Plate",
      description: "3-compartment palm leaf plate for variety servings.",
      image: "/assets/products/plates/round_plate_7.webp",
      category: "plates",
    },
    {
      id: 21,
      name: "7″×7″ Square Plate",
      description: "Solid wood plate with a rustic finish for stylish dining.",
      image: "/assets/products/plates/square_plate_7_7.webp",
      category: "plates",
    },
    {
      id: 22,
      name: "7″x8.5″ Rectangle Plate",
      description: "Smooth, uncoated eco plate perfect for all occasions.",

      image: "/assets/products/plates/rectangle_plate_7_8.5.webp",
      category: "plates",
    },
    {
      id: 23,
      name: "6″×6″ Square Plate",
      description:
        "Perfect for meals with sides, made from pressed palm leaves.",
      image: "/assets/products/plates/square_plate_6_6.webp",
      category: "plates",
    },
    {
      id: 24,
      name: "4″×4″ Square Plate",
      description: "Beautiful artisan plate ideal for main course meals.",

      image: "/assets/products/plates/square_plate_4_4.webp",
      category: "plates",
    },

    // Bowls
    {
      id: 25,
      name: "8″x8″ Square Bowl",
      description: "Polished coconut bowl for smoothie bowls or snacks.",

      image: "/assets/products/bowls/square_bowl_8_8.webp",
      category: "bowls",
    },
    {
      id: 26,
      name: "6.5″ Rectangle Bowl",
      description: "Wide, deep bowl crafted from bamboo for salads.",

      image: "/assets/products/bowls/rectangle_bowl_6.5.webp",
      category: "bowls",
    },
    {
      id: 27,
      name: "5″ Round Bowl",
      description: "Compact eco bowl for dips, sauces, or toppings.",
      image: "/assets/products/bowls/round_bowl_5.webp",
      category: "bowls",
    },
    {
      id: 28,
      name: "4″x4″ Deep Square Bowl",
      description: "Interior-painted bowl with glossy food-safe coating.",

      image: "/assets/products/bowls/deep_square_bowl_4_4.webp",
      category: "bowls",
    },
    {
      id: 29,
      name: "4″x4″ deep Bowl",
      description: "Round disposable bowl made from areca palm sheaths.",
      image: "/assets/products/bowls/deep_bowl_4_4.webp",
      category: "bowls",
    },
    {
      id: 30,
      name: "3″x3″ Square Bowl",
      description: "Natural wooden bowl perfect for hot soups and stews.",

      image: "/assets/products/bowls/square_bowl_3_3.webp",
      category: "bowls",
    },
    {
      id: 31,
      name: "3.5″ Round Bowl",
      description: "Earthy-style bowl ideal for dry snacks or fruits.",

      image: "/assets/products/bowls/round_bowl_3.5.webp",
      category: "bowls",
    },

    // Tray
    {
      id: 32,
      name: "6″x9″ Rectangle Tray",
      description:
        "Lightweight bamboo tray with handles, perfect for serving tea or snacks.",
      image: "/assets/products/trays/rectangle_tray_6_9.webp",
      category: "trays",
    },
  ];

  useEffect(() => {
    // Filter products based on active category
    if (activeCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === activeCategory)
      );
    }

    // Scroll to category if hash is present in URL
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveCategory(hash);
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    window.history.pushState(null, "", `#${category}`);
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
              className={activeCategory === "all" ? "active" : ""}
              onClick={() => handleCategoryClick("all")}
            >
              All Products
            </button>
            <button
              className={activeCategory === "coconut" ? "active" : ""}
              onClick={() => handleCategoryClick("coconut")}
            >
              Coconut Products
            </button>
            <button
              className={activeCategory === "rice" ? "active" : ""}
              onClick={() => handleCategoryClick("rice")}
            >
              Rice
            </button>
            <button
              className={activeCategory === "onion" ? "active" : ""}
              onClick={() => handleCategoryClick("onion")}
            >
              Onions
            </button>
            <button
              className={activeCategory === "fruits" ? "active" : ""}
              onClick={() => handleCategoryClick("fruits")}
            >
              Fruits
            </button>
            <button
              className={activeCategory === "plates" ? "active" : ""}
              onClick={() => handleCategoryClick("plates")}
            >
              Plates
            </button>
            <button
              className={activeCategory === "trays" ? "active" : ""}
              onClick={() => handleCategoryClick("trays")}
            >
              Trays
            </button>
            <button
              className={activeCategory === "bowls" ? "active" : ""}
              onClick={() => handleCategoryClick("bowls")}
            >
              Bowls
            </button>
            {/* <button 
              className={activeCategory === 'bowls' ? 'active' : ''} 
              onClick={() => handleCategoryClick('others')}
            >
              Other Products
            </button> */}
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
            <p>
              We offer competitive prices for bulk orders. Contact our sales
              team for custom quotes.
            </p>
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
