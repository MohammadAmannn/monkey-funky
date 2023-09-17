console.log("Welcome to Funky Monkey");

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('Malang.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem')); // Convert HTMLCollection to an array
let songs = [
    { songName: "Malang", filePath: "song/Malang.mp3", coverPath: "cover/bla.png" },
    { songName: "aman", filePath: "song/aman.mp3", coverPath: "cover/bla.png" },
];

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to timeupdate event
audioElement.addEventListener('timeupdate', () => {
    let Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = Progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Loop through song items (example)
// Loop through song items (example)

    // For example, you can add click event listeners to play specific songs


    // For example, you can add click event listeners to play specific songs

