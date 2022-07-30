import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Effect from './components/effect/Effect';
import {useThemeContext} from './contexts/theme-context/ThemeContext';

function App() {

  const {isDark} = useThemeContext();
  const classes = ` App ${isDark ? 'dark-theme' : 'light-theme'}`;

  return (
    <div className={classes}>
      <Header />
      <Effect />
    </div>
  );
}

export default App;
