import React from 'react';

/** Header component displaying site branding with a white and red gradient background. */
export default function Header(): React.ReactElement {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-brand">
          <div className="logo-badge">🛍️</div>
          <div className="title-group">
            <h1 className="site-title">
              Tech<span className="title-highlight">Vault</span>
            </h1>
          </div>
        </div>
        <p className="header-tagline">Quality products at great prices</p>
      </div>
    </header>
  );
}
