function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.className = 'list-item';

    listItem.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${taskText}</span>
        <div class="actions">
            <button onclick="editTask(this)"><i class="fas fa-edit"></i></button>
            <button onclick="removeTask(this)"><i class="fas fa-trash"></i></button>
        </div>
    `;

    document.getElementById('taskList').appendChild(listItem);
    input.value = '';
}

function removeTask(button) {
    const listItem = button.closest('.list-item');
    listItem.remove();
}

function editTask(button) {
    const listItem = button.closest('.list-item');
    const taskTextElement = listItem.querySelector('.task-text');
    const taskText = taskTextElement.textContent;

    taskTextElement.innerHTML = `<input type="text" value="${taskText}" class="edit-input">`;
    

    const editButton = button;
    editButton.innerHTML = '<i class="fas fa-save"></i>';
    editButton.setAttribute('onclick', 'saveTask(this)');
}

function saveTask(button) {
    const listItem = button.closest('.list-item');
    const taskTextElement = listItem.querySelector('.task-text');
    const editInput = taskTextElement.querySelector('.edit-input');
    const newTaskText = editInput.value.trim();

    if (newTaskText !== '') {
        taskTextElement.innerHTML = newTaskText;
    } else {
        taskTextElement.innerHTML = 'Tarefa sem texto';
    }
    

    const editButton = button;
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.setAttribute('onclick', 'editTask(this)');
}
