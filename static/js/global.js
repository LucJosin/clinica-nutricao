window.onload = () => {
  listenToHeaderMenu();
};

function listenToHeaderMenu() {
  const navBar = document.querySelector(".navbar");
  const menuOpen = document.querySelector(".header-mobile-menu-open");
  const menuClose = document.querySelector(".header-mobile-menu-close");

  menuOpen.addEventListener("click", () => {
    navBar.classList.toggle("open");
    menuOpen.classList.toggle("hide");
    menuClose.classList.toggle("show");
  });

  menuClose.addEventListener("click", () => {
    navBar.classList.toggle("open");
    menuOpen.classList.toggle("hide");
    menuClose.classList.toggle("show");
  });
}
