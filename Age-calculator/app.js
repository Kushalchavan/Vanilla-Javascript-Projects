const userInput = document.getElementById('select-date');
const calculateBtn = document.getElementById('calculate-btn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    // Selecting user Input date value
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate(); // date
    let m1 = birthDate.getMonth() + 1; // month
    let y1 = birthDate.getFullYear(); // year

    // Selecting current date
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // Crating new variable for storing calculate age
    let d3, m3, y3;

    // for year
    y3 = y2 - y1;

    // for month
    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    // for date
    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Display result  
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3} </span> months and <span>${d3}</span> days old`;

});

// function for year and month
function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}