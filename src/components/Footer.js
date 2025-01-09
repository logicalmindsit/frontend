import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF, // Outline version
  FaInstagramSquare, // Outline version
  FaYoutube, // Added YouTube icon
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
    
      <div style={styles.column}>
        <h4 style={styles.heading}>Classes Types</h4>
        <ul style={styles.list}>
          <li>
            <button style={styles.link}>Yoga</button>
          </li>
          <li>
            <button style={styles.link}>Varma</button>
          </li>
          <li>
            <button style={styles.link}>Ayurvedha</button>
          </li>
          <li>
            <button style={styles.link}>Meditation</button>
          </li>
        </ul>
      </div>

      <div style={styles.column}>
        <h4 style={styles.heading}>Important Links</h4>
        <ul style={styles.list}>
          <li>
            <button style={styles.link}>Schedule & Booking</button>
          </li>
          <li>
            <button style={styles.link}>Classes Type</button>
          </li>
          <li>
            <button style={styles.link}>Passes & Membership</button>
          </li>
          <li>
            <button style={styles.link}>Educational Institutions</button>
          </li>
          <li>
            <button style={styles.link}>Contact Us</button>
          </li>
        </ul>
      </div>

      <div style={styles.column}>
        <h4 style={styles.heading}>Legal Terms</h4>
        <ul style={styles.list}>
          <li>
            <button style={styles.link}>FAQs</button>
          </li>
          <li>
            <button style={styles.link}>Terms</button>
          </li>
          <li>
            <button style={styles.link}>Privacy Policy</button>
          </li>
        </ul>
      </div>
      <div style={styles.column}>
        <h4 style={styles.heading}>Contact Us</h4>
        <ul style={styles.list}>
          <li>
            <div style={styles.contactItem}>
              <FaPhone style={styles.icon} />
              <button style={styles.link}>9638527410</button>
            </div>
          </li>
          <li>
            <div style={styles.contactItem}>
              <FaEnvelope style={styles.icon} />
              <button style={styles.link}>
                cloudservice@logicalmindsit.com
              </button>
            </div>
          </li>
        </ul>
        <h4 style={styles.heading}>Follow Us</h4>
        <ul style={styles.list}>
          <div style={styles.socialIcons}>
            <button
              style={styles.iconButton}
              aria-label="Facebook"
            >
              <FaFacebookF style={styles.icon} />
            </button>
            <button
              style={styles.iconButton}
              aria-label="Instagram"
            >
              <FaInstagramSquare style={styles.icon} />
            </button>
            <button
              style={styles.iconButton}
              aria-label="YouTube"
            >
              <FaYoutube style={styles.icon} />
            </button>
          </div>
        </ul>
      </div>

      <div style={styles.allRightsReserved}>
        <p style={styles.rightsText}>All Rights Reserved &copy; 2025</p>
      </div>
    </footer>
  );
};

// Inline CSS styles
const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "green",
    color: "white",
    padding: "50px 20px",
    flexWrap: "wrap",
    position: "relative",
    paddingBottom: "70px",
  },
  column: {
    width: "22%",
    marginBottom: "20px",
    padding: "10px",
    flex: "1 1 22%", // Ensures columns are responsive
  },
  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    marginBottom: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "block",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  icon: {
    marginRight: "10px",
    fontSize: "18px",
    color: "white",
  },
  socialIcons: {
    display: "flex",
    marginTop: "10px",
  },
  iconButton: {
    fontSize: "20px",
    background: "none",
    border: "none",
    padding: "5px",
    cursor: "pointer",
  },
  allRightsReserved: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    width: "100%",
  },
  rightsText: {
    color: "#fff",
    fontSize: "14px",
    margin: 0,
  },

  // Responsive Styles
  "@media (max-width: 768px)": {
    footer: {
      flexDirection: "column", // Stack the columns for small screens
      alignItems: "center",
      padding: "20px",
    },
    column: {
      width: "100%", // Full width for each column on small screens
      padding: "10px",
      textAlign: "center", // Center align content
    },
    socialIcons: {
      justifyContent: "center", // Center social icons
      marginTop: "10px",
    },
    allRightsReserved: {
      textAlign: "center", // Center text on small screens
    },
  },
};

export default Footer;
