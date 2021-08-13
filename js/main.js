var item = document.querySelector(".container-nav");

window.onscroll = navbar;

function navbar() {
  if( window.scrollY == 0){
        item.classList.remove("active");
  }
  else{
    item.classList.add("active");
  }
}


