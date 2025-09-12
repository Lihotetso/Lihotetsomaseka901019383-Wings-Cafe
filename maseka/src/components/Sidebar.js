import React from "react";
import "./Sidebar.css";

function Sidebar({ active, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Wings Cafe</div>
      <nav className="sidebar-nav">
        <button className={`sidebar-link${active === 'Dashboard' ? ' active' : ''}`} onClick={() => onSelect('Dashboard')}>Dashboard</button>
        <button className={`sidebar-link${active === 'Inventory' ? ' active' : ''}`} onClick={() => onSelect('Inventory')}>Inventory</button>
        <button className={`sidebar-link${active === 'Sales' ? ' active' : ''}`} onClick={() => onSelect('Sales')}>Sales</button>
        <button className={`sidebar-link${active === 'Customers' ? ' active' : ''}`} onClick={() => onSelect('Customers')}>Customers</button>
  <button className={`sidebar-link${active === 'Reports' ? ' active' : ''}`} onClick={() => onSelect('Reports')}>Reports</button>
  <button className={`sidebar-link${active === 'AboutUs' ? ' active' : ''}`} onClick={() => onSelect('AboutUs')}>About Us</button>
  <button className={`sidebar-link${active === 'ContactUs' ? ' active' : ''}`} onClick={() => onSelect('ContactUs')}>Contact Us</button>
      </nav>
    </aside>
  );
}

export default Sidebar;
