// 1. Fungsi Menu Telefon (Mobile)
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    if (nav) nav.classList.toggle('show');
}

// 2. Fungsi Animasi Piring Hitam (Vinyl) & Pemain Spotify
function playSpotify(playlistId, title, labelColor) {
  const vinyl = document.getElementById('vinyl-record');
  const vinylLabel = document.getElementById('vinyl-label');
  const statusText = document.getElementById('status-text');
  const spotifyIframe = document.getElementById('spotify-player');

  // Pastikan kod ini hanya jalan jika elemen vinyl & iframe wujud
  if (!vinyl || !spotifyIframe) {
    return;
  }

  // Berhentikan pusingan seketika untuk reset animasi
  vinyl.classList.remove('spin');

  // Menukar link embed Spotify secara dinamik mengikut playlistId yang diklik
  spotifyIframe.src = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`;

  // Menukar teks tajuk lagu di atas piring hitam
  if (statusText) {
    statusText.innerText = `Playing: ${title}`;
  }

  // Menukar warna bahagian tengah piring hitam (vinyl label)
  if (vinylLabel && labelColor) {
    vinylLabel.style.backgroundColor = labelColor;
  }

  // Menghidupkan semula animasi pusingan piring hitam
  void vinyl.offsetWidth; // Trik untuk paksa browser faham reset animasi
  vinyl.classList.add('spin');
}
