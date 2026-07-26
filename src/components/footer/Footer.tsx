import React from 'react';
import styles from './Footer.module.css';
import { Apple, Smartphone, Globe, Share2, X } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <span className={styles.footerLogo}>Zen</span>
          <p className={styles.footerDescription}>
            Built for calm focus and seamless productivity.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSectionTitle}>Useful Links</h4>
          <a className={styles.footerLink} href="/features">Features</a>
          <a className={styles.footerLink} href="/pricing">Pricing</a>
          <a className={styles.footerLink} href="/about">About Us</a>
          <a className={styles.footerLink} href="/blog">Blog</a>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSectionTitle}>Categories</h4>
          <a className={styles.footerLink} href="/categories/organic">Organic</a>
          <a className={styles.footerLink} href="/categories/wellness">Wellness</a>
          <a className={styles.footerLink} href="/categories/supplements">Supplements</a>
          <a className={styles.footerLink} href="/categories/home">Home Goods</a>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSectionTitle}>Get the App</h4>
          <div className={styles.appButtons}>
            <a className={styles.appButton} href="https://www.apple.com/app-store/" aria-label="App Store">
              <Apple size={18} />
              <span>App Store</span>
            </a>
            <a className={styles.appButton} href="https://play.google.com/store" aria-label="Google Play">
              <Smartphone size={18} />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.trademark}>© {new Date().getFullYear()} Zen LLC. All rights reserved.</div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" aria-label="Facebook" className={styles.socialLink}><Share2 size={18} /></a>
          <a href="https://twitter.com" aria-label="X" className={styles.socialLink}><X size={18} /></a>
          <a href="https://instagram.com" aria-label="Instagram" className={styles.socialLink}><Globe size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
