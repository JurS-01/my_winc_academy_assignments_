import { getTasks } from './api-client.js'
import { addTaskToServer } from './api-client.js'
import { deleteTaskFromServer } from './api-client.js'
import { changeTasks } from './api-client.js'


/* Probleempunten:
Ik zit alleen nog met onderstaande punten waar ik niet uitkom. Deze vragen heb ik ook uitgezet in slack. Zodra ik meer input krijg, 
zal ik deze punten nog aanpasen. De opdracht heb ik wel alvast ingeleverd, zodat ik ondertussen verder kan met het volgende level via Git. 
- waarom krijgen na refresh alle tasks automatisch een line-through? En hoe voorkom ik dat?
- Waarom werkt the Put API om de done-status te wijzigen via de checkbox alleen de eerste keer? Daarna wijzigt de status op de API niet meer mee.
*/


const getTaskResults = async () => {
    const result = await getTasks();
    let tasks = Object.keys(result).map(key => ({
        id: key,
        description: result[key].description,
        done: result[key].done,
    }));
    return tasks;
}

// set server tasks for DOM
getTaskResults().then(tasks => {
    tasks.forEach(task => {
        let checked = task.done ? "checked" : "";
        let lineThrough = task.done ? "line-through-task" : "";
        // console.log(lineThrough);
        addNewTask(`<input type="checkbox" value="done" class="check-done" ${checked}> 
        <input type="text" class="task-editor ${lineThrough}" placeholder="${task.description}" id="${task.id}"></input> 
        <span class="icon-trash">`);
    })
})



const addNewTask = htmlInput => {
    let taskListItem = document.createElement('li');
    let taskList = document.getElementById('task-list');
    taskListItem.innerHTML = `${htmlInput}`;
    taskList.appendChild(taskListItem);
    addEvents();
}

const addEvents = () => {
    const trashIcons = document.querySelectorAll('.icon-trash')
    trashIcons.forEach(icon => icon.addEventListener('click', deleteTask))
    const checkBoxes = document.querySelectorAll('.check-done')
    checkBoxes.forEach(box => box.addEventListener('change', lineThroughTask))
    const taskEditor = document.getElementsByClassName('task-editor')
    const taskEditorList = [...taskEditor]
    taskEditorList.forEach(input => input.addEventListener('change', adjustDescription))
}

const setNewTask = e => {
    e.preventDefault();
    const newTask = document.getElementById('task-input').value;
    addNewTask(`<input type="checkbox" value="done" class="check-done"> 
    <input type="text" class="task-editor" placeholder="${newTask}"></input> <span class="icon-trash">`);
    addTaskToServer(`${newTask}`).then(() => {
        location.reload();
    })
}
document.getElementById('add-btn').addEventListener('click', setNewTask)



const getId = clickedElement => clickedElement.parentElement.childNodes[2].id;
const getDescription = clickedElement => clickedElement.parentElement.childNodes[2].placeholder;


const deleteTask = e => {
    e.target.parentElement.remove()
    deleteTaskFromServer(getId(e.target));
}


const lineThroughTask = e => {
    const inputElement = e.target.parentElement.childNodes[2];
    if (e.target.value == 'done') {
        inputElement.classList.toggle('line-through-task');
    }
    getStatusForServer(e.target);
}

const getStatusForServer = checkbox => {
    if (checkbox.value == 'done') {
        changeTasks(getId(checkbox), "true", getDescription(checkbox));
    } else {
        changeTasks(getId(checkbox), "false", getDescription(checkbox));
    }
}

const adjustDescription = e => {
    if (e.target.parentElement.value == 'done') {
        changeTasks(getId(e.target), "true", e.target.value);
    } else {
        changeTasks(getId(e.target), "false", e.target.value);
    }
}



