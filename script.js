// Run the code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim input

        // If input is empty, show an alert
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new <li> and set its textContent
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create the "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Assign an onclick event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);
        };

        // Append remove button to the task item
        taskItem.appendChild(removeButton);

        // Append task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach click event to "Add Task" button
    addButton.addEventListener('click', addTask);

    // Attach keypress event to input field (Enter key)
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
