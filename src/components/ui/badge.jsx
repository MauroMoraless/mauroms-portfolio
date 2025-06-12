import React from 'react';

export function Badge({ className = "", variant = "default", ...props }) {
  return <span className={`badge ${className}`} {...props} />;
}