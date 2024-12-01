const rockSongs = [
    {
        title: "Zombie",
        artist: "The Cranberries",
        album: "No Need To Argue",
        image: "../assets/album_covers/no_need_to_argue.jpg",
        song_dir: "../songs/albums/etc/The_Cranberries-Zombie.mp3",
        song_dur: "5:07"
    },
    {
        title: "Back In Black",
        artist: "AC/DC",
        album: "Back In Black",
        image: "../assets/album_covers/back_in_black.jpg",
        song_dir: "../songs/albums/etc/ACDC-Back_In_Black.mp3",
        song_dur: "4:13"
    },
    {
        title: "Don't Stop Me Now",
        artist: "Queen",
        album: "Jazz (Deluxe Edition)",
        image: "../assets/album_covers/jazz.jpg",
        song_dir: "../songs/albums/etc/Queen-Dont_Stop_Me_Now.mp3",
        song_dur: "3:32"
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
        title: "Let It Be",
        artist: "The Beatles",
        album: "Let It Be",
        image: "../assets/album_covers/let_it_be.jpg",
        song_dir: "",
        song_dur: "4:02"
    },
    {
        title: "Bring Me To Life",
        artist: "Evanescence",
        album: "Fallen",
        image: "../assets/album_covers/fallen.jpg",
        song_dir: "../songs/albums/etc/bring_me_to_life.mp3",
        song_dur: "3:42"
    },
    {
        title: "Mr. Brightside",
        artist: "The Killers",
        album: "Hot Fuss",
        image: "../assets/album_covers/hot_fuss.jpg",
        song_dir: "",
        song_dur: "3:42"
    },
    {
        title: "Scar Tissue",
        artist: "Red Hot Chili Peppers",
        album: "Californication",
        image: "../assets/album_covers/californication.jpg",
        song_dir: "",
        song_dur: "3:37"
    },
    {
        title: "Everlong",
        artist: "Foo Fighters",
        album: "The Colour And The Shape",
        image: "../assets/album_covers/the-colour-and-the-shape_foo-fighters.jpeg",
        song_dir: "",
        song_dur: "4:10"
    },
    {
        title: "Santeria",
        artist: "Sublime",
        album: "Sublime",
        image: "../assets/album_covers/sublime.jpg",
        song_dir: "",
        song_dur: "3:03"
    }
];


const rockSongTabel = document.getElementById("rocksong-tabel");

const tableHead = document.createElement("tr");
tableHead.innerHTML = `
    <th style="text-align: start;">Title</th>
    <th class="song-text-info" style="text-align: start;">Artist</th>
    <th class="song-text-info" style="text-align: start;">Album</th>
    <th style="text-align: start;">Time</th>
`

rockSongTabel.appendChild(tableHead);

rockSongs.forEach((rockSong, index) => {
    const tableRow = document.createElement("tr");
    tableRow.style = index % 2 === 0 ? "background-color: #F4F9F9;" : "";

    tableRow.innerHTML = `
        <td>
            <div class="title-container">
                <img src=${rockSong.image} alt="">
                <p>${rockSong.title}</p>
            </div>
        </td>
        <td class="song-text-info"><p>${rockSong.artist}</p></td>
        <td class="song-text-info"><p>${rockSong.album}</p></td>
        <td><p class="song-duration">${rockSong.song_dur}</p></td>
    `;

    rockSongTabel.appendChild(tableRow);
});

