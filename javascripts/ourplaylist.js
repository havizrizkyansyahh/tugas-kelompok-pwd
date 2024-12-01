const playlists = [
    {
        title: "Apoy's Playlist",
        image: "../our-playlist/our-photos/poii.jpg",
        href_link: "../our-playlist/apoy-playlist.html",
        name: "Aditya Hendri",
        instagram: "@_adit_y_ahe_n",
        link_ig: "https://www.instagram.com/adt.hen"
    },
    {
        title: "Geizka's Playlist",
        image: "../our-playlist/our-photos/geizka.jpg",
        href_link: "../our-playlist/geizka-playlist.html",
        name: "Muhamad Geizka Yusuf",
        instagram: "@geizkayus",
        link_ig: "https://www.instagram.com/geizkayus"
    },
    {
        title: "Haviz's Playlist",
        image: "../our-playlist/our-photos/haviz.jpg",
        href_link: "../our-playlist/haviz-playlist.html",
        name: "Mochammad Haviz Rizkyansyah",
        instagram: "@iamhvzrizkyansyah",
        link_ig: "https://www.instagram.com/iamhvzrizkyansyah"
    },
    {
        title: "Ardila's Playlist",
        image: "../our-playlist/our-photos/dila.jpg",
        href_link: "../our-playlist/dila-playlist.html",
        name: "Ardila Eka Nanda",
        instagram: "@ardilannda",
        link_ig: "https://www.instagram.com/ardilannda"
    },
    {
        title: "Jasmine's Playlist",
        image: "../our-playlist/our-photos/mine.jpg",
        href_link: "../our-playlist/mine-playlist.html",
        name: "Jasmine Kania Al Rasyid",
        instagram: "@mineknia",
        link_ig: "https://www.instagram.com/mineknia"
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

const cardContainer = document.getElementById("card-container");

playlists.forEach((playlist) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <hr style="border-color: black;">
        <div class="card-details">
            <img src=${playlist.image} alt="">
            <ul>
                <li>${playlist.name}</li>
                <li>
                    <a class="default-link" href=${playlist.link_ig} target="_blank">
                        ${playlist.instagram}
                    </a>
                </li>
            </ul>
        </div>
    `

    cardContainer.appendChild(card);
})





