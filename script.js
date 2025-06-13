// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new task <li>
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add click event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);
        };

        // Append remove button to task item, then add to list
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';
    }

    // Event listener for button click
    addButton.addEventListener('click', addTask);

    // Event listener for pressing "Enter" key in input
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
