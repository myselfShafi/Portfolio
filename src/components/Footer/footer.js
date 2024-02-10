import React from "react";
import "./footer.style.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="cpyryt">
        Copyright &#169; Shafi 2022 - {year}. All Rights Reserved.
      </p>
    </footer>
  );
};
