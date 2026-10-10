// Main Interactions: Mobile Navigation & Back-to-Top
function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-drawer");
  if (drawer) {
    drawer.classList.toggle("is-open");
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
      if (!drawer.contains(event.target) && !toggleBtn.contains(event.target)) {
        drawer.classList.remove("is-open");
      }
    }
  });

  // Close mobile drawer on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      const drawer = document.getElementById("mobile-drawer");
      if (drawer && drawer.classList.contains("is-open")) {
        drawer.classList.remove("is-open");
      }
    }
  }, { passive: true });
});
