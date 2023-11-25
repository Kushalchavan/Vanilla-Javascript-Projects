// Selecting all the elements
const rightBox = document.getElementById('right');
const leftBox = document.getElementById('left');
const listItem = document.querySelectorAll('.list');

// selecting all list items
for (let list of listItem) {
    // Adding eventlistener to the all list items
    list.addEventListener('dragstart', (e) => {
        let select = e.target;
        
        // selecting right box
        rightBox.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        // drop the item
        rightBox.addEventListener('drop', (e) => {
            rightBox.appendChild(select);
            select = null;
        });

        // Selecting left box
        leftBox.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        // drop the item
        leftBox.addEventListener('drop', (e) => {
            leftBox.appendChild(select);
            select = null;
        });
    });
}

