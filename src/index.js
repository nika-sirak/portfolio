const menuBtnEl = document.querySelector(".btn-menu");

console.log(menuBtnEl);

menuBtnEl.addEventListener("click", onMenuBtnEl);

function onMenuBtnEl() {
  menuBtnEl.classList.toggle("active");
  console.log(menuBtnEl.classList);
}
