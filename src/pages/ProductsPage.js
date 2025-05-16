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
      name: "Semi Husked Coconuts",
      description: `
      <p>Semi husked coconuts are mature coconuts with the outer green husk partially removed, leaving the hard shell intact while retaining some of the fibrous coir. 
      This makes them ideal for export as they are more compact than fully husked coconuts, while still offering protection to the inner shell and water content.
      These coconuts are naturally rich in coconut water and have thick, firm white meat, making them ideal for various culinary and industrial purposes. 
      They are harvested in a matured state and selected carefully for quality, weight, and shelf life.</p>
      
      <p><strong>Uses</strong>: Consumption, Cooking, Rituals, Cosmetics, Processing, Export</p>
      
      <p>🥥 <strong>Standard Export Packing Methods</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Capacity: Typically hold 25 coconuts per bag.<br>
      Weight: Each bag weighs approximately 13–14 kg.<br>
      Features: Durable, moisture-resistant, and suitable for long-distance transportation.
      </br>
      <strong>2. Gunny (Jute) Bags</strong><br>
      Capacity: Also accommodate around 25 coconuts per bag.<br>
      Weight: Similar to PP bags, each weighs about 13–14 kg.<br>
      Features: Eco-friendly and breathable, allowing air circulation to prevent mold.
      </br>
      <strong>3. Palletized Packing</strong><br>
      Configuration: Bags are stacked on wooden pallets, typically 50 bags per pallet.<br>
      Container Load: A 40-foot reefer container can hold approximately 20 pallets, totaling around 1,000 bags or 25,000 kg of coconuts.<br>
      Advantages: Facilitates easy loading/unloading and complies with certain countries' import regulations.</p>
      
      <p>📦 <strong>Container Loading Specifications</strong>
      </br>
      Container Type: 40-foot reefer container.<br>
      Total Bags: Approximately 1,000 bags per container.<br>
      Total Weight: Around 25,000 kg of semi-husked coconuts.<br>
      Pallets: 20 pallets per container, with 50 bags each.<br>
      Net Weight: Approximately 26,500 kg, accounting for pallet weight.</p>`,
            

      image: [
        "/assets/products/coconuts/coconut.jpg",
        "/assets/products/coconuts/coconut_1.jpg",
        "/assets/products/coconuts/coconut_2.jpg"
      ],
      category: "coconut",
    },
    {
      id: 2,
      name: "Basmati Rice",
      description: `
      <p>Grown primarily in the northwestern regions of India — Punjab, Haryana, and Uttar Pradesh — 1121 Basmati Rice (White, Steam, Sella/Parboiled) is globally prized for its distinctive aroma, exceptional grain length, and elongation upon cooking. 
      It is ideal for culinary excellence in biryanis and other premium rice dishes.</p>

      <p><strong>Uses</strong>: Cooking, Export, Retail, Horeca, Catering, Gourmet</p>

      <p>🧺 <strong>Types of Packing Materials</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Durable and economical packaging, suitable for bulk transport.
      </br>
      <strong>2. BOPP Laminated Bags</strong><br>
      Premium printed packaging with high moisture resistance and a polished appearance, ideal for branding and retail.
      </br>
      <strong>3. Jute Bags</strong><br>
      Eco-friendly and breathable, offering traditional appeal and sustainable packaging solutions.
      </br>
      <strong>Available Packing Sizes</strong>: 10 kg, 15 kg, 25 kg (Custom sizes available as per buyer requirement)</p>

      <p>📦 <strong>Container Loading Capacity</strong><br>
      Container Type: 20-foot container<br>
      Load Capacity: Approx. 25 Metric Tons (MT)</p>`,

      image: ["/assets/products/rice/basmati_rice.png"],
      category: "rice",
    },
    {
      id: 3,
      name: "IR64 Parboiled Rice",
      description: `
      <p>IR64 is one of the most exported varieties of parboiled rice from India. Cultivated primarily in Andhra Pradesh, Tamil Nadu, and Karnataka, it is known for its high yield, affordability, and non-sticky texture when cooked. It is widely used for everyday meals across several global markets.</p>
      
      <p><strong>Uses</strong>: Cooking, Export, Retail, Horeca, Bulk Supply</p>
      
      <p>🧺 <strong>Types of Packing Materials</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Durable and cost-effective packaging, ideal for bulk shipments.
      </br>
      <strong>2. BOPP Laminated Bags</strong><br>
      Attractive and moisture-proof, ideal for shelf display and retail branding.
      </br>
      <strong>3. Jute Bags</strong><br>
      Biodegradable and breathable packaging, environmentally sustainable.
      </br>
      <strong>Available Packing Sizes</strong>: 10 kg, 15 kg, 25 kg (Customizable as per buyer needs)</p>
      
      <p>📦 <strong>Container Loading Capacity</strong><br>
      Container Type: 20-foot container<br>
      Load Capacity: Approx. 25 Metric Tons (MT)</p>`,      

      image: ["/assets/products/rice/ir64_rice.jpg"],
      category: "rice",
    },
    {
      id: 4,
      name: "IR36 Parboiled Rice",
      description: `
      <p>IR36 Parboiled Rice is a medium-grain rice variety known for its quick cooking properties and economic value. It is largely grown in Chhattisgarh and Odisha and serves as a staple in institutional kitchens, mid-day meals, and food relief programs.</p>
      
      <p><strong>Uses</strong>: Institutional, Bulk Cooking, Export, Retail, Government Supply</p>

      <p>🧺 <strong>Types of Packing Materials</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Cost-efficient and widely used for mass packaging and export.
      </br>
      <strong>2. BOPP Laminated Bags</strong><br>
      Improves shelf life and presents better aesthetics for retail display.
      </br>
      <strong>3. Jute Bags</strong><br>
      Eco-conscious and traditional in style, preferred in certain markets.
      </br>
      <strong>Available Packing Sizes</strong>: 10 kg, 15 kg, 25 kg (Custom orders accepted)</p>
      
      <p>📦 <strong>Container Loading Capacity</strong><br>
      Container Type: 20-foot container<br>
      Load Capacity: Approx. 25 Metric Tons (MT)</p>`,      
      image: ["/assets/products/rice/ir36_rice.jpg"],
      category: "rice",
    },
    {
      id: 5,
      name: "Sona Masoori Rice",
      description: `
      <p>Sona Masoori Parboiled Rice is a lightweight, aromatic, and less starchy rice variety cultivated mostly in Karnataka, Andhra Pradesh, and Telangana. It is preferred for daily consumption in South Indian cuisine and is ideal for dishes like pongal, lemon rice, and tamarind rice.</p>
     
      <p><strong>Uses</strong>: Cooking, South Indian Cuisine, Retail, Export, Horeca</p>
      
      <p>🧺 <strong>Types of Packing Materials</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Strong and durable, ideal for bulk exports.
      </br>
      <strong>2. BOPP Laminated Bags</strong><br>
      Visually appealing, moisture-proof, and retail-ready packaging.
      </br>
      <strong>3. Jute Bags</strong><br>
      Sustainable and breathable, ideal for eco-conscious consumers.
      </br>
      <strong>Available Packing Sizes</strong>: 10 kg, 15 kg, 25 kg (Customizable)</p>

      <p>📦 <strong>Container Loading Capacity</strong><br>
      Container Type: 20-foot container<br>
      Load Capacity: Approx. 25 Metric Tons (MT)</p>`,
          
      image: ["/assets/products/rice/sona_masuri_rice.png"],
      category: "rice",
    },
    {
      id: 6,
      name: "Matta Rice",
      description: `

      <p>Matta Rice, also known as Kerala Red Rice, is a nutrient-rich parboiled rice cultivated in the Palakkad district of Kerala. It retains the outer bran layer and has a distinct earthy flavor, making it a staple in Kerala cuisine. It's valued for its high fiber and mineral content.</p>
      
      <p><strong>Uses</strong>: Cooking, Kerala Cuisine, Health Food, Retail, Export</p>
      
      <p>🧺 <strong>Types of Packing Materials</strong>
      </br>
      <strong>1. PP (Polypropylene) Bags</strong><br>
      Strong and widely accepted packaging for bulk distribution.
      </br>
      <strong>2. BOPP Laminated Bags</strong><br>
      Premium look and excellent shelf-life for branded retail sale.
      </br>
      <strong>3. Jute Bags</strong><br>
      Eco-conscious packaging, ideal for organic and natural product stores.
      </br>
      <strong>Available Packing Sizes</strong>: 10 kg, 15 kg, 25 kg (Buyer-specific sizes available)</p>
      
      <p>📦 <strong>Container Loading Capacity</strong><br>
      Container Type: 20-foot container<br>
      Load Capacity: Approx. 25 Metric Tons (MT)</p>`,      

      image: ["/assets/products/rice/matta_rice.png"],
      category: "rice",
    },
    {
      id: 7,
      name: "Onions",
      description: `
      <p>Export-quality onions include varieties such as <b>Podisu Onion</b>, <b>Red Onion</b>, <b>White Onion</b>, <b>Krishnapuram Rose Onion</b>, and <b>Bangalore Rose Onion</b>. These onions are carefully graded and typically range in size from 45mm to 60mm, making them suitable for international markets and diverse culinary applications.</p>

      <p><b>Uses</b>: Cooking, Export, Retail, Processing, Horeca</p>

      <p><b>🧺 Types of Packing Materials</b><br>
      <b>Mesh Bags</b><br>
      Widely used for onion packaging, breathable and lightweight, available in 6kg, 10kg, and 20kg sizes depending on buyer requirements.<br>

      <b>Master Packing with Palletization</b><br>
      Palletized packing in containers can be provided for the UK and other destinations as per buyer requirements.<br>

      <b>Customized Packing</b><br>
      Packing can be tailored based on importing country regulations and client specifications.<br>
      
      <p><b>📦 Container Loading Specifications</b><br>
      Container Type: Reefer Containers<br>
      Temperature Range: 45–55°F<br>
      Loading in 20ft Container: Approx. 12.5–13 Metric Tons<br>
      Loading in 40ft Container: Approx. 28 Metric Tons</p>
      `,


      image: [
        "/assets/products/onions/onion.jpg",
        "/assets/products/onions/onion_1.jpg"
      ],
      category: "onion",
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

      image: [
        "/assets/products/plates/round_plate_10.webp",
        "/assets/products/plates/round_plate_10_1.webp"
      ],
      category: "plates",
    },
    {
      id: 15,
      name: "10″x10″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 10 x 10 x 0.5 inche(s)</p>
      <p><strong>Best suited to serve</strong>: Main course, Buffet</p>`,
      image: [
        "assets/products/plates/square_plate_10_10.webp",
        "assets/products/plates/square_plate_10_10_1.webp"
      ],
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
      image: [
        "/assets/products/plates/round_plate_9.webp",
        "/assets/products/plates/round_plate_9_1.webp"
      ],
      category: "plates",
    },
    {
      id: 17,
      name: "9″x9″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 9 x 9 x 0.5 inche(s)</p>
      <p><strong>Best suited to serve</strong>: Main course, Pizza, Parathas</p>`,      
      image: [
        "/assets/products/plates/square_plate_9_9.webp",
        "/assets/products/plates/square_plate_9_9_1.webp"
      ],
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
      image: [
        "/assets/products/plates/round_plate_8.webp",
        "/assets/products/plates/round_plate_8_1.webp"
      ],
      category: "plates",
    },
    {
      id: 19,
      name: "8″×8″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 8 x 8 x 0.5 inche(s)</p>
      <p><strong>Best suited to serve</strong>: Pizza, Salads, Fast foods</p>`,
      image: [
        "/assets/products/plates/square_plate_8_8.webp",
        "/assets/products/plates/square_plate_8_8_1.webp"
      ],
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
      image: [
        "/assets/products/plates/round_plate_7.webp",
        "/assets/products/plates/round_plate_7_1.webp"
      ],
      category: "plates",
    },
    {
      id: 21,
      name: "7″×7″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 7 x 7 x 0.5 inche(s)</p>
      <p><strong>Best suited to serve</strong>: Chaats, Sandwiches, Fries, Burger</p>`,
      image: [
        "/assets/products/plates/square_plate_7_7.webp",
        "/assets/products/plates/square_plate_7_7_1.webp"
      ],
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
      image: [
        "/assets/products/plates/rectangle_plate_7_8.5.webp",
        "/assets/products/plates/rectangle_plate_7_8.5_1.webp",
        "/assets/products/plates/rectangle_plate_7_8.5_2.webp"
      ],
      category: "plates",
    },
    {
      id: 23,
      name: "6″×6″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 6 x 6 x 0.5 inches (LxBxH)</p>
      <p><strong>Best suited to serve</strong>: Chaats, Sandwiches, Fries, Burger</p>`,      
      image: [
        "/assets/products/plates/square_plate_6_6.webp",
        "/assets/products/plates/square_plate_6_6_1.webp"
      ],
      category: "plates",
    },
    {
      id: 24,
      name: "4″×4″ Square Plate",
      description: `<p>Spill and leaf proof square shaped plates are perfect for serving all kinds of food – breakfast, brunch, lunch and dinner. 
      They are hassle free, user friendly and light weighted. The plates are bordered with a heightened layer to make them comfortable for use.</p>
      <p><strong>Dimension</strong>: 4 x 4 x 0.5 inches (LxBxH)</p>
      <p><strong>Best suited to serve</strong>: Desserts, Sweets, Chutney, Sauce</p>`,
      image: [
        "/assets/products/plates/square_plate_4_4.webp",
        "/assets/products/plates/square_plate_4_4_1.webp"
      ],
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
      image: [
        "/assets/products/bowls/square_bowl_8_8.webp",
        "/assets/products/bowls/square_bowl_8_8_1.webp"
      ],
      category: "bowls",
    },
    {
      id: 26,
      name: "6.5″ Rectangle Bowl",
      description: `<p>Rectangle shaped bowls are shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers. The product is completely spill and leak proof.</p>
      <p><strong>Dimension</strong>: 6.5 x 6.5 x 2 inches</p>
      <p><strong>Best suited to serve</strong>: Biryani, North Indian Dishes, Chinese Rice/Noodles</p>`,      
      image: [
        "/assets/products/bowls/rectangle_bowl_6.5.webp",
        "/assets/products/bowls/rectangle_bowl_6.5_1.webp"
      ],
      category: "bowls",
    },
    {
      id: 27,
      name: "5″ Round Bowl",
      description: `<p>Round shaped bowls are shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers; hot or cold. The product is spill and leak proof.</p>
      <p><strong>Dimension</strong>: 5 inches diameter/ 1.5 inches deep</p>
      <p><strong>Best suited to serve</strong>: Soups, Curry, Sambaar</p>`,      
      image: [
        "/assets/products/bowls/round_bowl_5.webp",
        "/assets/products/bowls/round_bowl_5_1.webp"
      ],
      category: "bowls",
    },
    {
      id: 28,
      name: "4″x4″ Deep Square Bowl",
      description: `<p>Square shaped bowls, shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers. The product is spill and leak proof.</p>
      <p><strong>Dimension</strong>: 4 x 4 x 1 inches (LxBxH)</p>
      <p><strong>Best suited to serve</strong>: Fruits, Sweets, Chutney, Sambaar, Curry</p>`,      
      image: [
        "/assets/products/bowls/deep_square_bowl_4_4.webp",
         "/assets/products/bowls/deep_square_bowl_4_4_1.webp"
      ],
      category: "bowls",
    },
    {
      id: 29,
      name: "4″x4″ deep Bowl",
      description: `<p>Square shaped bowls, shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers. The product is spill and leak proof.</p>
      <p><strong>Dimension</strong>: 4 x 4 x 0.75 inches (LxBxH)</p>
      <p><strong>Best suited to serve</strong>: Fruits, Sweets, Chutney, Sambaar, Curry</p>`,      
      image: [
        "/assets/products/bowls/deep_bowl_4_4.webp",
         "/assets/products/bowls/deep_bowl_4_4_1.webp"
      ],
      category: "bowls",
    },
    {
      id: 30,
      name: "3″x3″ Square Bowl",
      description: `<p>Square shaped bowls, shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers. The product is spill and leak proof.</p>
      <p><strong>Dimension</strong>: 3 x 3 x 1 inches (LxBxH)</p>
      <p><strong>Best suited to serve</strong>: Ice cream, Desserts, Sweets, Chutney, Sauce, Raita</p>`,      
      image: [
        "/assets/products/bowls/square_bowl_3_3.webp",
         "/assets/products/bowls/square_bowl_3_3_1.webp"
      ],
      category: "bowls",
    },
    {
      id: 31,
      name: "3.5″ Round Bowl",
      description: `<p>Round shaped bowls are shaped to fit an average palm size and are light weighted and user friendly. 
      They can be used to serve any kind of side-dish, dessert or even store leftovers; hot or cold. The product is spill and leak proof.</p>
      <p><strong>Dimension</strong>: 3.5 inches in diameter / 1.5 inches deep</p>
      <p><strong>Best suited to serve</strong>: Ice cream, Desserts, Sweet, Chutney, Sauce, Raita</p>`,
      image: [
        "/assets/products/bowls/round_bowl_3.5.webp",
         "/assets/products/bowls/round_bowl_3.5_1.webp"
      ],
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
      image: [
        "/assets/products/trays/rectangle_tray_6_9.webp",
         "/assets/products/trays/rectangle_tray_6_9_1.webp"
      ],
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
              Coconuts
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
              className={activeCategory === "plates" ? "active" : ""}
              onClick={() => handleCategoryClick("plates")}
            >
              Plates
            </button>
            <button
              className={activeCategory === "bowls" ? "active" : ""}
              onClick={() => handleCategoryClick("bowls")}
            >
              Bowls
            </button>
            <button
              className={activeCategory === "trays" ? "active" : ""}
              onClick={() => handleCategoryClick("trays")}
            >
              Trays
            </button>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                delay={index * 25}
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
