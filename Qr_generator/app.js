const inputField = document.querySelector('#input-field');
const qrImage = document.querySelector('#qr-image');
const button = document.querySelector('#generate-button');

//const qrCodeApi = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

// add eventlistner
button.addEventListener('click', () => {
    if(inputField.value.length > 0) {
        // Appying qr api
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputField.value}`;
    } else {
        inputField.classList.add('error');
        // Add settimeout for error animation 
            setTimeout(() => {
                inputField.classList.remove('error');
            }, 1000);
        }
    }); 