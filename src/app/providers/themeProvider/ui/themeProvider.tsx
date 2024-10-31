'use client'

import { useState } from "react";

import ThemeContext from "shared/config/theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-wrapper theme-wrapper_${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
