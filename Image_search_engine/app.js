const form = document.getElementById('search-form');
const inputBox = document.getElementById('search-box');
const searchResult = document.getElementById('result');
const showMoreButton = document.getElementById('show-more');

// api accesskey
let accesskey = `aEfn8IKe4XkMecE4Sir8r2Y2Ocv6_mlvfODHH2RCacs`;
// let initial keyword empty.
let keyword = "";
let page = 1;

// Function fetching the url
async function searchImages() {
    // Selecting the input value.
    keyword = inputBox.value;
    // search images engine url.
    const url = `https://api.unsplash.com/search/photos?page=${page}1&query=${keyword}&client_id=${accesskey}&per_page=12`;

    // Fetching result from the url.
    const response = await fetch(url);
    const data = await response.json();

    // if user enter another thing first images will be disable.
    if (page === 1) {
        searchResult.innerHTML = '';
    }

    // To display the url results.
    const results = data.results;

    // Creating img tag to showing imagges
    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreButton.style.display = 'block';
}

// Adding eventlistener on form to display to result.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

// Adding eventlistener to the button to display more result.
showMoreButton.addEventListener('click', () => {
    page++;
    // calling the main function to load/display more images.
    searchImages();
});