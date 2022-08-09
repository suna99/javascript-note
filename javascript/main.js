//scrollIntoView
document.querySelectorAll("a[href^='#']").forEach(el => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(el.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  });
});

document.querySelectorAll(".result").forEach(el => {
  el.querySelector("h3").addEventListener("click", () => {
    el.classList.toggle("active");
  })
});

