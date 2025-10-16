// script.js

// 1. Fungsionalitas Toggle Menu untuk Responsif
document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan tombol toggle (burger icon) ke HTML Anda secara manual
    // atau kita bisa memanipulasi DOM di sini (lebih kompleks)
    // Untuk sederhana, kita akan mengasumsikan Anda akan menambahkan tombol di HTML nanti.

    // Contoh: Asumsikan Anda memiliki elemen dengan ID 'menu-toggle' dan 'main-nav'
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', function() {
            // Mengganti kelas untuk menampilkan atau menyembunyikan menu
            navUl.classList.toggle('active');
            // Menambahkan kelas pada tombol untuk animasi (opsional)
            menuToggle.classList.toggle('open');
        });
    }


    // 2. Fungsionalitas Galeri Foto Sederhana (Image Carousel)
    const galleryContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    let currentSlide = 0;

    if (slides.length > 0 && galleryContainer) {
        // Fungsi untuk menampilkan slide tertentu
        function showSlide(index) {
            // Memastikan index selalu dalam batas array slides
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
            
            // Menghitung pergeseran horizontal yang diperlukan
            const offset = -currentSlide * 100; // 100% per slide
            galleryContainer.style.transform = `translateX(${offset}%)`;
        }

        // Event listener untuk tombol 'Next'
        nextButton.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        // Event listener untuk tombol 'Previous'
        prevButton.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        // Tampilkan slide pertama saat halaman dimuat
        showSlide(currentSlide);
    }
});

// Catatan: Responsivitas formulir lebih banyak bergantung pada CSS (Media Queries)
// daripada JavaScript, namun JavaScript bisa digunakan untuk validasi.
