import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          KnowledgeBase
        </Link>
        <div className="navbar-status">
          SYS.STATUS // ONLINE
        </div>
      </div>
    </nav>
  );
}