const clickBtn = document.querySelector(".top-nav");
const topTriangle = document.querySelector(".top-curve");
const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", show);
function show() {
  if (clickBtn.style.display === "none") {
    clickBtn.style.display = "block";
    topTriangle.style.display = "block";
  } else {
    clickBtn.style.display = "none";
    topTriangle.style.display = "none";
  }
}
