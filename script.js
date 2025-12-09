document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surprise-button');
    const surpriseMessage = document.getElementById('surprise-message');
    const fireworksContainer = document.getElementById('fireworks-container');

    surpriseButton.addEventListener('click', () => {
        // 1. Tampilkan pesan kejutan
        surpriseMessage.style.display = 'block';
        
        // 2. Sembunyikan tombol setelah diklik
        surpriseButton.style.display = 'none';

        // 3. Tambahkan kelas 'active' untuk efek kembang api CSS
        fireworksContainer.classList.add('active');

        // 4. Tambahkan efek konfeti dinamis (lebih bagus)
        createConfetti(50);
        
        // Opsional: Scroll ke pesan kejutan agar terlihat
        surpriseMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Fungsi sederhana untuk membuat konfeti menggunakan JS
    function createConfetti(count) {
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.innerText = ['⭐', '💖', '🎈', '🎂', '🎊'][Math.floor(Math.random() * 5)]; // Emoji acak
            confetti.style.position = 'absolute';
            confetti.style.fontSize = Math.random() * 1 + 0.5 + 'em';
            confetti.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Warna acak
            
            // Posisi acak di atas layar
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = -Math.random() * 50 + 'px';
            
            // Animasi jatuh dan berputar
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards, rotate ${Math.random() * 2 + 1}s infinite alternate`;
            confetti.style.animationDelay = Math.random() * 1.5 + 's';
            
            document.body.appendChild(confetti);

            // Hapus confetti setelah animasi selesai
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    // Tambahkan style untuk animasi fall dan rotate ke dokumen secara dinamis
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to { transform: translateY(100vh) rotateZ(720deg); }
        }
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

});