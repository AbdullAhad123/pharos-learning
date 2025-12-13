document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".feature-block");

    const splitLines = (element) => {
        const text = element.innerText;
        element.innerHTML = "";

        const words = text.split(" ");
        let line = document.createElement("span");
        line.className = "line";
        element.appendChild(line);

        words.forEach((word, index) => {
            const testLine = line.innerText + word + " ";
            line.innerText = testLine;

            if (line.offsetWidth > element.offsetWidth && index !== 0) {
                line.innerText = line.innerText.trim();
                line = document.createElement("span");
                line.className = "line";
                line.innerText = word + " ";
                element.appendChild(line);
            }
        });

        element.querySelectorAll(".line").forEach(l => {
            l.style.display = "block";
            l.style.opacity = "0";
            l.style.filter = "blur(6px)";
            l.style.transform = "translateY(12px)";
        });
    };

    blocks.forEach(block => {
        const img = block.querySelector(".img-wrap");
        const content = block.querySelector(".content-wrap");
        const paragraph = content.querySelector("p");

        const isReversed = img.compareDocumentPosition(content) & Node.DOCUMENT_POSITION_FOLLOWING;

        img.style.opacity = "0";
        content.style.opacity = "0";

        img.style.filter = "blur(12px)";
        content.style.filter = "blur(12px)";

        img.style.transform = `translateX(${isReversed ? "80px" : "-80px"})`;
        content.style.transform = `translateX(${isReversed ? "-80px" : "80px"})`;

        splitLines(paragraph);
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const block = entry.target;
            const img = block.querySelector(".img-wrap");
            const content = block.querySelector(".content-wrap");
            const lines = content.querySelectorAll(".line");

            img.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
            content.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";

            img.style.opacity = "1";
            content.style.opacity = "1";

            img.style.filter = "blur(0)";
            content.style.filter = "blur(0)";

            img.style.transform = "translateX(0)";
            content.style.transform = "translateX(0)";

            lines.forEach((line, i) => {
                setTimeout(() => {
                    line.style.transition = "all 0.8s ease";
                    line.style.opacity = "1";
                    line.style.filter = "blur(0)";
                    line.style.transform = "translateY(0)";
                }, 300 + i * 120);
            });

            observer.unobserve(block);
        });
    }, {
        threshold: 0.35
    });

    blocks.forEach(block => observer.observe(block));
});
