// Fungsi untuk slider otomatis pada Header
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    // Hapus class active dari slide saat ini
    slides[currentSlide].classList.remove('active');
    
    // Pindah ke slide berikutnya (kembali ke awal jika sudah di akhir)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Tambah class active ke slide baru
    slides[currentSlide].classList.add('active');
}

// Jalankan fungsi slide setiap 5 detik
setInterval(nextSlide, 5000);
