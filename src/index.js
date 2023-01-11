import "./js/spinner";
import "./js/animation";
import "./js/burger-menu";
import "./js/theme-switch";
import "./js/scroll-to-top";

const mouse = document.querySelector(".mouse");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 60) {
    mouse.classList.add("visually-hidden");
  } else {
    mouse.classList.remove("visually-hidden");
  }
};
