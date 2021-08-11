var item = document.querySelector(".container-nav");

window.onscroll = navbar;

function navbar() {
  window.scrollY == 0
    ? item.classList.remove("active")
    : item.classList.add("active");
}
