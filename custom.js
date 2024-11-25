document.addEventListener('DOMContentLoaded', function () {

    // modal pop up
    // var promoModal = new bootstrap.Modal(document.getElementById('promoModal'), {
    //     backdrop: 'static', // Modal tidak akan tertutup ketika klik di luar
    //     keyboard: false     // Menonaktifkan escape button untuk menutup
    //   });
    //   promoModal.show(); // Menampilkan modal
    //   end modal


    // Hero Image Carousel
    let currentIndex = 0;
    const images = document.querySelectorAll('.hero .hero-image');
    const imageCount = images.length;

    function switchImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % imageCount;
        images[currentIndex].classList.add('active');
    }

    // Ganti gambar setiap 4.5 detik
    setInterval(switchImage, 4500);

    // Animated Numbers with Intersection Observer
    const animatedNumbers = document.querySelectorAll('.animated-number');

    const animateNumber = (number) => {
        const target = +number.getAttribute('data-target'); // Ambil angka target
        const increment = Math.ceil(target / 100); // Tentukan kecepatan increment
        let current = 0; // Mulai dari 0

        const updateNumber = () => {
            if (current < target) {
                current += increment; // Tambah angka
                number.innerText = Math.min(current, target); // Jangan melebihi target
                setTimeout(updateNumber, 15); // Perbarui setiap 15ms
            } else {
                number.innerText = target; // Pastikan angka terakhir sesuai target
            }
        };

        updateNumber();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const number = entry.target;

                // Animasi angka hanya dimulai jika belum pernah dijalankan
                if (!number.classList.contains('animated')) {
                    number.classList.add('animated'); // Tandai bahwa animasi sudah dimulai
                    animateNumber(number);
                }
            }
        });
    });

    // Observe setiap elemen angka
    animatedNumbers.forEach((number) => {
        observer.observe(number);
    });

    // Animated Prices
    const animatedPrices = document.querySelectorAll('.animated-price');

    const animatePrice = (priceElement) => {
        const targetPrice = +priceElement.getAttribute('data-target'); // Ambil nilai target
        let currentPrice = 0; // Awal harga (0)
        const increment = Math.ceil(targetPrice / 100); // Langkah perhitungan angka

        const updatePrice = () => {
            if (currentPrice < targetPrice) {
                currentPrice += increment; // Tambahkan harga
                priceElement.innerText = `Rp ${currentPrice.toLocaleString('id-ID')}`; // Format angka ke Rupiah
                setTimeout(updatePrice, 20); // Perbarui setiap 20ms
            } else {
                priceElement.innerText = `Rp ${targetPrice.toLocaleString('id-ID')}`; // Tampilkan harga akhir
            }
        };

        updatePrice();
    };

    const priceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const priceElement = entry.target;

                // Animasi harga hanya dimulai jika belum pernah dijalankan
                if (!priceElement.classList.contains('animated')) {
                    priceElement.classList.add('animated'); // Tandai bahwa animasi sudah dimulai
                    animatePrice(priceElement);
                }
            }
        });
    });

    // Observe setiap elemen harga
    animatedPrices.forEach((priceElement) => {
        priceObserver.observe(priceElement);
    });

   
});

$(document).ready(function () {
    $('.step-carausel').slick({
        slidesToShow: 3,          // Jumlah slide yang terlihat
        slidesToScroll: 1,        // Jumlah slide yang digeser setiap kali
        autoplay: true,           // Mengaktifkan autoplay
        autoplaySpeed: 1800,      // Durasi autoplay (ms)
        infinite: true,           // Loop tak terbatas
        arrows: false,            // Sembunyikan navigasi panah
        dots: true,               // Menambahkan navigasi titik (opsional)
        centerMode: true,         // Menampilkan slide di tengah (opsional)
        responsive: [
            {
                breakpoint: 768,  // Atur jumlah slide untuk layar kecil
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,  // Atur jumlah slide untuk layar sangat kecil
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


  function modalImageHouse (house){
    const modalContainer = document.getElementById('houseModal');
    const modalImage = document.getElementById('houseModalImage')
    modalImage.src = 'assets/' + house;
    modalContainer.style.display = 'flex'
  }

  function closeImageModal(){
    const modalContainer = document.getElementById('houseModal')
    modalContainer.style.display = 'none'
  }
  
window.addEventListener('click', (event) =>{
    const modalContainer = document.getElementById('houseModal')
    if(event.target === modalContainer){
       modalContainer.style.display ='none';
    }
})
