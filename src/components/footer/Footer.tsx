import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Zen</span>
          <p className="footer__description">Built for calm focus and seamless productivity.</p>
        </div>

        <div className="footer__links">
          <div className="footer__section">
            <h4>Product</h4>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
          </div>

          <div className="footer__section">
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Zen. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
