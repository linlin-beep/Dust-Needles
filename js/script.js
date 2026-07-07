// 1. Fungsi Menu Telefon (Mobile)
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    if (nav) nav.classList.toggle('show');
}

// 2. Fungsi Animasi Piring Hitam (Vinyl) & Pemain Spotify
function playSpotify(playlistId, title, labelColor) {
    // Cari elemen-elemen di dalam HTML
    const vinyl = document.getElementById('vinyl-record');
    const vinylLabel = document.getElementById('vinyl-label');
    const statusText = document.getElementById('status-text');
    const spotifyWrapper = document.getElementById('spotify-wrapper');
    const spotifyIframe = document.getElementById('spotify-player');

    // Pastikan kod ini hanya jalan jika piring hitam wujud
    if (!vinyl || !spotifyIframe) {
        return;
    }

    // 1. KELUARKAN KOTAK SPOTIFY 
    // (Ini yang menyebabkan kotak tu tak nak buka sebelum ini)
    if (spotifyWrapper) {
        spotifyWrapper.classList.add('active');
    }

    // 2. TUKAR LINK LAGU SPOTIFY
    spotifyIframe.src = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;

    // 3. TUKAR TAJUK LAGU
    if (statusText) {
        statusText.innerHTML = `Now Spinning: <strong>${title}</strong> 🎵`;
    }

    // 4. TUKAR WARNA LABEL TENGAH
    if (vinylLabel) {
        // Buang gambar kalau ada, dan ganti dengan warna yang dipanggil
        vinylLabel.style.backgroundImage = 'none'; 
        vinylLabel.style.backgroundColor = labelColor;
    }

    // 5. MULA PUSINGKAN PIRING HITAM
    vinyl.classList.remove('spin');
    void vinyl.offsetWidth; // Trik paksa browser reset animasi
    vinyl.classList.add('spin');
}
