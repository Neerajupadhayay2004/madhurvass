import { useTheme, themeLabels } from "@/contexts/ThemeContext";
import { useState } from "react";
import { Palette } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-50">
      {open && (
        <div className="mb-2 bg-card border border-border rounded-xl shadow-golden p-3 space-y-1.5 animate-fade-in">
          {(Object.keys(themeLabels) as Array<keyof typeof themeLabels>).map((key) => (
            <button
              key={key}
              onClick={() => { setTheme(key); setOpen(false); }}
              className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                theme === key ? "bg-primary/15 text-primary" : "text-foreground/70 hover:bg-muted"
              }`}
            >
              <span>{themeLabels[key].emoji}</span>
              <span>{themeLabels[key].name}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-saffron text-primary-foreground w-12 h-12 rounded-full shadow-golden flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Change theme"
      >
        <Palette size={20} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
