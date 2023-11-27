const number = document.getElementById('number');
// Initial count
let count = 0;

// using setinterval to show progress in percentage
setInterval(() => {
    if (count === 65) {
        clearInterval();
    }else {
        count += 1;
        number.innerHTML = count + '%';
    }
}, 30);