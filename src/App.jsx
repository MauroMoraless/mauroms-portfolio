import React from 'react';
import { ThemeProvider } from './components/theme-provider';
import Portfolio from './components/Portfolio';
import './index.css';

function App() {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={false}
      storageKey="mauro-portfolio-theme"
    >
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;