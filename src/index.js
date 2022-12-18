const menuBtnEl = document.querySelector(".btn-menu");
const menuBodyEl = document.querySelector(".nav");
const menuLinksEl = document.querySelectorAll(".nav-list-link");

if (menuBtnEl) {
  menuBtnEl.addEventListener("click", onMenuBtnEl);
}

function onMenuBtnEl() {
  menuBtnEl.classList.toggle("active");
  menuBodyEl.classList.toggle("active");
  document.body.classList.toggle("lock");
}

if (menuLinksEl.length > 0) {
  menuLinksEl.forEach((menuLink) =>
    menuLink.addEventListener("click", onMenuLinkEl)
  );
}

function onMenuLinkEl() {
  if (menuBtnEl.classList.contains("active")) {
    menuBtnEl.classList.remove("active");
    menuBodyEl.classList.remove("active");
    document.body.classList.remove("lock");
  }
}

//scroll animation
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.classList.contains("hero-anim")) {
      entry.target.classList.add("animate__slideInLeft");
    } else {
      entry.target.classList.remove("animate__slideInLeft");
    }
    if (entry.isIntersecting && !entry.target.classList.contains("hero-anim")) {
      entry.target.classList.add("animate__slideInRight");
    } else {
      entry.target.classList.remove("animate__slideInRight");
    }
  });
});
const heroEl = document.querySelectorAll("[data-action='animate-hero']");
heroEl.forEach((el) => heroObserver.observe(el));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__slideInUp");
    }
  });
});
const mainEl = document.querySelectorAll("[data-action='animate']");
mainEl.forEach((el) => observer.observe(el));
