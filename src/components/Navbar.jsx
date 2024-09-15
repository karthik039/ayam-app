import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const styles = {
    nav: {
      backgroundColor: '#f8f9fa',
      padding: '10px 20px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      gap: '15px',
      padding: '0',
      margin: '0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navItem: {
      fontSize: '16px',
      fontWeight: '500',
    },
    navLink: (isActive) => ({
      color: isActive ? '#fff' : '#007bff',  // White for active link, blue for others
      backgroundColor: isActive ? '#007bff' : 'transparent',  // Blue background for active link
      textDecoration: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      border: isActive ? '2px solid #0056b3' : '2px solid transparent', // Active link gets a darker border
    }),
    navLinkHover: {
      backgroundColor: '#0056b3',
      color: '#fff',
    },
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/ayam-app/" style={styles.navLink(isActive('/ayam-app/'))}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/ayam-app/finder" style={styles.navLink(isActive('/ayam-app/finder'))}>Finder</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/ayam-app/info" style={styles.navLink(isActive('/ayam-app/info'))}>Info</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/ayam-app/counter" style={styles.navLink(isActive('/ayam-app/counter'))}>Counter</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/ayam-app/feet-adder" style={styles.navLink(isActive('/ayam-app/feet-adder'))}>Feet Adder</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
