import React from 'react';
import styles from './Footer.module.css';
import { Apple, Smartphone, Globe, Share2, X } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Site footer">
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <span className={styles.footerLogo}>MILLETVAAN</span>
          <p className={styles.footerDescription}>
            The way to healthy Lifestyle.
          </p>
        </div>

        <div className={styles.footerLinkColumns}>
          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Useful Links</h4>
            <nav aria-label="Useful links" className={styles.footerLinkGroup}>
              <a className={styles.footerLink} href="/features">Features</a>
              <a className={styles.footerLink} href="/pricing">Pricing</a>
              <a className={styles.footerLink} href="/about">About Us</a>
              <a className={styles.footerLink} href="/blog">Blog</a>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Categories</h4>
            <nav aria-label="Product categories" className={styles.footerLinkGroup}>
              <a className={styles.footerLink} href="/categories/organic">Organic</a>
              <a className={styles.footerLink} href="/categories/wellness">Wellness</a>
              <a className={styles.footerLink} href="/categories/supplements">Supplements</a>
              <a className={styles.footerLink} href="/categories/home">Home Goods</a>
            </nav>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSectionTitle}>Get the App</h4>
          <div className={styles.appButtons}>
            <a className={styles.appButton} href="https://www.apple.com/app-store/" aria-label="Download on the App Store">
              <Apple size={18} />
              <span>App Store</span>
            </a>
            <a className={styles.appButton} href="https://play.google.com/store" aria-label="Get it on Google Play">
              <Smartphone size={18} />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.trademark}>© {new Date().getFullYear()} MILLETVAAN LLC. All rights reserved.</div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" aria-label="Visit our Facebook page" className={styles.socialLink}><Share2 size={18} /></a>
          <a href="https://twitter.com" aria-label="Visit our X page" className={styles.socialLink}><X size={18} /></a>
          <a href="https://instagram.com" aria-label="Visit our Instagram page" className={styles.socialLink}><Globe size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
