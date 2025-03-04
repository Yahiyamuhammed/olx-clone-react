import React, { useRef } from "react";
import styles from "./categoryLinks.module.css";

function CategoryLinks() {
  const scrollRef = useRef(null);

  const categories = [
    "Cars",
    "Motorcycles",
    "Mobile Phones",
    "For Sale: Houses & Apartments",
    "Scooters",
    "Commercial & Other Vehicles",
    "For Rent: Houses & Apartments",
  ];

  return (
    <nav ref={scrollRef} className={styles.navContainer}>
      {categories.map((category, index) => (
        <a href="#" key={index} className={styles.navItem}>
          <span>{category}</span>
        </a>
      ))}
    </nav>
  );
}

export default CategoryLinks;
