const addBtn = document.querySelector('.add');
const clearBtn = document.querySelector('.clear');
const todoText = document.querySelector('.todo__text');
const todoAdd = document.querySelector('.todo__add');
let total = document.querySelector('.total');
total.hidden = true;

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItems = [];

function Task(description) {
    this.description = description;
    this.completed = false;
}

const createTemplate = (task, index) => {
    return `
        <div class="todo__item">
            <input onclick="completeTask(${index})" class="btn-complete ${task.completed ? 'checked' : ''}" type="checkbox" ${task.completed ? 'checked' : ''}>
            <div class="description ${task.completed ? 'checked' : ''}">${task.description}</div>
            <div class="buttons">
                <button onclick="editTask(${index})" class="edit"></button>
                <button onclick="saveTask(${index})" class="save">V</button>
                <button onclick="deleteTask(${index})" class="delete">X</button>
            </div>
        </div>
    `
}

const filterTasks = () => {
    const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
    const completedTasks = tasks.length && tasks.filter(item => item.completed == true);
    tasks = [...activeTasks,...completedTasks];
}

const fillTaskList = () => {
    todoAdd.innerHTML = "";
    if(tasks.length > 0) {
        filterTasks();
        total.innerHTML = "Всего дел: ";
        tasks.forEach((item, index) => {
            todoAdd.innerHTML += createTemplate(item, index);
        })
        todoItems = document.querySelectorAll('.description');
        total.hidden = false;
        total.innerHTML += tasks.length;
    }
}


fillTaskList();

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const completeTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed) {
        todoItems[index].classList.add('checked');
    } else {
        todoItems[index].classList.remove('checked');
    }
    updateLocal();
    fillTaskList();
}

addBtn.addEventListener('click', () => {
    tasks.push(new Task(todoText.value));
    updateLocal();
    fillTaskList();
    todoText.value = '';
})

clearBtn.addEventListener('click', () => {
    tasks.length = 0;
    updateLocal();
    fillTaskList();
})

const deleteTask = index => {
    tasks.splice(index,1);
    updateLocal();
    fillTaskList();
}

let editable;

function editTask(index) {
    editable = todoItems[index].setAttribute('contenteditable', true);
}

// только не разобралась, как сохранить отредактированную заметку в localStorage

function saveTask(index) {
    if(todoItems[index].contentEditable = "true") {
        todoItems[index] = editable;
        todoItems[index].contentEditable = "false";
    }
}
