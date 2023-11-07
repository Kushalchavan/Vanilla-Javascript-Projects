const value = document.querySelector('#value');
const buttons = document.querySelectorAll('button');

// set initial count
let count = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const num = e.currentTarget.classList;
        if (num.contains('decrease')) {
            count --;
        }
        else if (num.contains('increase')) {
            count ++;
        }
        else{
            count = 0;
        }

        value.textContent = count;
    });
});