const popSongs = [
    {
        title: "Only",
        artist: "Leehi",
        album: "4 Only",
        image: "../assets/album_covers/olny.jpg",
        song_dir: "../songs/albums/etc/only-lyrics.mp3",
        song_dur: "3:25"
    },
    {
        title: "Password 486",
        artist: "Younha",
        album: "The Perfect Day",
        image: "../assets/album_covers/password.jpg",
        song_dir: "",
        song_dur: "4:02"
    },
    {
        title: "Kidult",
        artist: "Seventeen",
        album: "Jazz (Deluxe Edition)",
        image: "../assets/album_covers/kidult.jpg",
        song_dir: "../songs/albums/etc/kidult.mp3",
        song_dur: "4:20"
    },
    {
        title: "Maestro",
        artist: "Seventeen",
        album: "17 is Right Here",
        image: "../assets/album_covers/maestro.jpg",
        song_dir: "../songs/albums/etc/seventeen-maestro.mp3",
        song_dur: "3:55"
    },
    {
        title: "Seberapa Pantas",
        artist: "Sheila On 7",
        album: "07 Des",
        image: "../assets/album_covers/seberapa_pantas.jpg",
        song_dir: "../songs/albums/etc/seberapa.mp3",
        song_dur: "3:45"
    },
    {
        title: "Sepenuh Hati",
        artist: "Etridi",
        album: "Masa Sich",
        image: "../assets/album_covers/sepenuh_hati.jpg",
        song_dir: "../songs/albums/etc/sepenuh.mp3",
        song_dur: "4:15"
    },
    {
        title: "Mercy",
        artist: "Shawn Mendes",
        album: "Illuminate",
        image: "../assets/album_covers/mercy.jpg",
        song_dir: "",
        song_dur: "3:28"
    },
    {
        title: "Dna",
        artist: "LANY",
        album: "Californication",
        image: "../assets/album_covers/dna.jpg",
        song_dir: "",
        song_dur: "3:45"
    },
    {
        title: "One Kiss",
        artist: "Riize",
        album: "Riizing",
        image: "../assets/album_covers/one-kiss.jpg",
        song_dir: "",
        song_dur: "3:18"
    },
    {
        title: "Smoke",
        artist: "Jaehyun",
        album: "J-The 1st",
        image: "../assets/album_covers/smoke.jpg",
        song_dir: "",
        song_dur: "3:50"
    }
];

const popSongTabel = document.getElementById("popsong-tabel");

const tableHead = document.createElement("tr");
tableHead.innerHTML = `
    <th></th>
    <th style="text-align: start;">Title</th>
    <th class="song-text-info" style="text-align: start;">Artist</th>
    <th class="song-text-info" style="text-align: start;">Album</th>
    <th style="text-align: start;">Time</th>
`

popSongTabel.appendChild(tableHead);

popSongs.forEach((popSong, index) => {
    const tableRow = document.createElement("tr");
    tableRow.style = index % 2 === 0 ? "background-color: #F4F9F9;" : "";

    tableRow.innerHTML = `
        <td>
            <div class="bluestar-container">
                <img src="../assets/bluestar_icon.png" alt="">
            </div>
        </td>
        <td>
            <div class="title-container">
                <img src=${popSong.image} alt="">
                <p>${popSong.title}</p>
            </div>
        </td>
        <td class="song-text-info"><p>${popSong.artist}</p></td>
        <td class="song-text-info"><p>${popSong.album}</p></td>
        <td><p class="song-duration">${popSong.song_dur}</p></td>
    `;

    popSongTabel.appendChild(tableRow);
});

