import React from "react";
import ProductCard from "./ProductCard";
import styles from "./productList.module.css";
import productData from "./productData"; // Import data

function ProductList() {
    return (
      <>
        <h2 style={{ marginLeft: "5vw" }}>Fresh Recommendations</h2>
        
        <div className={styles.grid}>
          {productData.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
  
        {/* Load More Button */}
        <div className={styles.buttonContainer}>
          <button className={styles.loadMore}>Load More</button>
        </div>
      </>
    );
  }
  

export default ProductList;
