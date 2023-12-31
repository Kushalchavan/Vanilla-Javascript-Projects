const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNumber = 1;
const length = images.length;

for(let i = 0; i < length; i++) {
    // Creating div element for button 
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);
}

// Applying color to the buttons 
const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';


const resetBackground = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent';
    });
};

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        resetBackground();
        slider.style.transform = `translateX(-${i * 800}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = 'white';
    });
});

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
};

// for right arrow button 
right.addEventListener('click', () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    resetBackground();
    buttons[slideNumber - 1].style.backgroundColor = 'white';
});

// for left arrow button
left.addEventListener('click', () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
    resetBackground();
    buttons[slideNumber - 1].style.backgroundColor = 'white';
});




// 800 * 1 = 800
// 800 * 2 = 1600
// 800 * 3 = 2400
// 800 * 4 = 3200