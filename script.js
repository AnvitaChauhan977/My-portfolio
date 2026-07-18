// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ===============================
// TYPING ANIMATION
// ===============================

const typingElement = document.querySelector(".typing");

const words = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Web Designer",
    "Frontend Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "rgba(9,9,15,.95)";
        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.3)";

    } else {

        header.style.background =
            "rgba(8,12,20,.6)";

        header.style.boxShadow = "none";

    }

});

// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// FADE ANIMATION ON SCROLL
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
    ".skill-card,.project-card,.stat-card,.about-container,.contact-container"
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "0.8s";

    observer.observe(el);

});


// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you! Your message has been sent.");

    form.reset();

});