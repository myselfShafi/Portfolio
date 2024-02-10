import React from "react";
import "./button.style.css";

export const Button = ({ children, icon, ...others }) => {
  return (
    <div>
      <button type="button" className="btn-cv" {...others}>
        {children} {icon && icon}
      </button>
    </div>
  );
};
