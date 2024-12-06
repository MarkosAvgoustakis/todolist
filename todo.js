console.log('Welcome to the ToDo list!');

const toDoList = [];
function addAtoDo(task) {
    toDoList.push(task);
    console.log('Task Added!');
}

const viewTasks = () => {
    if (toDoList.length === 0) {
        console.log('No tasks in your To Do List!');
    } else {
        for (let i = 0; i < toDoList.length; i++) {
            console.log(i+1 + '. ' + toDoList[i]);
        }
    }
}

addAtoDo('Go for a 10.000 step walk');
addAtoDo('clean the kitchen');
addAtoDo('track your calories');

viewTasks();
