import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="text-muted">
        &copy; { new Date().getFullYear() } | Insiten
      </p>
    </div>
  </footer>
);

module.exports = Footer;
