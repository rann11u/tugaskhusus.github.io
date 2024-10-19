document.getElementById("play-button").onclick = function() {
    const audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
        this.innerHTML = "Pause Music"; // Ubah teks tombol menjadi "Pause"
    } else {
        audio.pause();
        this.innerHTML = "Play Music"; // Ubah teks tombol kembali menjadi "Play"
    }
};
