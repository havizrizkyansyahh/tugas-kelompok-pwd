const favSongs = [
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
        title: "Illusion",
        artist: "aespa",
        album: "Girls",
        image: "../assets/album_covers/Girls.jpg",
        song_dir: "../songs/albums/etc/illusion.mp3",
        song_dur: "3:15"
    },
    {
        title: "Small girl (Small girl) (feat. D.O.)",
        artist: "Lee Young ji",
        album: "16 Fantasy",
        image: "../assets/album_covers/fantasy.jpg",
        song_dir: "../songs/albums/etc/Small_girl_(feat.D.O.)_(Small_girl).mp3",
        song_dur: "3:09"
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
        title: "His Car Isn’t Yours",
        artist: "WENDY",
        album: "Wish You Hell",
        image: "../assets/album_covers/wish_you_hell.jpg",
        song_dir: "../songs/albums/etc/his_cars_isnt_yours.mp3",
        song_dur: "3:04"
    },
    {
        title: "TV",
        artist: "Billie Eilish",
        album: "Guitar Songs",
        image: "../assets/album_covers/guitars_song.jpg",
        song_dir: "../songs/albums/etc/TV.mp3",
        song_dur: "4:41"
    },
    {
        title: "Popcorn",
        artist: "D.O.",
        album: "BLOSSOM",
        image: "../assets/album_covers/blossom.jpg",
        song_dir: "../songs/albums/etc/Popcord.mp3",
        song_dur: "3:01"
    },
    {
        title: "You!",
        artist: "LANY",
        album: "Mama's boy",
        image: "../assets/album_covers/mamas_boy.jpg",
        song_dir: "../songs/albums/etc/you!.mp3",
        song_dur: "4:34"
    },
    {
        title: "Didn't Know Me",
        artist: "Heize",
        album: "Wind",
        image: "../assets/album_covers/wind.jpg",
        song_dir: "../songs/albums/etc/didn't_know_me",
        song_dur: "3:58"
    },
]

const favSongTabel = document.getElementById("favsong-tabel");

const tableHead = document.createElement("tr");
tableHead.innerHTML = `
    <th></th>
    <th style="text-align: start;">Title</th>
    <th class="song-text-info" style="text-align: start;">Artist</th>
    <th class="song-text-info" style="text-align: start;">Album</th>
    <th style="text-align: start;">Time</th>
`

favSongTabel.appendChild(tableHead);

favSongs.forEach((favSong, index) => {
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
                <img src=${favSong.image} alt="">
                <p>${favSong.title}</p>
            </div>
        </td>
        <td class="song-text-info"><p>${favSong.artist}</p></td>
        <td class="song-text-info"><p>${favSong.album}</p></td>
        <td><p class="song-duration">${favSong.song_dur}</p></td>
    `;

    favSongTabel.appendChild(tableRow);
});

