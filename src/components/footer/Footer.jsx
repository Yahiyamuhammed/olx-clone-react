import React from "react";
import styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"; // Import social media icons

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Popular Locations */}
        <div className={styles.section}>
          <h4>Popular Locations</h4>
          <ul>
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>

        {/* Trending Locations */}
        <div className={styles.section}>
          <h4>Trending Locations</h4>
          <ul>
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>

        {/* About Us */}
        <div className={styles.section}>
          <h4>About Us</h4>
          <ul>
            <li>Tech@OLX</li>
            <li>OLX</li>
            <li>Blog</li>
            <li>Help</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Legal & Privacy */}
        <div className={styles.section}>
          <h4>Legal & Privacy</h4>
          <ul>
            <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className={styles.section}>
          <h4>Follow Us</h4>
          
          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <FaFacebook className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaYoutube className={styles.icon} />
          </div>

          {/* App Store & Play Store Images */}
          <div className={styles.appStores}>
            <img
              src="https://statics.olx.in/external/base/img/playstore.webp"  // Replace with actual image path
              alt="Google Play Store"
              className={styles.storeImage}
            />
            <img
              src="https://statics.olx.in/external/base/img/appstore.webp"  // Replace with actual image path
              alt="Apple App Store"
              className={styles.storeImage}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
