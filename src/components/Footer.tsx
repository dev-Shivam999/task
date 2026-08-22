import React from 'react';

/** Footer component displaying copyright information and quick links with a solid red background (no gradient). */
export default function Footer(): React.ReactElement {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} TechVault Store. All rights reserved.
        </p>
        <nav className="footer-links" aria-label="Footer links">
          <a href="#privacy" onClick={(e) => e.preventDefault()} className="footer-link">
            Privacy Policy
          </a>
          <a href="#terms" onClick={(e) => e.preventDefault()} className="footer-link">
            Terms of Service
          </a>
          <a href="#support" onClick={(e) => e.preventDefault()} className="footer-link">
            Customer Support
          </a>
        </nav>
      </div>
    </footer>
  );
}
