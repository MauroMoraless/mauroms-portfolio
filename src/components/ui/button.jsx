import React from 'react';

export function Button({ 
  children, 
  variant = "primary", 
  size = "default", 
  className = "", 
  href,
  ...props 
}) {
  const baseClass = "btn";
  const variantClass = variant === "outline" ? "btn-outline" : 
                      variant === "ghost" ? "btn-ghost" : "btn-primary";
  const sizeClass = size === "lg" ? "btn-lg" : 
                   size === "icon" ? "btn-icon" : "";
  
  const buttonClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`;

  if (href) {
    return (
      <a
        className={buttonClass}
        href={href}
        role="button"
        tabIndex="0"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}