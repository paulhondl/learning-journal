// Hamburger Menu Functionality

const menuBtn = document.getElementById("menu");
const navLinks = document.querySelector("header ul");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("visible");
  document.querySelector("header").classList.toggle("no-padding-bottom")
})
window.addEventListener("resize", () => {
  if(window.innerWidth > 700) {
    navLinks.classList.remove("visible");
  }
})
// View More Button Functionality

const viewMoreBtn = document.querySelector(".view-more-btn");
const invisiblePosts = document.querySelectorAll(".hidden");
let isHidden = true;

viewMoreBtn.addEventListener("click", () => {
  invisiblePosts.forEach(post => post.classList.toggle("hidden"));
  isHidden = !isHidden;
  viewMoreBtn.textContent = isHidden ? "View More" : "View Less";
});