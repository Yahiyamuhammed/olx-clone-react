import React from "react";
import styles from "./bottomFooter.module.css";

function BottomFooter() {
  return (
    <div className={styles.bottomFooter}>
      <div className={styles.footerContainer}>
        {/* Logos & Links */}
        <div className={styles.logos}>
          {/* First Logo */}
          <div className={styles.logoItem}>
            <img
              src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1"
              alt="Car Trade"
              className={styles.logoImage}
            />
          </div>

          {/* Vertical Line */}
          <div className={styles.verticalLine}></div>

          {/* Remaining Logos */}
          <div className={styles.logoItem}>
            <img
              src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1"
              alt="OLX"
              className={styles.logoImage}
            />
          </div>
          <div className={styles.logoItem}>
            <a href="https://www.carwale.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1"
                alt="CarWale"
                className={styles.logoImage}
              />
            </a>
          </div>
          <div className={styles.logoItem}>
            <a href="https://www.bikewale.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1"
                alt="BikeWale"
                className={styles.logoImage}
              />
            </a>
          </div>
          <div className={styles.logoItem}>
            <a href="https://www.cartrade.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1"
                alt="CarTrade"
                className={styles.logoImage}
              />
            </a>
          </div>
          <div className={styles.logoItem}>
            <a href="https://www.mobilityoutlook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1"
                alt="Mobility Outlook"
                className={styles.logoImage}
              />
            </a>
          </div>
        </div>

        {/* Copyright & Links */}
        <div className={styles.footerBottom}>
          <section className={styles.rights}>All rights reserved © 2006-2025 OLX</section>
          <section className={styles.links}>
            <a href="https://help.olx.in/hc/en-us" target="_blank" rel="noopener noreferrer">
              Help
            </a>
            &nbsp; - &nbsp;
            <a href="/en-in/sitemap/most-popular">Sitemap</a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
