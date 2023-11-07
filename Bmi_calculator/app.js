const button = document.querySelector('#submit-button');
const result = document.querySelector('#result');

button.addEventListener('click', (event) => {
    // Prevent the default form submission 
    event.preventDefault();

    // For user input value 
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    // for height 
    if (height === '' || height <= 0 || isNaN(height)) {
        alert('Please enter valid HEIGHT.');
    }
    // For weight
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        alert('Please enter valid WEIGHT.');
    }
    else{
        // Adding formula
        const calculatedBmi = (weight /((height * height) / 10000)).toFixed(2);   

        // display Result
        result.innerHTML = `<p>BMI: ${calculatedBmi}</p>`;
    }
});