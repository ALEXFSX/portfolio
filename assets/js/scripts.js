
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  let windowHeight = window.innerHeight;

  let element = document.querySelector(".afs-header");
  if (scroll > windowHeight - 80) {
    element.classList.add("scroll");
  } else {
    element.classList.remove("scroll");
  }
});
