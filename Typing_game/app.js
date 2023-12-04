const main = document.querySelector('.main');
const textArea = document.getElementById('typing-area');
const button = document.querySelector('.btn');

// Random paragraphs.
const words = [
    "Sometimes the world can seem cold and cruel when we forget that everything has a soul and that we are all connected.",
    "It's important to have some words you always believe in, whether they are truths or not. The act of believing is a power itself.",
    "I hope you may also understand that some words may apply to certain situations, but not to all of life.",
    "In fact, I believe it is one of the few things that replenishes both parties, the giver and the receiver.",
    "We are all afraid and hesitant when trying something new or stepping into uncharted waters.",
    "We will always have ourselves, no matter what people or things leave our lives... And for that, I am grateful.",
    "I find that it is during the times that are most painful for me that brings me to the brink of a major transformative period in my life.",
    "Make the most you can out of your days, weeks, and months. Who knows where you will be one year from now.",
    "Your peace and well-being is important to your happiness. Protect it to the best of your ability."
];

// Initializing game status.
const game = {
    start: 0,
    end: 0,
    user: "",
    arrText: "",
};

// Start playing 
function play() {
    let randomText = Math.floor(Math.random() * words.length);
    main.textContent = words[randomText];
    main.style.borderColor = 'White';
    game.arrText = words[randomText];
    button.textContent = 'Done';
    const duration = new Date();
    game.start = duration.getTime();
}

// For end game
function end() {
    const duration = new Date();
    game.end = duration.getTime();
    const totalTime = (game.end - game.start) / 10000;
    game.user = textArea.value;
    const correct = results();
    main.style.borderColor = '#ccc';
    main.innerHTML = `Time: ${totalTime}sec. Score: ${correct.score} out of ${correct.total}`;
    button.textContent = 'Start';
}

// Adding event listener to the button to change restart the game.
button.addEventListener('click', () => {
    if (button.textContent === 'Start') {
        play();
        textArea.value = '';
        textArea.disabled = false;
    } else if (button.textContent === 'Done') {
        textArea.disabled = true;
        main.style.borderColor = 'White';
        end();
    }
});
 
// Declaring the results.
function results() {
    let valueFirst = game.arrText.split(' ');
    let valueSecond = game.user.split(' ');
    let score = 0;
    valueFirst.forEach((word, idx) => {
        if (word === valueSecond[idx]) {
            score++;
        }
    });
    return {score, total: valueFirst.length};
}