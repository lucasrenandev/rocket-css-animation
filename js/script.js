"use strict";

const section = document.querySelector(".section");
function animateStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    section.appendChild(star);

    const left = Math.random() * section.offsetWidth;
    const size = Math.random() * 10;
    const duration = Math.random() * 0.5;

    star.style.left = left + "px";
    star.style.fontSize = 5 + size + "px";
    star.style.animationDuration = 1 + duration + "s";

    setTimeout(() => {
        section.removeChild(star);
    }, 4000);
}
setInterval(animateStar, 50);

/* const container = section.querySelector(".container");
container.addEventListener("mousemove", function(event) {
    const pageX = event.clientX;
    const pageY = event.clientY;

    this.style.left = (pageX - 100) + "px";
    this.style.top = (pageY - 150) + "px";
    this.style.cursor = "pointer";
}); */     