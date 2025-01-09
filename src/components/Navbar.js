import React from 'react';

const Navbar = () => {

  const handleClick = (section) => {
    // Add the appropriate behavior here, e.g., scroll to the section, show modal, etc.
    console.log(`Navigating to ${section}`);
  };

  return (
    <header style={styles.header}>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <button onClick={() => handleClick('Home')} style={styles.navLink}>
              Home
            </button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => handleClick('Courses')} style={styles.navLink}>
              Courses
            </button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => handleClick('Social Work')} style={styles.navLink}>
              Social Work
            </button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => handleClick('Scope')} style={styles.navLink}>
              Scope
            </button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => handleClick('About Us')} style={styles.navLink}>
              About Us
            </button>
          </li>
          <li style={styles.navItem}>
            <button onClick={() => handleClick('Events')} style={styles.navLink}>
              Events
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Inline CSS styles
const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    padding: '10px 20px',
    color: 'white',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    gap: '70px',
  },
  navItem: {
    position: 'relative',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  },
};

export default Navbar;
