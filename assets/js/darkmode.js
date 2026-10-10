// Theme Toggle Logic with Session & LocalStorage Sync
const moonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
const sunSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;

function updateThemeToggleIcon(theme) {
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.innerHTML = theme === "dark" ? sunSvg : moonSvg;
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
}

function setTheme(themeToSet) {
  document.documentElement.setAttribute("data-theme", themeToSet);
  sessionStorage.setItem("theme", themeToSet);
  localStorage.setItem("theme", themeToSet);
  updateThemeToggleIcon(themeToSet);
}

function modeSwitcher() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

// Ensure toggle icon matches theme on DOM load
document.addEventListener("DOMContentLoaded", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  updateThemeToggleIcon(currentTheme);

  // Listen for system theme changes if user hasn't explicitly set one
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", (e) => {
    if (!sessionStorage.getItem("theme") && !localStorage.getItem("theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });
});