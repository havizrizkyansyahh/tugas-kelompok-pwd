const songs = [
    {
        title: "Killing In The Name",
        artist: "Rage Against The Machine",
        duration: "5:13",
        image: "assets/album_covers/rageagainst.png",
        song_dir: "../songs/albums/etc/killing-in-the-name-official-hd-video.mp3"
    },
    {
        title: "Lonely",
        artist: "Justin Bieber, benny blanco",
        duration: "2:37",
        image: "assets/album_covers/justice_jb.jpeg",
        song_dir: ""
    },
    {
        title: "Mawar Hitam",
        artist: "Tipe-X",
        duration: "4:23",
        image: "assets/album_covers/ajourney-tipex.jpeg",
        song_dir: ""
    },
    {
        title: "Kiss Me",
        artist: "Sixpence None The Richer",
        duration: "3:16",
        image: "assets/album_covers/Sixpence_None_The_Richer.png",
        song_dir: ""
    },
    {
        title: "Sialan",
        artist: "Juicy Luicy ft Adrian Khalif",
        duration: "4:28",
        image: "assets/album_covers/juicylucy.png",
        song_dir: ""
    },
    {
        title: "Rude",
        artist: "Magic!",
        duration: "3:44",
        image: "assets/album_covers/magic.png",
        song_dir: ""
    },
    {
        title: "Satu Bulan",
        artist: "Bernadya",
        duration: "3:18",
        image: "assets/album_covers/bernadya.png",
        song_dir: ""
    },
    {
        title: "Pangeran Cinta",
        artist: "Dewa 19",
        duration: "4:38",
        image: "assets/album_covers/dewais.png",
        song_dir: ""
    },
    {
        title: "Perih",
        artist: "Senja",
        duration: "4:26",
        image: "assets/album_covers/perih.png",
        song_dir: ""
    },
    {
        title: "Untuk Perempuan Yang Sedang Di Pelukan",
        artist: "Payung Teduh",
        duration: "5:43",
        image: "assets/album_covers/dunia_batas_payungteduh.jpeg",
        song_dir: ""
    }
];

const topAlbums = [
    {
        title: "Night Visions",
        year: "2012",
        image: "./assets/album_covers/night-visions.jpeg",
        href_link: "./album-pages/night-visions.html"
    },
    {
        title: "Terlintas",
        year: "2023",
        image: "./assets/album_covers/Terlintas.png",
        href_link: "./album-pages/terlintas.html"
    },
    {
        title: "Kerajaan Cinta",
        year: "2007",
        image: "./assets/album_covers/Kerajaan_Cinta.png",
        href_link: "./album-pages/kerajaancinta.html"
    }
]

// START TOP SONGS
const songCardContainer = document.getElementById("song-card-container");

songs.forEach((song) => {
    const songCard = document.createElement("div");
    songCard.className = "song-card";
    
    songCard.innerHTML = `
        <img class="song-card-img" src=${song.image} alt="" >
        <p>${song.title}</p>
        <p>${song.artist}</p>
        <button class="play-song-btn" onClick=${playSong(song.song_dir)}>
            <img src="../assets/play-song-white.png">
        </button>
    `;

    songCardContainer.appendChild(songCard);
});
// END TOP SONGS

//START TOP ALBUMS
const albumCardContainer = document.getElementById("album-card-container");

topAlbums.forEach((album) => {
    const albumLink = document.createElement("a");
    albumLink.className = "default-link";
    albumLink.href = `${album.href_link}`;

    const albumCard = document.createElement("div");
    albumCard.className = "song-card";

    albumCard.innerHTML = `
        <img class="song-card-img" src=${album.image} alt="" >
        <p>${album.title}</p>
        <p>${album.year}</p>
    `;

    albumLink.appendChild(albumCard);
    albumCardContainer.appendChild(albumLink);
});
// END TOP ALBUMS     
