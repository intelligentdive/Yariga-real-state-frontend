"use client";

import { ThemeProvider } from "next-themes";

const ThemeToggleProvider = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeToggleProvider;
