const scrollcontainer = document.querySelector('.container');
const leftButton = document.getElementById('arrow');
const rightButton = document.getElementById('arrow2');

// Adding eventlistener to the container for scroll the images
scrollcontainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollcontainer.scrollLeft += e.deltaX;
    scrollcontainer.style.scrollBehavior = 'auto';
});

// Adding eventListener to left button for slide left side
leftButton.addEventListener('click', () => {
    scrollcontainer.scrollLeft -= 900;
    scrollcontainer.style.scrollBehavior = 'smooth';
});

// Adding eventlistener to right button for slide right side
rightButton.addEventListener('click', () => {
    scrollcontainer.scrollLeft += 900;
    scrollcontainer.style.scrollBehavior = 'smooth';
});