let toggler = document.getElementById('switch');

toggler.addEventListener('click', () => {
    if(toggler.checked === true){
        document.body.style.backgroundColor = '#000';
    }
    else{
        document.body.style.backgroundColor = '#fff';
    }
})