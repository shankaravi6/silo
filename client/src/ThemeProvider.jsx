import React, { useContext } from "react";

const ThemeContext = React.createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
