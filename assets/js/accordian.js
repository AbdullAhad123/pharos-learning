const items = document.querySelectorAll(".accordion-item");
const image = document.getElementById("accordionImage");

items.forEach(item => {
  const button = item.querySelector(".accordion-header");
  const icon = button.querySelector("span");

  button.addEventListener("click", () => {
    items.forEach(i => {
      i.classList.remove("active");
      i.querySelector("span").textContent = "+";
    });

    item.classList.add("active");
    icon.textContent = "−";

    const newImg = item.dataset.img;
    if (newImg && image) {
      image.style.opacity = "0";
      setTimeout(() => {
        image.src = newImg;
        image.style.opacity = "1";
      }, 200);
    }
  });
});
