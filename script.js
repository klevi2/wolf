// A hamburger menü megnyitása és bezárása
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

// Esemény figyelés a hamburger menüre
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('menu-opened');
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex"; // Váltás a láthatóság között
});
