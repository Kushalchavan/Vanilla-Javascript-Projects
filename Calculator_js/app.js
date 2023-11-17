const resultField = document.getElementById('result');
const buttons = document.querySelectorAll('.calculator-buttons button');

// Selecting all the buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const buttonText = button.textContent;

        // Calculation logic
        if (buttonText === '=') {
            try {
                // calculating the button text value
                const calculatedResult = eval(resultField.value);
                resultField.value = calculatedResult;
            } catch (error) {
                resultField.value = 'Error';
            } 
        } else if (buttonText === 'CE') {
            resultField.value = '';
        } else {
            resultField.value += buttonText;
        }
    });
});
