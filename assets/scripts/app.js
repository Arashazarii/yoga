const typingText = document.querySelector(".typing-text");

const words = ["innercalm", "innerpeace", "tranquility"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = currentWord.slice(0, charIndex);

  let speed = isDeleting ? 80 : 150;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;

    if (wordIndex === words.length) {
      wordIndex = 0;
    }

    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
