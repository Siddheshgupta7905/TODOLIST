const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
    ${taskText}
    <button onclick="deleteTask(this)">Delete</button>
  `;

    taskList.appendChild(li);

    taskInput.value = '';
}

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}