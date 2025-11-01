// Define the SVG icons for the toggle
var moon =
  '<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
var sun =
  '<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

// Check for system preference
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");

// Check for saved theme in session storage
let theme = sessionStorage.getItem("theme");

/**
 * A helper function to set the theme.
 * It applies the 'data-theme' attribute, updates the toggle icon,
 * and saves the preference to session storage.
 * @param {string} themeToSet - "dark" or "light"
 */
function setTheme(themeToSet) {
  document.documentElement.setAttribute("data-theme", themeToSet);
  let toggle = document.getElementById("theme-toggle");

  if (themeToSet === "dark") {
    if (toggle) toggle.innerHTML = sun;
    sessionStorage.setItem("theme", "dark");
  } else {
    if (toggle) toggle.innerHTML = moon;
    sessionStorage.setItem("theme", "light");
  }
}

/**
 * The function called by the theme-toggle button.
 * It reads the current theme from session and switches to the opposite.
 */
function modeSwitcher() {
  let currentTheme = sessionStorage.getItem("theme");
  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

/**
 * Listener function for changes in system preference.
 * Automatically updates the theme to match the system.
 * @param {MediaQueryListEvent} event
 */
function prefersColorTest(event) {
  setTheme(event.matches ? "dark" : "light");
}

// 1. INITIAL LOAD LOGIC
// If a theme is saved in session storage, use that.
if (theme === "dark") {
  setTheme("dark");
} else if (theme === "light") {
  setTheme("light");
} else {
  // If no theme is in session storage, check system preference.
  setTheme(systemInitiatedDark.matches ? "dark" : "light");
}

// 2. ADD EVENT LISTENER
// Listen for real-time changes in system preference
systemInitiatedDark.addEventListener("change", prefersColorTest);