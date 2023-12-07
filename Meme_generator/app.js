// Selecting the elements 
const result = document.getElementById("results");
const button = document.getElementById("generate-button");

// Adding event listener to the button to call the function the change the results.
button.addEventListener("click", fetchData);

// Function for fetch the data from the url
function fetchData() {
    const url = "https://meme-api.com/gimme/wholesomememes";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        // show the results
        result.innerHTML = `<img src="${data.preview[0]}" alt="Wholesome meme">`;
    })
    // throwing error 
    .catch((error) => console.log("Error fetching data:", error)); 
}

