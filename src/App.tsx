import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Effect from './components/effect/Effect';
import State from './components/state/State';
import Home from './components/home/Home';
import {useThemeContext} from './contexts/theme-context/ThemeContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const {isDark} = useThemeContext();
  const classes = ` App ${isDark ? 'dark-theme' : 'light-theme'}`;

  return (
    <Router>
      <div className={classes}>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/effect" element={<Effect/>}/>
          <Route path="/state" element={<State/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
