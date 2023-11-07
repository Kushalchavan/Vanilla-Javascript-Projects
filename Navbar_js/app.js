const burger = document.querySelector('.burger');
const menuList = document.querySelector('ul');

burger.addEventListener('click', () => {
    menuList.classList.toggle('visible');
});