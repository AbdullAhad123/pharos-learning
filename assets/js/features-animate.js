document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".feature-block");

    // Split paragraph into animated words (SAFE)
const splitWords = (element) => {
    if (!element || element.dataset.split === "1") return;

    const text = element.textContent.trim();
    const words = text.split(/\s+/);

    element.dataset.split = "1";
    element.innerHTML = "";

    words.forEach(word => {
        const span = document.createElement("span");
        span.className = "word";
        span.textContent = word;
        span.style.display = "inline-block";
        span.style.marginRight = "0.35em"; // 🔑 THIS FIXES SPACING
        span.style.opacity = "0";
        span.style.filter = "blur(6px)";
        span.style.transform = "translateY(12px)";
        element.appendChild(span);
    });
};

    // Initial state
    blocks.forEach(block => {
        const img = block.querySelector(".img-wrap");
        const content = block.querySelector(".content-wrap");
        const paragraph = content.querySelector("p");

        const isReversed =
            img.compareDocumentPosition(content) & Node.DOCUMENT_POSITION_FOLLOWING;

        img.style.opacity = "0";
        content.style.opacity = "0";

        img.style.filter = "blur(12px)";
        content.style.filter = "blur(12px)";

        img.style.transform = `translateX(${isReversed ? "80px" : "-80px"})`;
        content.style.transform = `translateX(${isReversed ? "-80px" : "80px"})`;

        splitWords(paragraph);
    });

    // Intersection observer animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const block = entry.target;
            const img = block.querySelector(".img-wrap");
            const content = block.querySelector(".content-wrap");
            const words = content.querySelectorAll(".word");

            img.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
            content.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";

            img.style.opacity = "1";
            content.style.opacity = "1";

            img.style.filter = "blur(0)";
            content.style.filter = "blur(0)";

            img.style.transform = "translateX(0)";
            content.style.transform = "translateX(0)";

            words.forEach((word, i) => {
                setTimeout(() => {
                    word.style.transition = "all 0.6s ease";
                    word.style.opacity = "1";
                    word.style.filter = "blur(0)";
                    word.style.transform = "translateY(0)";
                }, 200 + i * 40);
            });

            observer.unobserve(block);
        });
    }, {
        threshold: 0.35
    });

    blocks.forEach(block => observer.observe(block));
});
