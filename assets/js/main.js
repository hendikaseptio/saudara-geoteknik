AOS.init();
lucide.createIcons();

// Toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const layananToggle = document.getElementById('layanan-toggle');
const layananSubmenu = document.getElementById('layanan-submenu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('hidden');
    menuBtn.innerHTML = menuOpen
        ? '<i data-lucide="x" class="w-6 h-6"></i>'
        : '<i data-lucide="menu" class="w-6 h-6"></i>';
    lucide.createIcons();
});
layananToggle.addEventListener('click', () => {
    layananSubmenu.classList.toggle('hidden');
    layananToggle.querySelector('svg').classList.toggle('rotate-180');
});


