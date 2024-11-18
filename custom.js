let currentIndex = 0;
    const images = document.querySelectorAll('.hero .hero-image');
    const imageCount = images.length;

    function switchImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % imageCount;
        images[currentIndex].classList.add('active');
    }

    // Ganti gambar setiap 5 detik
    setInterval(switchImage, 4500);