// Inisialisasi variabel
let currentIndex = 0; // Untuk menyimpan index lagu yang sedang dimainkan

const musicPlayer = new Audio(); // Element audio untuk pemutaran lagu

const playPauseButton = document.getElementById("play-pause-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Fungsi untuk memperbarui informasi lagu di navbar dan mobile player
const updateSongInfo = (index) => {
    const song = songs[index]; // Ambil data lagu berdasarkan indeks
    const songInfoContainer = document.getElementById("song-info-container");

    // Update informasi di navbar
    songInfoContainer.querySelector("img").src = song.image; // Ubah gambar album
    songInfoContainer.querySelector(".song-title").textContent = song.title; // Ubah judul lagu
    songInfoContainer.querySelector(".song-info p:nth-child(2)").textContent = `${song.artist} - ${song.album}`; // Ubah nama artis dan album

    // Update informasi di mobile player
    const mobileSongInfoContainer = document.querySelector(".music-player-bar .song-info-container");
    mobileSongInfoContainer.querySelector("img").src = song.image; // Ubah gambar album di mobile
    mobileSongInfoContainer.querySelector(".song-title").textContent = song.title; // Ubah judul lagu di mobile
    mobileSongInfoContainer.querySelector(".song-info p:nth-child(2)").textContent = `${song.artist} - ${song.album}`; // Ubah nama artis dan album di mobile
};

// Fungsi untuk memutar lagu
const playSong = async (index) => {
    currentIndex = index; // Update currentIndex
    const song = songs[index];

    if (!song.song_dir) {
        alert("Lagu ini tidak memiliki file audio.");
        return;
    }

    try {
        musicPlayer.src = song.song_dir; // Atur sumber audio
        await musicPlayer.load(); // Tunggu pemutar siap
        await musicPlayer.play(); // Putar lagu

        // Perbarui navbar dengan informasi lagu
        //updateNavbar(currentIndex);

        // Perbarui informasi lagu di navbar dan mobile player
        updateSongInfo(currentIndex);

        // Ubah ikon
        playPauseButton.querySelector("img").src = "../assets/pause-icon.png"; 
        
        // Ubah ikon di mobile
        const mobilePlayPauseButton = document.querySelector(".music-player-bar #play-pause-button");
        mobilePlayPauseButton.querySelector("img").src = "../assets/pause-icon.png"; 
    } catch (error) {
        console.error("Terjadi kesalahan saat memutar lagu:", error);
    }
};

// Event Listener untuk tombol Play/Pause
playPauseButton.addEventListener("click", () => {
    if (musicPlayer.paused) {
        musicPlayer.play();
        playPauseButton.querySelector("img").src = "../assets/pause-icon.png";
    } else {
        musicPlayer.pause();
        playPauseButton.querySelector("img").src = "../assets/play-icon.png";
    }
});
// Ketika tombol Play/Pause ditekan, panggil fungsi playSong dengan indeks lagu yang sedang dimainkan.


// Fungsi untuk memutar lagu sebelumnya
const playPrevious = () => {
    // Kurangi indeks lagu saat ini, atau kembali ke lagu terakhir jika berada di awal
    currentIndex = currentIndex > 0 ? currentIndex - 1 : songs.length - 1;
    playSong(currentIndex); // Panggil fungsi playSong untuk memutar lagu
};

// Fungsi untuk memutar lagu berikutnya
const playNext = () => {
    // Tambahkan indeks lagu saat ini, atau kembali ke lagu pertama jika berada di akhir
    currentIndex = currentIndex < songs.length - 1 ? currentIndex + 1 : 0;
    playSong(currentIndex); // Panggil fungsi playSong untuk memutar lagu
};

// Event Listener untuk tombol Previous dan Next
prevButton.addEventListener("click", playPrevious);
// Ketika tombol Previous ditekan, panggil fungsi playPrevious untuk memainkan lagu sebelumnya.

nextButton.addEventListener("click", playNext);
// Ketika tombol Next ditekan, panggil fungsi playNext untuk memainkan lagu berikutnya.


// Event Listener untuk menyelesaikan lagu dan memutar lagu berikutnya
musicPlayer.addEventListener("ended", () => {
    playNext();
    playPauseButton.querySelector("img").src = "../assets/pause-icon.png";
});

// Event Listener untuk memastikan ikon tombol selalu sinkron
musicPlayer.addEventListener("play", () => {
    playPauseButton.querySelector("img").src = "../assets/pause-icon.png";
});

musicPlayer.addEventListener("pause", () => {
    playPauseButton.querySelector("img").src = "../assets/play-icon.png";
});

// Menambahkan Event Listener pada setiap baris tabel lagu
songs.forEach((song, index) => {
    const tableRow = document.querySelector(`#song-tabel tr:nth-child(${index + 2})`);
    // Ambil elemen baris tabel berdasarkan indeks

    tableRow.addEventListener("click", () => playSong(index));
    // Ketika baris tabel diklik, panggil fungsi playSong untuk memutar lagu sesuai indeks
});


// Ambil elemen slider
const volumeSlider = document.getElementById("volume-slider");

// Atur volume awal pemutar musik
musicPlayer.volume = 0.5; // Nilai default sesuai dengan value slider

// Event Listener untuk mengubah volume saat slider digeser
volumeSlider.addEventListener("input", () => {
    musicPlayer.volume = volumeSlider.value; // Atur volume berdasarkan nilai slider
});
