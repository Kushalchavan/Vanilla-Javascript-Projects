const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');


toggleBtn.addEventListener('click', () => {
    // For sidebar
    sidebar.classList.toggle('active');

    // For toggle button
    toggleBtn.classList.toggle('active');
});