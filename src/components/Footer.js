// @flow
import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="text-center text-muted">
        &copy; { new Date().getFullYear() } | Mark Greenburg
      </p>
    </div>
  </footer>
);

module.exports = Footer;
