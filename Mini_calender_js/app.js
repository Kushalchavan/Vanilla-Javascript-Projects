const date = document.getElementById('date');
const weak = document.getElementById('weak');
const month = document.getElementById('month');
const year = document.getElementById('year');

/// Creating date element.
let today = new Date();

const weakDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];

// show results
date.innerHTML = (today.getDate() < 10 ? '0' : '') + today.getDate();
weak.innerHTML = weakDays[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();