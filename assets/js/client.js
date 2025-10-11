const clientSwiper = new Swiper(".clientSwiper", {
    slidesPerView: 4, // jumlah logo yang tampil sekaligus
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false, // tetap autoplay meskipun digeser
    },
    grabCursor: true, // bisa drag pakai mouse
    breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 25 },
        1024: { slidesPerView: 5, spaceBetween: 30 },
    },
});