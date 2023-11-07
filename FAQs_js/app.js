// selecting main container
const containers = document.querySelectorAll('.container');

// Applying function foreach
containers.forEach((e) => {
    const icon = e.querySelector('.icon');
    const answers = e.querySelector('.answer');

    // For adjustiong animation
    e.addEventListener('click', () => {
        if(icon.classList.contains('active')) {
            icon.classList.remove('active');
            answers.style.maxHeight = null;
        }
        else{
            icon.classList.add('active');
            answers.style.maxHeight = answers.scrollHeight + 'px';
        }
    });
});