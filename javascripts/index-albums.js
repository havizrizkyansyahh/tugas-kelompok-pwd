const albums = [
    {
        title: "Kerajaan Cinta",
        artist: "Dewa 19",
        year: "2007",
        image: "../assets/album_covers/Kerajaan_Cinta.png",
        genre: "ROCK",
        href_link: "../album-pages/kerajaancinta.html"
    },
    {
        title: "Night Visions",
        artist: "Imagine Dragons",
        year: "2012",
        image: "../assets/album_covers/night-visions.jpeg",
        genre: "ALTERNATIVE",
        href_link: "../album-pages/night-visions.html"
    },
    {
        title: "Sialnya, Hidup Harus Tetap Berjalan",
        artist: "Bernadya",
        year: "2023",
        image: "../assets/album_covers/terlintas.png",
        genre: "POP",
        href_link: "../album-pages/terlintas.html"
    },
    {
        title: "SYNK: PARALLEL LINE",
        artist: "Aespa",
        year: "2024",
        image: "../assets/album_covers/aespa.jpeg",
        genre: "KPOP",
        href_link: ""
    },
    {
        title: "Seventeenth Heaven",
        artist: "Seventeen",
        year: "2023",
        image: "../assets/album_covers/svt.png",
        genre: "POP",
        href_link: ""
    },
    {
        title: "Ready To Be",
        artist: "Twice",
        year: "2023",
        image: "../assets/album_covers/ready_tobe.jpeg",
        genre: "KPOP",
        href_link: "../album-pages/ready-to-be.html"
    },
    {
        title: "Fabula",
        artist: "Mahalini",
        year: "2023",
        image: "../assets/album_covers/mahal.jpg",
        genre: "POP",
        href_link: ""
    },
    {
        title: "Back From The Edge",
        artist: "James Arthur",
        year: "2016",
        image: "../assets/album_covers/james.jpg",
        genre: "POP",
        href_link: ""
    },
    {
        title: "Monokrom",
        artist: "Tulus",
        year: "2016",
        image: "../assets/album_covers/tulus.png",
        genre: "POP",
        href_link: ""
    },
    {
        title: "Bloom",
        artist: "Red Velvet",
        year: "2022",
        image: "../assets/album_covers/rv.jpeg",
        genre: "JPOP",
        href_link: ""
    },
    {
        title: "Purpose",
        artist: "Justin Bieber",
        year: "2015",
        image: "../assets/album_covers/justin.png",
        genre: "POP",
        href_link: ""
    },
    {
        title: "Queen Killer",
        artist: "Queen",
        year: "1974",
        image: "../assets/album_covers/queenkiller.jpeg",
        genre: "ROCK",
        href_link: ""
    },
]

//START TOP ALBUMS
const albumCardContainer = document.getElementById("album-card-container");

albums.forEach((album) => {
    const albumLink = document.createElement("a");
    albumLink.className = "default-link";
    albumLink.href = `${album.href_link}`;

    const albumCard = document.createElement("div");
    albumCard.className = "song-card";

    albumCard.innerHTML = `
        <img class="song-card-img" src=${album.image} alt="" >
        <p>${album.title}</p>
        <p>${album.artist}</p>
        <p>${album.genre} - ${album.year}</p>
    `;

    albumLink.appendChild(albumCard);
    albumCardContainer.appendChild(albumLink);
});
// END TOP ALBUMS