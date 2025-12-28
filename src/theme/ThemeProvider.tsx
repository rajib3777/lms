import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";
type ThemeCtx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void; };

const Ctx = createContext<ThemeCtx | null>(null);

function applyTheme(t: Theme){
  document.documentElement.setAttribute("data-theme", t);
}

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem("caii_theme");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("caii_theme", theme);
  }, [theme]);

  const api = useMemo<ThemeCtx>(() => ({
    theme,
    toggle: () => setThemeState(t => (t === "light" ? "dark" : "light")),
    setTheme: (t) => setThemeState(t),
  }), [theme]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
};

export function useTheme(){
  const v = useContext(Ctx);
  if(!v) throw new Error("useTheme must be used within ThemeProvider");
  return v;
}
