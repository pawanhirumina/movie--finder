// src/components/Footer.jsx
import { positionalKeys } from "framer-motion";
import React from "react";

function Footer() {
  return (
    <footer style={styles.footer} className="footer">
      <p style={styles.text}>© {new Date().getFullYear()} Movie Finder. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1f1f1f",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
    marginTop: "40px",
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
};

export default Footer;
