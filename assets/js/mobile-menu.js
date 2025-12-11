const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
const closeMenuBtn = document.getElementById("closeMenuBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenuOverlay.classList.remove("hidden");
    setTimeout(() => {
        mobileMenuOverlay.classList.add("mobile-open");
    }, 10);
});

closeMenuBtn.addEventListener("click", () => {
    mobileMenuOverlay.classList.remove("mobile-open");
    setTimeout(() => {
        mobileMenuOverlay.classList.add("hidden");
    }, 300);
});
