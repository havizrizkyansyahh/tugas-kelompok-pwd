const songs = [
    {
        title: "Dewi",
        artist: "Dewa 19",
        album: "Kerajaan Cinta",
        image: "../assets/album_covers/Kerajaan_Cinta.png",
        song_dir: "../songs/albums/etc/Dewi.mp3",
        song_dur: "4:43"
    },
    {
        title: "Satu Bulan",
        artist: "Bernadya",
        album: "Terlintas",
        image: "../assets/album_covers/bernadya.png",
        song_dir: "../songs/albums/etc/Satu_Bulan.mp3",
        song_dur: "3:18"
    },
    {
        title: "I'm On Top Of The World",
        artist: "Imagine Dragons",
        album: "Night Visions",
        image: "../assets/album_covers/night-visions.jpeg",
        song_dir: "../songs/albums/etc/On_Top_Of_The_World.mp3",
        song_dur: "3:11"
    },
    {
        title: "Bring Me To Life",
        artist: "Evanescene",
        album: "Fallen",
        image: "../assets/album_covers/fallen.jpg",
        song_dir: "../songs/albums/etc/bring-me-to-life.mp3",
        song_dur: "3:42"
    },
    {
        title: "Don't Look Back In Anger",
        artist: "Oasis",
        album: "(What's the Story) Morning Glory?",
        image: "../assets/album_covers/morning_glory.jpg",
        song_dir: "../songs/albums/etc/dont-look-back-in-anger.mp3",
        song_dur: "4:47"
    },
    {
        title: "Zombie",
        artist: "The Cranberries",
        album: "No Need To Argue",
        image: "../assets/album_covers/no_need_to_argue.jpg",
        song_dir: "../songs/albums/etc/The_Cranberries-Zombie.mp3",
        song_dur: "5:07"
    },
    {
        title: "Only",
        artist: "Only",
        album: "4 Only",
        image: "../assets/album_covers/olny.jpg",
        song_dir: "../songs/albums/etc/only-lyrics.mp3",
        song_dur: "3:58"
    },
    {
        title: "Seberapa Pantas",
        artist: "Sheila On 7",
        album: "07 Des",
        image: "../assets/album_covers/seberapa_pantas.jpg",
        song_dir: "../songs/albums/etc/seberapa.mp3",
        song_dur: "3:53"
    },
    {
        title: "Mercy",
        artist: "Shawn Mendes",
        album: "Iluminate",
        image: "../assets/album_covers/mercy.jpg",
        song_dir: "",
        song_dur: ""
    },
    {
        title: "Mr. Brightside",
        artist: "The Killers",
        album: "Hot Fuss",
        image: "../assets/album_covers/hot_fuss.jpg",
        song_dir: "",
        song_dur: ""
    },
    {
        title: "Scar Tissue",
        artist: "Red Hot Chili Peppers",
        album: "Californication",
        image: "../assets/album_covers/californication.jpg",
        song_dir: "",
        song_dur: ""
    },
    {
        title: "Shinunoga E-Wa",
        artist: "Fujii Kaze",
        album: "HELP EVER HURT NEVER",
        image: "../assets/album_covers/HELP_EVER_HURT_NEVER.jpg",
        song_dir: "../songs/albums/etc/Shinunoga_E-Wa.mp3",
        song_dur: "3:05"
    },
    {
        title: "Pangeran Cinta",
        artist: "Dewa 19",
        album: "Kerajaan Cinta",
        image: "../assets/album_covers/Kerajaan_Cinta.png",
        song_dir: "../songs/albums/etc/Pangeran_Cinta.mp3",
        song_dur: "4:37"
    },
    {
        title: "Separuh Nafas",
        artist: "Dewa 19",
        album: "Kerajaan Cinta",
        image: "../assets/album_covers/Kerajaan_Cinta.png",
        song_dir: "../songs/albums/etc/Separuh_nafas.mp3",
        song_dur: "3:42"
    },
]

const songTabel = document.getElementById("song-tabel");

const tableHead = document.createElement("tr");
tableHead.innerHTML = `
    <th></th>
    <th style="text-align: start;">Title</th>
    <th class="song-text-info" style="text-align: start;">Artist</th>
    <th class="song-text-info" style="text-align: start;">Album</th>
    <th style="text-align: start;">Time</th>
`

songTabel.appendChild(tableHead);

songs.forEach((song, index) => {
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
                <img src=${song.image} alt="">
                <p>${song.title}</p>
            </div>
        </td>
        <td class="song-text-info"><p>${song.artist}</p></td>
        <td class="song-text-info"><p>${song.album}</p></td>
        <td><p class="song-duration">${song.song_dur}</p></td>
    `;

    songTabel.appendChild(tableRow);
});

