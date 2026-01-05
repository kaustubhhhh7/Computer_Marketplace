import React, { useState } from "react";
import Header from "./Header";
import './styles/Dashboard.css';
import B01 from '../assets/4070.png';
import B02 from '../assets/RTX4.png';
import B03 from '../assets/RTX3.png';
import B04 from '../assets/RTX2.png';
import B05 from '../assets/RTX1.png';
import B06 from '../assets/RTX0.png';
import B07 from '../assets/AMD.png';
import B08 from '../assets/AMD2.png';
import B09 from '../assets/M1.png';
import B10 from '../assets/M2.png';
import B11 from '../assets/M3.png';
import B12 from '../assets/M4.png';
import B13 from '../assets/I5.png';
import B14 from '../assets/I7.png';
import B15 from '../assets/I9.png';
import B16 from '../assets/I10.png';
import B17 from '../assets/R9.png';

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, image: B01, name: "GEFORCE RTX 4070", category: "GPU", price: 1599, description: "The RTX 4070 features powerful performance with 12GB of GDDR6X memory, delivering incredible ray tracing and AI-enhanced gaming experience." },
    { id: 2, image: B02, name: "GEFORCE GTX 1080", category: "GPU", price: 1199, description: "The RTX 1080 offers superior gaming performance with advanced graphics processing, perfect for 1440p and 4K gaming." },
    { id: 10, image: B10, name: "Gigabyte Aorus Master B550M", category: "Motherboard", price: 299, description: "A premium motherboard with great expandability, ideal for overclocking and ultra-fast data transfer." },
    { id: 11, image: B11, name: "ASUS Motherboard AORUS ELITE V2", category: "Motherboard", price: 699, description: "Ryzen 9 7950X delivers unparalleled multi-core performance, making it perfect for content creators and heavy workloads." },
    { id: 12, image: B12, name: "MSI MAG WIFI MASTER B650M", category: "Motherboard", price: 649, description: "Intel Core i9-13900K provides industry-leading performance for gaming and content creation with 24 cores and 32 threads." },
    { id: 13, image: B13, name: "Intel i5 12400F", category: "CPU", price: 449, description: "Ryzen 7 7800X3D offers next-gen performance with 3D V-Cache, ideal for gaming and multitasking." },
    { id: 14, image: B14, name: "Intel i7 14700K", category: "CPU", price: 549, description: "Ryzen 7 7800X3D offers next-gen performance with 3D V-Cache, ideal for gaming and multitasking." },
    { id: 3, image: B03, name: "GEFORCE GTX 1650 EVGA", category: "GPU", price: 999, description: "RTX 1650 XTX is an affordable GPU with great performance for mid-tier gaming and VR setups." },
    { id: 4, image: B04, name: "GEFORCE RTX AERO 3050Ti", category: "GPU", price: 799, description: "The RTX 3050Ti provides great performance in AAA titles and is perfect for gamers looking for quality at a reasonable price." },
    { id: 5, image: B05, name: "GigaByte RTX 3050", category: "GPU", price: 699, description: "GigaByte RTX 3050 offers amazing performance for modern games with great efficiency and energy savings." },
    { id: 6, image: B06, name: "MSI RTX 3050 SUPER", category: "GPU", price: 649, description: "The MSI RTX 1050 is a compact powerhouse ideal for entry-level gaming at 1080p resolution." },
    { id: 7, image: B07, name: "ASUS AMD RADEON RX6600XT", category: "GPU", price: 449, description: "AMD RADEON 1 offers competitive pricing with great graphics performance for casual gamers." },
    { id: 8, image: B08, name: "ASUS AMD RADEON 580", category: "GPU", price: 349, description: "A budget-friendly AMD RADEON option providing solid performance for gaming and multimedia." },
    { id: 9, image: B09, name: "MSI MAG X650", category: "Motherboard", price: 329, description: "The MSI MEG X670E motherboard is designed for high-performance gaming systems with advanced cooling solutions and PCIe 5.0 support." },
    { id: 15, image: B15, name: "Intel CORE ULTRA 9 245K", category: "CPU", price: 649, description: "Ryzen 7 7800X3D offers next-gen performance with 3D V-Cache, ideal for gaming and multitasking." },
    { id: 16, image: B16, name: "Intel CORE I9 EXTREME", category: "CPU", price: 749, description: "Ryzen 7 7800X3D offers next-gen performance with 3D V-Cache, ideal for gaming and multitasking." },
    { id: 17, image: B17, name: "AMD Ryzen 9 7800X3D", category: "CPU", price: 749, description: "Ryzen 7 7800X3D offers next-gen performance with 3D V-Cache, ideal for gaming and multitasking." },
  ];

  const categories = ["All", "GPU", "CPU", "Motherboard"];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.price - b.price;
    if (sortOrder === "high-to-low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="dashboard-container">
      <Header />

      <div className="dashboard-header">
        <h1 className="dashboard-title">Premium Components</h1>
      </div>

      <div className="dashboard-controls">
        <div className="category-pills">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`pill-btn ${selectedCategory === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="sort-select"
        >
          <option value="">Sort By Price</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      <div className="products-grid">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="product-card"
          >
            <div className="product-image-box">
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
            </div>
            <div className="product-info">
              <div>
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">{product.name}</h3>
              </div>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={() => setSelectedProduct(null)}>
              ✕
            </button>
            <h2 className="modal-title">{selectedProduct.name}</h2>
            <p className="modal-description">{selectedProduct.description}</p>
            <p className="product-price">${selectedProduct.price}</p>
            <button
              onClick={() => setSelectedProduct(null)}
              className="modal-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
