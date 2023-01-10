const spinner = document.querySelector(".spinner");

const hideSpinner = () => {
  spinner.classList.add("spinner_hidden");
};
window.addEventListener("load", () => {
  setTimeout(() => {
    hideSpinner();
  }, 500);
});
