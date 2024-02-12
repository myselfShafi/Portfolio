import React from "react";
import "./MainContainer.style.css";

export const MainContainer = ({ children, className, ...other }) => {
  return (
    <div className={`main-container ${className && className}`} {...other}>
      {children}
    </div>
  );
};
