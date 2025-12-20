const phrases = [
  "imprese moderne",
  "team in crescita",
  "organizzazioni globali",
  "apprendimento nel mondo reale"
];

const el = document.getElementById("rotatingText");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 55;      // typing speed
const deletingSpeed = 35;    // deleting speed
const holdAfterType = 1200;  // pause after full word
const holdAfterDelete = 400; // pause before typing next

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // typing
    el.textContent = currentPhrase.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      setTimeout(() => isDeleting = true, holdAfterType);
    }
  } else {
    // deleting
    el.textContent = currentPhrase.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(() => {}, holdAfterDelete);
    }
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeLoop, speed);
}

typeLoop();