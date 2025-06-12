import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useThemeToggle } from '../hooks/use-theme-toggle';

export function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useThemeToggle();

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      style={{
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        border: 'none',
        background: 'var(--bg-card)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        cursor: 'pointer'
      }}
    >
      {mounted ? (
        isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only"></span>
    </button>
  );
}