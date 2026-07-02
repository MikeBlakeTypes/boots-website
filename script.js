// BOOTS Website - Module 1

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");

// Header changes slightly when scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Mobile menu
toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach((item) => {
    observer.observe(item);
});