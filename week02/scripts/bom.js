const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

/* Create a click event for the add button */
button.addEventListener('click', function () {
/** If the input is not empty */
    if (input.value.trim() !== '') {
        // Execut the code block below
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        // Add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })
    
        li.append(deleteButton);
        list.append(li);

        input.value = '';       // reset the input field (clean up the interface for the user)
        input.focus();         
    }

});

