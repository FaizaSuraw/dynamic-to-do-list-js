// Run the code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element
        const taskItem = document.createElement('li');

        // Create a text node and append to li (instead of using textContent)
        const taskTextNode = document.createTextNode(taskText);
        taskItem.appendChild(taskTextNode);

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Set onclick handler to remove task
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);
        };

        // Append button to li
        taskItem.appendChild(removeButton);

        // Append li to the task list
        taskList.appendChild(taskItem);

        // Clear the input
        taskInput.value = "";
    }

    // Attach event listener to button
    addButton.addEventListener('click', addTask);

    // Allow Enter key to trigger addTask
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
