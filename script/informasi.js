const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 400) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

window.addEventListener("resize", function () {
  const garis1Div = document.getElementById("garis1");
  const garis2Div = document.getElementById("garis2");
  if (window.innerWidth <= 1080) {
    garis1Div.classList.remove("garis-vertikal");
    garis2Div.classList.remove("garis-vertikal");
  } else {
    garis1Div.classList.add("garis-vertikal");
    garis2Div.classList.add("garis-vertikal");
  }
});