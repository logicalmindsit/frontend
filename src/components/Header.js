import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa"; // Import icons for dropdown toggle

const Header = () => {
  const [language, setLanguage] = useState("SELECT LANGUAGE");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Language options
  const languageOptions = ["Tamil", "English", "Telugu", "Malayalam"];

  // Translations for each language
  const translations = {
    English: {
      home: "Home",
      contact: "Contact Us",
      help: "Any Help",
      gallery: "Gallery",
    },
    Tamil: {
      home: "வீடு",
      contact: "பேச்சு சேவை",
      help: "எந்த உதவி",
      gallery: "காட்சி",
    },
    Telugu: {
      home: "హోమ్",
      contact: "సంప్రదించండి",
      help: "ఏ సహాయం",
      gallery: "గ్యాలరీ",
    },
    Malayalam: {
      home: "ഹോം",
      contact: "ബന്ധപ്പെടുക",
      help: "ഏതെങ്കിലും സഹായം",
      gallery: "ഗാലറി",
    },
  };

  // Function to handle language change
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setDropdownOpen(false); // Close dropdown after selection
  };

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <header style={styles.header}>
      {/* Language Dropdown on Left Side */}
      <div style={styles.languageContainer}>
        <div onClick={toggleDropdown} style={styles.languageSelectLabel}>
          {language} {/* Display selected language */}
          {dropdownOpen ? (
            <FaCaretUp style={styles.dropdownIcon} /> // Show up arrow when dropdown is open
          ) : (
            <FaCaretDown style={styles.dropdownIcon} /> // Show down arrow when dropdown is closed
          )}
        </div>

        {dropdownOpen && (
          <div style={styles.dropdown}>
            {languageOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleLanguageChange(option)} // Change language on click
                style={styles.dropdownItem}
              >
                {option} {/* Display each language option */}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <button style={styles.navLink}>{translations[language]?.home || "Home"}</button>
          </li>
          <li style={styles.navItem}>
            <button style={styles.navLink}>{translations[language]?.contact || "Contact Us"}</button>
          </li>
          <li style={styles.navItem}>
            <button style={styles.navLink}>{translations[language]?.help || "Any Help"}</button>
          </li>
          <li style={styles.navItem}>
            <button style={styles.navLink}>{translations[language]?.gallery || "Gallery"}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Inline CSS styles
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between", // Ensure space between language dropdown and navigation items
    alignItems: "center", // Align items vertically
    backgroundColor: "green",
    padding: "10px 20px",
    color: "white",
  },
  languageContainer: {
    position: "relative", 
    marginRight: "20px", // Space between language dropdown and navigation items
  },
  languageSelectLabel: {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    color: "black",
  },
  dropdownIcon: {
    marginLeft: "10px", 
    fontSize: "16px",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "white",
    listStyleType: "none",
    padding: "5px 10px",
    margin: 0,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000, 
  },
  dropdownItem: {
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginBottom: "5px",
  },
  nav: {
    display: "flex",
    flex: 1, // Allow nav to take up remaining space
    justifyContent: "flex-end", // Align navigation items to the right
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 15px", // Add space between navigation items
  },
  navLink: {
    background: "none", // Remove button background
    border: "none", // Remove button border
    color: "white", // Link color
    fontSize: "16px",
    textDecoration: "none",
    cursor: "pointer", // Make button act like a link
  },
};

export default Header;
