// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add task event listener
addTaskBtn.addEventListener('click', addTask);

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
    ${taskText}
    <button onclick="deleteTask(this)">Delete</button>
  `;

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Function to delete a task
function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}