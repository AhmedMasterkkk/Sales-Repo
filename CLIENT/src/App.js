import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="app-logo">
            <span className="logo-text">SalesPro</span>
          </Link>
          <nav className="app-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/pipeline" className="nav-link">
              Pipeline
            </Link>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>SalesPro</h4>
            <p>Your all-in-one sales management solution</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/dashboard" className="footer-link">
              Dashboard
            </Link>
            <Link to="/pipeline" className="footer-link">
              Pipeline
            </Link>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>support@salespro.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} SalesPro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
