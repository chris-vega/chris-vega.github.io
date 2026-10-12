// Main Interactions: Mobile Navigation & Back-to-Top (WCAG 2.2 Accessible)
function setMobileMenuState(isOpen) {
  const drawer = document.getElementById("mobile-drawer");
  const toggleBtn = document.getElementById("mobile-toggle");
  if (drawer) {
    if (isOpen) {
      drawer.classList.add("is-open");
    } else {
      drawer.classList.remove("is-open");
    }
  }
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }
}

function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-drawer");
  if (drawer) {
    const isOpen = !drawer.classList.contains("is-open");
    setMobileMenuState(isOpen);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("back-to-top");

  // Scroll listener for back-to-top button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      if (backToTopBtn) backToTopBtn.classList.add("is-visible");
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove("is-visible");
    }
  }, { passive: true });

  // Close mobile drawer when clicking outside
  document.addEventListener("click", (event) => {
    const drawer = document.getElementById("mobile-drawer");
    const toggleBtn = document.getElementById("mobile-toggle");
    if (drawer && drawer.classList.contains("is-open")) {
      if (!drawer.contains(event.target) && (!toggleBtn || !toggleBtn.contains(event.target))) {
        setMobileMenuState(false);
      }
    }
  });

  // Close mobile drawer on Escape key and return focus to toggle button (WCAG 2.1.1)
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const drawer = document.getElementById("mobile-drawer");
      const toggleBtn = document.getElementById("mobile-toggle");
      if (drawer && drawer.classList.contains("is-open")) {
        setMobileMenuState(false);
        if (toggleBtn) toggleBtn.focus();
      }
    }
  });

  // Close mobile drawer on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      const drawer = document.getElementById("mobile-drawer");
      if (drawer && drawer.classList.contains("is-open")) {
        setMobileMenuState(false);
      }
    }
  }, { passive: true });
});
