import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="hero-section">
        <h1 className="homepage-title">Welcome to SalesPro</h1>
        <p className="homepage-description">
          Your all-in-one sales dashboard. Manage your pipeline, track client
          interactions, monitor commissions, and integrate your social media
          channels seamlessly—all in one intuitive platform.
        </p>
        <div className="homepage-buttons">
          <Link to="/auth/Login" className="homepage-btn login-btn">
            Login
          </Link>
          <Link to="/auth/Register" className="homepage-btn register-btn">
            Register
          </Link>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Sales Pipeline</h3>
          <p>
            Track and manage your sales opportunities with our intuitive
            pipeline view
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💼</div>
          <h3>Client Management</h3>
          <p>Keep all your client interactions and information in one place</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Commission Tracking</h3>
          <p>Monitor your earnings and commissions in real-time</p>
        </div>
      </div>
    </div>
  );
}
