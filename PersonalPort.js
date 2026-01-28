
var typed = new Typed(".typing", {
  strings: ["Web Designer", "Developer", "programer", "fast learner"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})



const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

