const userInput = document.getElementById('user-input');
const addButton = document.getElementById('add-button');
const todoContainer = document.querySelector('.todo-container');
const clearAllButton = document.getElementById('clear-button');

// Adding event listener to the button
addButton.addEventListener('click', makeTodoList);

function makeTodoList () {
    const taskText = userInput.value.trim();

    // Checking input
    if(taskText === "") {
        alert("Please enter a task first");
    }
    else {
        // Crating element for todo list
        const todoItem = document.createElement('div');
        todoItem.className = "todo-item";

        const taskContent = document.createElement('p');
        taskContent.textContent = taskText;
        todoItem.appendChild(taskContent);

        const trashButton = document.createElement('button');
        trashButton.className = 'trash-button';
        trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        todoItem.appendChild(trashButton);

        todoContainer.appendChild(todoItem);

        // Clear input field after adding task
        userInput.value = "";

        // Adding eventlistener to the remove button to remove task
        trashButton.addEventListener('click', () => {
            todoContainer.removeChild(todoItem);
        });

        // Clear All the task 
        clearAllButton.addEventListener('click', () => {
            if(todoContainer.firstChild) {
                todoContainer.removeChild(todoContainer.firstChild);
            }
        });
    }
}