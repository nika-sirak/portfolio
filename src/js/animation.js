//scroll animation
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    } else {
      entry.target.classList.remove("animation");
    }
  });
});
const heroEl = document.querySelectorAll("[data-action='animate-hero']");
heroEl.forEach((el) => heroObserver.observe(el));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    }
  });
});
const mainEl = document.querySelectorAll("[data-action='animate']");
mainEl.forEach((el) => observer.observe(el));

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-items");
    }
  });
});
const skillsEl = document.querySelectorAll(".tech-items");
skillsEl.forEach((el) => {
  skillObserver.observe(el);
  el.classList.add("hidden-items");
});
