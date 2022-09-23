import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Effect from './components/effect/Effect';
import State from './components/state/State';
import Context from './components/context/Context';
import Home from './components/home/Home';
import {useThemeContext} from './contexts/theme-context/ThemeContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {ROOT_PATH, USE_EFFECT_FULL_PATH, USE_STATE_FULL_PATH, USE_CONTEXT_FULL_PATH} from './constants/Path';

function App() {

  const {isDark} = useThemeContext();
  const classes = ` App ${isDark ? 'dark-theme' : 'light-theme'}`;

  return (
    <Router>
      <div className={classes}>
        <Header />
        <Routes>
          <Route path={USE_EFFECT_FULL_PATH} element={<Effect/>}/>
          <Route path={USE_STATE_FULL_PATH} element={<State/>}/>
          <Route path={USE_CONTEXT_FULL_PATH} element={<Context/>}/>
          <Route path={ROOT_PATH} element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
