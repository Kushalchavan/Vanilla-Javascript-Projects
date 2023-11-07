const openModalBtn = document.getElementById('open-popup-btn');
const popup = document.querySelector('.popup');
const dismissBtn = document.getElementById('dismiss-popup-btn');


openModalBtn.addEventListener('click', () => {
    popup.classList.add('active');
});

dismissBtn.addEventListener('click', () => {
    popup.classList.remove('active');
});