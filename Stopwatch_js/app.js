const timer = document.getElementById('timer');
const playButton = document.querySelector('.fa-play');
const resetButton = document.querySelector('.fa-arrow-rotate-left');

// Setting timer first
let [hours, minutes, seconds, milliseconds] = [0,0,0,0];
let int = null;

// Run timer
playButton.addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);

    if(playButton.classList.contains('fa-play')) {
        playButton.classList.remove('fa-play');
        playButton.classList.add('fa-pause');
    } else {
        playButton.classList.remove('fa-pause');
        playButton.classList.add('fa-play');
        clearInterval(int);
    }
});

// reset timer
resetButton.addEventListener('click', () => {
    clearInterval(int);
    [hours, seconds, minutes, milliseconds] = [0,0,0,0];
    timer.innerHTML = '00 : 00 : 00: 000'
});

// creating timer 
function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    // Adding 0 in front of timer if < 10;
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 10 ? '00' + milliseconds: milliseconds < 100 ? '0' + milliseconds : milliseconds;

    // Display timer
    timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

