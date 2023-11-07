const form = document.querySelector('form');
const password = document.querySelector('#password');
const toggleEye = document.querySelector('#toggle-password');

toggleEye.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // toggle the icon 
    if(toggleEye.classList.contains('fa-eye')){
        toggleEye.classList.remove('fa-eye');
        toggleEye.classList.add('fa-eye-slash');
    }else{
        toggleEye.classList.remove('fa-eye-slash');
        toggleEye.classList.add('fa-eye');
    }
});

// prevent from submit
form.addEventListener('submit', (event) =>{
    event.preventDefault();
});