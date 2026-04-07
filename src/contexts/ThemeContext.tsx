import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeName = "saffron" | "spiritual" | "royal";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "saffron", setTheme: () => { } });

const themes: Record<ThemeName, Record<string, string>> = {
  saffron: {
    "--background": "39 50% 96%",
    "--foreground": "20 30% 15%",
    "--card": "40 40% 97%",
    "--card-foreground": "20 30% 15%",
    "--primary": "30 90% 50%",
    "--primary-foreground": "40 100% 98%",
    "--secondary": "43 80% 55%",
    "--secondary-foreground": "20 30% 15%",
    "--muted": "35 30% 90%",
    "--muted-foreground": "20 15% 45%",
    "--accent": "15 70% 45%",
    "--accent-foreground": "40 100% 98%",
    "--border": "35 30% 82%",
    "--input": "35 30% 85%",
    "--ring": "30 90% 50%",
    "--saffron": "30 90% 50%",
    "--gold": "43 80% 55%",
    "--cream": "39 50% 96%",
    "--warm-brown": "20 30% 25%",
  },
  spiritual: {
    "--background": "210 30% 96%",
    "--foreground": "220 25% 15%",
    "--card": "210 25% 97%",
    "--card-foreground": "220 25% 15%",
    "--primary": "210 70% 45%",
    "--primary-foreground": "210 100% 98%",
    "--secondary": "195 60% 50%",
    "--secondary-foreground": "220 25% 15%",
    "--muted": "210 25% 90%",
    "--muted-foreground": "220 15% 45%",
    "--accent": "250 50% 50%",
    "--accent-foreground": "210 100% 98%",
    "--border": "210 25% 82%",
    "--input": "210 25% 85%",
    "--ring": "210 70% 45%",
    "--saffron": "210 70% 45%",
    "--gold": "195 60% 50%",
    "--cream": "210 30% 96%",
    "--warm-brown": "220 25% 20%",
  },
  royal: {
    "--background": "270 15% 96%",
    "--foreground": "280 20% 15%",
    "--card": "270 12% 97%",
    "--card-foreground": "280 20% 15%",
    "--primary": "340 65% 47%",
    "--primary-foreground": "340 100% 98%",
    "--secondary": "43 75% 55%",
    "--secondary-foreground": "280 20% 15%",
    "--muted": "270 15% 90%",
    "--muted-foreground": "280 10% 45%",
    "--accent": "280 45% 40%",
    "--accent-foreground": "270 100% 98%",
    "--border": "270 15% 82%",
    "--input": "270 15% 85%",
    "--ring": "340 65% 47%",
    "--saffron": "340 65% 47%",
    "--gold": "43 75% 55%",
    "--cream": "270 15% 96%",
    "--warm-brown": "280 20% 20%",
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    return (localStorage.getItem("mv-theme") as ThemeName) || "saffron";
  });

  const setTheme = (t: ThemeName) => {
    setThemeState(t);
    localStorage.setItem("mv-theme", t);
  };

  useEffect(() => {
    const root = document.documentElement;
    const vars = themes[theme];
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const themeLabels: Record<ThemeName, { name: string; emoji: string }> = {
  saffron: { name: "Saffron Warmth", emoji: "🪔" },
  spiritual: { name: "Spiritual Blue", emoji: "🙏" },
  royal: { name: "Royal Maroon", emoji: "👑" },
};
