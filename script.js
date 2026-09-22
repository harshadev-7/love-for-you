const heart = document.getElementById("heart");

function makeHeart() {
  heart.innerHTML = "";

  // Parametric heart curve.
  // t goes around the complete heart.
  const total = 150;

  for (let i = 0; i < total; i++) {
    const t = (Math.PI * 2 * i) / total;

    // Classic heart equation
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t);

    // Convert mathematical coordinates to the box.
    const left = 50 + x * 2.45;
    const top = 50 - y * 2.45;

    const word = document.createElement("span");
    word.className = "love_word";
    word.textContent = "I love you";

    // Tangent angle for each word so it follows the heart.
    const t2 = t + 0.01;
    const x2 = 16 * Math.pow(Math.sin(t2), 3);
    const y2 = 13 * Math.cos(t2)
             - 5 * Math.cos(2 * t2)
             - 2 * Math.cos(3 * t2)
             - Math.cos(4 * t2);

    const angle = Math.atan2(
      -(y2 - y),
      x2 - x
    ) * 180 / Math.PI;

    word.style.left = left + "%";
    word.style.top = top + "%";
    word.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    word.style.animationDelay = (i * 0.025) + "s";

    heart.appendChild(word);
  }
}

function createHearts() {
  for (let i = 0; i < 18; i++) {
    const h = document.createElement("div");
    h.className = "flying-heart";
    h.textContent = "❤️";
    h.style.left = (40 + Math.random() * 20) + "vw";
    h.style.top = (55 + Math.random() * 10) + "vh";
    h.style.animationDelay = (Math.random() * .5) + "s";
    document.body.appendChild(h);

    setTimeout(() => h.remove(), 2500);
  }
}

makeHeart();
