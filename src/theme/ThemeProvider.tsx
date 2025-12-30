import React, { createContext, useContext, useEffect } from "react";

type Theme = "dark";
type ThemeCtx = { theme: Theme };

const Ctx = createContext<ThemeCtx | null>(null);

function applyTheme() {
  document.documentElement.setAttribute("data-theme", "dark");
}

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    applyTheme();
  }, []);

  return (
    <Ctx.Provider value={{ theme: "dark" }}>
      {children}
    </Ctx.Provider>
  );
};

export function useTheme() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useTheme must be used within ThemeProvider");
  return v;
}
