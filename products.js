window.addEventListener("scroll", scrollFunction);
const upButton = document.getElementById("upButton");

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    upButton.hidden = false;
  } else {
    upButton.hidden = true;
  }
}

upButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
