document.addEventListener("DOMContentLoaded", () => {
    const topImg = document.querySelector(".top-img");
    const bottomImgs = document.querySelectorAll(".bottom-img");

    function revealImages() {
        const trigger = window.innerHeight * 0.85;

        // TOP image reveal
        const topRect = topImg.getBoundingClientRect().top;
        if (topRect < trigger) {
            topImg.classList.add("revealed");
        }

        // BOTTOM images reveal with slight delay
        bottomImgs.forEach((img, index) => {
            const rect = img.getBoundingClientRect().top;
            if (rect < trigger) {
                setTimeout(() => {
                    img.classList.add("revealed");
                }, index * 300); // stagger effect
            }
        });
    }

    window.addEventListener("scroll", revealImages);
    revealImages();
});
