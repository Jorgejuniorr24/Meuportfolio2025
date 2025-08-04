import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
    </button>
  );
};

export default ThemeSwitcher;
