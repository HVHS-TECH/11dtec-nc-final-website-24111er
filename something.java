const prevBtn = document.querySelector(".prev");
const nxtBtn = document.querySelector(".next");
const body = document.querySelector("body");
let slideCount = 1;

nxtBtn.addEventListener("click", NextSlide);
prevBtn.addEventListener("click", PrevSlide);

function NextSlide() {
    if (slideCount < 3) {
        slideCount = slideCount + 1;
    }
    body.style.setProperty ("--index", slideCount - 1);
}

function PrevSlide() {
    if (slideCount > 1) {
        slideCount = slideCount - 1;
    }
    body.style.setProperty ("--index", slideCount - 1);
}