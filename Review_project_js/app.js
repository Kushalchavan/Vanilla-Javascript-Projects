const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web developer',
        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque doloremque explicabo atque, quasi asperiores aspernatur delectus quas, tempore distinctio ex natus non cumque debitis nesciunt dolorum laboriosam dolor quisquam voluptatem beatae! Voluptate, repudiandae ea?'
    },
    {
        id: 2,
        name: 'Peter parker',
        job : 'Web developer',
        img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nulla! Cupiditate reprehenderit consequuntur rerum eligendi vero, culpa facilis ullam, similique quo labore impedit, enim sit vitae rem nemo dolorem dignissimos tempore. Tenetur, laborum alias!'
    },
    {
        id: 3,
        name: 'Thomas luis',
        job: 'UX designer',
        img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis impedit deleniti perspiciatis vel rerum accusantium architecto, beatae qui adipisci consequatur illum omnis eaque alias iste aspernatur tenetur quae odit voluptatum autem sint. Quae, inventore!'
    },
    {
        id: 4,
        name: 'Emma Gabriel' ,
        job: 'Product manager',
        img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore amet cupiditate optio perferendis quisquam provident debitis explicabo, expedita ipsa corporis dolorum, incidunt veritatis repellendus nisi ex blanditiis sit eveniet maiores? Asperiores dicta accusamus ipsa nobis quo necessitatibus autem optio corrupti eum! Exercitationem, magni unde.'
    }
];

// selecting the element
const image = document.getElementById('image');
const author = document.querySelector('.author');
const proffesion = document.querySelector('.proffesion');
const review = document.querySelector('.review');
const nextButton = document.querySelector('.fa-chevron-right');
const prevButton = document.querySelector('.fa-chevron-left');

// Set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', () => {
    showPerson();
});


// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    image.src = item.img;
    author.textContent = item.name;
    proffesion.textContent = item.job;
    review.textContent = item.text;
}


// show next person
nextButton.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});


// previous person
prevButton.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});