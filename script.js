function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.remove("active");
}
let lang = "en",
  isDark = true;
function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle("light-mode", !isDark);
  document.getElementById("themeBtn").innerHTML = isDark
    ? '<i class="bi bi-moon-fill"></i>'
    : '<i class="bi bi-sun-fill"></i>';
}
function toggleLang() {
  lang = lang === "en" ? "es" : "en";
  document.getElementById("langBtn").textContent = lang === "en" ? "ES" : "EN";
  document
    .querySelectorAll("[data-en]")
    .forEach((el) => (el.textContent = el.getAttribute("data-" + lang)));
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 800,
          easing: "easeOutCubic",
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".anim").forEach((el) => observer.observe(el));
document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: ".hero .anim",
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(100, { start: 200 }),
    duration: 900,
    easing: "easeOutCubic",
  });
});
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (scrollY >= sec.offsetTop - 150) current = sec.getAttribute("id");
  });
  document.querySelectorAll(".navbar-custom .nav-link").forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
});
