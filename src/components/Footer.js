import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Fabiola Ingabire. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
