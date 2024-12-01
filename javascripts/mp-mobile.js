// Tambahkan Event Listener untuk tombol di mobile player
const mobilePrevButton = document.querySelector(".music-player-bar #prev-button");
const mobileNextButton = document.querySelector(".music-player-bar #next-button");
const mobilePlayPauseButton = document.querySelector(".music-player-bar #play-pause-button");

mobilePrevButton.addEventListener("click", playPrevious);
mobileNextButton.addEventListener("click", playNext);
mobilePlayPauseButton.addEventListener("click", () => {
    if (musicPlayer.paused) {
        musicPlayer.play();
        mobilePlayPauseButton.querySelector("img").src = "../assets/pause-icon.png";
    } else {
        musicPlayer.pause();
        mobilePlayPauseButton.querySelector("img").src = "../assets/play-icon.png";
    }
});