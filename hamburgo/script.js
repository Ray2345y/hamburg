
const slides = document.querySelectorAll(".slide");

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

const counter = document.getElementById("counter");
const progressBar = document.getElementById("progress-bar");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    currentSlide = index;

    counter.textContent =
        `${currentSlide + 1} / ${slides.length}`;

    const progress =
        ((currentSlide + 1) / slides.length) * 100;

    progressBar.style.width = progress + "%";

    prevButton.disabled = currentSlide === 0;
    nextButton.disabled =
        currentSlide === slides.length - 1;
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", previousSlide);

// Navegación con teclado
document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        nextSlide();
    }

    if (event.key === "ArrowLeft") {
        previousSlide();
    }

});

// Pantalla completa con doble clic
document.addEventListener("dblclick", () => {

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }

});

showSlide(0);
