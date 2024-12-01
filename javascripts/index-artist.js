const artists = [
    {
        artist_name: "Imagine Dragons",
        image: "../assets/artist_covers/imagine-dragons-artist-cover.jpg",
        href_link: "../artist-pages/imagine-dragons.html"
    },
    {
        artist_name: "Bernadya",
        image: "../assets/artist_covers/bernadya.png",
        href_link: "../artist-pages/bernadya.html"
    },
    {
        artist_name: "Dewa 19",
        image: "../assets/album_covers/dewais.png",
        href_link: "../artist-pages/dewa19.html"
    },
    {
        artist_name: "aespa",
        image: "../assets/artist_covers/aespa.jpeg",
        href_link: "../artist-pages/aespa.html"
    },
    {
        artist_name: "Payung Teduh",
        image: "../assets/artist_covers/payung-teduh.jpeg",
        href_link: "../artist-pages/payungteduh.html"
    },
    {
        artist_name: "Tipe-X",
        image: "../assets/artist_covers/tipex.jpg",
        href_link: "../artist-pages/tipex.html"
    },
    {
        artist_name: "Rage Against The Machine",
        image: "../assets/album_covers/rageagainst.png",
        href_link: "../artist-pages/ratm.html"
    },
    {
        artist_name: "Juicy Luicy",
        image: "../assets/album_covers/juicylucy.png",
        href_link: "../artist-pages/juicylucy.html"
    },
    {
        artist_name: "MAGIC!",
        image: "../assets/album_covers/magic.png",
        href_link: "../artist-pages/magic.html"
    },
    {
        artist_name: "Sixpence None The Richer",
        image: "../assets/album_covers/Sixpence_None_The_Richer.png ",
        href_link: "../artist-pages/sixpence.html"
    },
    {
        artist_name: "Adrian Khalif",
        image: "../assets/album_covers/adrianK.png ",
        href_link: "../artist-pages/adriankhalif.html"
    },
]

const artistCardContainer = document.getElementById("artist-card-container");

artists.forEach((artist) => {
    const artistLink = document.createElement("a");
    artistLink.className = "default-link";
    artistLink.href = `${artist.href_link}`;

    const artistCard = document.createElement("div");
    artistCard.className = "song-card";

    artistCard.innerHTML = `
        <img class="song-card-img" src=${artist.image} alt="" >
        <p>${artist.artist_name}</p>
    `;

    artistLink.appendChild(artistCard);
    artistCardContainer.appendChild(artistLink);
});