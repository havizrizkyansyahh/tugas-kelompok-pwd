const playlists = [
    {
        title: "Favourite Songs",
        image: "../assets/favourite-songs.jpg",
        href_link: "../album-pages/favourite-songs.html"
    },
    {
        title: "Rock Songs",
        image: "../assets/album_covers/rock-songs.png",
        href_link: "../album-pages/rock-songs.html"
    },
    {
        title: "Pop Songs",
        image: "../assets/album_covers/pop_songs.jpeg",
        href_link: "../album-pages/pop-songs.html"
    },
    {
        title: "Apoy's Playlist",
        image: "../our-playlist/our-photos/poii.jpg",
        href_link: "../our-playlist/apoy-playlist.html"
    },
    {
        title: "Geizka's Playlist",
        image: "../our-playlist/our-photos/geizka.jpg",
        href_link: "../our-playlist/geizka-playlist.html"
    },
    {
        title: "Haviz's Playlist",
        image: "../our-playlist/our-photos/haviz.jpg",
        href_link: "../our-playlist/haviz-playlist.html"
    },
    {
        title: "Ardila's Playlist",
        image: "../our-playlist/our-photos/dila.jpg",
        href_link: "../our-playlist/dila-playlist.html"
    },
    {
        title: "Jasmine's Playlist",
        image: "../our-playlist/our-photos/mine.jpg",
        href_link: "../our-playlist/mine-playlist.html"
    },
]

const playlistCardContainer = document.getElementById("playlist-card-container");

playlists.forEach((playlist) => {
    const playlistLink = document.createElement("a");
    playlistLink.className = "default-link";
    playlistLink.href = `${playlist.href_link}`;

    const playlistCard = document.createElement("div");
    playlistCard.className = "song-card";

    playlistCard.innerHTML = `
        <img class="song-card-img" src=${playlist.image} alt="" >
        <p>${playlist.title}</p>
    `;

    playlistLink.appendChild(playlistCard);
    playlistCardContainer.appendChild(playlistLink);
});