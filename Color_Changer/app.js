const button = document.getElementById('change-button');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    // Creating random color rgb
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);

    let rgbcolor = `rgb(${red}, ${green}, ${blue})`;

    // Applying rgb color to body
    body.style.backgroundColor = rgbcolor;
});