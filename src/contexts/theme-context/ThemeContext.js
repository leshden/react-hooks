import {createContext, useContext, useState} from 'react'

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
  const [isDark, setDark] = useState(false);
  const value = {isDark, setDark};

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeContext was used outside of its Provider");
  }

  return context;
}
