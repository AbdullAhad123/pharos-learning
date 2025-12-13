document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const allItems = document.querySelectorAll(".faq-item");

    allItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector("span").textContent = "+";
      }
    });

    item.classList.toggle("active");
    button.querySelector("span").textContent =
      item.classList.contains("active") ? "−" : "+";
  });
});
