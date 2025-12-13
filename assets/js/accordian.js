document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.parentElement;
        const allItems = document.querySelectorAll(".accordion-item");

        allItems.forEach(i => {
            i.classList.remove("active");
            i.querySelector("span").textContent = "+";
        });

        item.classList.add("active");
        button.querySelector("span").textContent = "−";
    });
});
