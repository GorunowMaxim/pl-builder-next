'use client'

import { createContext } from "react";

type ThemeContextProps = {
  theme: string;
  toggleTheme: () => void;
};

const defaultThemeContext: ThemeContextProps = {
  theme: 'light',
  toggleTheme: () => { },
};

const ThemeContext = createContext<ThemeContextProps>(defaultThemeContext);

export default ThemeContext;