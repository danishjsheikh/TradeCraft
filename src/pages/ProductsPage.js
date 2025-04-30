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

      image: ["/assets/coconut-oil.jpg"],
      category: "coconut",
    },
    {
      id: 2,
      name: "Coconut Flour",
      description: "Gluten-free flour made from dried coconut meat.",

      image: ["/assets/coconut-flour.jpg"],
      category: "coconut",
    },
    {
      id: 3,
      name: "Coconut Sugar",
      description: "Natural sweetener made from coconut palm sap.",

      image: ["/assets/coconut-sugar.jpg"],
      category: "coconut",
    },
    {
      id: 4,
      name: "Basmati Rice",
      description: "Premium long-grain aromatic rice.",
      image: ["/assets/basmati-rice.jpg"],
      category: "rice",
    },
    {
      id: 5,
      name: "Jasmine Rice",
      description: "Fragrant rice with a subtle floral aroma.",

      image: ["/assets/jasmine-rice.jpg"],
      category: "rice",
    },
    {
      id: 6,
      name: "Brown Rice",
      description: "Whole grain rice with nutty flavor and chewy texture.",

      image: ["/assets/brown-rice.jpg"],
      category: "rice",
    },
    {
      id: 7,
      name: "Red Onions",
      description: "Medium-sized onions with purple-red skin and mild flavor.",
      image: ["/assets/red-onions.jpg"],
      category: "onion",
    },
    {
      id: 8,
      name: "Yellow Onions",
      description:
        "All-purpose onions with golden skin and sweet flavor when cooked.",

      image: ["/assets/yellow-onions.jpg"],
      category: "onion",
    },
    {
      id: 9,
      name: "Fresh Mangoes",
      description: "Sweet, juicy tropical fruit with vibrant flavor.",

      image: ["/assets/mangoes.jpg"],
      category: "fruits",
    },
    {
      id: 10,
      name: "Bananas",
      description: "Energy-rich fruit perfect for quick snacks.",

      image: ["/assets/bananas.jpg"],
      category: "fruits",
    },
    {
      id: 11,
      name: "Organic Quinoa",
      description: "Protein-rich ancient grain with a nutty flavor.",
      image: ["/assets/quinoa.jpg"],
      category: "others",
    },
    {
      id: 12,
      name: "Organic Honey",
      description: "Pure, unfiltered honey from wildflower meadows.",
      image: ["/assets/honey.jpg"],
      category: "others",
    },

    // Plates
    {
      id: 13,
      name: "12″ round plate",
      description: `
      <p>Round shaped plates can be used to serve a large quantity of food and are aesthetic. 
      They are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a 
      heightened layer to make them spill proof. The product is child friendly.</p>
      <p><strong>Dimension</strong>: 12 inches in diameter / 1 inch deep</p>
      <p><strong>Best suited to serve</strong>: Main course</p>
`,
      image: [
              "/assets/products/plates/round_plate_12.webp",
              "/assets/products/plates/round_plate_12_1.webp"
            ],
      category: "plates",
    },
    {
      id: 14,
      name: "10″ Round Plate",
      description: `<p>Round shaped plates can be used to serve a large quantity of food and are aesthetic. 
      They are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a 
      heightened layer to make them spill proof. The product is child friendly.</p>
      <p><strong>Dimension</strong>: 10 inches in diameter / 0.5 inches deep</p>
      <p><strong>Best suited to serve</strong>: Main course, Buffet</p>`,

      image: ["/assets/products/plates/round_plate_10.webp"],
      category: "plates",
    },
    {
      id: 15,
      name: "10″x10″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 10 x 10 x 0.5 inche(s)</p>
      <p><strong>Best suited to serve</strong>: Main course, Buffet</p>`,
      image: ["assets/products/plates/square_plate_10_10.webp"],
      category: "plates",
    },
    {
      id: 16,
      name: "9″ Round Plate",
      description: `<p>Round shaped plates can be used to serve a large quantity of food and are aesthetic. 
      They are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a 
      heightened layer to make them spill proof. The product is child friendly.</p>
      <p><strong>Dimension</strong>: 9 inches in diameter / 0.5 inches deep</p>
      <p><strong>Best suited to serve</strong>: Main course, Pizza, Parathas</p>`,
      image: ["/assets/products/plates/round_plate_9.webp"],
      category: "plates",
    },
    {
      id: 17,
      name: "9″x9″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 9 x 9 x 0.5 inche(s)</p>
      <p><strong>Best suited to serve</strong>: Main course, Pizza, Parathas</p>`,      
      image: ["/assets/products/plates/square_plate_9_9.webp"],
      category: "plates",
    },
    {
      id: 18,
      name: "8″ Round Plate",
      description: `<p>Round shaped plates can be used to serve a large quantity of food and are aesthetic. 
      They are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a 
      heightened layer to make them spill proof. The product is child friendly.</p>
      <p><strong>Dimension</strong>: 8 inches in diameter / 0.5 inches deep</p>
      <p><strong>Best suited to serve</strong>: Pizza, Salads, Fast foods</p>`,
      image: ["/assets/products/plates/round_plate_8.webp"],
      category: "plates",
    },
    {
      id: 19,
      name: "8″×8″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 8 x 8 x 0.5 inche(s)</p>
      <p><strong>Best suited to serve</strong>: Pizza, Salads, Fast foods</p>`,
      image: ["/assets/products/plates/square_plate_8_8.webp"],
      category: "plates",
    },
    {
      id: 20,
      name: "7″ Round Plate",
      description: `<p>Round shaped plates can be used to serve a large quantity of food and are aesthetic. 
      They are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a 
      heightened layer to make them spill proof. The product is child friendly.</p>
      <p><strong>Dimension</strong>: 7 inches diameter / 0.5 inches deep</p>
      <p><strong>Best suited to serve</strong>: Chaats, Sandwiches, Fries, Burger</p>`,
      image: ["/assets/products/plates/round_plate_7.webp"],
      category: "plates",
    },
    {
      id: 21,
      name: "7″×7″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 7 x 7 x 0.5 inche(s)</p>
      <p><strong>Best suited to serve</strong>: Chaats, Sandwiches, Fries, Burger</p>`,
      image: ["/assets/products/plates/square_plate_7_7.webp"],
      category: "plates",
    },
    {
      id: 22,
      name: "7″x8.5″ Rectangle Plate",
      description: `<p>Rectangle shaped plates are aesthetic and perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them spill proof. 
      The product is child friendly.</p>
      <p><strong>Dimension</strong>: 7 x 8.5 x 0.5 inche(s)</p>
      <p><strong>Best suited to serve</strong>: Burger meals, Kebabs</p>`,      
      image: ["/assets/products/plates/rectangle_plate_7_8.5.webp"],
      category: "plates",
    },
    {
      id: 23,
      name: "6″×6″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 6 x 6 x 0.5 inches (LxBxH)</p>
      <p><strong>Best suited to serve</strong>: Chaats, Sandwiches, Fries, Burger</p>`,      
      image: ["/assets/products/plates/square_plate_6_6.webp"],
      category: "plates",
    },
    {
      id: 24,
      name: "4″×4″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 4 x 4 x 0.5 inches (LxBxH)</p>
      <p><strong>Best suited to serve</strong>: Desserts, Sweets, Chutney, Sauce</p>`,
      image: ["/assets/products/plates/square_plate_4_4.webp"],
      category: "plates",
    },

    // Bowls
    {
      id: 25,
      name: "8″x8″ Square Bowl",
      description: `<p>Square shaped bowls, shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers. The product is spill and leak proof.</p>
      <p><strong>Dimension</strong>: 8 x 8 x 1 inche(s)</p>
      <p><strong>Best suited to serve</strong>: Sandwiches, Noodles, Salads</p>`,
      image: ["/assets/products/bowls/square_bowl_8_8.webp"],
      category: "bowls",
    },
    {
      id: 26,
      name: "6.5″ Rectangle Bowl",
      description: `<p>Rectangle shaped bowls are shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers. The product is completely spill and leak proof.</p>
      <p><strong>Dimension</strong>: 6.5 x 6.5 x 2 inches</p>
      <p><strong>Best suited to serve</strong>: Biryani, North Indian Dishes, Chinese Rice/Noodles</p>`,      
      image: ["/assets/products/bowls/rectangle_bowl_6.5.webp"],
      category: "bowls",
    },
    {
      id: 27,
      name: "5″ Round Bowl",
      description: `<p>Round shaped bowls are shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers; hot or cold. The product is spill and leak proof.</p>
      <p><strong>Dimension</strong>: 5 inches diameter/ 1.5 inches deep</p>
      <p><strong>Best suited to serve</strong>: Soups, Curry, Sambaar</p>`,      
      image: ["/assets/products/bowls/round_bowl_5.webp"],
      category: "bowls",
    },
    {
      id: 28,
      name: "4″x4″ Deep Square Bowl",
      description: `<p>Square shaped bowls, shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers. The product is spill and leak proof.</p>
      <p><strong>Dimension</strong>: 4 x 4 x 1 inches (LxBxH)</p>
      <p><strong>Best suited to serve</strong>: Fruits, Sweets, Chutney, Sambaar, Curry</p>`,      
      image: ["/assets/products/bowls/deep_square_bowl_4_4.webp"],
      category: "bowls",
    },
    {
      id: 29,
      name: "4″x4″ deep Bowl",
      description: `<p>Square shaped bowls, shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers. The product is spill and leak proof.</p>
      <p><strong>Dimension</strong>: 4 x 4 x 0.75 inches (LxBxH)</p>
      <p><strong>Best suited to serve</strong>: Fruits, Sweets, Chutney, Sambaar, Curry</p>`,      
      image: ["/assets/products/bowls/deep_bowl_4_4.webp"],
      category: "bowls",
    },
    {
      id: 30,
      name: "3″x3″ Square Bowl",
      description: `<p>Square shaped bowls, shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers. The product is spill and leak proof.</p>
      <p><strong>Dimension</strong>: 3 x 3 x 1 inches (LxBxH)</p>
      <p><strong>Best suited to serve</strong>: Ice cream, Desserts, Sweets, Chutney, Sauce, Raita</p>`,      
      image: ["/assets/products/bowls/square_bowl_3_3.webp"],
      category: "bowls",
    },
    {
      id: 31,
      name: "3.5″ Round Bowl",
      description: `<p>Round shaped bowls are shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers; hot or cold. The product is spill and leak proof.</p>
      <p><strong>Dimension</strong>: 3.5 inches in diameter / 1.5 inches deep</p>
      <p><strong>Best suited to serve</strong>: Ice cream, Desserts, Sweet, Chutney, Sauce, Raita</p>`,
      image: ["/assets/products/bowls/round_bowl_3.5.webp"],
      category: "bowls",
    },

    // Tray
    {
      id: 32,
      name: "6″x9″ Rectangle Tray",
      description: `<p>Rectangle shaped trays can be used to serve smaller bowls and beverages, or organize a display palette. 
      Though light weighted, they are sturdy, tear proof and spill proof.</p>
      <p><strong>Dimension</strong>: 6 x 9 x 1 inche(s)</p>
      <p><strong>Best suited to serve</strong>: Burgers, Sandwiches, Fast foods</p>`,      
      image: ["/assets/products/trays/rectangle_tray_6_9.webp"],
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
