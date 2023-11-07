// Creating a function that shows time 
function showTime () {
    // Get current date
    let date = new Date();

    // Get hours, minutes and seconds
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "PM";

    if (hours == 0) {
        hours = 12;
    }

    // For PM and AM 
    if (hours > 12) {
        hours = hours - 12;
        session = "PM";
    }
    else {
        session = "AM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Display time 
    let time = `${hours} : ${minutes} : ${seconds}  ${session}`;
    document.getElementById('show-time').innerHTML = time;
    document.getElementById('show-time').textContent = time;

    // Creating settimeout for seconds
    setTimeout(showTime, 1000);
}
// Calling a function
showTime();