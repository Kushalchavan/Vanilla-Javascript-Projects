const lightButton = document.querySelector('.fa-sun');
const body = document.querySelector('body');

lightButton.addEventListener('click', () => {
    if(lightButton.classList.contains('fa-sun')) {
        lightButton.classList.remove('fa-sun');
        lightButton.classList.add('fa-moon');
        body.style.backgroundColor = '#000';
        body.style.color = '#ccc';
        body.style.transition = '0.3s';
    } else {
        lightButton.classList.remove('fa-moon');
        lightButton.classList.add('fa-sun');
        body.style.backgroundColor = '#fff';
        body.style.color = '#000';
    }
});