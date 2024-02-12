import React from "react";
import "./button.style.css";

export const Button = ({ children, className, icon, ...others }) => {
  return (
    <button type="button" className={`btn-cv ${className}`} {...others}>
      {children} {icon && icon}
    </button>
  );
};
