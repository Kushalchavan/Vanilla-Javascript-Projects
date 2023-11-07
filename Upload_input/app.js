const image = document.querySelector('img');
const input = document.querySelector('input');

// Select and upload
input.addEventListener('click', (e) => {
    image.src = URL.createObjectURL(e.target.files[0]);
});