document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //  Load tasks from Local Storage
    loadTasks();

    //  Add task on button click
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText, true);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    });

    // Add task on Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                addTask(taskText, true);
                taskInput.value = "";
            } else {
                alert("Please enter a task.");
            }
        }
    });

    //  Main function to add a task
    function addTask(taskText, save = true) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        removeButton.onclick = function () {
            taskList.removeChild(taskItem);
            removeTaskFromStorage(taskText);
        };

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Load tasks when page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
});
