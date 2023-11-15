const progressBar = document.querySelector('#progress');
const pauseButton = document.querySelector('.fa-pause');
const song = document.querySelector('#song');

// For song duration and currenttime of song
song.addEventListener('loadmetadata', () => {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
});

// For changing icon and play and pause
pauseButton.addEventListener('click', () => {
    if(pauseButton.classList.contains('fa-pause')) {
        pauseButton.classList.remove('fa-pause');
        pauseButton.classList.add('fa-play');
        song.pause();
    } else {
        pauseButton.classList.remove('fa-play');
        pauseButton.classList.add('fa-pause');
        song.play();
    }
});

// For progress bar 
if(song.play) {
    setInterval(() => {
        progressBar.value = song.currentTime;
    }, 500);
} 

// For progress bar if song is forwarding.
progressBar.onchange = () => {
    song.play();
    song.currentTime = progressBar.value;
    pauseButton.classList.add('fa-pause');
    pauseButton.classList.remove('fa-play');
};
