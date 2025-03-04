import React from "react";
import styles from "./productCard.module.css";
import WishIcon from "../../assets/wish.svg"; // Import your SVG

function ProductCard({ item }) {
  return (
    <div className={styles.div}>
      <div className={styles.card}>
        {/* Wishlist Icon */}
        <img src={WishIcon} alt="Wishlist" className={styles.wishIcon} />
        
        {/* Product Image */}
        <img src={item.image} alt={item.name} className={styles.image} />
        
        {/* Featured Badge */}
        {item.featured && <span className={styles.featured}>Featured</span>}
        
        {/* Product Details */}
        <h3 className={styles.price}>₹ {item.price.toLocaleString()}</h3>
        {item.kms && <p className={styles.kms}>{item.year} - {item.kms} km</p>}
        <p className={styles.name}>{item.name}</p>
        <p className={styles.place}>{item.location}</p>
        <p className={styles.date}>{item.date}</p>
      </div>
    </div>
  );
}

export default ProductCard;
